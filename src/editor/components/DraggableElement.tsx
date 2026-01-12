import React, { useRef, useState, useEffect } from 'react';
import { useEditor, type IElement } from '../context';
import { Box, Text } from '@radix-ui/themes';
import { Resizable } from 're-resizable';
import { ElementContextMenu } from './ElementContextMenu';
import { formatValue, checkCondition } from '../utils/helpers';

interface DraggableElementProps {
    element: IElement;
    isSelected: boolean;
}

export const DraggableElement: React.FC<DraggableElementProps> = React.memo(({ element, isSelected }) => {
    const { selectElement, updateElement, state } = useEditor();
    const [isDragging, setIsDragging] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    
    // Local state for smooth dragging without global re-renders
    const [localPos, setLocalPos] = useState({ x: element.x, y: element.y });
    const [localRotation, setLocalRotation] = useState(element.rotation || 0);
    const [localSize, setLocalSize] = useState({ width: element.width, height: element.height });

    // Sync local state with props when not dragging/rotating
    useEffect(() => {
        if (!isDragging) {
            setLocalPos({ x: element.x, y: element.y });
        }
    }, [element.x, element.y, isDragging]);

    useEffect(() => {
        if (!isRotating) {
            setLocalRotation(element.rotation || 0);
        }
    }, [element.rotation, isRotating]);

    useEffect(() => {
        // Size updates usually happen via resizer, but if external updates happen
        setLocalSize({ width: element.width, height: element.height });
    }, [element.width, element.height]);

    const dragStartPos = useRef({ x: 0, y: 0 });
    const elementStartPos = useRef({ x: 0, y: 0 });
    const rotateStartAngle = useRef(0);
    const elementStartRotation = useRef(0);
    const centerPos = useRef({ x: 0, y: 0 });

    const canvasHeight = state.canvasHeight || 150;

    // Resolve content
    const dataContext = state.isList
        ? (state.mockData.length > 0 ? state.mockData[0] : null)
        : state.singleMockData;

    let displayContent = element.content;
    let conditionalStyles: React.CSSProperties = {};

    if (dataContext) {
        if (element.type === 'text') {
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

        if (element.conditions) {
            element.conditions.forEach(rule => {
                const propVal = dataContext[rule.property];
                if (checkCondition(propVal, rule.operator, rule.value)) {
                    conditionalStyles = { ...conditionalStyles, ...rule.style };
                }
            });
        }
    }

    const isHidden = conditionalStyles.display === 'none';
    if (isHidden) {
        if (isSelected) {
            const { display, ...rest } = conditionalStyles;
            conditionalStyles = rest;
        }
    }

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        selectElement(element.id);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        e.stopPropagation();
        selectElement(element.id);

        setIsDragging(true);
        dragStartPos.current = { x: e.clientX, y: e.clientY };
        elementStartPos.current = { x: localPos.x, y: localPos.y };
    };

    const handleRotateStart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const el = (e.target as HTMLElement).closest('.resizable-element');
        if (el) {
            const rect = el.getBoundingClientRect();
            centerPos.current = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
            const dx = e.clientX - centerPos.current.x;
            const dy = e.clientY - centerPos.current.y;
            rotateStartAngle.current = Math.atan2(dy, dx) * (180 / Math.PI);
            elementStartRotation.current = localRotation;
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                const dx = e.clientX - dragStartPos.current.x;
                const dy = e.clientY - dragStartPos.current.y;
                let newX = elementStartPos.current.x + dx;
                let newY = elementStartPos.current.y + dy;

                if (state.isList) {
                    newY = Math.max(0, newY);
                    if (newY + localSize.height > canvasHeight) {
                        newY = Math.max(0, canvasHeight - localSize.height);
                    }
                }
                // UPDATE LOCAL STATE ONLY
                setLocalPos({ x: newX, y: newY });
            }

            if (isRotating) {
                const dx = e.clientX - centerPos.current.x;
                const dy = e.clientY - centerPos.current.y;
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                const delta = angle - rotateStartAngle.current;
                setLocalRotation((elementStartRotation.current + delta) % 360);
            }
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
                // COMMIT TO GLOBAL STATE ONCE
                updateElement(element.id, { x: localPos.x, y: localPos.y });
            }
            if (isRotating) {
                setIsRotating(false);
                updateElement(element.id, { rotation: localRotation });
            }
        };

        if (isDragging || isRotating) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isRotating, element.id, updateElement, state.isList, canvasHeight, localSize.height, localPos.x, localPos.y, localRotation]);

    const commonStyles: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: element.autoGrow ? 'auto' : '100%',
        minHeight: element.autoGrow ? '100%' : undefined,
        padding: (element.type === 'image' || element.type === 'text') ? 0 : '8px',
        border: isSelected ? '2px solid var(--accent-9)' : '1px dashed transparent',
        outline: isSelected ? 'none' : '1px solid transparent',
        cursor: isDragging ? 'grabbing' : 'grab',
        borderRadius: 'var(--radius-2)',
        overflow: element.autoGrow ? 'visible' : 'hidden',
        whiteSpace: element.autoGrow ? 'pre-wrap' : undefined,
        wordBreak: element.autoGrow ? 'break-word' : undefined,
        userSelect: 'none',
        ...element.style,
        ...conditionalStyles
    };

    return (
        <Resizable
            className="resizable-element"
            size={{ width: localSize.width, height: element.autoGrow ? 'auto' : localSize.height }}
            maxHeight={state.isList ? Math.max(10, canvasHeight - localPos.y) : undefined}
            onResizeStop={(_e, _direction, _ref, d) => {
                const newWidth = localSize.width + d.width;
                const newHeight = localSize.height + d.height;
                setLocalSize({ width: newWidth, height: newHeight });
                updateElement(element.id, { width: newWidth, height: newHeight });
            }}
            style={{
                position: 'absolute',
                transform: `translate(${localPos.x}px, ${localPos.y}px) rotate(${localRotation}deg)`,
                height: element.autoGrow ? 'auto' : undefined,
                display: (isHidden && !isSelected) ? 'none' : undefined,
                opacity: (isHidden && isSelected) ? 0.4 : 1
            }}
            enable={isSelected && !element.autoGrow ? undefined : {
                top: false, right: isSelected, bottom: false, left: isSelected,
                topRight: false, bottomRight: isSelected, bottomLeft: false, topLeft: false
            }}
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
});
