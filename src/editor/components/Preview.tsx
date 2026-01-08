import React from 'react';
import { useEditor, IElement } from '../context';
import { Flex, Box, Text, ScrollArea } from '@radix-ui/themes';

const PreviewElementRenderer: React.FC<{ element: IElement; offsetY?: number }> = ({ element, offsetY = 0 }) => {
    const commonStyles: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: `${element.width}px`,
        height: `${element.height}px`,
        transform: `translate(${element.x}px, ${element.y + offsetY}px)`,
        padding: element.type === 'image' ? 0 : '8px',
        overflow: 'hidden',
        ...element.style
    };

    return (
        <Box style={commonStyles}>
            {element.type === 'text' && (
                <Text>{element.content}</Text>
            )}
            
            {element.type === 'image' && (
                element.content ? (
                    <img 
                        src={element.content} 
                        alt="Element" 
                        style={{ width: '100%', height: '100%', objectFit: (element.style.objectFit as any) || 'cover', display: 'block' }} 
                    />
                ) : (
                    <Box style={{ width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Text size="1">Imagem</Text>
                    </Box>
                )
            )}
            
            {element.type === 'box' && (
                <Box style={{ width: '100%', height: '100%' }} />
            )}
        </Box>
    );
};

export const Preview: React.FC = () => {
    const { state } = useEditor();

    // Calculate item height for list mode
    const itemHeight = React.useMemo(() => {
        if (state.elements.length === 0) return 0;
        const maxY = Math.max(...state.elements.map(el => el.y + el.height));
        return maxY + 20; // 20px gap
    }, [state.elements]);

    const renderContent = () => {
        if (state.elements.length === 0) {
            return (
                <Flex align="center" justify="center" style={{ height: '100%' }}>
                    <Text color="gray">Preview vazio</Text>
                </Flex>
            );
        }

        if (state.isList) {
            // Render 3 items to simulate a list
            return Array.from({ length: 3 }).map((_, index) => (
                <React.Fragment key={index}>
                    {state.elements.map((el) => (
                        <PreviewElementRenderer 
                            key={`${el.id}-${index}`} 
                            element={el} 
                            offsetY={index * itemHeight} 
                        />
                    ))}
                </React.Fragment>
            ));
        }

        return state.elements.map((el) => (
            <PreviewElementRenderer key={el.id} element={el} />
        ));
    };

    return (
        <Box 
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'white'
            }}
        >
            <ScrollArea type="auto" scrollbars="vertical" style={{ height: '100%', width: '100%' }}>
                 <Box style={{ position: 'relative', minHeight: '100%', width: '100%' }}>
                    {renderContent()}
                 </Box>
            </ScrollArea>
        </Box>
    );
};
