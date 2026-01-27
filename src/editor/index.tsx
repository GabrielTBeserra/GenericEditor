import { BoxIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon, EyeNoneIcon, EyeOpenIcon, ImageIcon, Share1Icon, TextIcon } from '@radix-ui/react-icons';
import { Badge, Box, Button, DropdownMenu, Flex, IconButton, Separator as RadixSeparator, ScrollArea, Text, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import React, { useState } from 'react';
import { Group, Panel, Separator } from 'react-resizable-panels';
import { Canvas } from './components/Canvas';
import { EditorSettings } from './components/EditorSettings';
import { ElementAdvancedSettings } from './components/ElementAdvancedSettings';
import { Preview } from './components/Preview';
import { EditorProvider, useEditor, type IElement } from './context';
import type { ILayout } from './types';

interface EditorProps {
    layout: ILayout;
    initialState?: any; // To load saved state
    onSave?: (json: string) => void; // Callback for saving
    theme?: 'light' | 'dark'; // Theme configuration
}

const EditorContent: React.FC<EditorProps> = ({ layout, initialState, onSave, theme = 'light' }) => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [settingsElementId, setSettingsElementId] = useState<string | null>(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const { addElement, loadState, state, undo, redo, copy, paste, removeSelected, updateElements, selectElement } = useEditor();

    // Global Paste Handler for Images
    React.useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            // Ignore if active element is an input or textarea
            if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA' || (document.activeElement as HTMLElement)?.isContentEditable) {
                return;
            }

            const items = e.clipboardData?.items;
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].type.indexOf('image') !== -1) {
                        e.preventDefault();
                        const blob = items[i].getAsFile();
                        if (blob) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                                const base64 = event.target?.result as string;
                                addElement({
                                    type: 'image',
                                    content: base64,
                                    width: 200,
                                    height: 200
                                });
                            };
                            reader.readAsDataURL(blob);
                        }
                    }
                }
            }
        };

        window.addEventListener('paste', handlePaste);
        return () => window.removeEventListener('paste', handlePaste);
    }, [addElement]);

    // Keyboard Shortcuts
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if active element is an input or textarea
            if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA' || (document.activeElement as HTMLElement)?.isContentEditable) {
                return;
            }

            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                if (e.shiftKey) {
                    e.preventDefault();
                    redo();
                } else {
                    e.preventDefault();
                    undo();
                }
            } else if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
                e.preventDefault();
                redo();
            } else if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
                e.preventDefault();
                copy();
            } else if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
                e.preventDefault();
                paste();
            } else if (e.key === 'Delete' || e.key === 'Backspace') {
                if (state.selectedElementIds.length > 0) {
                    e.preventDefault();
                    removeSelected();
                }
            } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                if (state.selectedElementIds.length > 0) {
                    e.preventDefault();
                    const step = e.shiftKey ? 10 : 1;

                    const updates: { id: string, changes: any }[] = [];

                    state.selectedElementIds.forEach(id => {
                        const element = state.elements.find(el => el.id === id);
                        if (element) {
                            const change: any = {};
                            if (e.key === 'ArrowUp') change.y = element.y - step;
                            if (e.key === 'ArrowDown') change.y = element.y + step;
                            if (e.key === 'ArrowLeft') change.x = element.x - step;
                            if (e.key === 'ArrowRight') change.x = element.x + step;
                            updates.push({ id, changes: change });
                        }
                    });

                    if (updates.length > 0) {
                        updateElements(updates);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [undo, redo, copy, paste, removeSelected, state.selectedElementIds, state.elements, updateElements]);

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
                listSettings: state.listSettings,
                canvasHeight: state.canvasHeight
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

                                    <Box mt="2">
                                        <EditorSettings />
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>

                        <ScrollArea type="auto" scrollbars="vertical" style={{ flex: 1 }}>
                            <Flex direction="column" gap="4" p="4">
                                {/* Elementos */}
                                <Box>
                                    <Text size="2" weight="bold" mb="2" as="div">Elementos</Text>
                                    <Flex direction="column" gap="2">
                                        {state.elements.map((element) => (
                                            <Button
                                                key={element.id}
                                                variant={state.selectedElementIds.includes(element.id) ? "solid" : "soft"}
                                                color="gray"
                                                size="2"
                                                style={{ justifyContent: 'flex-start', cursor: 'pointer', overflow: 'hidden' }}
                                                onClick={(e) => {
                                                    selectElement(element.id, e.shiftKey);
                                                    setSettingsElementId(element.id);
                                                    setIsSettingsOpen(true);
                                                }}
                                            >
                                                <Flex gap="2" align="center" style={{ width: '100%', overflow: 'hidden' }}>
                                                    {element.type === 'text' && <TextIcon />}
                                                    {element.type === 'image' && <ImageIcon />}
                                                    {element.type === 'box' && <BoxIcon />}
                                                    <Text truncate style={{ flex: 1, textAlign: 'left' }}>
                                                        {element.type === 'text' ? (element.content.length > 20 ? element.content.substring(0, 20) + '...' : element.content) :
                                                            element.type === 'image' ? 'Imagem' : 'Container'}
                                                    </Text>
                                                </Flex>
                                            </Button>
                                        ))}
                                        {state.elements.length === 0 && (
                                            <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
                                                Nenhum elemento adicionado.
                                            </Text>
                                        )}
                                    </Flex>
                                </Box>

                                <RadixSeparator size="4" />

                                {/* Variáveis */}
                                <Box>
                                    <Text size="2" weight="bold" mb="2" as="div">Variáveis Disponíveis</Text>
                                    <Text size="1" color="gray" mb="2" as="div">Clique para copiar ou arraste</Text>
                                    <Flex direction="column" gap="2">
                                        {layout.props.map((prop, index) => (
                                            <Badge
                                                key={index}
                                                color="blue"
                                                variant="soft"
                                                size="2"
                                                style={{ padding: '8px', justifyContent: 'flex-start', cursor: 'grab' }}
                                                title={`Clique para copiar {{${prop.dataName}}}`}
                                                draggable
                                                onDragStart={(e) => {
                                                    e.dataTransfer.setData('application/x-editor-prop', prop.dataName);
                                                    e.dataTransfer.effectAllowed = 'copy';
                                                }}
                                                onClick={() => {
                                                    const text = `{{${prop.dataName}}}`;
                                                    navigator.clipboard.writeText(text);
                                                    // Visual feedback could be added here
                                                }}
                                            >
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

            {settingsElementId && (
                <ElementAdvancedSettings
                    elementId={settingsElementId}
                    open={isSettingsOpen}
                    onOpenChange={setIsSettingsOpen}
                />
            )}
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
