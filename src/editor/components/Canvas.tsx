import { Box, Flex, Text } from '@radix-ui/themes';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useEditor } from '../context';
import { DraggableElement } from './DraggableElement';

interface CanvasProps {
    // Props se necessário
}

export const Canvas: React.FC<CanvasProps> = () => {
    const { state, selectElement, setSelectedElements, addElement } = useEditor();
    const canvasRef = useRef<HTMLDivElement>(null);
    const [selectionBox, setSelectionBox] = useState<{ x: number, y: number, width: number, height: number } | null>(null);

    // Refs for selection logic
    const isSelecting = useRef(false);
    const startPos = useRef({ x: 0, y: 0 });
    const initialSelection = useRef<string[]>([]);

    const handleMouseDown = (e: React.MouseEvent) => {
        // Only start selection if clicking on the canvas background directly
        if (e.target !== canvasRef.current && e.target !== e.currentTarget) return;

        isSelecting.current = true;
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        startPos.current = { x, y };
        initialSelection.current = state.selectedElementIds;

        if (!e.shiftKey) {
            selectElement(null);
            initialSelection.current = [];
        }

        window.addEventListener('mousemove', handleWindowMouseMove);
        window.addEventListener('mouseup', handleWindowMouseUp);
    };

    const handleWindowMouseMove = useCallback((e: MouseEvent) => {
        if (!isSelecting.current || !canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;

        const x = Math.min(startPos.current.x, currentX);
        const y = Math.min(startPos.current.y, currentY);
        const width = Math.abs(currentX - startPos.current.x);
        const height = Math.abs(currentY - startPos.current.y);

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

            // Merge with initial selection if Shift is held (or just use what's in box + initial)
            // If shift was held, initialSelection contains what was selected before.
            // Logic: Union(initialSelection, intersectingIds)
            const newSelection = Array.from(new Set([...initialSelection.current, ...intersectingIds]));
            setSelectedElements(newSelection);
        }
    }, [state.elements, setSelectedElements]); // Dependencies for callback

    const handleWindowMouseUp = useCallback(() => {
        isSelecting.current = false;
        setSelectionBox(null);
        window.removeEventListener('mousemove', handleWindowMouseMove);
        window.removeEventListener('mouseup', handleWindowMouseUp);
    }, [handleWindowMouseMove]);

    // Ensure listeners are cleaned up
    useEffect(() => {
        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
            window.removeEventListener('mouseup', handleWindowMouseUp);
        };
    }, [handleWindowMouseMove, handleWindowMouseUp]);

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
                <DraggableElement
                    key={el.id}
                    element={el}
                    isSelected={state.selectedElementIds.includes(el.id)}
                />
            ))}
        </Box>
    );
};
