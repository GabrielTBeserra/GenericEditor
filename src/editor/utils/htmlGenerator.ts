import type { IElement, IListSettings } from '../context';

interface RenderOptions {
    isList?: boolean;
    listSettings?: IListSettings;
    canvasHeight?: number;
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
 * @param {Object} options - { isList: boolean, listSettings: { sortProp: string, sortOrder: 'asc'|'desc', newestPosition: 'top'|'bottom', scrollDirection: 'up'|'down', containerHeight: number }, canvasHeight: number }
 * @returns {string} - The generated HTML string
 */
function renderTemplate(elements, data, options = {}) {
    const { isList, listSettings, canvasHeight } = options;

    const measureTextHeight = (text, width, fontFamily, fontSize, lineHeightMultiplier = 1.2) => {
        if (!text) return 0;
        try {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) return 0;
            context.font = \`\${fontSize}px \${fontFamily}\`;
            const words = String(text).split(' ');
            let line = '';
            let lineCount = 1;
            for (let i = 0; i < words.length; i++) {
                const testLine = line + words[i] + ' ';
                const metrics = context.measureText(testLine);
                const testWidth = metrics.width;
                if (testWidth > width && i > 0) {
                    line = words[i] + ' ';
                    lineCount++;
                } else {
                    line = testLine;
                }
            }
            const explicitLines = String(text).split('\\n').length - 1;
            lineCount += explicitLines;
            return Math.ceil(lineCount * fontSize * lineHeightMultiplier);
        } catch (_) {
            return 0;
        }
    };

    const computeItemHeight = (elements, itemData, fallbackHeight) => {
        if (fallbackHeight) return fallbackHeight;
        let maxY = 0;
        elements.forEach(el => {
            let height = el.height;
            if (el.type === 'text' && el.autoGrow) {
                let content = el.content;
                content = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {
                    const val = itemData[key.trim()];
                    return val !== undefined && val !== null ? String(val) : match;
                });
                const fontSize = parseInt(String((el.style && el.style.fontSize) || 16));
                const fontFamily = String((el.style && el.style.fontFamily) || 'Arial');
                const measured = measureTextHeight(content, el.width, fontFamily, fontSize);
                height = Math.max(height, measured);
            }
            const bottom = el.y + height;
            if (bottom > maxY) maxY = bottom;
        });
        return maxY;
    };

    const formatValue = (value, formatting) => {
        if (!formatting || formatting.type === 'text') return value !== undefined && value !== null ? String(value) : '';
        if (value === undefined || value === null) return '';

        if (formatting.type === 'boolean') {
             const isTrue = String(value) === 'true' || value === true || (typeof value === 'number' && value > 0);
             return isTrue ? (formatting.trueLabel || 'Sim') : (formatting.falseLabel || 'Não');
        }

        if (formatting.type === 'date') {
            try {
                const date = new Date(value);
                if (isNaN(date.getTime())) return String(value);
                
                if (formatting.dateFormat) {
                     const d = date.getDate().toString().padStart(2, '0');
                     const m = (date.getMonth() + 1).toString().padStart(2, '0');
                     const y = date.getFullYear();
                     const H = date.getHours().toString().padStart(2, '0');
                     const M = date.getMinutes().toString().padStart(2, '0');
                     const S = date.getSeconds().toString().padStart(2, '0');
                     
                     return formatting.dateFormat
                        .replace('DD', d)
                        .replace('MM', m)
                        .replace('YYYY', String(y))
                        .replace('HH', H)
                        .replace('mm', M)
                        .replace('ss', S);
                }
                return date.toLocaleDateString();
            } catch (e) { return String(value); }
        }

        if (formatting.type === 'number') {
             const num = parseFloat(value);
             if (isNaN(num)) return String(value);
             
             if (formatting.numberFormat === 'currency') {
                 return (formatting.currencySymbol || 'R$') + ' ' + num.toFixed(formatting.decimalPlaces || 2);
             }
             if (formatting.numberFormat === 'percent') {
                 return num.toFixed(formatting.decimalPlaces || 0) + '%';
             }
             if (formatting.decimalPlaces !== undefined) {
                 return num.toFixed(formatting.decimalPlaces);
             }
             return num.toFixed(formatting.decimalPlaces || 0);
        }
        
        return String(value);
    };

    const checkCondition = (propValue, operator, ruleValue) => {
        const val = String(propValue).toLowerCase();
        const target = String(ruleValue).toLowerCase();
        
        switch (operator) {
            case 'equals': return val === target;
            case 'notEquals': return val !== target;
            case 'contains': return val.includes(target);
            case 'greaterThan': return parseFloat(val) > parseFloat(target);
            case 'lessThan': return parseFloat(val) < parseFloat(target);
            case 'truthy': return !!propValue;
            case 'falsy': return !propValue;
            default: return false;
        }
    };

    const camelToKebab = (string) => {
        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    };

    const hex8ToRgba = (hex) => {
        const m = /^#([0-9a-fA-F]{8})$/.exec(hex);
        if (!m) return hex;
        const h = m[1];
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        const a = parseInt(h.slice(6, 8), 16) / 255;
        return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
    };

    const styleObjectToString = (style) => {
        if (!style) return '';
        const pxProps = [
            'width', 'height', 'top', 'left', 'right', 'bottom', 
            'fontSize', 'borderRadius', 'padding', 'margin', 'borderWidth',
            'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'
        ];
        
        return Object.entries(style)
            .map(([key, value]) => {
                if (value === undefined || value === null) return '';
                const cssKey = camelToKebab(key);
                let cssValue = (typeof value === 'number' && pxProps.includes(key)) ? value + 'px' : value;
                if (typeof cssValue === 'string') {
                    if (/^#([0-9a-fA-F]{8})$/.test(cssValue)) {
                        cssValue = hex8ToRgba(cssValue);
                    }
                }
                return \`\${cssKey}: \${cssValue}\`;
            })
            .filter(Boolean)
            .join('; ');
    };

    const getAnimationStyles = (anim) => {
        if (!anim || anim.type === 'none') return {};
        return {
            animationName: anim.type,
            animationDuration: (anim.duration || 1) + 's',
            animationDelay: (anim.delay || 0) + 's',
            animationIterationCount: anim.iterationCount || 1,
            animationTimingFunction: anim.timingFunction || 'ease',
            animationFillMode: 'both'
        };
    };

    const keyframesCss = \`
    @keyframes slideIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn { 
        from { opacity: 0; } 
        to { opacity: 1; } 
    }
    @keyframes slideInLeft { 
        from { opacity: 0; transform: translateX(-50px); } 
        to { opacity: 1; transform: translateX(0); } 
    }
    @keyframes slideInRight { 
        from { opacity: 0; transform: translateX(50px); } 
        to { opacity: 1; transform: translateX(0); } 
    }
    @keyframes slideInUp { 
        from { opacity: 0; transform: translateY(50px); } 
        to { opacity: 1; transform: translateY(0); } 
    }
    @keyframes slideInDown { 
        from { opacity: 0; transform: translateY(-50px); } 
        to { opacity: 1; transform: translateY(0); } 
    }
    @keyframes zoomIn { 
        from { opacity: 0; transform: scale(0.5); } 
        to { opacity: 1; transform: scale(1); } 
    }
    @keyframes bounceIn {
        0% { opacity: 0; transform: scale(0.3); }
        50% { opacity: 1; transform: scale(1.05); }
        70% { transform: scale(0.9); }
        100% { transform: scale(1); }
    }
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    @keyframes spin { 
        from { transform: rotate(0deg); } 
        to { transform: rotate(360deg); } 
    }
    
    /* Improved / Smoother Animations */
    @keyframes smoothSlideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes popIn {
        0% { opacity: 0; transform: scale(0.8) translateY(10px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes blurIn {
        0% { opacity: 0; filter: blur(10px); }
        100% { opacity: 1; filter: blur(0); }
    }
    \`;

    const renderItem = (itemData, index = 0, offsetY = 0) => {
        return elements.map(element => {
            let content = element.content;
            let imgSrc = '';

            // Resolve Content & Formatting
            if (element.type === 'text') {
                content = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {
                    const val = itemData[key.trim()];
                    if (val === undefined || val === null) return match;
                    if (element.formatting) {
                        return formatValue(val, element.formatting);
                    }
                    return String(val);
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

            // Resolve Conditional Styles
            let conditionalStyles = {};
            if (element.conditions) {
                element.conditions.forEach(rule => {
                    const propVal = itemData[rule.property];
                    if (checkCondition(propVal, rule.operator, rule.value)) {
                         conditionalStyles = { ...conditionalStyles, ...rule.style };
                    }
                });
            }

            const baseStyle = {
                position: 'absolute',
                left: element.x,
                top: element.y + offsetY,
                width: element.width,
                height: element.autoGrow ? 'auto' : element.height,
                transform: element.rotation ? \`rotate(\${element.rotation}deg)\` : undefined,
                overflow: element.autoGrow ? 'visible' : 'hidden',
                whiteSpace: element.autoGrow ? 'pre-wrap' : undefined,
                wordBreak: element.autoGrow ? 'break-word' : undefined,
                ...element.style,
                ...conditionalStyles
            };
            
            // Fix: remove padding if it's not explicitly set, or handle it for text
            if (element.type === 'text' && !baseStyle.padding) {
                // baseStyle.padding = '8px'; // Removed default padding to respect resize box
            }
            
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
        // Calculate per-item height respecting autoGrow
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
        
        // Handle newest position
        if (listSettings && listSettings.newestPosition === 'top') {
             listData.reverse();
        }

        // Generate HTML for all items
        const itemsHtml = listData.map((item, index) => {
             const itemHtml = renderItem(item, index, 0); 
             const itemHeight = computeItemHeight(elements, item, canvasHeight);
             const itemContainerStyle = styleObjectToString({
                 position: 'relative',
                 height: itemHeight,
                 width: '100%',
                 marginBottom: 0
             });
             
             return \`<div class="list-item" style="\${itemContainerStyle}">\${itemHtml}</div>\`;
        }).join('\\n');

        // Animation Styles based on settings
        const scrollDirection = (listSettings && listSettings.scrollDirection) || 'down';
        const containerHeight = (listSettings && listSettings.containerHeight) ? listSettings.containerHeight + 'px' : '100%';
        
        const justify = (listSettings && listSettings.newestPosition === 'top') ? 'flex-start' : 'flex-end';

        // Entry Animation from settings
        const entryAnim = listSettings && listSettings.entryAnimation ? listSettings.entryAnimation : { type: 'slideIn', duration: 0.3, timingFunction: 'ease-out' };
        const entryAnimName = entryAnim.type === 'none' ? 'none' : entryAnim.type;
        const entryAnimDuration = entryAnim.duration + 's';
        const entryAnimTiming = entryAnim.timingFunction || 'ease-out';

        const animationCss = \`
            \${keyframesCss}

            .list-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: \${justify};
                height: \${containerHeight};
                width: 100%;
                overflow-y: auto;
                overflow-x: hidden;
                box-sizing: border-box;
                padding: 10px;
            }
            .list-item {
                flex-shrink: 0;
                animation: \${entryAnimName} \${entryAnimDuration} \${entryAnimTiming};
                margin-bottom: 10px;
                width: 100%;
                position: relative;
            }
        \`;
        
        const scrollScript = scrollDirection === 'up' 
            ? \`<script>
                document.addEventListener('DOMContentLoaded', () => {
                    const wrapper = document.querySelector('.list-wrapper');
                    if(wrapper) wrapper.scrollTop = wrapper.scrollHeight;
                });
               </script>\`
            : '';

        // Inject Smart Script for Dynamic Updates
        const injectionScript = \`
            <script>
            (function() {
                try {
                    const elements = \${JSON.stringify(elements)};
                    const formatValue = \${formatValue.toString()};
                    const checkCondition = \${checkCondition.toString()};
                    const camelToKebab = \${camelToKebab.toString()};
                    const hex8ToRgba = \${hex8ToRgba.toString()};
                    const styleObjectToString = \${styleObjectToString.toString()};
                    const getAnimationStyles = \${getAnimationStyles.toString()};
                    const renderItem = \${renderItem.toString()};

                    const measureTextHeight = \${measureTextHeight.toString()};
                    const computeItemHeight = \${computeItemHeight.toString()};
                    const itemHeightFallback = \${canvasHeight || 0};
                    const newestPosition = "\${(listSettings && listSettings.newestPosition) || 'bottom'}";
                    const scrollDirection = "\${(listSettings && listSettings.scrollDirection) || 'down'}";

                    window.addItem = function(data) {
                        const wrapper = document.querySelector('.list-wrapper');
                        if (!wrapper) return;

                        const itemHtml = renderItem(data, 0, 0);
                        const itemHeight = computeItemHeight(elements, data, itemHeightFallback);
                        const itemContainerStyle = styleObjectToString({
                            position: 'relative',
                            height: itemHeight,
                            width: '100%',
                            marginBottom: 0
                        });

                        const div = document.createElement('div');
                        div.className = 'list-item';
                        div.setAttribute('style', itemContainerStyle);
                        div.innerHTML = itemHtml;

                        if (newestPosition === 'top') {
                            wrapper.insertBefore(div, wrapper.firstChild);
                        } else {
                            wrapper.appendChild(div);
                        }
                        
                        if (scrollDirection === 'up') {
                           wrapper.scrollTop = wrapper.scrollHeight;
                        }
                    };
                } catch(e) { console.error("Smart List Init Error", e); }
            })();
            </script>
        \`;

        return \`
            <style>\${animationCss}</style>
            <div class="list-wrapper">
                \${itemsHtml}
            </div>
            \${scrollScript}
            \${injectionScript}
        \`;
    }

    // Single Item
    const contentHtml = renderItem(data);
    return \`<div style="position: relative; width: 100%; height: 100%; overflow: hidden;">\${contentHtml}</div>\`;
}
`;
};
