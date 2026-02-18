import { GearIcon } from '@radix-ui/react-icons';
import { Box, Button, Dialog, Flex, Grid, Select, Text, TextField } from '@radix-ui/themes';
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
    const [localEntryAnimType, setLocalEntryAnimType] = useState<IElementAnimation['type']>('slideIn'); // Default
    const [localEntryAnimDuration, setLocalEntryAnimDuration] = useState(0.3);
    const [localEntryAnimTiming, setLocalEntryAnimTiming] = useState<NonNullable<IElementAnimation['timingFunction']>>('ease-out');

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
            type: localEntryAnimType,
            duration: Number(localEntryAnimDuration),
            delay: 0,
            timingFunction: localEntryAnimTiming
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
                                <Text size="1" mb="1" as="div">Propriedade para Ordenar</Text>
                                <Select.Root value={localSortProp} onValueChange={setLocalSortProp}>
                                    <Select.Trigger placeholder="Selecione..." style={{ width: '100%' }} />
                                    <Select.Content>
                                        <Select.Item value="__none__">(Nenhum)</Select.Item>
                                        {state.availableProps.map(prop => (
                                            <Select.Item key={prop.dataName} value={prop.dataName}>
                                                {prop.name}
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Root>
                            </Box>
                            <Box>
                                <Text size="1" mb="1" as="div">Direção</Text>
                                <Select.Root value={localSortOrder} onValueChange={(v) => setLocalSortOrder(v as 'asc' | 'desc')}>
                                    <Select.Trigger style={{ width: '150px' }} />
                                    <Select.Content>
                                        <Select.Item value="asc">Crescente (A-Z)</Select.Item>
                                        <Select.Item value="desc">Decrescente (Z-A)</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            </Box>
                        </Flex>

                        <Flex gap="3" align="center">
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Posição do Recente</Text>
                                <Select.Root value={localNewestPosition} onValueChange={(v) => setLocalNewestPosition(v as 'top' | 'bottom')}>
                                    <Select.Trigger style={{ width: '100%' }} />
                                    <Select.Content>
                                        <Select.Item value="top">Topo (Início)</Select.Item>
                                        <Select.Item value="bottom">Base (Final)</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            </Box>
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Comportamento de Rolagem</Text>
                                <Select.Root value={localScrollDirection} onValueChange={(v) => setLocalScrollDirection(v as 'up' | 'down')}>
                                    <Select.Trigger style={{ width: '100%' }} />
                                    <Select.Content>
                                        <Select.Item value="down">Descer (Padrão)</Select.Item>
                                        <Select.Item value="up">Subir (Chat)</Select.Item>
                                    </Select.Content>
                                </Select.Root>
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
                                <Select.Root value={localEntryAnimType} onValueChange={(v) => setLocalEntryAnimType(v as IElementAnimation['type'])}>
                                    <Select.Trigger style={{ width: '100%' }} />
                                    <Select.Content>
                                        <Select.Item value="none">Nenhum</Select.Item>
                                        <Select.Item value="slideIn">Slide (Padrão)</Select.Item>
                                        <Select.Item value="smoothSlideUp">Slide Suave (Up)</Select.Item>
                                        <Select.Item value="fadeIn">Fade In</Select.Item>
                                        <Select.Item value="popIn">Pop In</Select.Item>
                                        <Select.Item value="blurIn">Blur In</Select.Item>
                                        <Select.Item value="slideInLeft">Slide (Esq)</Select.Item>
                                        <Select.Item value="slideInRight">Slide (Dir)</Select.Item>
                                        <Select.Item value="zoomIn">Zoom In</Select.Item>
                                        <Select.Item value="bounceIn">Bounce</Select.Item>
                                    </Select.Content>
                                </Select.Root>
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
                                <Select.Root value={localEntryAnimTiming} onValueChange={(v) => setLocalEntryAnimTiming(v as NonNullable<IElementAnimation['timingFunction']>)}>
                                    <Select.Trigger style={{ width: '100%' }} />
                                    <Select.Content>
                                        <Select.Item value="ease">Ease</Select.Item>
                                        <Select.Item value="ease-out">Ease Out</Select.Item>
                                        <Select.Item value="linear">Linear</Select.Item>
                                        <Select.Item value="bounce">Bounce</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            </Box>
                        </Grid>

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
