import { GearIcon } from '@radix-ui/react-icons';
import { Box, Button, Dialog, Flex, Grid, Text, TextField } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import { useEditor, type IElementAnimation } from '../context';

export const EditorSettings: React.FC = () => {
    const { state, updateListSettings, setCanvasHeight, setGridSize } = useEditor();
    const [open, setOpen] = useState(false);
    const [localSortProp, setLocalSortProp] = useState('');
    const [localSortOrder, setLocalSortOrder] = useState<'asc' | 'desc'>('asc');
    const [localNewestPosition, setLocalNewestPosition] = useState<'top' | 'bottom'>('bottom');
    const [localScrollDirection, setLocalScrollDirection] = useState<'up' | 'down'>('down');
    const [localCanvasHeight, setLocalCanvasHeight] = useState('150');
    const [localContainerHeight, setLocalContainerHeight] = useState('');
    const [localGridSize, setLocalGridSize] = useState('0');

    // Animation State
    const [localEntryAnimType, setLocalEntryAnimType] = useState('slideIn'); // Default
    const [localEntryAnimDuration, setLocalEntryAnimDuration] = useState(0.3);
    const [localEntryAnimTiming, setLocalEntryAnimTiming] = useState('ease-out');

    // Sync local state with context when opening
    useEffect(() => {
        if (open) {
            setLocalSortProp(state.listSettings.sortProp || '__none__');
            setLocalSortOrder(state.listSettings.sortOrder || 'asc');
            setLocalNewestPosition(state.listSettings.newestPosition || 'bottom');
            setLocalScrollDirection(state.listSettings.scrollDirection || 'down');
            setLocalContainerHeight(state.listSettings.containerHeight ? String(state.listSettings.containerHeight) : '');
            setLocalCanvasHeight(String(state.canvasHeight || 150));
            setLocalGridSize(String(state.gridSize || 0));

            // Animation defaults
            const anim = state.listSettings.entryAnimation;
            setLocalEntryAnimType(anim?.type || 'slideIn');
            setLocalEntryAnimDuration(anim?.duration || 0.3);
            setLocalEntryAnimTiming(anim?.timingFunction || 'ease-out');
        }
    }, [open]);

    // Update canvas height when changed (Live preview for item height)
    useEffect(() => {
        if (!open) return; // Only update if dialog is open (prevent initial mount effect if not open)

        const height = parseInt(localCanvasHeight, 10);
        if (!isNaN(height) && height > 0) {
            // Only update if different to avoid loop (though React handles strict equality)
            if (state.canvasHeight !== height) {
                setCanvasHeight(height);
            }
        }

        const grid = parseInt(localGridSize, 10);
        if (!isNaN(grid) && grid >= 0) {
            if (state.gridSize !== grid) {
                setGridSize(grid);
            }
        }
    }, [localCanvasHeight, localGridSize, open, setCanvasHeight, setGridSize, state.canvasHeight, state.gridSize]);

    const handleSave = () => {
        const containerHeight = parseInt(localContainerHeight, 10);

        const entryAnimation: IElementAnimation = {
            type: localEntryAnimType as any,
            duration: Number(localEntryAnimDuration),
            delay: 0,
            timingFunction: localEntryAnimTiming as any
        };

        updateListSettings({
            sortProp: localSortProp === '__none__' ? '' : localSortProp,
            sortOrder: localSortOrder,
            newestPosition: localNewestPosition,
            scrollDirection: localScrollDirection,
            containerHeight: !isNaN(containerHeight) && containerHeight > 0 ? containerHeight : undefined,
            entryAnimation
        });
        setOpen(false);
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
                <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}>
                    <GearIcon /> Configurações
                </Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 600 }}>
                <Dialog.Title>Configurações do Editor</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Configure o comportamento da lista.
                </Dialog.Description>

                <Box pt="3">
                    <Flex direction="column" gap="3">
                        <Text size="2" weight="bold">Ordenação</Text>
                        <Flex gap="3" align="center">
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Propriedade para Ordenar (ex: data, id)</Text>
                                <select
                                    value={localSortProp}
                                    onChange={(e) => setLocalSortProp(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--gray-6)',
                                        backgroundColor: 'var(--gray-2)',
                                        color: 'var(--gray-12)',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                >
                                    <option value="__none__">(Nenhum)</option>
                                    {state.availableProps.map(prop => (
                                        <option key={prop.dataName} value={prop.dataName}>
                                            {prop.name}
                                        </option>
                                    ))}
                                </select>
                            </Box>
                            <Box>
                                <Text size="1" mb="1" as="div">Direção</Text>
                                <select
                                    value={localSortOrder}
                                    onChange={(e) => setLocalSortOrder(e.target.value as 'asc' | 'desc')}
                                    style={{
                                        width: '150px',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--gray-6)',
                                        backgroundColor: 'var(--gray-2)',
                                        color: 'var(--gray-12)',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                >
                                    <option value="asc">Crescente (A-Z)</option>
                                    <option value="desc">Decrescente (Z-A)</option>
                                </select>
                            </Box>
                        </Flex>

                        <Flex gap="3" align="center">
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Posição do Recente</Text>
                                <select
                                    value={localNewestPosition}
                                    onChange={(e) => setLocalNewestPosition(e.target.value as 'top' | 'bottom')}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--gray-6)',
                                        backgroundColor: 'var(--gray-2)',
                                        color: 'var(--gray-12)',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                >
                                    <option value="top">Topo (Início)</option>
                                    <option value="bottom">Base (Final)</option>
                                </select>
                            </Box>
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Comportamento de Rolagem</Text>
                                <select
                                    value={localScrollDirection}
                                    onChange={(e) => setLocalScrollDirection(e.target.value as 'up' | 'down')}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--gray-6)',
                                        backgroundColor: 'var(--gray-2)',
                                        color: 'var(--gray-12)',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                >
                                    <option value="down">Descer (Padrão)</option>
                                    <option value="up">Subir (Chat)</option>
                                </select>
                            </Box>
                        </Flex>

                        <Text size="2" weight="bold" mt="2">Dimensões</Text>
                        <Flex gap="3" align="center">
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Altura do Item (Template) (px)</Text>
                                <TextField.Root
                                    type="number"
                                    min="10"
                                    value={localCanvasHeight}
                                    onChange={(e) => setLocalCanvasHeight(e.target.value)}
                                />
                                <Text size="1" color="gray">
                                    Altura de cada item individual na lista.
                                </Text>
                            </Box>
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Altura da Lista (Container) (px)</Text>
                                <TextField.Root
                                    type="number"
                                    min="0"
                                    placeholder="Auto (100%)"
                                    value={localContainerHeight}
                                    onChange={(e) => setLocalContainerHeight(e.target.value)}
                                />
                                <Text size="1" color="gray">
                                    Altura total da lista. Se exceder, rola. Vazio = 100%.
                                </Text>
                            </Box>
                        </Flex>

                        <Text size="2" weight="bold" mt="2">Animação de Entrada na Lista</Text>
                        <Grid columns="3" gap="3">
                            <Box>
                                <Text size="1" mb="1" as="div">Efeito</Text>
                                <select
                                    value={localEntryAnimType}
                                    onChange={(e) => setLocalEntryAnimType(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '6px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--gray-6)',
                                        backgroundColor: 'var(--gray-2)',
                                        color: 'var(--gray-12)',
                                        fontSize: '14px'
                                    }}
                                >
                                    <option value="none">Nenhum</option>
                                    <option value="slideIn">Slide (Padrão)</option>
                                    <option value="smoothSlideUp">Slide Suave (Up)</option>
                                    <option value="fadeIn">Fade In</option>
                                    <option value="popIn">Pop In</option>
                                    <option value="blurIn">Blur In</option>
                                    <option value="slideInLeft">Slide (Esq)</option>
                                    <option value="slideInRight">Slide (Dir)</option>
                                    <option value="zoomIn">Zoom In</option>
                                    <option value="bounceIn">Bounce</option>
                                </select>
                            </Box>
                            <Box>
                                <Text size="1" mb="1" as="div">Duração (s)</Text>
                                <TextField.Root
                                    type="number"
                                    step="0.1"
                                    min="0.1"
                                    value={localEntryAnimDuration}
                                    onChange={(e) => setLocalEntryAnimDuration(parseFloat(e.target.value) || 0.3)}
                                />
                            </Box>
                            <Box>
                                <Text size="1" mb="1" as="div">Curva (Easing)</Text>
                                <select
                                    value={localEntryAnimTiming}
                                    onChange={(e) => setLocalEntryAnimTiming(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '6px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--gray-6)',
                                        backgroundColor: 'var(--gray-2)',
                                        color: 'var(--gray-12)',
                                        fontSize: '14px'
                                    }}
                                >
                                    <option value="ease">Ease</option>
                                    <option value="ease-out">Ease Out</option>
                                    <option value="linear">Linear</option>
                                    <option value="bounce">Bounce</option>
                                </select>
                            </Box>
                        </Grid>


                        <Text size="1" color="gray">
                            Essa propriedade será usada para ordenar os itens no modo lista.
                        </Text>

                        <Box mt="2">
                            <Text size="2" weight="bold">Grid Snapping (Travar)</Text>
                            <Flex gap="3" align="center" mt="2">
                                <Box flexGrow="1">
                                    <Text size="1" mb="1" as="div">Tamanho do Grid (px) - 0 para desativar</Text>
                                    <TextField.Root
                                        type="number"
                                        value={localGridSize}
                                        onChange={(e) => setLocalGridSize(e.target.value)}
                                        placeholder="0"
                                    />
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">Cancelar</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleSave}>Salvar Alterações</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};
