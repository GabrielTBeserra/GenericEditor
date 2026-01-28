import { PlayIcon, StopIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, ScrollArea, Text } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useEditor, type IElement, type IElementAnimation } from '../context';
import { formatValue } from '../utils/helpers';

const getAnimationVariants = (anim?: IElementAnimation) => {
    if (!anim || anim.type === 'none') return {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 }
    };

    const variants: any = { initial: {}, animate: {} };

    switch (anim.type) {
        case 'fadeIn':
            variants.initial = { opacity: 0 };
            variants.animate = { opacity: 1 };
            break;
        case 'slideInLeft':
            variants.initial = { opacity: 0, x: -100 };
            variants.animate = { opacity: 1, x: 0 };
            break;
        case 'slideInRight':
            variants.initial = { opacity: 0, x: 100 };
            variants.animate = { opacity: 1, x: 0 };
            break;
        case 'slideInUp':
            variants.initial = { opacity: 0, y: 100 };
            variants.animate = { opacity: 1, y: 0 };
            break;
        case 'slideInDown':
            variants.initial = { opacity: 0, y: -100 };
            variants.animate = { opacity: 1, y: 0 };
            break;
        case 'zoomIn':
            variants.initial = { opacity: 0, scale: 0.5 };
            variants.animate = { opacity: 1, scale: 1 };
            break;
        case 'bounceIn':
            variants.initial = { opacity: 0, scale: 0.3 };
            variants.animate = { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.6 } };
            break;
        case 'pulse':
            variants.animate = { scale: [1, 1.05, 1], transition: { repeat: Infinity } };
            break;
        default:
            variants.initial = { opacity: 0, y: 20 };
            variants.animate = { opacity: 1, y: 0 };
    }
    return variants;
};

const PreviewElementRenderer: React.FC<{ element: IElement; offsetY?: number; dataContext?: any }> = ({ element, offsetY = 0, dataContext }) => {
    // Resolve content based on data binding
    let content = element.content;
    if (dataContext) {
        if (element.type === 'text' || element.type === 'text-container') {
            content = content.replace(/\{\{(.*?)\}\}/g, (match, key) => {
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
        width: (element.type === 'text-container' && element.autoGrow && element.containerExpansion === 'horizontal') ? 'max-content' : `${element.width}px`,
        height: element.autoGrow ? 'auto' : `${element.height}px`,
        transform: `translate(${element.x}px, ${element.y + offsetY}px) rotate(${element.rotation || 0}deg)`,
        padding: (element.type === 'image' || element.type === 'text' || element.type === 'text-container') ? 0 : '8px',
        overflow: element.autoGrow ? 'visible' : 'hidden',
        whiteSpace: (element.type === 'text-container' && element.autoGrow && element.containerExpansion === 'horizontal') ? 'nowrap' : (element.autoGrow ? 'pre-wrap' : undefined),
        wordBreak: element.autoGrow ? 'break-word' : undefined,
        ...element.style
    };

    return (
        <Box style={commonStyles}>
            {(element.type === 'text' || element.type === 'text-container') && (
                <Text style={{ width: '100%', height: '100%', display: 'block' }}>{content}</Text>
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

            {element.type === 'checkbox' && (
                <Box style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input
                        type="checkbox"
                        checked={dataContext && element.dataBinding ? (dataContext[element.dataBinding] === true || String(dataContext[element.dataBinding]) === 'true') : false}
                        readOnly
                        style={{ width: '100%', height: '100%', margin: 0 }}
                    />
                </Box>
            )}
        </Box>
    );
};

import { processLayout } from '../utils/layoutEngine';

const ListItem: React.FC<{ item: any; elements: IElement[]; animation?: IElementAnimation }> = ({ item, elements, animation }) => {
    // Calculate layout for this specific item
    const { elements: processedElements, totalHeight } = React.useMemo(() => {
        return processLayout(elements, item);
    }, [elements, item]);

    const variants = React.useMemo(() => getAnimationVariants(animation), [animation]);

    return (
        <motion.div
            layout
            initial={variants.initial}
            animate={variants.animate}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
                duration: animation?.duration || 0.4,
                ease: (animation?.timingFunction || "easeOut") as any
            }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            style={{
                position: 'relative',
                height: totalHeight,
                width: '100%',
                marginBottom: '20px',
                transformOrigin: 'center center'
            }}
        >
            {processedElements.map((el) => (
                <PreviewElementRenderer
                    key={el.id}
                    element={el}
                    offsetY={0}
                    dataContext={item}
                />
            ))}
        </motion.div>
    )
};

export const Preview: React.FC = () => {
    const { state } = useEditor();
    const [isSimulating, setIsSimulating] = React.useState(false);
    const [simulationItems, setSimulationItems] = React.useState<any[]>([]);

    // Simulation logic
    React.useEffect(() => {
        let interval: any;
        if (isSimulating && state.isList) {
            // Initial item
            if (simulationItems.length === 0) {
                const initialItem = { id: Date.now(), ...state.mockData[0] || {} };
                setSimulationItems([initialItem]);
            }

            interval = setInterval(() => {
                setSimulationItems(prev => {
                    const nextIndex = prev.length % (state.mockData.length || 1);
                    const mockItem = state.mockData.length > 0 ? state.mockData[nextIndex] : { id: prev.length };
                    const newItem = { ...mockItem, id: `${Date.now()}-${prev.length}` }; // Ensure unique ID

                    if (state.listSettings.newestPosition === 'top') {
                        return [newItem, ...prev].slice(0, 20); // Limit to 20 items
                    } else {
                        return [...prev, newItem].slice(-20);
                    }
                });
            }, 1500);
        } else {
            setSimulationItems([]);
        }
        return () => clearInterval(interval);
    }, [isSimulating, state.isList, state.listSettings.newestPosition, state.mockData]);



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
            let listData: any[] = [];

            if (isSimulating) {
                listData = simulationItems;
            } else {
                listData = state.mockData.length > 0 ? state.mockData : Array.from({ length: 10 }).map((_, i) => ({ id: i }));

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

                // Handle newest position
                if (state.listSettings.newestPosition === 'top') {
                    listData = [...listData].reverse();
                }
            }

            return (
                <Flex
                    direction="column"
                    justify={state.listSettings.newestPosition === 'top' ? 'start' : 'end'}
                    p="4"
                    style={{ width: '100%', minHeight: '100%' }}
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {listData.map((item, index) => (
                            <ListItem
                                key={item.id || index}
                                item={item}
                                elements={state.elements}
                                animation={state.listSettings.entryAnimation}
                            />
                        ))}
                    </AnimatePresence>
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
            {state.isList && (
                <Box style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    zIndex: 100,
                    backgroundColor: 'var(--color-surface)',
                    padding: '4px',
                    borderRadius: 'var(--radius-3)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <Button
                        size="1"
                        variant={isSimulating ? "soft" : "solid"}
                        color={isSimulating ? "red" : "green"}
                        onClick={() => setIsSimulating(!isSimulating)}
                    >
                        {isSimulating ? <StopIcon /> : <PlayIcon />}
                        {isSimulating ? "Parar Simulação" : "Simular Entrada"}
                    </Button>
                </Box>
            )}

            <ScrollArea type="auto" scrollbars="vertical" style={{ height: '100%', width: '100%' }}>
                <Box style={{ position: 'relative', minHeight: '100%', width: '100%' }}>
                    {renderContent()}
                </Box>
            </ScrollArea>
        </Box>
    );
};
