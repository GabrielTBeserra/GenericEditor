import React, { useRef, useState, useEffect } from 'react';
import { useEditor, IElement } from '../context';
import { Flex, Box, Text, Button } from '@radix-ui/themes';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Resizable } from 're-resizable';
import { ElementContextMenu } from './ElementContextMenu';

interface CanvasProps {
    // Props se necessário
}

const DraggableResizableElement: React.FC<{ element: IElement; isSelected: boolean }> = ({ element, isSelected }) => {
    const { selectElement, removeElement, updateElement } = useEditor();
    const [isDragging, setIsDragging] = useState(false);
    const dragStartPos = useRef({ x: 0, y: 0 });
    const elementStartPos = useRef({ x: 0, y: 0 });

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        selectElement(element.id);
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        removeElement(element.id);
    };

    // Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return; // Only left click
        e.stopPropagation(); // Prevent canvas background click
        selectElement(element.id);
        
        setIsDragging(true);
        dragStartPos.current = { x: e.clientX, y: e.clientY };
        elementStartPos.current = { x: element.x, y: element.y };
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            
            const dx = e.clientX - dragStartPos.current.x;
            const dy = e.clientY - dragStartPos.current.y;
            
            updateElement(element.id, {
                x: elementStartPos.current.x + dx,
                y: elementStartPos.current.y + dy
            });
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
            }
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, element.id, updateElement]);

    const commonStyles: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        padding: element.type === 'image' ? 0 : '8px',
        border: isSelected ? '2px solid var(--accent-9)' : '1px dashed transparent',
        outline: isSelected ? 'none' : '1px solid transparent', // Prevent double border
        cursor: isDragging ? 'grabbing' : 'grab',
        borderRadius: 'var(--radius-2)',
        overflow: 'hidden',
        userSelect: 'none',
        ...element.style
    };

    return (
        <Resizable
            size={{ width: element.width, height: element.height }}
            onResizeStop={(e, direction, ref, d) => {
                updateElement(element.id, {
                    width: element.width + d.width,
                    height: element.height + d.height,
                });
            }}
            style={{
                position: 'absolute',
                transform: `translate(${element.x}px, ${element.y}px)`,
            }}
            enable={isSelected ? undefined : false} // Only resizable when selected
        >
            <ElementContextMenu element={element}>
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
                        <Text style={{ width: '100%', height: '100%' }}>{element.content}</Text>
                    )}
                    
                    {element.type === 'image' && (
                        element.content ? (
                            <img 
                                src={element.content} 
                                alt="Element" 
                                style={{ width: '100%', height: '100%', objectFit: (element.style.objectFit as any) || 'cover', display: 'block', pointerEvents: 'none' }} 
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
            </ElementContextMenu>
        </Resizable>
    );
};

export const Canvas: React.FC<CanvasProps> = () => {
    const { state, selectElement } = useEditor();

    const handleBackgroundClick = () => {
        selectElement(null);
    };

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
