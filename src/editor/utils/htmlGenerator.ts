import { IElement, IListSettings } from '../context';

const camelToKebab = (string: string) => {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

const styleObjectToString = (style: React.CSSProperties | undefined): string => {
    if (!style) return '';
    return Object.entries(style)
        .map(([key, value]) => {
            if (value === undefined || value === null) return '';
            const cssKey = camelToKebab(key);
            // Handle number values that need px (simplified)
            const needsPx = ['width', 'height', 'top', 'left', 'right', 'bottom', 'fontSize', 'borderRadius', 'padding', 'margin', 'borderWidth'].includes(key);
            const cssValue = (typeof value === 'number' && needsPx) ? `${value}px` : value;
            return `${cssKey}: ${cssValue}`;
        })
        .filter(Boolean)
        .join('; ');
};

interface RenderOptions {
    isList?: boolean;
    listSettings?: IListSettings;
}

export const generateHTML = (elements: IElement[], data: any, options: RenderOptions = {}): string => {
    // We can evaluate the function string to get the result without code duplication
    // This is safe here because we control the code string.
    
    // eslint-disable-next-line no-new-func
    const renderFn = new Function('elements', 'data', 'options', getRendererCode() + '\nreturn renderTemplate(elements, data, options);');
    return renderFn(elements, data, options);
};

// Also provide a JS function string that the user can copy
export const getRendererCode = () => {
    return `
/**
 * Render Template
 * @param {Array} elements - The JSON configuration of elements
 * @param {Object|Array} data - The data object to inject (Object for single, Array for list)
 * @param {Object} options - { isList: boolean, listSettings: { sortProp: string, sortOrder: 'asc'|'desc' } }
 * @returns {string} - The generated HTML string
 */
function renderTemplate(elements, data, options = {}) {
    const { isList, listSettings } = options;

    const camelToKebab = (string) => {
        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    };

    const styleObjectToString = (style) => {
        if (!style) return '';
        const pxProps = ['width', 'height', 'top', 'left', 'right', 'bottom', 'fontSize', 'borderRadius', 'padding', 'margin', 'borderWidth'];
        
        return Object.entries(style)
            .map(([key, value]) => {
                if (value === undefined || value === null) return '';
                const cssKey = camelToKebab(key);
                const cssValue = (typeof value === 'number' && pxProps.includes(key)) ? value + 'px' : value;
                return \`\${cssKey}: \${cssValue}\`;
            })
            .filter(Boolean)
            .join('; ');
    };

    const renderItem = (itemData, index = 0, offsetY = 0) => {
        return elements.map(element => {
            let content = element.content;
            let imgSrc = '';

            if (element.type === 'text') {
                content = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {
                    const val = itemData[key.trim()];
                    return val !== undefined && val !== null ? String(val) : match;
                });
            } else if (element.type === 'image') {
                 if (element.dataBinding) {
                    const val = itemData[element.dataBinding];
                    if (val !== undefined && val !== null) {
                        imgSrc = String(val);
                    } else {
                        imgSrc = content;
                    }
                 } else {
                     imgSrc = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {
                        const val = itemData[key.trim()];
                        return val !== undefined && val !== null ? String(val) : match;
                    });
                 }
            }

            const baseStyle = {
                position: 'absolute',
                left: element.x,
                top: element.y + offsetY,
                width: element.width,
                height: element.height,
                overflow: 'hidden',
                ...element.style
            };
            
            const styleString = styleObjectToString(baseStyle);

            if (element.type === 'text') {
                return \`<div style="\${styleString}">\${content}</div>\`;
            } else if (element.type === 'image') {
                const imgStyle = styleObjectToString({
                    width: '100%',
                    height: '100%',
                    objectFit: element.style?.objectFit || 'cover',
                    display: 'block'
                });
                return \`<div style="\${styleString}"><img src="\${imgSrc}" alt="Element" style="\${imgStyle}" /></div>\`;
            } else if (element.type === 'box') {
                 return \`<div style="\${styleString}"></div>\`;
            }
            return '';
        }).join('\\n');
    };

    if (isList && Array.isArray(data)) {
        // Calculate item height
        const maxY = Math.max(...elements.map(el => el.y + el.height));
        const itemHeight = maxY; // Add some padding if needed, or rely on element positioning

        // Sort data
        let listData = [...data];
        if (listSettings && listSettings.sortProp) {
            const prop = listSettings.sortProp;
            const order = listSettings.sortOrder === 'asc' ? 1 : -1;
            listData.sort((a, b) => {
                const valA = a[prop];
                const valB = b[prop];
                if (valA < valB) return -1 * order;
                if (valA > valB) return 1 * order;
                return 0;
            });
        }

        // Generate HTML for all items
        const itemsHtml = listData.map((item, index) => {
             // We render each item inside a relative container to maintain local positioning
             // But for the scroll animation, we usually stack them.
             // Let's stack them vertically.
             
             const itemHtml = renderItem(item, index, 0); // Internal offset is 0, we move the container
             const itemContainerStyle = styleObjectToString({
                 position: 'relative',
                 height: itemHeight,
                 width: '100%',
                 marginBottom: 20 // Spacing between items
             });
             
             return \`<div class="list-item" style="\${itemContainerStyle}">\${itemHtml}</div>\`;
        }).join('\\n');

        // Animation Styles
        // Bottom-anchored list (chat style)
        const animationCss = \`
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(50px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .list-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                height: 100%;
                width: 100%;
                overflow: hidden;
                padding-bottom: 20px;
                box-sizing: border-box;
            }
            .list-item {
                flex-shrink: 0;
                animation: slideIn 0.5s ease-out;
                margin-top: 20px;
                width: 100%;
                position: relative;
            }
        \`;

        return \`
            <style>\${animationCss}</style>
            <div class="list-wrapper">
                \${itemsHtml}
            </div>
        \`;
    }

    // Single Item
    const contentHtml = renderItem(data);
    return \`<div style="position: relative; width: 100%; height: 100%; overflow: hidden;">\${contentHtml}</div>\`;
}
`;
};
