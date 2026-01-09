import React from 'react';
import { useEditor, type IElement } from '../context';
import { Flex, Box, Text, ScrollArea } from '@radix-ui/themes';
import { motion } from 'framer-motion';

const PreviewElementRenderer: React.FC<{ element: IElement; offsetY?: number; dataContext?: any }> = ({ element, offsetY = 0, dataContext }) => {
    // Resolve content based on data binding
    let content = element.content;
    if (dataContext) {
        if (element.type === 'text') {
             content = content.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                const val = dataContext[key.trim()];
                return val !== undefined && val !== null ? String(val) : match;
            });
        } else if (element.type === 'image') {
             if (element.dataBinding) {
                const val = dataContext[element.dataBinding];
                if (val !== undefined && val !== null) {
                    content = String(val);
                }
             } else {
                 content = content.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                    const val = dataContext[key.trim()];
                    return val !== undefined && val !== null ? String(val) : match;
                });
             }
        }
    }

    const commonStyles: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: `${element.width}px`,
        height: `${element.height}px`,
        transform: `translate(${element.x}px, ${element.y + offsetY}px) rotate(${element.rotation || 0}deg)`,
        padding: element.type === 'image' ? 0 : '8px',
        overflow: 'hidden',
        ...element.style
    };

    return (
        <Box style={commonStyles}>
            {element.type === 'text' && (
                <Text>{content}</Text>
            )}
            
            {element.type === 'image' && (
                content ? (
                    <img 
                        src={content} 
                        alt="Element" 
                        style={{ width: '100%', height: '100%', objectFit: (element.style?.objectFit as any) || 'cover', display: 'block' }} 
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

const ListItem: React.FC<{ children: React.ReactNode; index: number; height: number }> = ({ children, index, height }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
            duration: 0.4,
            delay: index * 0.05,
            ease: "easeOut"
        }}
        whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
        }}
        style={{
            position: 'relative',
            height: height,
            width: '100%',
            marginBottom: '20px',
            transformOrigin: 'center center'
        }}
    >
        {children}
    </motion.div>
);

export const Preview: React.FC = () => {
    const { state } = useEditor();

    // Calculate item height for list mode
    const itemHeight = React.useMemo(() => {
        if (state.elements.length === 0) return 0;
        const maxY = Math.max(...state.elements.map(el => el.y + el.height));
        return maxY; 
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
            // Determine data source
            let listData = state.mockData.length > 0 ? state.mockData : Array.from({ length: 10 }).map((_, i) => ({ id: i }));

            // Sort data if prop is set
            if (state.listSettings.sortProp) {
                const prop = state.listSettings.sortProp;
                const order = state.listSettings.sortOrder === 'asc' ? 1 : -1;
                
                listData = [...listData].sort((a, b) => {
                    const valA = a[prop];
                    const valB = b[prop];
                    if (valA < valB) return -1 * order;
                    if (valA > valB) return 1 * order;
                    return 0;
                });
            }

            return (
                <Flex 
                    direction="column" 
                    justify="end" 
                    p="4" 
                    style={{ width: '100%', minHeight: '100%' }}
                >
                    {listData.map((item, index) => (
                        <ListItem key={index} index={index} height={itemHeight}>
                            {state.elements.map((el) => (
                                <PreviewElementRenderer 
                                    key={`${el.id}-${index}`} 
                                    element={el} 
                                    offsetY={0} 
                                    dataContext={item}
                                />
                            ))}
                        </ListItem>
                    ))}
                </Flex>
            );
        }

        // Non-list mode (Single Item)
        return state.elements.map((el) => (
            <PreviewElementRenderer 
                key={el.id} 
                element={el} 
                dataContext={state.singleMockData} 
            />
        ));
    };

    return (
        <Box 
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--color-panel-solid)'
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
