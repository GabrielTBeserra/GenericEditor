import { Cross2Icon, DoubleArrowLeftIcon, DoubleArrowRightIcon, EyeNoneIcon, EyeOpenIcon, ListBulletIcon, ReaderIcon } from '@radix-ui/react-icons';
import { Box, Button, Dialog, Flex, Grid, IconButton, Separator, Text, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Group, Panel } from 'react-resizable-panels';
import { AlignmentToolbar } from './components/AlignmentToolbar';
import { Canvas } from './components/Canvas';
import { GlobalHeader } from './components/GlobalHeader';
import { Minimap } from './components/Minimap';
import { OnboardingTour } from './components/OnboardingTour';
import { Preview } from './components/Preview';
import { FeedbackModal } from './components/FeedbackModal';
import { LoadingScreen } from './components/LoadingScreen';
import { PropertiesDialog } from './components/PropertiesDialog';
import { Ruler } from './components/Ruler';
import { ShortcutsDialog } from './components/ShortcutsDialog';
import { SimpleSidebar } from './components/SimpleSidebar';
import { ViewToolbar } from './components/ViewToolbar';
import { WizardDialog } from './components/WizardDialog';
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
    /** Elemento para renderizar portais (modais, dropdowns). Passe o elemento em fullscreen para que modais apareçam. */
    portalContainer?: HTMLElement | null;
}

