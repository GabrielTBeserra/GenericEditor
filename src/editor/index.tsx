import React, { useState } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme, Flex, Box, Button, Text, Badge, DropdownMenu, ScrollArea, IconButton } from '@radix-ui/themes';
import { Group, Panel, Separator } from 'react-resizable-panels';
import { EyeOpenIcon, EyeNoneIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon, Share1Icon } from '@radix-ui/react-icons';
import type { ILayout } from './types';
import { EditorProvider, useEditor, type IElement } from './context';
import { Canvas } from './components/Canvas';
import { Preview } from './components/Preview';

interface EditorProps {
    layout: ILayout;
    initialState?: any; // To load saved state
    onSave?: (json: string) => void; // Callback for saving
    theme?: 'light' | 'dark'; // Theme configuration
}

const EditorContent: React.FC<EditorProps> = ({ layout, initialState, onSave, theme = 'light' }) => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const { addElement, loadState, state } = useEditor();

    // Load initial state if provided
    React.useEffect(() => {
        if (initialState) {
            try {
                const parsed = typeof initialState === 'string' ? JSON.parse(initialState) : initialState;
                 // Check if it's full state or just elements
                if (Array.isArray(parsed)) {
                    loadState({ elements: parsed });
                } else if (parsed.elements) {
                    loadState(parsed);
                }
            } catch (e) {
                console.error("Failed to load initial state", e);
            }
        }
    }, [initialState, loadState]);

    const handleAddElement = (type: string) => {
        console.log(`Adding element of type: ${type}`);
        addElement({ type: type as IElement['type'], content: `New ${type}` });
    };

    const handleSave = () => {
        if (onSave) {
            const stateToSave = {
                elements: state.elements,
                isList: state.isList,
                mockData: state.mockData,
                singleMockData: state.singleMockData,
                listSettings: state.listSettings
            };
            onSave(JSON.stringify(stateToSave, null, 2));
        }
    };

    return (
        <Theme appearance={theme} accentColor="blue" grayColor="slate" radius="medium" scaling="100%">
            <Flex direction="row" style={{ height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-background)' }}>
                {/* Toolbar */}
                {isSidebarVisible && (
                    <Flex 
                        direction="column"
                        width="280px" 
                        style={{ 
                            borderRight: '1px solid var(--gray-5)', 
                            backgroundColor: 'var(--gray-2)',
                            flexShrink: 0,
                            height: '100%'
                        }}
                    >
                        {/* Fixed Controls Header */}
                        <Box p="4" style={{ borderBottom: '1px solid var(--gray-5)', backgroundColor: 'var(--gray-2)' }}>
                            <Flex direction="column" gap="3">
                                <Box>
                                    <Text size="2" weight="bold" mb="2" as="div">Editor</Text>
                                    
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="solid" color="green" size="3" style={{ width: '100%', cursor: 'pointer', justifyContent: 'center', marginBottom: '8px' }}>
                                                Adicionar Novo +
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content style={{ width: '240px' }}>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('text')}>Texto</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('image')}>Imagem</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('box')}>Caixa (Container)</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>

                                    <Button 
                                        variant="soft" 
                                        color="blue" 
                                        style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
                                        onClick={handleSave}
                                    >
                                        <Share1Icon /> Salvar Alterações
                                    </Button>
                                </Box>
                            </Flex>
                        </Box>

                        <ScrollArea type="auto" scrollbars="vertical" style={{ flex: 1 }}>
                            <Flex direction="column" gap="4" p="4">
                                {/* Variáveis */}
                                <Box>
                                    <Text size="2" weight="bold" mb="2" as="div">Variáveis Disponíveis</Text>
                                    <Text size="1" color="gray" mb="2" as="div">Clique para copiar ou arraste (futuramente)</Text>
                                    <Flex direction="column" gap="2">
                                        {layout.props.map((prop, index) => (
                                            <Badge key={index} color="blue" variant="soft" size="2" style={{ padding: '8px', justifyContent: 'flex-start' }} title={prop.dataName}>
                                                {prop.name}
                                                <Text color="gray" style={{ marginLeft: 'auto', fontSize: '10px' }}>{`{{${prop.dataName}}}`}</Text>
                                            </Badge>
                                        ))}
                                        {layout.props.length === 0 && (
                                            <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
                                                Nenhuma variável configurada.
                                            </Text>
                                        )}
                                    </Flex>
                                </Box>
                            </Flex>
                        </ScrollArea>
                    </Flex>
                )}

                {/* Main Content Area (Resizable Split) */}
                <Box style={{ flex: 1, position: 'relative', height: '100%' }}>
                    {/* Toggle Sidebar Button - Top Left */}
                    <Box style={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}>
                         <IconButton 
                            size="2" 
                            variant="soft" 
                            color="gray"
                            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                            title={isSidebarVisible ? "Ocultar Barra Lateral" : "Mostrar Barra Lateral"}
                        >
                            {isSidebarVisible ? <DoubleArrowLeftIcon /> : <DoubleArrowRightIcon />}
                        </IconButton>
                    </Box>

                    {/* Top Right Controls */}
                    <Flex style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }} gap="2">
                        
                         <IconButton 
                            size="2" 
                            variant="soft" 
                            color={isPreviewVisible ? 'blue' : 'gray'}
                            onClick={() => setIsPreviewVisible(!isPreviewVisible)}
                            title={isPreviewVisible ? "Ocultar Preview" : "Mostrar Preview"}
                        >
                            {isPreviewVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                        </IconButton>
                    </Flex>

                    <Group orientation="horizontal" style={{ height: '100%', width: '100%' }}>
                        {/* Editor Canvas Area */}
                        <Panel defaultSize={50} minSize={20}>
                            <Box style={{ height: '100%', width: '100%', backgroundColor: 'var(--color-background)' }}>
                                <Canvas />
                            </Box>
                        </Panel>

                        {/* Resize Handle */}
                        {isPreviewVisible && (
                            <Separator style={{ 
                                width: '4px', 
                                backgroundColor: 'var(--gray-6)', 
                                cursor: 'col-resize',
                                transition: 'background-color 0.2s'
                            }} />
                        )}

                        {/* Preview Area */}
                        {isPreviewVisible && (
                            <Panel defaultSize={50} minSize={20}>
                                <Box style={{ 
                                    height: '100%', 
                                    width: '100%', 
                                    backgroundColor: 'var(--gray-3)', 
                                    borderLeft: '1px solid var(--gray-5)' 
                                }}>
                                    <Preview />
                                </Box>
                            </Panel>
                        )}
                    </Group>
                </Box>
            </Flex>
        </Theme>
    );
};

export const GenericEditor: React.FC<EditorProps> = (props) => {
    return (
        <EditorProvider isList={props.layout.isList} availableProps={props.layout.props} theme={props.theme}>
            <EditorContent {...props} />
        </EditorProvider>
    );
};
