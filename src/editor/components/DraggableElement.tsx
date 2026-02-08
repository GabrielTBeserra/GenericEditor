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
    const { selectElement, updateElement, updateElements, state, resizeGroup, setSnapLines } = useEditor();
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

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
        if (element.type === 'text' || element.type === 'text-container') {
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

    const handlePointerDown = (e: React.PointerEvent) => {
        // Prevent interaction if locked
        if (element.locked) return;

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

        // Capture pointer to ensure we receive all move/up events even if cursor leaves the element
        (e.currentTarget as Element).setPointerCapture(e.pointerId);

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

    const handlePointerMove = (e: React.PointerEvent) => {
        if (isDragging) {
            const zoom = state.zoom || 1;
            const dx = (e.clientX - dragStartPos.current.x) / zoom;
            const dy = (e.clientY - dragStartPos.current.y) / zoom;

            if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
                hasMoved.current = true;
            }

            // Snapping Logic Variables
            const snapThreshold = 5 / zoom;
            const activeSnapLines: { orientation: 'horizontal' | 'vertical', position: number }[] = [];

            const updates = Object.entries(initialPositions.current).map(([id, startPos]) => {
                let newX = startPos.x + dx;
                let newY = startPos.y + dy;

                // Apply Grid Snapping (Priority 1)
                if (state.gridSize > 0) {
                    newX = Math.round(newX / state.gridSize) * state.gridSize;
                    newY = Math.round(newY / state.gridSize) * state.gridSize;
                }
                // Apply Smart Snapping (Priority 2, only if Grid is off or ignored)
                else {
                    // Find potential snap targets (other elements)
                    // Only snap the primary dragged element (for simplicity) or all?
                    // Let's snap based on the current element being updated
                    // We need to check against ALL other elements (except selected ones)

                    let snappedX = false;
                    let snappedY = false;

                    // Calculate current element bounds
                    const width = element.width ?? 100;
                    const height = element.height ?? 100;

                    // Simplified Smart Snapping: Only if dragging a SINGLE element
                    if (Object.keys(initialPositions.current).length === 1) {
                        state.elements.forEach(other => {
                            if (other.id === id) return; // Skip self

                            const otherW = other.width ?? 100;
                            const otherH = other.height ?? 100;

                            // Vertical Snapping (X axis alignment)
                            if (!snappedX) {
                                if (Math.abs(newX - other.x) < snapThreshold) { newX = other.x; snappedX = true; activeSnapLines.push({ orientation: 'vertical', position: other.x }); }
                                else if (Math.abs(newX - (other.x + otherW)) < snapThreshold) { newX = other.x + otherW; snappedX = true; activeSnapLines.push({ orientation: 'vertical', position: other.x + otherW }); }
                                else if (Math.abs((newX + width) - other.x) < snapThreshold) { newX = other.x - width; snappedX = true; activeSnapLines.push({ orientation: 'vertical', position: other.x }); }
                                else if (Math.abs((newX + width) - (other.x + otherW)) < snapThreshold) { newX = other.x + otherW - width; snappedX = true; activeSnapLines.push({ orientation: 'vertical', position: other.x + otherW }); }
                            }

                            // Horizontal Snapping (Y axis alignment)
                            if (!snappedY) {
                                if (Math.abs(newY - other.y) < snapThreshold) { newY = other.y; snappedY = true; activeSnapLines.push({ orientation: 'horizontal', position: other.y }); }
                                else if (Math.abs(newY - (other.y + otherH)) < snapThreshold) { newY = other.y + otherH; snappedY = true; activeSnapLines.push({ orientation: 'horizontal', position: other.y + otherH }); }
                                else if (Math.abs((newY + height) - other.y) < snapThreshold) { newY = other.y - height; snappedY = true; activeSnapLines.push({ orientation: 'horizontal', position: other.y }); }
                                else if (Math.abs((newY + height) - (other.y + otherH)) < snapThreshold) { newY = other.y + otherH - height; snappedY = true; activeSnapLines.push({ orientation: 'horizontal', position: other.y + otherH }); }
                            }
                        });
                    }
                }

                // Boundary checks (basic)
                // Prevent going left of 0
                newX = Math.max(0, newX);

                if (state.isList) {
                    newY = Math.max(0, newY);

                    // Boundary check: Prevent going below canvasHeight (Template Height)
                    const elHeight = element.height ?? 100;
                    if (canvasHeight > 0) {
                        newY = Math.min(newY, canvasHeight - elHeight);
                    }
                    // Re-enforce top boundary
                    newY = Math.max(0, newY);
                }

                return {
                    id,
                    changes: { x: newX, y: newY }
                };
            });

            if (setSnapLines) {
                setSnapLines(activeSnapLines);
            }

            // Update GLOBAL state without history for smooth drag
            updateElements(updates, false);
        }
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (isDragging) {
            setIsDragging(false);
            (e.currentTarget as Element).releasePointerCapture(e.pointerId);
            // Commit to history by triggering an update with empty changes but addToHistory=true
            updateElements([], true);
            if (setSnapLines) setSnapLines([]);
        }
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
            if (isRotating) {
                setIsRotating(false);
                updateElement(element.id, { rotation: element.rotation }, true);
            }
        };

        if (isRotating) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isRotating, element.id, updateElement, element.rotation]);
    // Note: state.selectedElementIds in deps means if selection changes, drag stops? 
    // Ideally selection doesn't change during drag.

    // Additional effect to handle history commit on drag end?
    // Let's use a mutable ref for the last updates to commit them on MouseUp.

    // ... Revised Effect below ...

    // Auto-resize for horizontal text container
    useEffect(() => {
        if (element.type === 'text-container' && element.autoGrow && element.containerExpansion === 'horizontal') {
            const measure = () => {
                if (contentRef.current) {
                    const newWidth = contentRef.current.scrollWidth;
                    if (Math.abs(newWidth - (element.width ?? 0)) > 2) {
                        updateElement(element.id, { width: newWidth }, false);
                    }
                }
            };
            requestAnimationFrame(measure);
        }
    }, [displayContent, element.autoGrow, element.containerExpansion, element.style, element.width, element.formatting, updateElement, element.id, element.type]);

    const commonStyles: React.CSSProperties = {
        position: 'relative', // Changed from absolute to relative to support autoGrow parent expansion
        left: 0,
        top: 0,
        width: '100%',
        height: element.autoGrow ? 'auto' : '100%',
        minHeight: element.autoGrow ? '100%' : undefined,
        padding: (element.type === 'image' || element.type === 'text') ? 0 : '8px',
        border: (isSelected || isResizing) ? '2px solid var(--accent-9)' : '1px dashed transparent',
        outline: 'none', // Removed internal outline to rely on border
        cursor: isDragging ? 'grabbing' : 'grab',
        borderRadius: 'var(--radius-2)',
        overflow: element.autoGrow ? 'visible' : 'hidden',
        whiteSpace: element.autoGrow ? 'pre-wrap' : undefined,
        wordBreak: element.autoGrow ? 'break-word' : undefined,
        userSelect: 'none',
        boxSizing: 'border-box', // Ensure padding doesn't affect dimensions
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
                setIsResizing(true);
                keepAspectRef.current = !!(e as React.MouseEvent).shiftKey;
            }}
            onResizeStop={(_e, direction, _ref, d) => {
                setIsResizing(false);
                const newWidth = (element.width ?? 100) + d.width;
                const newHeight = (element.height ?? 100) + d.height;

                let newX = element.x ?? 0;
                let newY = element.y ?? 0;

                // Adjust position for left/top resizes
                if (direction.includes('left')) {
                    newX -= d.width;
                }
                if (direction.includes('top')) {
                    newY -= d.height;
                }

                if (element.type === 'group') {
                    resizeGroup(element.id, newWidth, newHeight);
                    // Groups might need position update logic too if implemented in resizeGroup, 
                    // but usually resizeGroup just scales children? 
                    // If resizeGroup doesn't handle position shift, we might need to update group X/Y separately.
                    // Assuming updateElement works for groups too for position:
                    updateElement(element.id, { x: newX, y: newY }, true);
                } else {
                    updateElement(element.id, { width: newWidth, height: newHeight, x: newX, y: newY });
                }
            }}
            handleComponent={{
                topLeft: <div className="resize-handle top-left" onPointerDown={(e) => { if (e.button === 0) { e.stopPropagation(); selectElement(element.id, e.shiftKey); } }} />,
                topRight: <div className="resize-handle top-right" onPointerDown={(e) => { if (e.button === 0) { e.stopPropagation(); selectElement(element.id, e.shiftKey); } }} />,
                bottomLeft: <div className="resize-handle bottom-left" onPointerDown={(e) => { if (e.button === 0) { e.stopPropagation(); selectElement(element.id, e.shiftKey); } }} />,
                bottomRight: <div className="resize-handle bottom-right" onPointerDown={(e) => { if (e.button === 0) { e.stopPropagation(); selectElement(element.id, e.shiftKey); } }} />,
                top: <div className="resize-handle top" onPointerDown={(e) => { if (e.button === 0) { e.stopPropagation(); selectElement(element.id, e.shiftKey); } }} />,
                bottom: <div className="resize-handle bottom" onPointerDown={(e) => { if (e.button === 0) { e.stopPropagation(); selectElement(element.id, e.shiftKey); } }} />,
                left: <div className="resize-handle left" onPointerDown={(e) => { if (e.button === 0) { e.stopPropagation(); selectElement(element.id, e.shiftKey); } }} />,
                right: <div className="resize-handle right" onPointerDown={(e) => { if (e.button === 0) { e.stopPropagation(); selectElement(element.id, e.shiftKey); } }} />
            }}
            handleStyles={{
                topLeft: { width: 10, height: 10, background: 'var(--accent-9)', borderRadius: '50%', left: -5, top: -5, zIndex: isSelected ? 1001 : 10, opacity: isSelected ? 1 : 0 },
                topRight: { width: 10, height: 10, background: 'var(--accent-9)', borderRadius: '50%', right: -5, top: -5, zIndex: isSelected ? 1001 : 10, opacity: isSelected ? 1 : 0 },
                bottomLeft: { width: 10, height: 10, background: 'var(--accent-9)', borderRadius: '50%', left: -5, bottom: -5, zIndex: isSelected ? 1001 : 10, opacity: isSelected ? 1 : 0 },
                bottomRight: { width: 10, height: 10, background: 'var(--accent-9)', borderRadius: '50%', right: -5, bottom: -5, zIndex: isSelected ? 1001 : 10, opacity: isSelected ? 1 : 0 },
                top: { height: 6, top: -3, zIndex: isSelected ? 1000 : 9, opacity: isSelected ? 1 : 0 },
                bottom: { height: 6, bottom: -3, zIndex: isSelected ? 1000 : 9, opacity: isSelected ? 1 : 0 },
                left: { width: 6, left: -3, zIndex: isSelected ? 1000 : 9, opacity: isSelected ? 1 : 0 },
                right: { width: 6, right: -3, zIndex: isSelected ? 1000 : 9, opacity: isSelected ? 1 : 0 }
            }}
            style={{
                position: 'absolute',
                transform: `translate(${element.x ?? 0}px, ${element.y ?? 0}px) rotate(${element.rotation || 0}deg)`,
                height: element.autoGrow ? 'auto' : undefined,
                display: (isHidden && !isSelected) ? 'none' : undefined,
                opacity: (isHidden && isSelected) ? 0.4 : 1,
                zIndex: isSelected ? 1000 : undefined,
                // Removed outline to avoid double borders with inner content
                outline: 'none',
                overflow: 'visible'
            }}
            enable={!element.autoGrow ? undefined : {
                top: false, right: true, bottom: false, left: true,
                topRight: false, bottomRight: true, bottomLeft: false, topLeft: false
            }}
            lockAspectRatio={keepAspectRef.current}
            grid={state.gridSize > 0 ? [state.gridSize, state.gridSize] : undefined}
        >
            <ElementContextMenu element={element}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Box
                        ref={contentRef}
                        style={{
                            ...commonStyles,
                            // Override for text-container horizontal expansion
                            whiteSpace: (element.type === 'text-container' && element.autoGrow && element.containerExpansion === 'horizontal')
                                ? 'nowrap'
                                : commonStyles.whiteSpace,
                            width: (element.type === 'text-container' && element.autoGrow && element.containerExpansion === 'horizontal')
                                ? 'max-content'
                                : '100%',
                            height: (element.type === 'text-container' && element.autoGrow && element.containerExpansion === 'vertical')
                                ? 'auto'
                                : '100%'
                        }}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onMouseDown={(e) => {
                            // Prevent mousedown from bubbling to canvas and deselecting
                            if (e.button === 0) e.stopPropagation();
                        }}
                        onClick={handleClick}
                        title={element.name}
                        onMouseEnter={(e) => {
                            if (!isSelected) e.currentTarget.style.borderColor = 'var(--gray-6)';
                        }}
                        onMouseLeave={(e) => {
                            if (!isSelected) e.currentTarget.style.borderColor = 'transparent';
                        }}
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            e.dataTransfer.dropEffect = 'copy';
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const propName = e.dataTransfer.getData('application/x-editor-prop');
                            if (propName) {
                                if (element.type === 'text' || element.type === 'text-container') {
                                    // Append variable to existing content
                                    const newContent = element.content ? `${element.content} {{${propName}}}` : `{{${propName}}}`;
                                    updateElement(element.id, {
                                        content: newContent,
                                        dataBinding: propName // Also set primary binding property
                                    });
                                } else if (element.type === 'image') {
                                    // For image, bind to source
                                    updateElement(element.id, {
                                        dataBinding: propName,
                                        content: `{{${propName}}}`
                                    });
                                } else if (element.type === 'checkbox') {
                                    updateElement(element.id, {
                                        dataBinding: propName
                                    });
                                }
                            }
                        }}
                    >
                        {element.type === 'text' && (
                            <Text style={{ width: '100%', height: '100%' }}>{displayContent}</Text>
                        )}
                        {element.type === 'text-container' && (
                            <Text style={{
                                width: '100%',
                                height: '100%',
                                display: 'block'
                            }}>
                                {displayContent}
                            </Text>
                        )}
                        {element.type === 'image' && (
                            displayContent ? (
                                <img
                                    src={displayContent}
                                    alt="Element"
                                    style={{ width: '100%', height: '100%', objectFit: (element.style?.objectFit as React.CSSProperties['objectFit']) || 'cover', display: 'block', pointerEvents: 'none' }}
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
                            className="rotate-handle"
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
                            onPointerDown={(e) => e.stopPropagation()}
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
