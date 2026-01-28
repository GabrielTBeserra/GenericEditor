import { Box, Flex, Text } from '@radix-ui/themes';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { IElement } from '../context';
import { useEditor } from '../context';
import { DraggableElement } from './DraggableElement';

interface CanvasProps {
    // Props se necessário
}

export const Canvas: React.FC<CanvasProps> = () => {
    const {
        state,
        selectElement,
        setSelectedElements,
        addElement,
        setZoom,
        setPan,
        undo,
        redo,
        copy,
        paste,
        removeSelected,
        updateElements
    } = useEditor();
    const canvasRef = useRef<HTMLDivElement>(null);
    const [selectionBox, setSelectionBox] = useState<{ x: number, y: number, width: number, height: number } | null>(null);

    // Refs for selection logic
    const isSelecting = useRef(false);
    const isPanning = useRef(false);
    const isSpacePressed = useRef(false);
    const startPos = useRef({ x: 0, y: 0 });
    const panStart = useRef({ x: 0, y: 0 });
    const initialSelection = useRef<string[]>([]);

    const handleMouseDown = (e: React.MouseEvent) => {
        // We rely on elements calling stopPropagation(). 
        // If the event reaches here, it means we clicked on the empty canvas/background.

        // Middle mouse or Space+Click -> Pan
        if (e.button === 1 || (e.button === 0 && isSpacePressed.current)) {
            e.preventDefault();
            isPanning.current = true;
            panStart.current = { x: e.clientX, y: e.clientY };
            return;
        }

        isSelecting.current = true;
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;

        // Calculate Canvas Coordinates
        const offsetX = rect.left;
        const offsetY = rect.top;

        const canvasX = (e.clientX - offsetX - state.pan.x) / state.zoom;
        const canvasY = (e.clientY - offsetY - state.pan.y) / state.zoom;

        startPos.current = { x: canvasX, y: canvasY };
        initialSelection.current = state.selectedElementIds;

        if (!e.shiftKey) {
            selectElement(null);
            initialSelection.current = [];
        }

        window.addEventListener('mousemove', handleWindowMouseMove);
        window.addEventListener('mouseup', handleWindowMouseUp);
    };

    const handleWindowMouseMove = useCallback((e: MouseEvent) => {
        if (!canvasRef.current) return;

        if (isPanning.current) {
            const dx = e.clientX - panStart.current.x;
            const dy = e.clientY - panStart.current.y;
            setPan({ x: state.pan.x + dx, y: state.pan.y + dy });
            panStart.current = { x: e.clientX, y: e.clientY };
            return;
        }

        if (!isSelecting.current) return;

        const rect = canvasRef.current.getBoundingClientRect();

        const canvasX = (e.clientX - rect.left - state.pan.x) / state.zoom;
        const canvasY = (e.clientY - rect.top - state.pan.y) / state.zoom;

        const x = Math.min(startPos.current.x, canvasX);
        const y = Math.min(startPos.current.y, canvasY);
        const width = Math.abs(canvasX - startPos.current.x);
        const height = Math.abs(canvasY - startPos.current.y);

        setSelectionBox({ x, y, width, height });

        // Only select if box has some size to avoid accidental selection on simple click
        if (width > 2 || height > 2) {
            const intersectingIds: string[] = [];
            state.elements.forEach(el => {
                const elX = el.x ?? 0;
                const elY = el.y ?? 0;
                const elWidth = el.width ?? 100;
                const elHeight = el.height ?? 100;

                const elRight = elX + elWidth;
                const elBottom = elY + elHeight;
                const selRight = x + width;
                const selBottom = y + height;

                if (elX < selRight && elRight > x && elY < selBottom && elBottom > y) {
                    intersectingIds.push(el.id);
                }
            });

            // Merge with initial selection if Shift is held
            const newSelection = Array.from(new Set([...initialSelection.current, ...intersectingIds]));
            setSelectedElements(newSelection);
        }
    }, [state.elements, state.pan, state.zoom, setSelectedElements, setPan]);

    const handleWindowMouseUp = useCallback(() => {
        isSelecting.current = false;
        isPanning.current = false;
        setSelectionBox(null);
        window.removeEventListener('mousemove', handleWindowMouseMove);
        window.removeEventListener('mouseup', handleWindowMouseUp);
    }, [handleWindowMouseMove]);

    // Handle Wheel Zoom and Pan
    const handleWheel = (e: React.WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const zoomSensitivity = 0.001;
            const newZoom = Math.min(Math.max(0.1, state.zoom - e.deltaY * zoomSensitivity), 5);
            setZoom(newZoom);
        } else {
            // Regular scroll -> Pan
            // Shift + Wheel -> Horizontal Pan
            // Wheel -> Vertical Pan
            // Note: deltaMode can vary (pixel, line, page). Assuming pixel for simplicity or low values.
            const panSensitivity = 1;
            const dx = e.shiftKey ? e.deltaY : e.deltaX;
            const dy = e.shiftKey ? e.deltaX : e.deltaY;

            setPan({
                x: state.pan.x - dx * panSensitivity,
                y: state.pan.y - dy * panSensitivity
            });
        }
    };

    // Handle Global Hotkeys
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Track Space
            if (e.code === 'Space' && !e.repeat && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
                isSpacePressed.current = true;
                // Change cursor to grab? We need state for that to re-render.
                if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
            }

            // Ignore if input is focused (for other shortcuts)
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

            // Undo/Redo
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
                e.preventDefault();
                if (e.shiftKey) {
                    redo();
                } else {
                    undo();
                }
            }
            // Redo (Ctrl+Y)
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
                e.preventDefault();
                redo();
            }
            // Copy
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
                e.preventDefault();
                copy();
            }
            // Paste
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'v') {
                e.preventDefault();
                paste();
            }
            // Delete
            if (e.key === 'Delete' || e.key === 'Backspace') {
                // Prevent Backspace from navigating back
                e.preventDefault();
                removeSelected();
            }
            // Arrow Keys (Nudge)
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
                const step = e.shiftKey ? 10 : 1;
                // Batch update? updateElements takes array.
                const updates: { id: string, changes: Partial<IElement> }[] = [];
                state.selectedElementIds.forEach(id => {
                    const el = state.elements.find(el => el.id === id);
                    if (el) {
                        let { x = 0, y = 0 } = el;
                        if (e.key === 'ArrowUp') y -= step;
                        if (e.key === 'ArrowDown') y += step;
                        if (e.key === 'ArrowLeft') x -= step;
                        if (e.key === 'ArrowRight') x += step;
                        updates.push({ id, changes: { x, y } });
                    }
                });
                if (updates.length > 0) {
                    updateElements(updates);
                }
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                isSpacePressed.current = false;
                if (canvasRef.current && !isPanning.current) canvasRef.current.style.cursor = 'default';
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('mousemove', handleWindowMouseMove);
            window.removeEventListener('mouseup', handleWindowMouseUp);
        };
    }, [undo, redo, copy, paste, removeSelected, updateElements, state.selectedElementIds, state.elements, handleWindowMouseMove, handleWindowMouseUp]);

    // Canvas Resize Logic
    const isResizingCanvas = useRef(false);
    const { setCanvasHeight } = useEditor();

    const handleCanvasResizeStart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        isResizingCanvas.current = true;

        window.addEventListener('mousemove', handleCanvasResizeMove);
        window.addEventListener('mouseup', handleCanvasResizeEnd);
    };

    const handleCanvasResizeMove = useCallback((e: MouseEvent) => {
        if (!isResizingCanvas.current || !canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const newHeight = e.clientY - rect.top;

        // Minimum height 50px, Max height 2000px (or reasonable limit)
        const constrainedHeight = Math.max(50, Math.min(newHeight, 2000));

        setCanvasHeight(Math.round(constrainedHeight));
    }, [setCanvasHeight]);

    const handleCanvasResizeEnd = useCallback(() => {
        isResizingCanvas.current = false;
        window.removeEventListener('mousemove', handleCanvasResizeMove);
        window.removeEventListener('mouseup', handleCanvasResizeEnd);
    }, [handleCanvasResizeMove]);

    useEffect(() => {
        return () => {
            window.removeEventListener('mousemove', handleCanvasResizeMove);
            window.removeEventListener('mouseup', handleCanvasResizeEnd);
        };
    }, [handleCanvasResizeMove, handleCanvasResizeEnd]);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const propName = e.dataTransfer.getData('application/x-editor-prop');
        if (propName) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            addElement({
                type: 'text',
                content: `{{${propName}}}`,
                x: x,
                y: y,
                width: 150,
                height: 30,
                dataBinding: propName
            });
        }
    };

    const canvasHeight = state.canvasHeight || 150;

    return (
        <Box
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onWheel={handleWheel}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--color-background)',
                cursor: isPanning.current ? 'grabbing' : 'default',
                // Infinite Grid Background
                backgroundImage: 'radial-gradient(var(--gray-5) 1px, transparent 1px)',
                backgroundSize: `${20 * state.zoom}px ${20 * state.zoom}px`,
                backgroundPosition: `${state.pan.x}px ${state.pan.y}px`
            }}
        >
            {/* Viewport Container that applies Zoom and Pan */}
            <div
                style={{
                    transform: `translate(${state.pan.x}px, ${state.pan.y}px) scale(${state.zoom})`,
                    transformOrigin: '0 0',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none' // Let clicks pass through to background unless hitting a child with pointer-events: auto
                }}
            >
                {/* Elements Container - Needs pointer events */}
                <div style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, pointerEvents: 'auto' }}>
                    {/* Placeholder for pointer events handling if needed, 
                         but actually we want clicks on empty space to bubble to Box. 
                         If this div has pointerEvents auto, it captures clicks.
                         So we should actually remove pointerEvents auto from here OR 
                         ensure this div propagates events to the Box.
                         
                         Actually, standard DOM bubbling:
                         Box -> Div(Transform) -> Div(Elements) -> Element
                         
                         If we click Element: Element handles it, stops prop.
                         If we click Empty Space:
                           Div(Elements) receives click. Bubbles to Div(Transform). Bubbles to Box.
                           Box handleMouseDown fires.
                           
                         So we don't need pointerEvents: none on the container.
                         We just need to ensure the grid isn't blocking.
                         We moved grid to Box background.
                         
                         Wait, if Div(Transform) is 100% width/height, does it cover the whole visible area?
                         Yes.
                         Does it cover "infinite" area?
                         No, only 100% of viewport.
                         But that's fine, we only click inside viewport.
                         
                         So we just need to remove the old grid div.
                      */}
                </div>

                {selectionBox && (
                    <div
                        style={{
                            position: 'absolute',
                            left: selectionBox.x,
                            top: selectionBox.y,
                            width: selectionBox.width,
                            height: selectionBox.height,
                            backgroundColor: 'rgba(0, 120, 255, 0.1)',
                            border: '1px solid rgba(0, 120, 255, 0.5)',
                            pointerEvents: 'none',
                            zIndex: 9999
                        }}
                    />
                )}

                {/* Snap Lines */}
                {state.snapLines.map((line, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: line.orientation === 'vertical' ? line.position : 0,
                            top: line.orientation === 'horizontal' ? line.position : 0,
                            width: line.orientation === 'vertical' ? '1px' : '100%',
                            height: line.orientation === 'horizontal' ? '1px' : '100%',
                            backgroundColor: 'red',
                            zIndex: 9999,
                            pointerEvents: 'none'
                        }}
                    />
                ))}

                {state.isList && (
                    <div
                        style={{
                            position: 'absolute',
                            top: canvasHeight,
                            left: 0,
                            right: 0,
                            height: '10px', // Invisible hit area
                            marginTop: '-5px', // Center the hit area on the line
                            cursor: 'ns-resize',
                            zIndex: 100,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            group: 'resize-handle'
                        } as any}
                        onMouseDown={handleCanvasResizeStart}
                    >
                        {/* Visual Line */}
                        <div style={{
                            width: '100%',
                            height: '2px',
                            backgroundColor: 'var(--accent-9)',
                            borderBottom: 'none',
                            opacity: 0.8,
                            boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
                        }} />

                        <div style={{
                            position: 'absolute',
                            right: 10,
                            top: -20,
                            backgroundColor: 'var(--accent-9)',
                            color: 'white',
                            fontSize: '11px',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            fontWeight: 500,
                            pointerEvents: 'none',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}>
                            Altura do Item: {canvasHeight}px
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
                            pointerEvents: 'none',
                            transform: `scale(${1 / state.zoom})` // Keep text readable
                        }}
                    >
                        <Text>Adicione elementos e arraste livremente</Text>
                    </Flex>
                )}

                {state.elements.map((el) => (
                    <div key={el.id} style={{ pointerEvents: 'auto' }}>
                        <DraggableElement
                            element={el}
                            isSelected={state.selectedElementIds.includes(el.id)}
                        />
                    </div>
                ))}
            </div>

            {/* Zoom Controls Overlay */}
            <div style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                display: 'flex',
                gap: '8px',
                backgroundColor: 'var(--color-panel-solid)',
                padding: '4px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 1000
            }}>
                <button onClick={() => setZoom(Math.max(0.1, state.zoom - 0.1))} style={{ padding: '4px 8px', cursor: 'pointer' }}>-</button>
                <span style={{ padding: '4px 8px', minWidth: '50px', textAlign: 'center' }}>{Math.round(state.zoom * 100)}%</span>
                <button onClick={() => setZoom(Math.min(5, state.zoom + 0.1))} style={{ padding: '4px 8px', cursor: 'pointer' }}>+</button>
                <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} style={{ padding: '4px 8px', cursor: 'pointer' }}>Reset</button>
            </div>
        </Box>
    );
};
