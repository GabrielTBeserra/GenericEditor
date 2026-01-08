import React, { useRef, useState, useEffect } from 'react';
import { useEditor, type IElement } from '../context';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Resizable } from 're-resizable';
import { ElementContextMenu } from './ElementContextMenu';

interface CanvasProps {
    // Props se necessário
}

const DraggableResizableElement: React.FC<{ element: IElement; isSelected: boolean }> = ({ element, isSelected }) => {
    const { selectElement, updateElement, state } = useEditor();
    const [isDragging, setIsDragging] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    const dragStartPos = useRef({ x: 0, y: 0 });
    const elementStartPos = useRef({ x: 0, y: 0 });
    
    // Rotation refs
    const rotateStartAngle = useRef(0);
    const elementStartRotation = useRef(0);
    const centerPos = useRef({ x: 0, y: 0 });

    // Resolve content for display in Canvas
    const dataContext = state.isList 
        ? (state.mockData.length > 0 ? state.mockData[0] : null)
        : state.singleMockData;

    let displayContent = element.content;

    if (dataContext) {
        if (element.type === 'text') {
            // Interpolation for Text: replaces {{variable}} with value
            displayContent = displayContent.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                const val = dataContext[key.trim()];
                return val !== undefined && val !== null ? String(val) : match;
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
                
                updateElement(element.id, {
                    x: elementStartPos.current.x + dx,
                    y: elementStartPos.current.y + dy
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
            className="resizable-element"
            size={{ width: element.width, height: element.height }}
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
