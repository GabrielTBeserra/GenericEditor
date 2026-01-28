import React, { useState } from 'react';
import { Dialog, Button, Flex, Text, TextArea, Tabs, Box } from '@radix-ui/themes';
import { Share1Icon, CopyIcon, CheckIcon, DownloadIcon, UploadIcon } from '@radix-ui/react-icons';
import { useEditor } from '../context';
import { getRendererCode } from '../utils/htmlGenerator';

export const ExportDialog: React.FC<{ onSaveExternal?: (json: string) => void }> = ({ onSaveExternal }) => {
    const { state, loadState } = useEditor();
    const [copiedJson, setCopiedJson] = useState(false);
    const [copiedCode, setCopiedCode] = useState(false);
    const [importJson, setImportJson] = useState('');

    const jsonConfig = JSON.stringify(state.elements, null, 2);
    const fullStateJson = JSON.stringify({
        elements: state.elements,
        listSettings: state.listSettings,
        mockData: state.mockData,
        singleMockData: state.singleMockData,
        isList: state.isList,
        canvasHeight: state.canvasHeight
    }, null, 2);

    const rendererCode = getRendererCode();

    const handleCopy = (text: string, setCopied: (v: boolean) => void) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSaveExternal = () => {
        if (onSaveExternal) {
            onSaveExternal(fullStateJson);
            alert('Enviado para salvamento externo!');
        }
    };

    const handleSaveLocal = () => {
        localStorage.setItem('editor_save_test', fullStateJson);
        alert('Salvo no LocalStorage com sucesso!');
    };

    const handleLoadLocal = () => {
        const saved = localStorage.getItem('editor_save_test');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                loadState(parsed);
                alert('Carregado com sucesso!');
            } catch (e) {
                alert('Erro ao carregar JSON.');
            }
        } else {
            alert('Nenhum save encontrado no LocalStorage.');
        }
    };

    const handleImport = () => {
        if (!importJson) return;
        try {
            const parsed = JSON.parse(importJson);
            // Check if it's full state or just elements
            if (Array.isArray(parsed)) {
                loadState({ elements: parsed });
            } else if (parsed.elements) {
                loadState(parsed);
            } else {
                alert('Formato de JSON inválido.');
                return;
            }
            alert('Importado com sucesso!');
            setImportJson('');
        } catch (e) {
            alert('Erro ao analisar JSON: ' + (e as Error).message);
        }
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button variant="soft" color="blue" style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}>
                    <Share1Icon /> Salvar / Exportar
                </Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 800 }} onPointerDown={(e) => e.stopPropagation()}>
                <Dialog.Title>Gerenciar Template</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Exporte, salve ou carregue o estado do seu editor.
                </Dialog.Description>

                <Tabs.Root defaultValue="export">
                    <Tabs.List>
                        <Tabs.Trigger value="export">Exportar / Salvar</Tabs.Trigger>
                        <Tabs.Trigger value="import">Importar / Carregar</Tabs.Trigger>
                        <Tabs.Trigger value="code">Renderizador (JS)</Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="export">
                        <Flex direction="column" gap="4" mt="3">
                            
                            <Box style={{ padding: 12, backgroundColor: 'var(--gray-3)', borderRadius: 8 }}>
                                <Text size="2" weight="bold" mb="2" as="div">Salvar</Text>
                                <Flex gap="3" wrap="wrap">
                                    {onSaveExternal && (
                                        <Button onClick={handleSaveExternal} color="green">
                                            <DownloadIcon /> Salvar (Aplicação)
                                        </Button>
                                    )}
                                    <Button onClick={handleSaveLocal}>
                                        <DownloadIcon /> Salvar no Navegador
                                    </Button>
                                </Flex>
                                <Text size="1" color="gray" mt="2" as="div">
                                    {onSaveExternal ? 'Use "Salvar (Aplicação)" para persistir no sistema principal.' : 'Modo Standalone: Use "Salvar no Navegador" para testes.'}
                                </Text>
                            </Box>

                            <Box>
                                <Flex justify="between" align="center" mb="2">
                                    <Text size="2" weight="bold">JSON de Configuração (Elementos)</Text>
                                    <Button size="1" variant="ghost" onClick={() => handleCopy(jsonConfig, setCopiedJson)}>
                                        {copiedJson ? <CheckIcon /> : <CopyIcon />} {copiedJson ? 'Copiado' : 'Copiar JSON'}
                                    </Button>
                                </Flex>
                                <TextArea 
                                    style={{ height: 200, fontFamily: 'monospace', fontSize: 12 }} 
                                    value={jsonConfig} 
                                    readOnly 
                                />
                            </Box>
                        </Flex>
                    </Tabs.Content>

                    <Tabs.Content value="import">
                         <Flex direction="column" gap="4" mt="3">
                            <Box style={{ padding: 12, backgroundColor: 'var(--gray-3)', borderRadius: 8 }}>
                                <Text size="2" weight="bold" mb="2" as="div">Carregar Teste Local</Text>
                                <Flex gap="3">
                                    <Button onClick={handleLoadLocal} color="orange">
                                        <UploadIcon /> Carregar do Navegador
                                    </Button>
                                    <Text size="1" color="gray" style={{ alignSelf: 'center' }}>
                                        Restaura o último estado salvo neste navegador.
                                    </Text>
                                </Flex>
                            </Box>

                            <Box>
                                <Text size="2" weight="bold" mb="2" as="div">Importar JSON Manualmente</Text>
                                <TextArea 
                                    style={{ height: 150, fontFamily: 'monospace', fontSize: 12 }} 
                                    placeholder="Cole aqui o JSON de configuração ou estado completo..."
                                    value={importJson}
                                    onChange={e => setImportJson(e.target.value)}
                                />
                                <Flex justify="end" mt="2">
                                    <Button onClick={handleImport}>Carregar JSON</Button>
                                </Flex>
                            </Box>
                        </Flex>
                    </Tabs.Content>

                    <Tabs.Content value="code">
                        <Flex direction="column" gap="2" mt="3">
                            <Flex justify="between" align="center">
                                <Text size="2" color="gray">Função Javascript para renderizar o template com dados reais.</Text>
                                <Button size="1" variant="ghost" onClick={() => handleCopy(rendererCode, setCopiedCode)}>
                                    {copiedCode ? <CheckIcon /> : <CopyIcon />} {copiedCode ? 'Copiado' : 'Copiar Código'}
                                </Button>
                            </Flex>
                            <TextArea 
                                style={{ height: 300, fontFamily: 'monospace', fontSize: 12 }} 
                                value={rendererCode} 
                                readOnly 
                            />
                        </Flex>
                    </Tabs.Content>
                </Tabs.Root>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Fechar
                        </Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};
