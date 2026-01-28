import type { IElement } from '../context';
import { formatValue } from './helpers';

interface ILayoutShift {
    triggerY: number;
    delta: number;
    ignoreIds: Set<string>;
}

// Helper to check if inner element is spatially inside outer element
const isInside = (inner: IElement, outer: IElement): boolean => {
    if (inner.id === outer.id) return false;
    const eps = 0.1;
    return (
        inner.x >= outer.x - eps &&
        inner.x + inner.width <= outer.x + outer.width + eps &&
        inner.y >= outer.y - eps &&
        inner.y + inner.height <= outer.y + outer.height + eps
    );
};

// Helper to estimate text height using Canvas API
const measureTextHeight = (
    text: string,
    width: number,
    fontFamily: string,
    fontSize: number,
    lineHeightMultiplier: number = 1.2
): number => {
    if (!text) return 0;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return 0;

    context.font = `${fontSize}px ${fontFamily}`;

    const words = text.split(' ');
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

    // Handle newlines explicitly as well
    const explicitLines = text.split('\n').length - 1;
    lineCount += explicitLines;

    return Math.ceil(lineCount * fontSize * lineHeightMultiplier);
};

export const processLayout = (
    elements: IElement[],
    dataContext: any
): { elements: IElement[], totalHeight: number } => {
    // Deep clone elements to avoid mutating state
    const processedElements = elements.map(el => ({ ...el }));
    const originalElementsMap = new Map(elements.map(el => [el.id, el]));

    const shifts: ILayoutShift[] = [];

    // 1. Resolve Content & Calculate Growth
    processedElements.forEach(element => {
        const isText = element.type === 'text';
        const isTextContainer = element.type === 'text-container';

        if ((isText || isTextContainer) && element.autoGrow) {
            // Resolve content
            let content = element.content;
            if (dataContext) {
                content = content.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                    const val = dataContext[key.trim()];
                    if (val !== undefined && val !== null) {
                        if (element.formatting) {
                            return formatValue(val, element.formatting);
                        }
                        return String(val);
                    }
                    return match;
                });
            }

            // Get style props
            const fontSize = parseInt(String(element.style?.fontSize || 16));
            const fontFamily = String(element.style?.fontFamily || 'Arial');

            // Check expansion direction
            const isHorizontal = isTextContainer && element.containerExpansion === 'horizontal';

            if (isHorizontal) {
                // Measure Width
                // Simple canvas measurement for width
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (context) {
                    context.font = `${fontSize}px ${fontFamily}`;
                    const metrics = context.measureText(content);
                    const newWidth = Math.ceil(metrics.width + (parseInt(String(element.style?.padding || 0)) * 2));

                    if (newWidth > element.width) {
                        element.width = newWidth;
                        element.content = content;
                    }
                }
            } else {
                // Measure Height (Vertical Expansion)
                const newHeight = measureTextHeight(content, element.width, fontFamily, fontSize);
                const originalHeight = element.height;
                const delta = newHeight - originalHeight;

                // Apply growth if positive
                if (delta > 0) {
                    element.height = newHeight;
                    element.content = content; // Store resolved content

                    // Find ancestors (Containers)
                    const ancestors: IElement[] = [];
                    const originalElement = originalElementsMap.get(element.id);

                    if (originalElement) {
                        processedElements.forEach(possibleParent => {
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
                    // Trigger is based on the ORIGINAL bottom edge of the text
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
    // We process elements based on their ORIGINAL positions to determine if they should shift
    processedElements.forEach(element => {
        const originalElement = originalElementsMap.get(element.id);
        if (!originalElement) return;

        let totalShift = 0;
        shifts.forEach(shift => {
            // If this element is part of the growing group (it's the text or a parent), don't shift it
            if (shift.ignoreIds.has(element.id)) return;

            // If element is spatially below the trigger line
            // We use a small epsilon to handle exact alignment
            if (originalElement.y >= shift.triggerY - 0.1) {
                totalShift += shift.delta;
            }
        });

        element.y += totalShift;
    });

    // 3. Calculate Total Height
    let maxY = 0;
    processedElements.forEach(el => {
        const bottom = el.y + el.height;
        if (bottom > maxY) maxY = bottom;
    });

    return { elements: processedElements, totalHeight: maxY };
};
