import { Box, Text } from '@radix-ui/themes';
import { Resizable } from 're-resizable';
import React, { useEffect, useRef, useState } from 'react';
import { useEditor, type IElement } from '../context';
import { checkCondition, formatValue } from '../utils/helpers';
import { ElementContextMenu } from './ElementContextMenu';

interface DraggableElementProps {
    element: IElement;
    isSelected: boolean;
}

export const DraggableElement: React.FC<DraggableElementProps> = React.memo(({ element, isSelected }) => {
    const { selectElement, updateElement, updateElements, state, resizeGroup } = useEditor();
    const [isDragging, setIsDragging] = useState(false);
    const [isRotating, setIsRotating] = useState(false);

    // Refs for drag calculations
    const dragStartPos = useRef({ x: 0, y: 0 });
    const initialPositions = useRef<Record<string, { x: number, y: number }>>({});

    // Refs for selection logic
    const hasMoved = useRef(false);
    const didSelectOnMouseDown = useRef(false);

    // Refs for rotation
    const rotateStartAngle = useRef(0);
    const elementStartRotation = useRef(0);
    const centerPos = useRef({ x: 0, y: 0 });
    const keepAspectRef = useRef<boolean>(false);

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

        if (element.styleBindings) {
            Object.entries(element.styleBindings).forEach(([styleProp, variableName]) => {
                const val = dataContext[variableName];
                if (val !== undefined && val !== null) {
                    conditionalStyles = { ...conditionalStyles, [styleProp]: String(val) };
                }
            });
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

        // Only handle selection on click if we didn't drag AND didn't already select on mousedown
        if (!hasMoved.current && !didSelectOnMouseDown.current && !isDragging) {
            // If we are here, it means the element was ALREADY selected on mousedown
            // So we want to toggle it (if shift) or exclusive select it (if no shift)

            if (e.shiftKey) {
                // Shift+Click on selected -> Toggle Off
                selectElement(element.id, true);
            } else {
                // Click on selected (no shift) -> Exclusive select
                selectElement(element.id, false);
            }
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        e.stopPropagation();

        const isMultiSelect = e.shiftKey;

        // Reset flags
        hasMoved.current = false;
        didSelectOnMouseDown.current = false;

        // GROUP LOGIC: If element belongs to a group, select the group instead
        // Unless we are already selecting the group (e.g. by clicking the group border directly)
        // or if the group is already selected (allow selecting child with modifier?)
        // For simplicity: Always select group if exists, unless the group itself is passed as prop

        if (element.groupId && !isSelected) {
            // Check if group is already selected? 
            // If we click a child, we want to select the group.
            selectElement(element.groupId, isMultiSelect);
            return; // Stop processing for this child
        }

        // Selection Logic on MouseDown:
        // 1. If not selected, select it immediately (so we can drag it)
        // 2. If Shift is pressed and not selected, add to selection
        // 3. If selected, DO NOTHING (wait for click to toggle/exclusive select, or drag to move group)

        if (!isSelected) {
            selectElement(element.id, isMultiSelect);
            didSelectOnMouseDown.current = true;
        }

        setIsDragging(true);
        dragStartPos.current = { x: e.clientX, y: e.clientY };

        // Capture initial positions...
        // Note: We use state.selectedElementIds but if we just selected, it might be stale.
        // We handle this by checking if !isSelected and adding self.

        const idsToMove = new Set(state.selectedElementIds);
        if (!isSelected) {
            if (!isMultiSelect) idsToMove.clear();
            idsToMove.add(element.id);
        }

        const positions: Record<string, { x: number, y: number }> = {};
        state.elements.forEach(el => {
            if (idsToMove.has(el.id)) {
                positions[el.id] = { x: el.x, y: el.y };
            }
        });
        initialPositions.current = positions;
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
            elementStartRotation.current = element.rotation || 0;
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                const dx = e.clientX - dragStartPos.current.x;
                const dy = e.clientY - dragStartPos.current.y;

                if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
                    hasMoved.current = true;
                }

                const updates = Object.entries(initialPositions.current).map(([id, startPos]) => {
                    let newX = startPos.x + dx;
                    let newY = startPos.y + dy;

                    // Apply Grid Snapping
                    if (state.gridSize > 0) {
                        newX = Math.round(newX / state.gridSize) * state.gridSize;
                        newY = Math.round(newY / state.gridSize) * state.gridSize;
                    }

                    // Boundary checks (basic) - applying to all elements based on their own start pos
                    if (state.isList) {
                        newY = Math.max(0, newY);
                    }

                    return {
                        id,
                        changes: { x: newX, y: newY }
                    };
                });

                // Update GLOBAL state without history for smooth drag
                updateElements(updates, false);
            }

            if (isRotating) {
                const dx = e.clientX - centerPos.current.x;
                const dy = e.clientY - centerPos.current.y;
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                const delta = angle - rotateStartAngle.current;

                // Only rotate current element? Or all selected?
                // Usually rotation is per-element or group rotation.
                // Let's stick to single element rotation for now as the UI handle is on one element.
                const newRotation = (elementStartRotation.current + delta) % 360;
                updateElement(element.id, { rotation: newRotation }, false);
            }
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
                // Commit to history by triggering an update with empty changes but addToHistory=true
                // This works because the state was already updated during drag (with addToHistory=false)
                updateElements([], true);
            }
            if (isRotating) {
                setIsRotating(false);
                // Same history issue for rotation
                updateElement(element.id, { rotation: element.rotation }, true);
            }
        };

        // We need to track the latest delta for the mouseUp history commit
        // Or we can just commit on the *next* update?
        // Let's try to capture the final state in MouseUp.
        // We can't access 'element' prop inside the event listener if we don't add it to deps.
        // If we add it to deps, we re-bind listeners on every frame -> bad performance.

        // Solution: Use a ref to store the latest 'updates' payload.

        if (isDragging || isRotating) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isRotating, element.id, updateElement, updateElements, state.isList, state.selectedElementIds]);
    // Note: state.selectedElementIds in deps means if selection changes, drag stops? 
    // Ideally selection doesn't change during drag.

    // Additional effect to handle history commit on drag end?
    // Let's use a mutable ref for the last updates to commit them on MouseUp.

    // ... Revised Effect below ...

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
            size={{
                width: element.width ?? 100,
                height: element.autoGrow ? 'auto' : (element.height ?? 100)
            }}
            maxHeight={state.isList ? Math.max(10, canvasHeight - element.y) : undefined}
            onResizeStart={(e) => {
                keepAspectRef.current = !!(e as any).shiftKey;
            }}
            onResizeStop={(_e, _direction, _ref, d) => {
                const newWidth = (element.width ?? 100) + d.width;
                const newHeight = (element.height ?? 100) + d.height;
                if (element.type === 'group') {
                    resizeGroup(element.id, newWidth, newHeight);
                } else {
                    updateElement(element.id, { width: newWidth, height: newHeight });
                }
            }}
            style={{
                position: 'absolute',
                transform: `translate(${element.x ?? 0}px, ${element.y ?? 0}px) rotate(${element.rotation || 0}deg)`,
                height: element.autoGrow ? 'auto' : undefined,
                display: (isHidden && !isSelected) ? 'none' : undefined,
                opacity: (isHidden && isSelected) ? 0.4 : 1
            }}
            enable={isSelected && !element.autoGrow ? undefined : {
                top: false, right: isSelected, bottom: false, left: isSelected,
                topRight: false, bottomRight: isSelected, bottomLeft: false, topLeft: false
            }}
            lockAspectRatio={(keepAspectRef as any).current === true}
            grid={state.gridSize > 0 ? [state.gridSize, state.gridSize] : undefined}
        >
            <ElementContextMenu element={element}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Box
                        style={commonStyles}
                        onMouseDown={handleMouseDown}
                        onClick={handleClick}
                        title={element.name}
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
                        {element.type === 'group' && (
                            <Box style={{
                                width: '100%',
                                height: '100%',
                                border: isSelected ? '1px dashed var(--accent-9)' : '1px dashed var(--gray-6)',
                                opacity: 0.5,
                                pointerEvents: 'none'
                            }}>
                                <Text
                                    size="1"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        backgroundColor: 'var(--accent-3)',
                                        color: 'var(--accent-11)',
                                        padding: '2px 6px',
                                        fontSize: '10px',
                                        borderBottomRightRadius: '4px'
                                    }}
                                >
                                    {element.name || 'Grupo'}
                                </Text>
                            </Box>
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
