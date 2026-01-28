import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { IElement, IElementFormatting, IListSettings } from '../context';

interface RenderOptions {
    isList?: boolean;
    listSettings?: IListSettings;
    canvasHeight?: number;
}

// --- Logic Helpers (Runtime & Build-time) ---

const camelToKebab = (string: string) => {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

const hex8ToRgba = (hex: string) => {
    const m = /^#([0-9a-fA-F]{8})$/.exec(hex);
    if (!m) return hex;
    const h = m[1];
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const a = parseInt(h.slice(6, 8), 16) / 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const styleObjectToString = (style: any) => {
    if (!style) return '';
    const pxProps = [
        'width', 'height', 'top', 'left', 'right', 'bottom',
        'fontSize', 'borderRadius', 'padding', 'margin', 'borderWidth',
        'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius',
        'minHeight', 'maxHeight', 'minWidth', 'maxWidth'
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
            return `${cssKey}: ${cssValue}`;
        })
        .filter(Boolean)
        .join('; ');
};

const measureTextHeight = (text: string, width: number, fontFamily: string, fontSize: number, lineHeightMultiplier = 1.2) => {
    if (!text) return 0;
    try {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return 0;
        context.font = `${fontSize}px ${fontFamily}`;

        const paragraphs = String(text).split('\n');
        let totalLines = 0;

        for (const paragraph of paragraphs) {
            const words = paragraph.split(' ');
            let currentLine = '';

            // If paragraph is empty (e.g. newline), it counts as a line
            if (words.length === 1 && words[0] === '') {
                totalLines++;
                continue;
            }

            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                const wordWidth = context.measureText(word).width;

                // Case 1: Word is wider than container (force break)
                if (wordWidth > width) {
                    if (currentLine.trim().length > 0) {
                        totalLines++; // Wrap previous content
                        currentLine = '';
                    }
                    totalLines += Math.ceil(wordWidth / width);
                    continue;
                }

                // Case 2: Standard wrapping
                const testLine = currentLine + word + ' ';
                const testWidth = context.measureText(testLine).width;

                if (testWidth > width && currentLine.trim().length > 0) {
                    totalLines++;
                    currentLine = word + ' ';
                } else {
                    currentLine = testLine;
                }
            }
            if (currentLine.length > 0) {
                totalLines++;
            }
        }

        return Math.ceil(totalLines * fontSize * lineHeightMultiplier);
    } catch (_) {
        return 0;
    }
};

const checkCondition = (propValue: any, operator: string, ruleValue: any) => {
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

const formatValue = (value: any, formatting: IElementFormatting) => {
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
                    .replace('DD', d).replace('MM', m).replace('YYYY', String(y))
                    .replace('HH', H).replace('mm', M).replace('ss', S);
            }
            return date.toLocaleDateString();
        } catch (e) { return String(value); }
    }

    if (formatting.type === 'number') {
        const num = parseFloat(value);
        if (isNaN(num)) return String(value);
        if (formatting.numberFormat === 'currency') return (formatting.currencySymbol || 'R$') + ' ' + num.toFixed(formatting.decimalPlaces || 2);
        if (formatting.numberFormat === 'percent') return num.toFixed(formatting.decimalPlaces || 0) + '%';
        return num.toFixed(formatting.decimalPlaces || 0);
    }

    return String(value);
};

