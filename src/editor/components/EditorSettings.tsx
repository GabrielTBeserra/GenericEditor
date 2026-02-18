import { ChevronDownIcon, GearIcon } from '@radix-ui/react-icons';
import { Box, Button, Dialog, DropdownMenu, Flex, Grid, Text, TextField } from '@radix-ui/themes';
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

    // Sync local state with context only when dialog opens (avoid loop: do not depend on state)
    const prevOpenRef = React.useRef(false);
    useEffect(() => {
        if (open && !prevOpenRef.current) {
            prevOpenRef.current = true;
            setLocalSortProp(state.listSettings.sortProp || '__none__');
            setLocalSortOrder(state.listSettings.sortOrder || 'asc');
            setLocalNewestPosition(state.listSettings.newestPosition || 'bottom');
            setLocalScrollDirection(state.listSettings.scrollDirection || 'down');
            setLocalContainerHeight(state.listSettings.containerHeight ? String(state.listSettings.containerHeight) : '');
            setLocalCanvasHeight(String(state.canvasHeight || 150));
            setLocalGridSize(String(state.gridSize || 0));

            const anim = state.listSettings.entryAnimation;
            setLocalEntryAnimType(anim?.type || 'slideIn');
            setLocalEntryAnimDuration(anim?.duration || 0.3);
            setLocalEntryAnimTiming(anim?.timingFunction || 'ease-out');
        }
        if (!open) prevOpenRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync only when opening, state read at that moment
    }, [open]);

    // Live update canvas/grid when user edits (only when dialog open; no state in deps to avoid loop)
    useEffect(() => {
        if (!open) return;

        const height = parseInt(localCanvasHeight, 10);
        if (!isNaN(height) && height > 0) {
            setCanvasHeight(height);
        }

        const grid = parseInt(localGridSize, 10);
        if (!isNaN(grid) && grid >= 0) {
            setGridSize(grid);
        }
    }, [localCanvasHeight, localGridSize, open, setCanvasHeight, setGridSize]);

    const handleSave = () => {
        const containerHeight = parseInt(localContainerHeight, 10);
        const canvasH = parseInt(localCanvasHeight, 10);
        const grid = parseInt(localGridSize, 10);

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
        if (!isNaN(canvasH) && canvasH > 0) setCanvasHeight(canvasH);
        if (!isNaN(grid) && grid >= 0) setGridSize(grid);
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
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                            {localSortProp === '__none__' ? '(Nenhum)' : state.availableProps.find(p => p.dataName === localSortProp)?.name || localSortProp}
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content style={{ zIndex: 100000 }}>
                                        <DropdownMenu.Item onSelect={() => setLocalSortProp('__none__')}>(Nenhum)</DropdownMenu.Item>
                                        {state.availableProps.map(prop => (
                                            <DropdownMenu.Item key={prop.dataName} onSelect={() => setLocalSortProp(prop.dataName)}>
                                                {prop.name}
                                            </DropdownMenu.Item>
                                        ))}
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
                            </Box>
                            <Box>
                                <Text size="1" mb="1" as="div">Direção</Text>
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft" color="gray" style={{ width: 150, justifyContent: 'space-between' }}>
                                            {localSortOrder === 'asc' ? 'Crescente (A-Z)' : 'Decrescente (Z-A)'}
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content style={{ zIndex: 100000 }}>
                                        <DropdownMenu.Item onSelect={() => setLocalSortOrder('asc')}>Crescente (A-Z)</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalSortOrder('desc')}>Decrescente (Z-A)</DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
                            </Box>
                        </Flex>

                        <Flex gap="3" align="center">
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Posição do Recente</Text>
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                            {localNewestPosition === 'top' ? 'Topo (Início)' : 'Base (Final)'}
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content style={{ zIndex: 100000 }}>
                                        <DropdownMenu.Item onSelect={() => setLocalNewestPosition('top')}>Topo (Início)</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalNewestPosition('bottom')}>Base (Final)</DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
                            </Box>
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Comportamento de Rolagem</Text>
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                            {localScrollDirection === 'down' ? 'Descer (Padrão)' : 'Subir (Chat)'}
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content style={{ zIndex: 100000 }}>
                                        <DropdownMenu.Item onSelect={() => setLocalScrollDirection('down')}>Descer (Padrão)</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalScrollDirection('up')}>Subir (Chat)</DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
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
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                            {localEntryAnimType === 'slideIn' ? 'Slide (Padrão)' : localEntryAnimType === 'smoothSlideUp' ? 'Slide Suave (Up)' : localEntryAnimType === 'fadeIn' ? 'Fade In' : localEntryAnimType === 'popIn' ? 'Pop In' : localEntryAnimType === 'blurIn' ? 'Blur In' : localEntryAnimType === 'slideInLeft' ? 'Slide (Esq)' : localEntryAnimType === 'slideInRight' ? 'Slide (Dir)' : localEntryAnimType === 'zoomIn' ? 'Zoom In' : localEntryAnimType === 'bounceIn' ? 'Bounce' : 'Nenhum'}
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content style={{ zIndex: 100000 }}>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('none')}>Nenhum</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('slideIn')}>Slide (Padrão)</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('smoothSlideUp')}>Slide Suave (Up)</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('fadeIn')}>Fade In</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('popIn')}>Pop In</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('blurIn')}>Blur In</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('slideInLeft')}>Slide (Esq)</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('slideInRight')}>Slide (Dir)</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('zoomIn')}>Zoom In</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimType('bounceIn')}>Bounce</DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
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
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                            {localEntryAnimTiming === 'ease-out' ? 'Ease Out' : localEntryAnimTiming === 'linear' ? 'Linear' : localEntryAnimTiming === 'bounce' ? 'Bounce' : 'Ease'}
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content style={{ zIndex: 100000 }}>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimTiming('ease')}>Ease</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimTiming('ease-out')}>Ease Out</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimTiming('linear')}>Linear</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => setLocalEntryAnimTiming('bounce')}>Bounce</DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
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
