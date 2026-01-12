import React from 'react';
import { useEditor } from '../context';
import { Flex, Box, Text } from '@radix-ui/themes';
import { DraggableElement } from './DraggableElement';

interface CanvasProps {
    // Props se necessário
}

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
                <DraggableElement
                    key={el.id}
                    element={el}
                    isSelected={state.selectedElementId === el.id}
                />
            ))}
        </Box>
    );
};
