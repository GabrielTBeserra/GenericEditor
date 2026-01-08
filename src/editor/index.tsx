import React, { useState } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme, Flex, Box, Button, Text, Badge, DropdownMenu, ScrollArea, IconButton } from '@radix-ui/themes';
import { Group, Panel, Separator } from 'react-resizable-panels';
import { EyeOpenIcon, EyeNoneIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import type { ILayout } from './types';
import { EditorProvider, useEditor } from './context';
import { Canvas } from './components/Canvas';
import { Preview } from './components/Preview';

interface EditorProps {
    layout: ILayout;
}

const EditorContent: React.FC<EditorProps> = ({ layout }) => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const { addElement } = useEditor();

    const handleAddElement = (type: string) => {
        console.log(`Adding element of type: ${type}`);
        addElement({ type, content: `New ${type}` });
    };

    return (
        <Theme appearance="light" accentColor="blue" grayColor="slate" radius="medium" scaling="100%">
            <Flex style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
                
                {/* Sidebar - Toggleable */}
                {isSidebarVisible && (
                    <Box 
                        width="250px" 
                        style={{ 
                            borderRight: '1px solid var(--gray-5)', 
                            backgroundColor: 'var(--gray-2)',
                            flexShrink: 0
                        }}
                    >
                        <ScrollArea type="auto" scrollbars="vertical" style={{ height: '100%' }}>
                            <Flex direction="column" gap="4" p="4">
                                {/* Ações */}
                                <Box>
                                    <Text size="2" weight="bold" mb="2" as="div">Ações</Text>
                                    
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="solid" color="green" style={{ width: '100%', cursor: 'pointer' }}>
                                                Adicionar +
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('text')}>Texto</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('image')}>Imagem</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('box')}>Caixa</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                </Box>

                                {/* Variáveis */}
                                <Box>
                                    <Text size="2" weight="bold" mb="2" as="div">Variáveis Disponíveis</Text>
                                    <Flex direction="column" gap="2">
                                        {layout.props.map((prop, index) => (
                                            <Badge key={index} color="blue" variant="soft" title={prop.dataName}>
                                                {prop.name}
                                            </Badge>
                                        ))}
                                        {layout.props.length === 0 && (
                                            <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
                                                Nenhuma variável disponível
                                            </Text>
                                        )}
                                    </Flex>
                                </Box>
                            </Flex>
                        </ScrollArea>
                    </Box>
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

                    {/* Toggle Preview Button - Top Right */}
                    <Box style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
                         <IconButton 
                            size="2" 
                            variant="soft" 
                            color={isPreviewVisible ? 'blue' : 'gray'}
                            onClick={() => setIsPreviewVisible(!isPreviewVisible)}
                            title={isPreviewVisible ? "Ocultar Preview" : "Mostrar Preview"}
                        >
                            {isPreviewVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                        </IconButton>
                    </Box>

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

export const Editor: React.FC<EditorProps> = (props) => {
    return (
        <EditorProvider isList={props.layout.isList}>
            <EditorContent {...props} />
        </EditorProvider>
    );
};
