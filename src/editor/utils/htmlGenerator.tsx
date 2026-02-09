import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { IElement, IElementAnimation, IElementFormatting, IListSettings } from '../context';
import type { GenericData } from '../types';

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

const styleObjectToString = (style: Record<string, string | number | undefined | null>) => {
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

const applyShadowColor = (boxShadow: string | undefined, color: string) => {
    const colorPattern = /(rgba?\([^)]+\)|#(?:[0-9a-fA-F]{3,8})|[a-zA-Z]+)\s*$/;
    if (!boxShadow || boxShadow === 'none') {
        return `0 4px 12px 0 ${color}`;
    }
    if (colorPattern.test(boxShadow)) {
        return boxShadow.replace(colorPattern, color);
    }
    return `${boxShadow} ${color}`;
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

const checkCondition = (propValue: unknown, operator: string, ruleValue: unknown) => {
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

const formatValue = (value: unknown, formatting: IElementFormatting) => {
    if (!formatting || formatting.type === 'text') return value !== undefined && value !== null ? String(value) : '';
    if (value === undefined || value === null) return '';

    if (formatting.type === 'boolean') {
        const isTrue = String(value) === 'true' || value === true || (typeof value === 'number' && value > 0);
        return isTrue ? (formatting.trueLabel || 'Sim') : (formatting.falseLabel || 'Não');
    }

    if (formatting.type === 'date') {
        try {
            const date = new Date(value as string | number | Date);
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
        const num = parseFloat(value as string);
        if (isNaN(num)) return String(value);
        if (formatting.numberFormat === 'currency') return (formatting.currencySymbol || 'R$') + ' ' + num.toFixed(formatting.decimalPlaces || 2);
        if (formatting.numberFormat === 'percent') return num.toFixed(formatting.decimalPlaces || 0) + '%';
        return num.toFixed(formatting.decimalPlaces || 0);
    }

    return String(value);
};

const getSafeTimingFunction = (tf?: string) => {
    switch (tf) {
        case 'linear': return 'linear';
        case 'ease-in': return 'ease-in';
        case 'ease-out': return 'ease-out';
        case 'ease-in-out': return 'ease-in-out';
        case 'bounce': return 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        default: return 'ease-out';
    }
};

const getElementAnimationStyle = (animation?: IElementAnimation) => {
    if (!animation || animation.type === 'none') return {};
    const duration = (animation.duration || 0.4) + 's';
    const delay = (animation.delay || 0) + 's';
    const timing = getSafeTimingFunction(animation.timingFunction);
    const iterationCount = animation.iterationCount === 'infinite'
        ? 'infinite'
        : (typeof animation.iterationCount === 'number' ? Math.max(1, animation.iterationCount) : 1);
    return {
        animation: `${animation.type} ${duration} ${timing} ${delay}`,
        animationIterationCount: iterationCount,
        animationFillMode: 'both'
    };
};

const computeLayout = (elements: IElement[], itemData: GenericData) => {
    // Clone elements to avoid mutating state
    const layoutElements: IElement[] = JSON.parse(JSON.stringify(elements));
    // Create a map of original states to reference original positions
    const originalElementsMap = new Map(layoutElements.map(el => [el.id, { ...el }]));

    const shifts: { triggerY: number; delta: number; ignoreIds: Set<string> }[] = [];

    const isInside = (inner: IElement, outer: IElement) => {
        if (inner.id === outer.id) return false;
        const eps = 0.1;
        return (
            inner.x >= outer.x - eps &&
            inner.x + inner.width <= outer.x + outer.width + eps &&
            inner.y >= outer.y - eps &&
            inner.y + inner.height <= outer.y + outer.height + eps
        );
    };

    // 1. Resolve Content & Calculate Growth
    layoutElements.forEach((element) => {
        const isText = element.type === 'text';
        const isTextContainer = element.type === 'text-container';

        if ((isText || isTextContainer) && element.autoGrow) {
            // Resolve content
            let content = element.content;
            content = content.replace(/\{\{(.*?)\}\}/g, (_match: string, key: string) => {
                const val = itemData[key.trim()];
                if (val !== undefined && val !== null) {
                    if (element.formatting) {
                        return formatValue(val, element.formatting);
                    }
                    return String(val);
                }
                return _match;
            });

            // Get style props
            const fontSize = parseInt(String((element.style && element.style.fontSize) || 16));
            const fontFamily = String((element.style && element.style.fontFamily) || 'Arial');

            // Check expansion direction
            const isHorizontal = isTextContainer && element.containerExpansion === 'horizontal';

            if (isHorizontal) {
                // Measure Width
                try {
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    if (context) {
                        context.font = `${fontSize}px ${fontFamily}`;
                        const metrics = context.measureText(content);
                        const padding = parseInt(String((element.style && element.style.padding) || 0)) * 2;
                        const newWidth = Math.ceil(metrics.width + padding);

                        if (newWidth > element.width) {
                            element.width = newWidth;
                            element.content = content;
                        }
                    }
                } catch (e) { }
            } else {
                // Measure Height (Vertical Expansion)
                // Check for HTML content (e.g. <img> tags)
                let contentHeight = 0;
                const padding = parseInt(String((element.style && element.style.padding) || 0));
                const availableWidth = Math.max(1, element.width - (padding * 2));

                const htmlTagMatch = /<([a-z]+)([^>]*?)>/i.exec(content);

                if (htmlTagMatch) {
                    const attrs = htmlTagMatch[2];
                    const heightAttr = /height=["']?(\d+)["']?/i.exec(attrs);
                    const styleHeight = /height:\s*(\d+)px/i.exec(attrs);

                    if (heightAttr) {
                        contentHeight = parseInt(heightAttr[1]);
                    } else if (styleHeight) {
                        contentHeight = parseInt(styleHeight[1]);
                    } else {
                        contentHeight = measureTextHeight(content, availableWidth, fontFamily, fontSize);
                    }
                } else {
                    contentHeight = measureTextHeight(content, availableWidth, fontFamily, fontSize);
                }

                // Add padding and safety buffer
                let measuredHeight = contentHeight + (padding * 2);
                if (!htmlTagMatch || (htmlTagMatch && !contentHeight)) {
                    measuredHeight += 4;
                }

                const styleMinHeight = parseInt(String((element.style && element.style.minHeight) || 0));
                const targetHeight = Math.max(measuredHeight, styleMinHeight);
                const originalHeight = element.height;
                const delta = targetHeight - originalHeight;

                // Apply growth if positive
                if (delta > 0) {
                    element.height = targetHeight;
                    element.content = content;

                    // Find ancestors (Containers)
                    const ancestors: IElement[] = [];
                    const originalElement = originalElementsMap.get(element.id);

                    if (originalElement) {
                        layoutElements.forEach(possibleParent => {
                            if (possibleParent.id === element.id) return;
                            const originalParent = originalElementsMap.get(possibleParent.id);
                            if (originalParent && isInside(originalElement, originalParent)) {
                                ancestors.push(possibleParent);
                            }
                        });
                    }

                    // Expand ancestors
                    const ignoreIds = new Set<string>([element.id]);
                    ancestors.forEach(ancestor => {
                        ancestor.height += delta;
                        ignoreIds.add(ancestor.id);
                    });

                    // Record Shift
                    shifts.push({
                        triggerY: element.y + originalHeight,
                        delta: delta,
                        ignoreIds: ignoreIds
                    });
                }
            }
        }
    });

    // 2. Apply Shifts
    layoutElements.forEach(element => {
        const originalElement = originalElementsMap.get(element.id);
        if (!originalElement) return;

        let totalShift = 0;
        shifts.forEach(shift => {
            if (shift.ignoreIds.has(element.id)) return;
            if (originalElement.y >= shift.triggerY - 0.1) {
                totalShift += shift.delta;
            }
        });

        element.y += totalShift;
    });

    let maxY = 0;
    layoutElements.forEach((el) => {
        const bottom = el.y + el.height;
        if (bottom > maxY) maxY = bottom;
    });

    return { layoutElements, maxY };
};

const computeItemHeight = (elements: IElement[], itemData: GenericData, fallbackHeight: number) => {
    const { maxY } = computeLayout(elements, itemData);
    return fallbackHeight ? Math.max(maxY, fallbackHeight) : maxY;
};

// --- Vanilla Renderer Logic (for Exports & Runtime) ---
// This function is defined here to be stringified and injected into exports.
const vanillaRenderItem = (elements: IElement[], itemData: GenericData, _index = 0, offsetY = 0) => {
    const { layoutElements } = computeLayout(elements, itemData);

    // Use all elements as absolute positioned, but with updated coordinates from computeLayout
    const allElements = layoutElements;

    const renderElementContent = (element: IElement) => {
        let content = element.content;
        let imgSrc = '';

        if (element.type === 'text' || element.type === 'text-container') {
            content = content.replace(/\{\{(.*?)\}\}/g, (_match: string, key: string) => {
                const val = itemData[key.trim()];
                if (val === undefined || val === null) return _match;
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
                imgSrc = content.replace(/\{\{(.*?)\}\}/g, (_match: string, key: string) => {
                    const val = itemData[key.trim()];
                    return val !== undefined && val !== null ? String(val) : _match;
                });
            }
        }

        let conditionalStyles = {};
        if (element.conditions) {
            element.conditions.forEach((rule) => {
                const propVal = itemData[rule.property];
                if (checkCondition(propVal, rule.operator, rule.value)) {
                    conditionalStyles = { ...conditionalStyles, ...rule.style };
                }
            });
        }

        const bindingStyles: Record<string, string> = {};
        if (element.styleBindings) {
            Object.entries(element.styleBindings).forEach(([styleProp, variableName]) => {
                const val = itemData[variableName as string];
                if (val !== undefined && val !== null) {
                    if (styleProp === 'boxShadowColor') {
                        const baseShadow = (conditionalStyles as { boxShadow?: string }).boxShadow || (element.style?.boxShadow as string | undefined);
                        bindingStyles.boxShadow = applyShadowColor(baseShadow, String(val));
                    } else {
                        bindingStyles[styleProp] = String(val);
                    }
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
            ...bindingStyles,
            ...getElementAnimationStyle(element.animation)
        };

        return { content, imgSrc, baseStyle };
    };

    const renderHtmlTag = (element: IElement, styleString: string, content: string, imgSrc: string) => {
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
    return allElements.map((element: IElement) => {
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

const ElementRenderer: React.FC<{ element: IElement, itemData: GenericData }> = ({ element, itemData }) => {
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
    const bindingStyles: Record<string, string> = {};
    if (element.styleBindings) {
        Object.entries(element.styleBindings).forEach(([styleProp, variableName]) => {
            const val = itemData[variableName];
            if (val !== undefined && val !== null) {
                if (styleProp === 'boxShadowColor') {
                    const baseShadow = (conditionalStyles as { boxShadow?: string }).boxShadow || (element.style?.boxShadow as string | undefined);
                    bindingStyles.boxShadow = applyShadowColor(baseShadow, String(val));
                } else {
                    bindingStyles[styleProp] = String(val);
                }
            }
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
        ...bindingStyles,
        ...getElementAnimationStyle(element.animation)
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
            objectFit: (element.style?.objectFit as React.CSSProperties['objectFit']) || 'cover',
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

const HtmlDocument: React.FC<{ elements: IElement[], data: GenericData | GenericData[], options: RenderOptions }> = ({ elements, data, options }) => {
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
            listData.sort((a, b) => ((a[prop] as number | string) < (b[prop] as number | string) ? -1 : 1) * order);
        }
        if (listSettings?.newestPosition === 'top') listData.reverse();

        const justify = listSettings?.newestPosition === 'top' ? 'flex-start' : 'flex-end';
        const entryAnim: IElementAnimation = listSettings?.entryAnimation || { type: 'slideIn', duration: 0.3, delay: 0 };
        const entryAnimName = entryAnim.type === 'none' ? 'none' : entryAnim.type;
        const entryAnimDuration = entryAnim.duration + 's';
        const entryAnimTiming = getSafeTimingFunction(entryAnim.timingFunction);

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
                                            {layoutElements.map((el: IElement) => (
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
    const { layoutElements } = computeLayout(elements, data as GenericData);
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: keyframesCss }} />
            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                {layoutElements.map((el) => (
                    <ElementRenderer key={el.id} element={el} itemData={data as GenericData} />
                ))}
            </div>
        </>
    );
};

export const generateHTML = (elements: IElement[], data: GenericData | GenericData[], options: RenderOptions = {}): string => {
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
            const applyShadowColor = ${applyShadowColor.toString()};
            const getElementAnimationStyle = ${getElementAnimationStyle.toString()};
            const measureTextHeight = ${measureTextHeight.toString()};
            const checkCondition = ${checkCondition.toString()};
            const formatValue = ${formatValue.toString()};
            const getSafeTimingFunction = ${getSafeTimingFunction.toString()};
            const computeLayout = ${computeLayout.toString()};
            const computeItemHeight = ${computeItemHeight.toString()};
            const renderItem = ${vanillaRenderItem.toString()};
            
            const itemHeightFallback = ${options.canvasHeight || 0};
            const newestPosition = "${(options.listSettings && options.listSettings.newestPosition) || 'bottom'}";
            const scrollDirection = "${(options.listSettings && options.listSettings.scrollDirection) || 'down'}";
            const entryAnimation = ${JSON.stringify(options.listSettings && options.listSettings.entryAnimation ? options.listSettings.entryAnimation : { type: 'slideIn', duration: 0.3, delay: 0 })};
            const entryAnimName = entryAnimation.type === 'none' ? 'none' : entryAnimation.type;
            const entryAnimDuration = (entryAnimation.duration || 0.3) + 's';
            const entryAnimDelay = (entryAnimation.delay || 0) + 's';
            const entryAnimTiming = getSafeTimingFunction(entryAnimation.timingFunction);

            window.addItem = function(data) {
                const wrapper = document.querySelector('.list-wrapper');
                if (!wrapper) return;

                const itemHtml = renderItem(elements, data, 0, 0);
                const itemHeight = computeItemHeight(elements, data, itemHeightFallback);
                const itemContainerStyle = styleObjectToString({
                    position: 'relative',
                    minHeight: itemHeight,
                    width: '100%',
                    flexShrink: 0,
                    marginBottom: '10px',
                    animation: entryAnimName === 'none' ? 'none' : entryAnimName + ' ' + entryAnimDuration + ' ' + entryAnimTiming + ' ' + entryAnimDelay,
                    animationFillMode: entryAnimName === 'none' ? undefined : 'both'
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
    const applyShadowColor = ${applyShadowColor.toString()};
    const measureTextHeight = ${measureTextHeight.toString()};
    const checkCondition = ${checkCondition.toString()};
    const formatValue = ${formatValue.toString()};
    const getSafeTimingFunction = ${getSafeTimingFunction.toString()};
    const getElementAnimationStyle = ${getElementAnimationStyle.toString()};
    const computeLayout = ${computeLayout.toString()};
    const computeItemHeight = ${computeItemHeight.toString()};
    const renderItem = ${vanillaRenderItem.toString()};

    // --- Rendering Logic ---
    const keyframesCss = \`
        .list-wrapper::-webkit-scrollbar { width: 6px; }
        .list-wrapper::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2); border-radius: 3px; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }
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
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
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
        const entryAnimTiming = getSafeTimingFunction(entryAnim.timingFunction);

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

        const scrollScript = (listSettings && listSettings.scrollDirection === 'up') 
            ? \`<script>document.addEventListener('DOMContentLoaded', () => { const w = document.querySelector('.list-wrapper'); if(w) w.scrollTop = w.scrollHeight; });</script>\`
            : '';

        return \`
            <style>\${keyframesCss}</style>
            <div class="list-wrapper" style="\${containerStyle}">
                \${itemsHtml}
            </div>
            \${scrollScript}
        \`;
    }

    // Single Item
    const contentHtml = renderItem(elements, data);
    return \`<style>\${keyframesCss}</style><div style="position: relative; width: 100%; height: 100%; overflow: hidden;">\${contentHtml}</div>\`;
}
`;
};
