import { CheckIcon, DownloadIcon, FileTextIcon, ListBulletIcon, PlusIcon, Share1Icon, UploadIcon } from '@radix-ui/react-icons';
import { Box, Button, DropdownMenu, Flex, IconButton, Text } from '@radix-ui/themes';
import React, { useRef } from 'react';
import { useEditor } from '../context';
import type { ITemplate } from '../types';

interface GlobalHeaderProps {
    onSave?: (json: string) => void;
    templates?: ITemplate[];
    setIsTemplatesOpen: (isOpen: boolean) => void;
    onFinish?: () => void;
    onToggleSidebar?: () => void;
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({ onSave, templates, setIsTemplatesOpen, onFinish, onToggleSidebar }) => {
    const { state, loadState, addElement } = useEditor();
    const fileInputRef = useRef<HTMLInputElement>(null);


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

    const handleAddElement = (type: string) => {
        addElement({ type: type as any, content: `New ${type}` });
    };

    return (
        <Flex
            justify="between"
            align="center"
            px="4"
            py="3"
            style={{
                borderBottom: '1px solid var(--gray-5)',
                backgroundColor: 'var(--gray-1)',
                flexShrink: 0,
                zIndex: 100
            }}
        >
            {/* Left: Brand */}
            <Flex gap="4" align="center">
                {onToggleSidebar && (
                    <Box display={{ initial: 'block', md: 'none' }}>
                        <IconButton variant="ghost" color="gray" onClick={onToggleSidebar}>
                            <ListBulletIcon width="24" height="24" />
                        </IconButton>
                    </Box>
                )}
                <Text size="3" weight="bold">Editor de Layout</Text>
            </Flex>

            {/* Right: Actions */}
            <Flex gap="3" align="center">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="solid" color="green" style={{ cursor: 'pointer' }}>
                            <PlusIcon /> Adicionar
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item onSelect={() => handleAddElement('text')}>Texto</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleAddElement('image')}>Imagem</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleAddElement('box')}>Container / Grupo</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleAddElement('text-container')}>Container com Texto</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>

                <Button variant="soft" color="gray" onClick={handleImportClick} style={{ cursor: 'pointer' }}>
                    <UploadIcon /> Importar
                </Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept=".json"
                    onChange={handleImportFile}
                />

                <Button variant="soft" color="gray" onClick={handleExport} style={{ cursor: 'pointer' }}>
                    <DownloadIcon /> Exportar
                </Button>

                {templates && templates.length > 0 && (
                    <Button variant="soft" color="gray" onClick={() => setIsTemplatesOpen(true)} style={{ cursor: 'pointer' }}>
                        <FileTextIcon /> Templates
                    </Button>
                )}

                {/* Simple Mode specific action */}
                {onFinish && (
                    <Button id="finish-button" variant="solid" color="green" onClick={onFinish} style={{ cursor: 'pointer', marginLeft: 8 }}>
                        <CheckIcon /> Finalizar e Testar
                    </Button>
                )}

                <Button variant="solid" color="blue" onClick={handleSave} style={{ cursor: 'pointer' }}>
                    <Share1Icon /> Salvar
                </Button>
            </Flex>
        </Flex>
    );
};