const computeLayout = (elements: IElement[], itemData: any) => {
    // Clone elements to avoid mutating state
    const layoutElements = JSON.parse(JSON.stringify(elements));

    // Store original dimensions for Flow Layout calculations
    layoutElements.forEach((el: any) => {
        el._originalY = el.y;
        el._originalHeight = el.height;
    });

    const isInside = (inner: any, outer: any) => {
        const eps = 0.1;
        return (
            inner.x >= outer.x - eps &&
            inner.x + inner.width <= outer.x + outer.width + eps &&
            inner.y >= outer.y - eps &&
            inner.y + inner.height <= outer.y + outer.height + eps
        );
    };

    const autoGrowElements = layoutElements
        .filter((el: any) => (el.type === 'text' || el.type === 'text-container') && el.autoGrow)
        .sort((a: any, b: any) => a.y - b.y);

    autoGrowElements.forEach((textEl: any) => {
        let content = textEl.content;
        content = content.replace(/\{\{(.*?)\}\}/g, (match: any, key: string) => {
            const val = itemData[key.trim()];
            return val !== undefined && val !== null ? String(val) : match;
        });

        const fontSize = parseInt(String((textEl.style && textEl.style.fontSize) || 16));
        const fontFamily = String((textEl.style && textEl.style.fontFamily) || 'Arial');
        const isHorizontal = textEl.type === 'text-container' && textEl.containerExpansion === 'horizontal';

        if (isHorizontal) {
            try {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (context) {
                    context.font = `${fontSize}px ${fontFamily}`;
                    const metrics = context.measureText(content);
                    const padding = parseInt(String((textEl.style && textEl.style.padding) || 0)) * 2;
                    const newWidth = Math.ceil(metrics.width + padding);
                    if (newWidth > textEl.width) textEl.width = newWidth;
                }
            } catch (e) { }
        } else {
            // Check for HTML content (e.g. <img> tags) to attempt height parsing
            let contentHeight = 0;
            const padding = parseInt(String((textEl.style && textEl.style.padding) || 0));
            const availableWidth = Math.max(1, textEl.width - (padding * 2));

            const htmlTagMatch = /<([a-z]+)([^>]*?)>/i.exec(content);

            if (htmlTagMatch) {
                // Attempt to find height in attributes or style
                const attrs = htmlTagMatch[2];
                const heightAttr = /height=["']?(\d+)["']?/i.exec(attrs);
                const styleHeight = /height:\s*(\d+)px/i.exec(attrs);

                if (heightAttr) {
                    contentHeight = parseInt(heightAttr[1]);
                } else if (styleHeight) {
                    contentHeight = parseInt(styleHeight[1]);
                } else {
                    // Fallback: If it's an image without explicit height, assume it might be taller than text.
                    // But without loading it, we can't know. 
                    // We'll still run measureTextHeight as a baseline, but maybe check line breaks.
                    contentHeight = measureTextHeight(content, availableWidth, fontFamily, fontSize);
                }
            } else {
                contentHeight = measureTextHeight(content, availableWidth, fontFamily, fontSize);
            }

            // Add padding and a safety buffer (4px) to the final measured height to prevent overlap
            let measuredHeight = contentHeight + (padding * 2);
            if (!htmlTagMatch || (htmlTagMatch && !contentHeight)) {
                measuredHeight += 4;
            }

            // Respect configured min-height from styles
            const styleMinHeight = parseInt(String((textEl.style && textEl.style.minHeight) || 0));
            // The final height should be at least the measured content height or the configured min-height
            const targetHeight = Math.max(measuredHeight, styleMinHeight);

            const designHeight = textEl.height;
            // Only grow if target height exceeds design height
            const delta = targetHeight - designHeight;

            if (delta > 0) {
                const originalBottom = textEl.y + designHeight;
                const originalTextRect = { x: textEl.x, y: textEl.y, width: textEl.width, height: designHeight };
                textEl.height = targetHeight;
                layoutElements.forEach((other: any) => {
                    if (other.id === textEl.id) return;

                    // If element is strictly inside the expanding one, grow it too
                    if (isInside(originalTextRect, other)) {
                        other.height += delta;
                        return;
                    }

                    // Only shift elements that are visibly below AND have horizontal overlap
                    // This prevents shifting elements in adjacent columns
                    if (other.y >= originalBottom) {
                        const xOverlap = Math.max(0, Math.min(textEl.x + textEl.width, other.x + other.width) - Math.max(textEl.x, other.x));
                        if (xOverlap > 0) {
                            other.y += delta;
                        }
                    }
                });
            }
        }
    });

    let maxY = 0;
    layoutElements.forEach((el: any) => {
        const bottom = el.y + el.height;
        if (bottom > maxY) maxY = bottom;
    });

    return { layoutElements, maxY };
};

const computeItemHeight = (elements: IElement[], itemData: any, fallbackHeight: number) => {
    const { maxY } = computeLayout(elements, itemData);
    return fallbackHeight ? Math.max(maxY, fallbackHeight) : maxY;
};

// --- Vanilla Renderer Logic (for Exports & Runtime) ---
// This function is defined here to be stringified and injected into exports.
const vanillaRenderItem = (elements: IElement[], itemData: any, _index = 0, offsetY = 0) => {
    const { layoutElements } = computeLayout(elements, itemData);

    // Use all elements as absolute positioned, but with updated coordinates from computeLayout
    const allElements = layoutElements;

    const renderElementContent = (element: any) => {
        let content = element.content;
        let imgSrc = '';

        if (element.type === 'text' || element.type === 'text-container') {
            content = content.replace(/\{\{(.*?)\}\}/g, (match: any, key: string) => {
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
                if (val !== undefined && val !== null) imgSrc = String(val);
                else imgSrc = content;
            } else {
                imgSrc = content.replace(/\{\{(.*?)\}\}/g, (match: any, key: string) => {
                    const val = itemData[key.trim()];
                    return val !== undefined && val !== null ? String(val) : match;
                });
            }
        }

        let conditionalStyles = {};
        if (element.conditions) {
            element.conditions.forEach((rule: any) => {
                const propVal = itemData[rule.property];
                if (checkCondition(propVal, rule.operator, rule.value)) {
                    conditionalStyles = { ...conditionalStyles, ...rule.style };
                }
            });
        }

        let bindingStyles: any = {};
        if (element.styleBindings) {
            Object.entries(element.styleBindings).forEach(([styleProp, variableName]) => {
                const val = itemData[variableName as string];
                if (val !== undefined && val !== null) {
                    bindingStyles[styleProp] = String(val);
                }
            });
        }

        const baseStyle = {
            width: element.width,
            height: element.autoGrow ? 'auto' : element.height,
            transform: element.rotation ? `rotate(${element.rotation}deg)` : undefined,
            overflow: element.autoGrow ? 'visible' : 'hidden',
            whiteSpace: (element.type === 'text-container' && element.autoGrow && element.containerExpansion === 'horizontal') ? 'nowrap' : (element.autoGrow ? 'pre-wrap' : undefined),
            wordBreak: element.autoGrow ? 'break-word' : undefined,
            ...element.style,
            ...conditionalStyles,
            ...bindingStyles
        };

        return { content, imgSrc, baseStyle };
    };

    const renderHtmlTag = (element: any, styleString: string, content: string, imgSrc: string) => {
        if (element.type === 'text' || element.type === 'text-container') {
            return `<div style="${styleString}">${content}</div>`;
        } else if (element.type === 'image') {
            const imgStyle = styleObjectToString({
                width: '100%', height: '100%', objectFit: element.style?.objectFit || 'cover', display: 'block'
            });
            return `<div style="${styleString}"><img src="${imgSrc}" alt="Element" style="${imgStyle}" /></div>`;
        } else if (element.type === 'box') {
            return `<div style="${styleString}"></div>`;
        } else if (element.type === 'checkbox') {
            let isChecked = false;
            if (element.dataBinding) {
                const val = itemData[element.dataBinding];
                isChecked = val === true || String(val) === 'true';
            }
            // Ensure checkbox container is flex to center the input
            return `<div style="${styleString}; display: flex; align-items: center; justify-content: center;"><input type="checkbox" ${isChecked ? 'checked' : ''} disabled style="width:100%;height:100%;margin:0;" /></div>`;
        }
        return '';
    };

    // Render All Elements (Absolute)
    return allElements.map((element: any) => {
        const { content, imgSrc, baseStyle } = renderElementContent(element);
        const styleString = styleObjectToString({
            ...baseStyle,
            position: 'absolute',
            left: element.x,
            top: element.y + offsetY
        });
        return renderHtmlTag(element, styleString, content, imgSrc);
    }).join('\n');
};

// --- React Components ---

const ElementRenderer: React.FC<{ element: IElement, itemData: any }> = ({ element, itemData }) => {
    let content = element.content;
    let imgSrc = '';

    // Variable Replacement
    if (element.type === 'text' || element.type === 'text-container') {
        content = content.replace(/\{\{(.*?)\}\}/g, (match, key) => {
            const val = itemData[key.trim()];
            if (val === undefined || val === null) return match;
            if (element.formatting) return formatValue(val, element.formatting);
            return String(val);
        });
    } else if (element.type === 'image') {
        if (element.dataBinding) {
            const val = itemData[element.dataBinding];
            imgSrc = (val !== undefined && val !== null) ? String(val) : content;
        } else {
            imgSrc = content.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                const val = itemData[key.trim()];
                return val !== undefined && val !== null ? String(val) : match;
            });
        }
    }

    // Conditional Styles
    let conditionalStyles = {};
    if (element.conditions) {
        element.conditions.forEach(rule => {
            const propVal = itemData[rule.property];
            if (checkCondition(propVal, rule.operator, rule.value)) {
                conditionalStyles = { ...conditionalStyles, ...rule.style };
            }
        });
    }

    // Style Bindings
    let bindingStyles: any = {};
    if (element.styleBindings) {
        Object.entries(element.styleBindings).forEach(([styleProp, variableName]) => {
            const val = itemData[variableName];
            if (val !== undefined && val !== null) bindingStyles[styleProp] = String(val);
        });
    }

    const baseStyle: React.CSSProperties = {
        position: 'absolute',
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.autoGrow ? 'auto' : element.height,
        transform: element.rotation ? `rotate(${element.rotation}deg)` : undefined,
        overflow: element.autoGrow ? 'visible' : 'hidden',
        whiteSpace: (element.type === 'text-container' && element.autoGrow && element.containerExpansion === 'horizontal') ? 'nowrap' : (element.autoGrow ? 'pre-wrap' : undefined),
        wordBreak: element.autoGrow ? 'break-word' : undefined,
        ...element.style,
        ...conditionalStyles,
        ...bindingStyles
    };

    if (element.type === 'text' || element.type === 'text-container') {
        const hasHtml = /<[a-z][\s\S]*>/i.test(content);
        if (hasHtml) {
            return <div style={baseStyle} dangerouslySetInnerHTML={{ __html: content }} />;
        }
        return <div style={baseStyle}>{content}</div>;
    } else if (element.type === 'image') {
        const imgStyle: React.CSSProperties = {
            width: '100%', height: '100%',
            objectFit: (element.style?.objectFit as any) || 'cover',
            display: 'block'
        };
        return <div style={baseStyle}><img src={imgSrc} alt="Element" style={imgStyle} /></div>;
    } else if (element.type === 'box') {
        return <div style={baseStyle}></div>;
    } else if (element.type === 'checkbox') {
        let isChecked = false;
        if (element.dataBinding) {
            const val = itemData[element.dataBinding];
            isChecked = val === true || String(val) === 'true';
        }
        return (
            <div style={{ ...baseStyle, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input type="checkbox" checked={isChecked} disabled style={{ width: '100%', height: '100%', margin: 0 }} />
            </div>
        );
    }
    return null;
};

const HtmlDocument: React.FC<{ elements: IElement[], data: any, options: RenderOptions }> = ({ elements, data, options }) => {
    const { isList, listSettings } = options;

    // CSS Keyframes string (replicated from original)
    const keyframesCss = `
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
        .list-wrapper::-webkit-scrollbar { width: 6px; }
        .list-wrapper::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2); border-radius: 3px; }
    `;

    if (isList && Array.isArray(data)) {
        // List Rendering Logic
        let listData = [...data];
        if (listSettings?.sortProp) {
            const prop = listSettings.sortProp;
            const order = listSettings.sortOrder === 'asc' ? 1 : -1;
            listData.sort((a, b) => (a[prop] < b[prop] ? -1 : 1) * order);
        }
        if (listSettings?.newestPosition === 'top') listData.reverse();

        const justify = listSettings?.newestPosition === 'top' ? 'flex-start' : 'flex-end';
        const entryAnim = (listSettings?.entryAnimation || { type: 'slideIn', duration: 0.3 }) as any;
        const entryAnimName = entryAnim.type === 'none' ? 'none' : entryAnim.type;
        const entryAnimDuration = entryAnim.duration + 's';
        const entryAnimTiming = entryAnim.timingFunction || 'ease-out';

        const containerStyle: React.CSSProperties = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: justify,
            height: listSettings?.containerHeight ? listSettings.containerHeight + 'px' : '100%',
            width: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            padding: '10px'
        };

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: keyframesCss }} />
                <div className="list-wrapper" style={containerStyle}>
                    {listData.map((item, i) => {
                        const minHeight = computeItemHeight(elements, item, options.canvasHeight || 0);
                        return (
                            <div key={i} className="list-item" style={{
                                position: 'relative', minHeight, width: '100%', flexShrink: 0,
                                animation: `${entryAnimName} ${entryAnimDuration} ${entryAnimTiming}`,
                                marginBottom: '10px'
                            }}>
                                {(() => {
                                    const { layoutElements } = computeLayout(elements, item);

                                    // Render all elements as absolute, relying on computeLayout for positioning
                                    return (
                                        <>
                                            {layoutElements.map((el: any) => (
                                                <ElementRenderer key={el.id} element={el} itemData={item} />
                                            ))}
                                        </>
                                    );
                                })()}
                            </div>
                        );
                    })}
                </div>
                {listSettings?.scrollDirection === 'up' && (
                    <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('DOMContentLoaded', () => { const w = document.querySelector('.list-wrapper'); if(w) w.scrollTop = w.scrollHeight; });` }} />
                )}
            </>
        );
    }

    // Single Item Rendering
    const { layoutElements } = computeLayout(elements, data);
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            {layoutElements.map((el: any) => (
                <ElementRenderer key={el.id} element={el} itemData={data} />
            ))}
        </div>
    );
};

export const generateHTML = (elements: IElement[], data: any, options: RenderOptions = {}): string => {
    // 1. Generate Static HTML using React
    const html = renderToStaticMarkup(<HtmlDocument elements={elements} data={data} options={options} />);

    // 2. Append Runtime Script (window.addItem) if needed
    const injectionScript = options.isList ? getRuntimeScript(elements, options) : '';

    return html + injectionScript;
};

// --- Runtime Script Generation (Legacy Support for injection) ---
const getRuntimeScript = (elements: IElement[], options: RenderOptions) => {
    return `
    <script>
    (function() {
        try {
            const elements = ${JSON.stringify(elements)};
            
            // Helper functions definitions
            const camelToKebab = ${camelToKebab.toString()};
            const hex8ToRgba = ${hex8ToRgba.toString()};
            const styleObjectToString = ${styleObjectToString.toString()};
            const measureTextHeight = ${measureTextHeight.toString()};
            const checkCondition = ${checkCondition.toString()};
            const formatValue = ${formatValue.toString()};
            const computeLayout = ${computeLayout.toString()};
            const computeItemHeight = ${computeItemHeight.toString()};
            const renderItem = ${vanillaRenderItem.toString()};
            
            const itemHeightFallback = ${options.canvasHeight || 0};
            const newestPosition = "${(options.listSettings && options.listSettings.newestPosition) || 'bottom'}";
            const scrollDirection = "${(options.listSettings && options.listSettings.scrollDirection) || 'down'}";

            window.addItem = function(data) {
                const wrapper = document.querySelector('.list-wrapper');
                if (!wrapper) return;

                const itemHtml = renderItem(elements, data, 0, 0);
                const itemHeight = computeItemHeight(elements, data, itemHeightFallback);
                const itemContainerStyle = styleObjectToString({
                    position: 'relative',
                    minHeight: itemHeight,
                    width: '100%'
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
    `;
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

    // --- Helper Functions Injected from Editor Source ---
    const camelToKebab = ${camelToKebab.toString()};
    const hex8ToRgba = ${hex8ToRgba.toString()};
    const styleObjectToString = ${styleObjectToString.toString()};
    const measureTextHeight = ${measureTextHeight.toString()};
    const checkCondition = ${checkCondition.toString()};
    const formatValue = ${formatValue.toString()};
    const computeLayout = ${computeLayout.toString()};
    const computeItemHeight = ${computeItemHeight.toString()};
    const renderItem = ${vanillaRenderItem.toString()};

    // --- Rendering Logic ---

    if (isList && Array.isArray(data)) {
        let listData = [...data];
        if (listSettings && listSettings.sortProp) {
            const prop = listSettings.sortProp;
            const order = listSettings.sortOrder === 'asc' ? 1 : -1;
            listData.sort((a, b) => (a[prop] < b[prop] ? -1 : 1) * order);
        }
        if (listSettings && listSettings.newestPosition === 'top') listData.reverse();

        const justify = (listSettings && listSettings.newestPosition === 'top') ? 'flex-start' : 'flex-end';
        const entryAnim = (listSettings && listSettings.entryAnimation) || { type: 'slideIn', duration: 0.3 };
        const entryAnimName = entryAnim.type === 'none' ? 'none' : entryAnim.type;
        const entryAnimDuration = entryAnim.duration + 's';
        const entryAnimTiming = entryAnim.timingFunction || 'ease-out';

        const containerStyle = styleObjectToString({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: justify,
            height: (listSettings && listSettings.containerHeight) ? listSettings.containerHeight + 'px' : '100%',
            width: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            padding: '10px'
        });

        const itemsHtml = listData.map((item, i) => {
            const minHeight = computeItemHeight(elements, item, canvasHeight || 0);
            const itemStyle = styleObjectToString({
                position: 'relative', minHeight: minHeight, width: '100%', flexShrink: 0,
                animation: \`\${entryAnimName} \${entryAnimDuration} \${entryAnimTiming}\`,
                marginBottom: '10px'
            });
            const content = renderItem(elements, item);
            return \`<div class="list-item" style="\${itemStyle}">\${content}</div>\`;
        }).join('');

        // Include Keyframes (truncated for brevity in export, but essential ones should be here)
        const css = \`
            .list-wrapper::-webkit-scrollbar { width: 6px; }
            .list-wrapper::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2); border-radius: 3px; }
            @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        \`;

        const scrollScript = (listSettings && listSettings.scrollDirection === 'up') 
            ? \`<script>document.addEventListener('DOMContentLoaded', () => { const w = document.querySelector('.list-wrapper'); if(w) w.scrollTop = w.scrollHeight; });</script>\`
            : '';

        return \`
            <style>\${css}</style>
            <div class="list-wrapper" style="\${containerStyle}">
                \${itemsHtml}
            </div>
            \${scrollScript}
        \`;
    }

    // Single Item
    const contentHtml = renderItem(elements, data);
    return \`<div style="position: relative; width: 100%; height: 100%; overflow: hidden;">\${contentHtml}</div>\`;
}
`;
};
