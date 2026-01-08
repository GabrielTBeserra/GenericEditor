import React, { useState, useEffect } from 'react';
import { Dialog, Button, Flex, Text, TextField, TextArea, Select, Switch, Box, Tabs } from '@radix-ui/themes';
import { GearIcon } from '@radix-ui/react-icons';
import { useEditor } from '../context';

export const EditorSettings: React.FC = () => {
    const { state, updateListSettings, setMockData } = useEditor();
    const [jsonList, setJsonList] = useState('');
    const [jsonSingle, setJsonSingle] = useState('');
    const [localSortProp, setLocalSortProp] = useState('');

    // Sync local state with context when opening
    useEffect(() => {
        setJsonList(JSON.stringify(state.mockData, null, 2));
        setJsonSingle(JSON.stringify(state.singleMockData, null, 2));
        setLocalSortProp(state.listSettings.sortProp || '');
    }, [state.mockData, state.singleMockData, state.listSettings.sortProp]);

    const handleSave = () => {
        try {
            const parsedList = jsonList ? JSON.parse(jsonList) : [];
            const parsedSingle = jsonSingle ? JSON.parse(jsonSingle) : {};
            
            if (!Array.isArray(parsedList)) {
                alert('Mock Data (Lista) deve ser um array JSON.');
                return;
            }

            setMockData(parsedList, parsedSingle);
            updateListSettings({ sortProp: localSortProp });
            
        } catch (e) {
            alert('Erro ao analisar JSON: ' + (e as Error).message);
        }
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
                    Configure o comportamento da lista e dados de teste.
                </Dialog.Description>

                <Tabs.Root defaultValue="list">
                    <Tabs.List>
                        <Tabs.Trigger value="list">Configuração da Lista</Tabs.Trigger>
                        <Tabs.Trigger value="data">Dados Mockados</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="list">
                            <Flex direction="column" gap="3">
                                <Text size="2" weight="bold">Ordenação</Text>
                                <Flex gap="3" align="center">
                                    <Box flexGrow="1">
                                        <Text size="1" mb="1" as="div">Propriedade para Ordenar (ex: data, id)</Text>
                                        <TextField.Root 
                                            placeholder="Nome da propriedade" 
                                            value={localSortProp}
                                            onChange={(e) => setLocalSortProp(e.target.value)}
                                        />
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
                                <Text size="1" color="gray">
                                    Essa propriedade será usada para ordenar os itens no modo lista.
                                </Text>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="data">
                            <Flex direction="column" gap="4">
                                <Box>
                                    <Text size="2" weight="bold" mb="2" as="div">Dados para Lista (Array JSON)</Text>
                                    <TextArea 
                                        style={{ height: 150, fontFamily: 'monospace', fontSize: 12 }} 
                                        placeholder='[{"id": 1, "titulo": "Item 1"}, ...]'
                                        value={jsonList}
                                        onChange={(e) => setJsonList(e.target.value)}
                                    />
                                </Box>
                                <Box>
                                    <Text size="2" weight="bold" mb="2" as="div">Dados Únicos (Objeto JSON)</Text>
                                    <TextArea 
                                        style={{ height: 150, fontFamily: 'monospace', fontSize: 12 }} 
                                        placeholder='{"titulo": "Exemplo", "descricao": "..."}'
                                        value={jsonSingle}
                                        onChange={(e) => setJsonSingle(e.target.value)}
                                    />
                                </Box>
                            </Flex>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>

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
