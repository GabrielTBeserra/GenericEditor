import { DoubleArrowLeftIcon, DoubleArrowRightIcon, DownloadIcon, EyeNoneIcon, EyeOpenIcon, Share1Icon, UploadIcon } from '@radix-ui/react-icons';
import { Badge, Box, Button, Dialog, DropdownMenu, Flex, Grid, IconButton, ScrollArea, Tabs, Text, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import React, { useState } from 'react';
import { Group, Panel, Separator } from 'react-resizable-panels';
import pkg from '../../package.json';
import { AlignmentToolbar } from './components/AlignmentToolbar';
import { Canvas } from './components/Canvas';
import { EditorSettings } from './components/EditorSettings';
import { ElementAdvancedSettings } from './components/ElementAdvancedSettings';
import { HistoryPanel } from './components/HistoryPanel';
import { LayersPanel } from './components/LayersPanel';
import { Minimap } from './components/Minimap';
import { Preview } from './components/Preview';
import { Ruler } from './components/Ruler';
import { ShortcutsDialog } from './components/ShortcutsDialog';
import { ViewToolbar } from './components/ViewToolbar';
import { EditorProvider, useEditor, type IElement } from './context';
import type { ILayout, ITemplate } from './types';
export interface EditorProps {
    layout: ILayout;
    initialState?: unknown; // To load saved state
    onSave?: (json: string) => void; // Callback for saving
    theme?: 'light' | 'dark'; // Theme configuration
    templates?: ITemplate[];
    activeTemplateId?: string;
    onTemplateChange?: (templateId: string) => void;
}

const EditorContent: React.FC<EditorProps> = ({ layout, initialState, onSave, theme = 'light', templates, activeTemplateId, onTemplateChange }) => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [settingsElementId, setSettingsElementId] = useState<string | null>(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [localTemplateId, setLocalTemplateId] = useState<string | null>(templates && templates.length > 0 ? templates[0].id : null);
    const lastAppliedTemplateIdRef = React.useRef<string | null>(null);
    const { addElement, loadState, state, undo, redo, copy, paste, removeSelected, updateElements } = useEditor();
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleExport = () => {
        const stateToSave = {
            elements: state.elements,
            isList: state.isList,
            mockData: state.mockData,
            singleMockData: state.singleMockData,
            listSettings: state.listSettings,
            canvasHeight: state.canvasHeight,
            gridSize: state.gridSize
        };
        const json = JSON.stringify(stateToSave, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `layout-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = event.target?.result as string;
                const parsedState = JSON.parse(json);
                loadState(parsedState);
            } catch (error) {
                console.error("Failed to import layout", error);
                alert("Erro ao importar layout. Arquivo inválido.");
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    };

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

                    const updates: { id: string, changes: Partial<IElement> }[] = [];

                    state.selectedElementIds.forEach(id => {
                        const element = state.elements.find(el => el.id === id);
                        if (element) {
                            const change: Partial<IElement> = {};
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

    React.useEffect(() => {
        if (!templates || templates.length === 0) return;
        if (activeTemplateId) {
            setLocalTemplateId(activeTemplateId);
            return;
        }
        if (!localTemplateId) {
            setLocalTemplateId(templates[0].id);
        }
    }, [activeTemplateId, localTemplateId, templates]);

    const applyTemplateState = React.useCallback((templateState: unknown) => {
        if (!templateState) return;
        try {
            const parsed = typeof templateState === 'string' ? JSON.parse(templateState) : templateState;
            if (Array.isArray(parsed)) {
                loadState({ elements: parsed });
                return;
            }
            if (parsed && typeof parsed === 'object' && 'elements' in parsed) {
                loadState(parsed as { elements: IElement[] });
                return;
            }
        } catch (e) {
            console.error('Failed to apply template', e);
        }
    }, [loadState]);

    React.useEffect(() => {
        if (!templates || templates.length === 0 || !activeTemplateId) return;
        if (lastAppliedTemplateIdRef.current === activeTemplateId) return;
        const template = templates.find(item => item.id === activeTemplateId);
        if (!template) return;
        applyTemplateState(template.state);
        lastAppliedTemplateIdRef.current = activeTemplateId;
    }, [activeTemplateId, applyTemplateState, templates]);

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
        <Theme appearance={theme} accentColor="blue" grayColor="slate" radius="large" scaling="105%">
            <Flex direction="row" style={{ height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: 'var(--gray-1)' }}>
                {/* Toolbar */}
                {isSidebarVisible && (
                    <Flex
                        direction="column"
                        width="300px"
                        style={{
                            borderRight: '1px solid var(--gray-5)',
                            backgroundColor: 'var(--gray-1)',
                            flexShrink: 0,
                            height: '100%',
                            boxShadow: '1px 0 0 var(--gray-4)'
                        }}
                    >
                        {/* Fixed Controls Header */}
                        <Box p="4" style={{ borderBottom: '1px solid var(--gray-5)', backgroundColor: 'var(--gray-1)' }}>
                            <Flex direction="column" gap="3">
                                <Box>
                                    <Flex justify="between" align="center" mb="2">
                                        <Text size="2" weight="bold">Editor</Text>
                                        <Badge color="gray" variant="soft" radius="full">v{pkg.version}</Badge>
                                    </Flex>

                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="solid" color="green" size="3" style={{ width: '100%', cursor: 'pointer', justifyContent: 'center', marginBottom: '8px' }}>
                                                Adicionar elemento
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content style={{ width: '240px' }}>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('text')}>Texto</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('image')}>Imagem</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('box')}>Caixa (Container)</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleAddElement('text-container')}>Container com Texto</DropdownMenu.Item>
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

                                    <Flex gap="2" mt="2">
                                        <Button
                                            variant="soft"
                                            color="gray"
                                            style={{ flex: 1, cursor: 'pointer', justifyContent: 'center' }}
                                            onClick={handleExport}
                                        >
                                            <DownloadIcon /> Exportar
                                        </Button>
                                        <Button
                                            variant="soft"
                                            color="gray"
                                            style={{ flex: 1, cursor: 'pointer', justifyContent: 'center' }}
                                            onClick={handleImportClick}
                                        >
                                            <UploadIcon /> Importar
                                        </Button>
                                    </Flex>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        accept=".json"
                                        onChange={handleImportFile}
                                    />

                                    <Box mt="3" style={{ backgroundColor: 'var(--gray-2)', border: '1px solid var(--gray-4)', borderRadius: 12, padding: 12 }}>
                                        <Text size="2" weight="bold">Como começar</Text>
                                        <Flex direction="column" gap="1" mt="2">
                                            <Text size="1" color="gray">1. Adicione um elemento pelo botão acima.</Text>
                                            <Text size="1" color="gray">2. Arraste no canvas para mover e redimensionar.</Text>
                                            <Text size="1" color="gray">3. Use Camadas e Variáveis para organizar.</Text>
                                        </Flex>
                                    </Box>

                                    {templates && templates.length > 0 && (
                                        <Box mt="3" style={{ backgroundColor: 'var(--gray-2)', border: '1px solid var(--gray-4)', borderRadius: 12, padding: 12 }}>
                                            <Text size="2" weight="bold">Templates</Text>
                                            <Text size="1" color="gray" mt="1" as="div">Selecione um template fornecido pelo sistema.</Text>
                                            <Box mt="2">
                                                <select
                                                    value={localTemplateId || ''}
                                                    onChange={(e) => setLocalTemplateId(e.target.value)}
                                                    style={{
                                                        width: '100%',
                                                        padding: '8px',
                                                        borderRadius: '6px',
                                                        border: '1px solid var(--gray-6)',
                                                        backgroundColor: 'var(--gray-1)',
                                                        color: 'var(--gray-12)',
                                                        fontSize: '14px',
                                                        outline: 'none'
                                                    }}
                                                >
                                                    {templates.map(template => (
                                                        <option key={template.id} value={template.id}>
                                                            {template.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </Box>
                                            {localTemplateId && templates.find(t => t.id === localTemplateId)?.description && (
                                                <Text size="1" color="gray" as="div" mt="2">
                                                    {templates.find(t => t.id === localTemplateId)?.description}
                                                </Text>
                                            )}
                                            <Button
                                                variant="soft"
                                                color="blue"
                                                style={{ width: '100%', justifyContent: 'center', cursor: 'pointer', marginTop: '10px' }}
                                                onClick={() => {
                                                    if (!localTemplateId) return;
                                                    if (onTemplateChange) {
                                                        onTemplateChange(localTemplateId);
                                                        return;
                                                    }
                                                    const template = templates.find(item => item.id === localTemplateId);
                                                    if (!template) return;
                                                    applyTemplateState(template.state);
                                                    lastAppliedTemplateIdRef.current = localTemplateId;
                                                }}
                                            >
                                                Aplicar Template
                                            </Button>
                                        </Box>
                                    )}

                                    <Box mt="3">
                                        <EditorSettings />
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>

                        <ScrollArea type="auto" scrollbars="vertical" style={{ flex: 1 }}>
                            <Box p="4">
                                <Tabs.Root defaultValue="layers">
                                    <Tabs.List>
                                        <Tabs.Trigger value="layers">Camadas</Tabs.Trigger>
                                        <Tabs.Trigger value="history">Histórico</Tabs.Trigger>
                                        <Tabs.Trigger value="vars">Variáveis</Tabs.Trigger>
                                    </Tabs.List>

                                    <Box pt="3">
                                        <Tabs.Content value="layers">
                                            <LayersPanel onOpenSettings={(id) => { setSettingsElementId(id); setIsSettingsOpen(true); }} />
                                        </Tabs.Content>

                                        <Tabs.Content value="history">
                                            <HistoryPanel />
                                        </Tabs.Content>

                                        <Tabs.Content value="vars">
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
                                        </Tabs.Content>
                                    </Box>
                                </Tabs.Root>
                            </Box>
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
                    <Flex style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }} gap="3" align="center">

                        <ShortcutsDialog />

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
                            <Grid
                                columns="20px 1fr"
                                rows="20px 1fr"
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    backgroundColor: 'var(--color-background)'
                                }}
                            >
                                {/* Top Left Corner */}
                                <Box style={{ backgroundColor: 'var(--gray-2)', borderRight: '1px solid var(--gray-6)', borderBottom: '1px solid var(--gray-6)', zIndex: 30 }} />

                                {/* Top Ruler */}
                                <Box style={{ backgroundColor: 'var(--gray-2)', borderBottom: '1px solid var(--gray-6)', overflow: 'hidden', zIndex: 30 }}>
                                    <Ruler orientation="horizontal" />
                                </Box>

                                {/* Left Ruler */}
                                <Box style={{ backgroundColor: 'var(--gray-2)', borderRight: '1px solid var(--gray-6)', overflow: 'hidden', zIndex: 30 }}>
                                    <Ruler orientation="vertical" />
                                </Box>

                                {/* Canvas Area */}
                                <Box style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                                    <Box style={{
                                        position: 'absolute',
                                        top: 16,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        zIndex: 20
                                    }}>
                                        <AlignmentToolbar />
                                    </Box>
                                    <Box style={{
                                        position: 'absolute',
                                        bottom: 16,
                                        right: 16,
                                        zIndex: 20
                                    }}>
                                        <ViewToolbar />
                                    </Box>
                                    <Canvas />
                                    <Minimap />
                                </Box>
                            </Grid>
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

            <Dialog.Root open={isMobile}>
                <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Dispositivo Não Suportado</Dialog.Title>
                    <Dialog.Description size="2">
                        Por favor, utilize um computador ou tablet para acessar o editor. O sistema não foi desenvolvido para celulares.
                    </Dialog.Description>
                </Dialog.Content>
            </Dialog.Root>
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
