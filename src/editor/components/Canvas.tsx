import React, { useRef, useState, useEffect } from 'react';
import { useEditor, type IElement, type IElementFormatting } from '../context';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Resizable } from 're-resizable';
import { ElementContextMenu } from './ElementContextMenu';

interface CanvasProps {
    // Props se necessário
}

const formatValue = (value: any, formatting: IElementFormatting): string => {
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
        } catch { return String(value); }
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
        return num.toFixed(formatting.decimalPlaces || 0);
    }
    return String(value);
};

const checkCondition = (propValue: any, operator: string, ruleValue: string): boolean => {
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

const DraggableResizableElement: React.FC<{ element: IElement; isSelected: boolean }> = ({ element, isSelected }) => {
    const { selectElement, updateElement, state } = useEditor();
    const [isDragging, setIsDragging] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    const dragStartPos = useRef({ x: 0, y: 0 });
    const elementStartPos = useRef({ x: 0, y: 0 });

    // Canvas limits
    const canvasHeight = state.canvasHeight || 150;

    // Rotation refs
    const rotateStartAngle = useRef(0);
    const elementStartRotation = useRef(0);
    const centerPos = useRef({ x: 0, y: 0 });

    // Resolve content for display in Canvas
    const dataContext = state.isList
        ? (state.mockData.length > 0 ? state.mockData[0] : null)
        : state.singleMockData;

    let displayContent = element.content;
    let conditionalStyles: React.CSSProperties = {};

    if (dataContext) {
        if (element.type === 'text') {
            // Interpolation for Text: replaces {{variable}} with value
            displayContent = displayContent.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                const val = dataContext[key.trim()];
                if (val !== undefined && val !== null) {
                    if (element.formatting) {
                        return formatValue(val, element.formatting);
                    }
                    return String(val);
                }
                return match;
            });
        } else if (element.type === 'image') {
            // For image, prefer dataBinding if set, otherwise try interpolation on content (URL)
            if (element.dataBinding) {
                const val = dataContext[element.dataBinding];
                if (val !== undefined && val !== null) {
                    displayContent = String(val);
                }
            } else {
                displayContent = displayContent.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                    const val = dataContext[key.trim()];
                    return val !== undefined && val !== null ? String(val) : match;
                });
            }
        }

        // Apply Conditional Styles
        if (element.conditions) {
            element.conditions.forEach(rule => {
                const propVal = dataContext[rule.property];
                if (checkCondition(propVal, rule.operator, rule.value)) {
                    conditionalStyles = { ...conditionalStyles, ...rule.style };
                }
            });
        }
    }

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        selectElement(element.id);
    };

    // const handleRemove = (e: React.MouseEvent) => {
    //     e.stopPropagation();
    //     removeElement(element.id);
    // };

    // Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return; // Only left click
        e.stopPropagation(); // Prevent canvas background click
        selectElement(element.id);

        setIsDragging(true);
        dragStartPos.current = { x: e.clientX, y: e.clientY };
        elementStartPos.current = { x: element.x, y: element.y };
    };

    // Rotation Logic
    const handleRotateStart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault(); // Prevent text selection
        setIsRotating(true);

        // Find the center of the element in screen coordinates
        // We use the element's current position and size
        // Since we are inside the component, we can try to get the rect, 
        // but simpler is to rely on client coordinates if we knew the absolute position.
        // Better: use getBoundingClientRect of the element wrapper.
        const el = (e.target as HTMLElement).closest('.resizable-element');
        if (el) {
            const rect = el.getBoundingClientRect();
            centerPos.current = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };

            // Initial angle
            const dx = e.clientX - centerPos.current.x;
            const dy = e.clientY - centerPos.current.y;
            rotateStartAngle.current = Math.atan2(dy, dx) * (180 / Math.PI);
            elementStartRotation.current = element.rotation || 0;
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                const dx = e.clientX - dragStartPos.current.x;
                const dy = e.clientY - dragStartPos.current.y;

                let newX = elementStartPos.current.x + dx;
                let newY = elementStartPos.current.y + dy;

                // Limit movement if isList is active
                if (state.isList) {
                    // Prevent going above top
                    newY = Math.max(0, newY);

                    // Prevent going below bottom (considering element height)
                    if (newY + element.height > canvasHeight) {
                        newY = Math.max(0, canvasHeight - element.height);
                    }
                }

                updateElement(element.id, {
                    x: newX,
                    y: newY
                });
            }

            if (isRotating) {
                const dx = e.clientX - centerPos.current.x;
                const dy = e.clientY - centerPos.current.y;
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                const delta = angle - rotateStartAngle.current;

                // Snap to 45 degrees if Shift is held (can be added later)

                updateElement(element.id, {
                    rotation: (elementStartRotation.current + delta) % 360
                });
            }
        };

        const handleMouseUp = () => {
            if (isDragging) setIsDragging(false);
            if (isRotating) setIsRotating(false);
        };

        if (isDragging || isRotating) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isRotating, element.id, updateElement]);

    const commonStyles: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        padding: (element.type === 'image' || element.type === 'text') ? 0 : '8px',
        border: isSelected ? '2px solid var(--accent-9)' : '1px dashed transparent',
        outline: isSelected ? 'none' : '1px solid transparent', // Prevent double border
        cursor: isDragging ? 'grabbing' : 'grab',
        borderRadius: 'var(--radius-2)',
        overflow: 'hidden',
        userSelect: 'none',
        ...element.style,
        ...conditionalStyles
    };

    return (
        <Resizable
            className="resizable-element"
            size={{ width: element.width, height: element.height }}
            maxHeight={state.isList ? Math.max(10, canvasHeight - element.y) : undefined}
            onResizeStop={(_e, _direction, _ref, d) => {
                updateElement(element.id, {
                    width: element.width + d.width,
                    height: element.height + d.height,
                });
            }}
            style={{
                position: 'absolute',
                transform: `translate(${element.x}px, ${element.y}px) rotate(${element.rotation || 0}deg)`,
            }}
            enable={isSelected ? undefined : false} // Only resizable when selected
        >
            <ElementContextMenu element={element}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Box
                        style={commonStyles}
                        onMouseDown={handleMouseDown}
                        onClick={handleClick}
                        onMouseEnter={(e) => {
                            if (!isSelected) e.currentTarget.style.borderColor = 'var(--gray-6)';
                        }}
                        onMouseLeave={(e) => {
                            if (!isSelected) e.currentTarget.style.borderColor = 'transparent';
                        }}
                    >
                        {element.type === 'text' && (
                            <Text style={{ width: '100%', height: '100%' }}>{displayContent}</Text>
                        )}

                        {element.type === 'image' && (
                            displayContent ? (
                                <img
                                    src={displayContent}
                                    alt="Element"
                                    style={{ width: '100%', height: '100%', objectFit: (element.style?.objectFit as any) || 'cover', display: 'block', pointerEvents: 'none' }}
                                />
                            ) : (
                                <Box style={{ width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text size="1">Imagem Placeholder</Text>
                                </Box>
                            )
                        )}

                        {element.type === 'box' && (
                            <Box style={{ width: '100%', height: '100%' }} />
                        )}
                    </Box>

                    {/* Rotate Handle */}
                    {isSelected && (
                        <Box
                            style={{
                                position: 'absolute',
                                top: -30,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 12,
                                height: 12,
                                backgroundColor: 'var(--accent-9)',
                                borderRadius: '50%',
                                cursor: 'crosshair',
                                zIndex: 50,
                                boxShadow: '0 0 0 2px white'
                            }}
                            onMouseDown={handleRotateStart}
                        >
                            {/* Connection Line */}
                            <Box
                                style={{
                                    position: 'absolute',
                                    top: 12,
                                    left: '50%',
                                    width: 2,
                                    height: 18,
                                    backgroundColor: 'var(--accent-9)',
                                    transform: 'translateX(-50%)'
                                }}
                            />
                        </Box>
                    )}
                </div>
            </ElementContextMenu>
        </Resizable>
    );
};

export const Canvas: React.FC<CanvasProps> = () => {
    const { state, selectElement } = useEditor();

    const handleBackgroundClick = () => {
        selectElement(null);
    };

    const canvasHeight = state.canvasHeight || 150;

    return (
        <Box
            onClick={handleBackgroundClick}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden', // Canvas infinito pode ser implementado depois com scroll
                backgroundColor: 'var(--color-background)',
                backgroundImage: 'radial-gradient(var(--gray-5) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}
        >
            {state.isList && (
                <div
                    style={{
                        position: 'absolute',
                        top: canvasHeight,
                        left: 0,
                        right: 0,
                        borderBottom: '2px dashed var(--accent-9)',
                        pointerEvents: 'none',
                        zIndex: 10
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        right: 10,
                        bottom: 2,
                        backgroundColor: 'var(--accent-9)',
                        color: 'white',
                        fontSize: '10px',
                        padding: '2px 4px',
                        borderRadius: '2px'
                    }}>
                        Fim do Item ({canvasHeight}px)
                    </div>
                </div>
            )}

            {state.elements.length === 0 && (
                <Flex
                    align="center"
                    justify="center"
                    style={{
                        height: '100%',
                        color: 'var(--gray-8)',
                        pointerEvents: 'none'
                    }}
                >
                    <Text>Adicione elementos e arraste livremente</Text>
                </Flex>
            )}

            {state.elements.map((el) => (
                <DraggableResizableElement
                    key={el.id}
                    element={el}
                    isSelected={state.selectedElementId === el.id}
                />
            ))}
        </Box>
    );
};
