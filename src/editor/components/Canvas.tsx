import { Box, Flex, Text } from '@radix-ui/themes';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { IElement } from '../context';
import { useEditor } from '../context';
import { DraggableElement } from './DraggableElement';
import { SmartGuides } from './SmartGuides';

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
    const lastReportedSelection = useRef<string[]>([]);

    // State Ref for Event Listeners (Must be declared before handlers)
    const stateRef = useRef(state);
    const lastUpdateRef = useRef(0);

    // Update stateRef whenever state changes
    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    const handlePointerMove = useCallback((e: PointerEvent) => {
        if (!canvasRef.current) return;

        const currentState = stateRef.current;

        if (isPanning.current) {
            const dx = e.clientX - panStart.current.x;
            const dy = e.clientY - panStart.current.y;
            setPan({ x: currentState.pan.x + dx, y: currentState.pan.y + dy });
            panStart.current = { x: e.clientX, y: e.clientY };
            return;
        }

        if (!isSelecting.current) return;

        const rect = canvasRef.current.getBoundingClientRect();

        const canvasX = (e.clientX - rect.left - currentState.pan.x) / currentState.zoom;
        const canvasY = (e.clientY - rect.top - currentState.pan.y) / currentState.zoom;

        const x = Math.min(startPos.current.x, canvasX);
        const y = Math.min(startPos.current.y, canvasY);
        const width = Math.abs(canvasX - startPos.current.x);
        const height = Math.abs(canvasY - startPos.current.y);

        setSelectionBox({ x, y, width, height });

        // Throttle selection updates to 50ms to prevent render blocking
        const now = Date.now();
        if (now - lastUpdateRef.current < 50) return;

        // Only select if box has some size
        if (width > 0 || height > 0) {
            const intersectingIds: string[] = [];
            currentState.elements.forEach(el => {
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

            // Optimization: Only update if selection changed
            const prev = lastReportedSelection.current;
            const isSame = prev.length === newSelection.length && prev.every(id => newSelection.includes(id));

            if (!isSame) {
                setSelectedElements(newSelection);
                lastReportedSelection.current = newSelection;
                lastUpdateRef.current = now;
            }
        }
    }, [setSelectedElements, setPan]);

    const handlePointerUp = useCallback((e: PointerEvent) => {
        if (isSelecting.current || isPanning.current) {
            (e.target as Element).releasePointerCapture(e.pointerId);
        }
        isSelecting.current = false;
        isPanning.current = false;
        setSelectionBox(null);
    }, []);

    const handlePointerDown = (e: React.PointerEvent) => {
        // Ignore Right Click (Context Menu)
        if (e.button === 2) return;

        // Ignore Resize/Rotate Handles (in case propagation wasn't stopped)
        const target = e.target as HTMLElement;
        if (target.closest('.resize-handle') || target.closest('.rotate-handle')) return;

        // We rely on elements calling stopPropagation(). 
        // If the event reaches here, it means we clicked on the empty canvas/background.

        // Capture pointer to ensure we receive all move/up events even if cursor leaves the element
        (e.currentTarget as Element).setPointerCapture(e.pointerId);

        // Middle mouse or Space+Click -> Pan
        // Also enable Pan for Touch input (mobile)
        if (e.button === 1 || (e.button === 0 && isSpacePressed.current) || e.pointerType === 'touch') {
            e.preventDefault();
            isPanning.current = true;
            panStart.current = { x: e.clientX, y: e.clientY };
            return;
        }

        // Only enable selection box if Shift is pressed
        isSelecting.current = e.shiftKey;

        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;

        // Calculate Canvas Coordinates
        const offsetX = rect.left;
        const offsetY = rect.top;

        const canvasX = (e.clientX - offsetX - state.pan.x) / state.zoom;
        const canvasY = (e.clientY - offsetY - state.pan.y) / state.zoom;

        startPos.current = { x: canvasX, y: canvasY };
        initialSelection.current = state.selectedElementIds;
        lastReportedSelection.current = state.selectedElementIds;

        if (!e.shiftKey) {
            selectElement(null);
            initialSelection.current = [];
            lastReportedSelection.current = [];
        }
    };



    // Handle Wheel Zoom and Pan (Native Listener for passive: false)
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            const currentState = stateRef.current;

            if (e.ctrlKey || e.metaKey) {
                const zoomSensitivity = 0.001;
                const newZoom = Math.min(Math.max(0.1, currentState.zoom - e.deltaY * zoomSensitivity), 5);
                setZoom(newZoom);
            } else {
                const panSensitivity = 1;
                const dx = e.shiftKey ? e.deltaY : e.deltaX;
                const dy = e.shiftKey ? e.deltaX : e.deltaY;

                setPan({
                    x: currentState.pan.x - dx * panSensitivity,
                    y: currentState.pan.y - dy * panSensitivity
                });
            }
        };

        const canvasEl = canvasRef.current;
        if (canvasEl) {
            canvasEl.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (canvasEl) {
                canvasEl.removeEventListener('wheel', handleWheel);
            }
        };
    }, [setZoom, setPan]);

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

                        // Boundary check: Prevent left < 0
                        x = Math.max(0, x);

                        if (state.isList) {
                            y = Math.max(0, y);
                            const elHeight = el.height ?? 100;
                            const canvasHeight = state.canvasHeight || 150;
                            if (canvasHeight > 0) {
                                y = Math.min(y, canvasHeight - elHeight);
                            }
                            y = Math.max(0, y);
                        }

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
        };
    }, [undo, redo, copy, paste, removeSelected, updateElements, state.selectedElementIds, state.elements]);

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

        const rect = e.currentTarget.getBoundingClientRect();
        // Calculate world coordinates
        const x = (e.clientX - rect.left - state.pan.x) / state.zoom;
        const y = (e.clientY - rect.top - state.pan.y) / state.zoom;

        const propName = e.dataTransfer.getData('application/x-editor-prop');
        if (propName) {
            addElement({
                type: 'text',
                content: `{{${propName}}}`,
                x: x,
                y: y,
                width: 150,
                height: 30,
                dataBinding: propName
            });
            return;
        }

        const assetJson = e.dataTransfer.getData('application/x-editor-asset');
        if (assetJson) {
            try {
                const asset = JSON.parse(assetJson);
                addElement({
                    type: 'image',
                    name: asset.name,
                    content: asset.url,
                    x: x,
                    y: y,
                    width: asset.width || 200,
                    height: asset.height || 200
                });
            } catch (err) {
                console.error("Failed to parse asset", err);
            }
        }
    };

    const canvasHeight = state.canvasHeight || 150;

    return (
        <Box
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={(e) => {
                if (isSelecting.current || isPanning.current) {
                    handlePointerMove(e.nativeEvent);
                }
            }}
            onPointerUp={(e) => {
                if (isSelecting.current || isPanning.current) {
                    handlePointerUp(e.nativeEvent);
                }
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--gray-1)',
                cursor: isPanning.current ? 'grabbing' : 'default',
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


                {/* Top Boundary Indicator */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    borderTop: '1px dashed var(--accent-9)',
                    opacity: 0.6,
                    zIndex: 5,
                    pointerEvents: 'none'
                }}>
                    <span style={{
                        position: 'absolute',
                        top: -16,
                        left: 4,
                        fontSize: '10px',
                        color: 'var(--accent-9)',
                        fontWeight: 500
                    }}>Início (0px)</span>
                </div>

                {state.elements.filter(el => !el.hidden).map((el) => (
                    <div key={el.id} style={{ pointerEvents: 'auto' }}>
                        <DraggableElement
                            element={el}
                            isSelected={state.selectedElementIds.includes(el.id)}
                        />
                    </div>
                ))}

                <SmartGuides />

                {/* Selection Box - Rendered LAST to be on top */}
                {selectionBox && (
                    <div
                        style={{
                            position: 'absolute',
                            left: selectionBox.x,
                            top: selectionBox.y,
                            width: selectionBox.width,
                            height: selectionBox.height,
                            backgroundColor: 'rgba(0, 120, 255, 0.2)',
                            border: '1px solid rgba(0, 120, 255, 0.8)',
                            pointerEvents: 'none',
                            zIndex: 999999
                        }}
                    />
                )}

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
                        }}
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

            </div>

            {state.elements.length === 0 && (
                <Flex
                    align="center"
                    justify="center"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none'
                    }}
                >
                    <Box style={{ backgroundColor: 'var(--gray-2)', border: '1px solid var(--gray-4)', borderRadius: 12, padding: 16, maxWidth: 320, textAlign: 'center', boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }}>
                        <Text size="3" weight="bold">Comece adicionando um elemento</Text>
                        <Text size="2" color="gray" as="div" mt="2">Depois, arraste para mover e use os cantos para redimensionar.</Text>
                        <Text size="1" color="gray" as="div" mt="2">Dica: clique com o botão direito para mais opções.</Text>
                    </Box>
                </Flex>
            )}

            {/* Interaction Blocker - Prevents hover/click on elements during selection */}
            {selectionBox && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 999995,
                        pointerEvents: 'auto' // Capture all pointer events
                    }}
                />
            )}

        </Box>
    );
};
