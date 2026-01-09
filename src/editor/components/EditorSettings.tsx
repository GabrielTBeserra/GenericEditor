import React, { useState, useEffect } from 'react';
import { Dialog, Button, Flex, Text, TextField, Select, Box } from '@radix-ui/themes';
import { GearIcon } from '@radix-ui/react-icons';
import { useEditor } from '../context';

export const EditorSettings: React.FC = () => {
    const { state, updateListSettings, setCanvasHeight } = useEditor();
    const [localSortProp, setLocalSortProp] = useState('');
    const [localCanvasHeight, setLocalCanvasHeight] = useState('150');

    // Sync local state with context when opening
    useEffect(() => {
        setLocalSortProp(state.listSettings.sortProp || '__none__');
        setLocalCanvasHeight(String(state.canvasHeight || 150));
    }, [state.listSettings.sortProp, state.canvasHeight]);

    // Update canvas height when changed
    useEffect(() => {
        const height = parseInt(localCanvasHeight, 10);
        if (!isNaN(height) && height > 0) {
            setCanvasHeight(height);
        }
    }, [localCanvasHeight, setCanvasHeight]);

    const handleSave = () => {
        updateListSettings({ sortProp: localSortProp === '__none__' ? '' : localSortProp });
    };

    return (
        <Dialog.Root>
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
                                <Select.Root 
                                    value={localSortProp}
                                    onValueChange={(val) => setLocalSortProp(val)}
                                >
                                    <Select.Trigger style={{ width: '100%' }} placeholder="Selecione..." />
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
                                <Select.Root 
                                    value={state.listSettings.sortOrder} 
                                    onValueChange={(val) => updateListSettings({ sortOrder: val as 'asc' | 'desc' })}
                                >
                                    <Select.Trigger />
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
                                <Select.Root 
                                    value={state.listSettings.newestPosition || 'bottom'} 
                                    onValueChange={(val) => updateListSettings({ newestPosition: val as 'top' | 'bottom' })}
                                >
                                    <Select.Trigger style={{ width: '100%' }} />
                                    <Select.Content>
                                        <Select.Item value="top">Topo (Início)</Select.Item>
                                        <Select.Item value="bottom">Base (Final)</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            </Box>
                            <Box flexGrow="1">
                                <Text size="1" mb="1" as="div">Comportamento de Rolagem</Text>
                                <Select.Root 
                                    value={state.listSettings.scrollDirection || 'down'} 
                                    onValueChange={(val) => updateListSettings({ scrollDirection: val as 'up' | 'down' })}
                                >
                                    <Select.Trigger style={{ width: '100%' }} />
                                    <Select.Content>
                                        <Select.Item value="down">Descer (Padrão)</Select.Item>
                                        <Select.Item value="up">Subir (Chat)</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            </Box>
                        </Flex>

                        <Box>
                            <Text size="1" mb="1" as="div">Altura do Item da Lista (px)</Text>
                            <TextField.Root 
                                type="number"
                                min="10"
                                value={localCanvasHeight}
                                onChange={(e) => setLocalCanvasHeight(e.target.value)}
                            />
                            <Text size="1" color="gray">
                                Define a altura visual de cada item na lista para referência.
                            </Text>
                        </Box>

                        <Text size="1" color="gray">
                            Essa propriedade será usada para ordenar os itens no modo lista.
                        </Text>
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