const EditorContent: React.FC<EditorProps> = ({ initialState, onSave, theme = 'light', templates, activeTemplateId, onTemplateChange }) => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [localTemplateId, setLocalTemplateId] = useState<string | null>(templates && templates.length > 0 ? templates[0].id : null);
    const lastAppliedTemplateIdRef = React.useRef<string | null>(null);
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const [wizardStep, setWizardStep] = useState(1);
    const [isTourOpen, setIsTourOpen] = useState(false);
    const { addElement, loadState, state, portalContainer, undo, redo, copy, paste, removeSelected, updateElements, showAlert } = useEditor();

    // Fechar o tour quando um modal abrir para evitar conflitos de z-index e foco
    React.useEffect(() => {
        if (state.isPropertiesPanelOpen || isWizardOpen) {
            setIsTourOpen(false);
        }
    }, [state.isPropertiesPanelOpen, isWizardOpen]);
    const hasAutoOpenedWizardRef = React.useRef(false);

    React.useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setIsSidebarVisible(false);
                setIsPreviewVisible(false);
            }
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
                        const el = state.elements.find(elem => elem.id === id);
                        if (el) {
                            let x = el.x ?? 0;
                            let y = el.y ?? 0;
                            if (e.key === 'ArrowUp') y -= step;
                            if (e.key === 'ArrowDown') y += step;
                            if (e.key === 'ArrowLeft') x -= step;
                            if (e.key === 'ArrowRight') x += step;
                            x = Math.max(0, x);
                            if (state.isList) {
                                y = Math.max(0, y);
                                const elHeight = el.height ?? 100;
                                const canvasHeight = state.canvasHeight || 150;
                                if (canvasHeight > 0) y = Math.min(y, canvasHeight - elHeight);
                                y = Math.max(0, y);
                            }
                            updates.push({ id, changes: { x, y } });
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
    }, [undo, redo, copy, paste, removeSelected, state.selectedElementIds, state.elements, state.isList, state.canvasHeight, updateElements]);

    const [initialLoadDone, setInitialLoadDone] = useState(false);
    // Load initial state if provided; show loading screen for a minimum time for a smoother UX
    const minLoadingMs = 400;
    React.useEffect(() => {
        const start = Date.now();
        if (initialState) {
            try {
                const parsed = typeof initialState === 'string' ? JSON.parse(initialState) : initialState;
                if (Array.isArray(parsed)) {
                    loadState({ elements: parsed });
                } else if (parsed.elements) {
                    loadState(parsed);
                }
            } catch (e) {
                console.error("Failed to load initial state", e);
            }
        }
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, minLoadingMs - elapsed);
        const t = setTimeout(() => setInitialLoadDone(true), remaining);
        return () => clearTimeout(t);
    }, [initialState, loadState]);

    // Auto-open Wizard only when editor is empty after initial load (library: don't open if project has saved content)
    React.useEffect(() => {
        if (!initialLoadDone) return;
        if (hasAutoOpenedWizardRef.current) return;
        if (state.elements.length === 0) {
            hasAutoOpenedWizardRef.current = true;
            setWizardStep(1);
            setIsWizardOpen(true);
        }
    }, [initialLoadDone, state.elements]);

    // Sincroniza localTemplateId apenas quando o modal abre ou activeTemplateId muda externamente (ex: botões no App).
    // Não incluir localTemplateId nas deps para não sobrescrever a seleção do usuário dentro do modal.
    React.useEffect(() => {
        if (!templates || templates.length === 0) return;
        if (!isTemplatesOpen) return;
        if (activeTemplateId) {
            setLocalTemplateId(activeTemplateId);
        } else {
            setLocalTemplateId(templates[0].id);
        }
    }, [activeTemplateId, isTemplatesOpen, templates]);

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

    return (
        <Theme appearance={theme} accentColor="blue" grayColor="slate" radius="large" scaling="105%">
            <Flex direction="column" style={{ height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: 'var(--gray-1)', position: 'relative' }}>
                {initialLoadDone && (
                    <>
                        <GlobalHeader
                    onSave={onSave}
                    templates={templates}
                    setIsTemplatesOpen={setIsTemplatesOpen}
                    onFinish={() => {
                        setWizardStep(3);
                        setIsWizardOpen(true);
                    }}
                    onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
                    onStartTour={() => setIsTourOpen(true)}
                />
                <Flex direction="row" style={{ flexGrow: 1, overflow: 'hidden' }}>
                    {/* Mobile Backdrop */}
                    {isMobile && isSidebarVisible && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                zIndex: 90 // Below sidebar (100)
                            }}
                            onClick={() => setIsSidebarVisible(false)}
                        />
                    )}

                    {/* Sidebar */}
                    {isSidebarVisible && (
                        <Flex
                            id="sidebar-area"
                            direction="column"
                            width={isMobile ? "100%" : "300px"}
                            style={{
                                borderRight: '1px solid var(--gray-5)',
                                backgroundColor: 'var(--gray-1)',
                                flexShrink: 0,
                                height: '100%',
                                boxShadow: '1px 0 0 var(--gray-4)',
                                overflow: 'hidden',
                                position: isMobile ? 'absolute' : 'relative',
                                zIndex: isMobile ? 100 : 'auto',
                                top: 0,
                                left: 0
                            }}
                        >
                            {isMobile && (
                                <Flex justify="end" p="2">
                                    <IconButton variant="ghost" color="gray" onClick={() => setIsSidebarVisible(false)}>
                                        <Cross2Icon />
                                    </IconButton>
                                </Flex>
                            )}
                            <SimpleSidebar onClose={() => { if (isMobile) setIsSidebarVisible(false); }} />
                        </Flex>
                    )}

                    {/* Main Content Area (Resizable Split) */}
                    <Flex direction="column" style={{ flex: 1, height: '100%', overflow: 'hidden' }}>
                        {/* Toolbar Superior */}
                        <Flex
                            justify="between"
                            align="center"
                            px="3"
                            py="2"
                            style={{
                                borderBottom: '1px solid var(--gray-6)',
                                backgroundColor: 'var(--gray-1)',
                                flexShrink: 0,
                                zIndex: 10
                            }}
                        >
                            {/* Left Controls */}
                            <Flex gap="3" align="center">
                                <IconButton
                                    size="2"
                                    variant="ghost"
                                    color="gray"
                                    onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                                    title={isSidebarVisible ? "Ocultar Barra Lateral" : "Mostrar Barra Lateral"}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {isMobile ? (
                                        <ListBulletIcon />
                                    ) : (
                                        isSidebarVisible ? <DoubleArrowLeftIcon /> : <DoubleArrowRightIcon />
                                    )}
                                </IconButton>
                            </Flex>

                            {/* Right Controls */}
                            <Flex gap="3" align="center">
                                <Button
                                    variant="soft"
                                    color="blue"
                                    size="2"
                                    onClick={() => setIsTourOpen(true)}
                                    title="Iniciar tour guiado"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <ReaderIcon /> Tour
                                </Button>
                                <ShortcutsDialog />

                                <IconButton
                                    size="2"
                                    variant="ghost"
                                    color={isPreviewVisible ? 'blue' : 'gray'}
                                    onClick={() => setIsPreviewVisible(!isPreviewVisible)}
                                    title={isPreviewVisible ? "Ocultar Preview" : "Mostrar Preview"}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {isPreviewVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                                </IconButton>
                            </Flex>
                        </Flex>

                        <Box style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                            <Group orientation="horizontal" style={{ height: '100%', width: '100%' }}>
                                {/* Editor Canvas Area */}
                                {(!isMobile || !isPreviewVisible) && (
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
                                            <Box style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }} id="canvas-area">
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
                                )}

                                {/* Resize Handle */}
                                {(!isMobile && isPreviewVisible) && (
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
                                        <Box
                                            id="preview-area"
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                backgroundColor: 'var(--gray-3)',
                                                borderLeft: '1px solid var(--gray-5)'
                                            }}
                                        >
                                            <Preview />
                                        </Box>
                                    </Panel>
                                )}
                            </Group>
                        </Box>
                    </Flex>
                </Flex>

                {/* Templates Modal */}
                <Dialog.Root open={isTemplatesOpen} onOpenChange={setIsTemplatesOpen}>
                    <Dialog.Content {...(portalContainer && { container: portalContainer })} style={{ maxWidth: 450 }}>
                        <Dialog.Title>Galeria de Templates</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                            Escolha um layout pré-definido para começar.
                        </Dialog.Description>

                        {templates && templates.length > 0 ? (
                            <Flex direction="column" gap="3">
                                <Box>
                                    <Text size="2" weight="bold" as="div" mb="2">Selecione o Template</Text>
                                    <Flex direction="column" gap="2">
                                        {templates.map(template => (
                                            <Button
                                                key={template.id}
                                                variant={localTemplateId === template.id ? 'solid' : 'soft'}
                                                color={localTemplateId === template.id ? 'blue' : 'gray'}
                                                size="2"
                                                style={{
                                                    width: '100%',
                                                    justifyContent: 'flex-start',
                                                    border: localTemplateId === template.id ? '2px solid var(--accent-9)' : undefined
                                                }}
                                                onClick={() => setLocalTemplateId(template.id)}
                                            >
                                                {template.name}
                                            </Button>
                                        ))}
                                    </Flex>
                                </Box>

                                {localTemplateId && templates.find(t => t.id === localTemplateId)?.description && (
                                    <Box p="3" style={{ backgroundColor: 'var(--gray-2)', borderRadius: 8 }}>
                                        <Text size="2" color="gray">
                                            {templates.find(t => t.id === localTemplateId)?.description}
                                        </Text>
                                    </Box>
                                )}

                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">Cancelar</Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button onClick={() => {
                                            if (!localTemplateId) return;
                                            if (onTemplateChange) {
                                                onTemplateChange(localTemplateId);
                                                return;
                                            }
                                            const template = templates.find(item => item.id === localTemplateId);
                                            if (!template) return;
                                            applyTemplateState(template.state);
                                            lastAppliedTemplateIdRef.current = localTemplateId;
                                        }}>Aplicar</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Flex>
                        ) : (
                            <Text>Nenhum template disponível.</Text>
                        )}
                    </Dialog.Content>
                </Dialog.Root>

                <WizardDialog
                    isOpen={isWizardOpen}
                    onClose={() => setIsWizardOpen(false)}
                    templates={templates || []}
                    onSelectTemplate={(template: ITemplate | null) => {
                        if (template) {
                            applyTemplateState(template.state);
                        }
                    }}
                    onStartTour={() => setIsTourOpen(true)}
                    initialStep={wizardStep}
                    onFinishWizard={() => {
                        handleExport();
                        showAlert("Layout finalizado e exportado com sucesso!");
                    }}
                />

                <OnboardingTour
                    isOpen={isTourOpen}
                    onClose={() => setIsTourOpen(false)}
                />

                <FeedbackModal />
                <PropertiesDialog />
                    </>
                )}
                <AnimatePresence>
                    {!initialLoadDone && <LoadingScreen key="loading" />}
                </AnimatePresence>
            </Flex>
        </Theme>
    );
};

export const GenericEditor: React.FC<EditorProps> = (props) => {
    return (
        <EditorProvider isList={props.layout.isList} availableProps={props.layout.props} theme={props.theme} portalContainer={props.portalContainer}>
            <EditorContent {...props} />
        </EditorProvider>
    );
};
