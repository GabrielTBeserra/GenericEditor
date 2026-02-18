import { DividerHorizontalIcon, FileTextIcon, ImageIcon, SquareIcon, StarIcon, TimerIcon, ViewVerticalIcon } from '@radix-ui/react-icons';
import { Badge, Box, Card, Flex, Grid, Tabs, Text } from '@radix-ui/themes';
import React from 'react';
import { useEditor } from '../context';
import type { ILayout } from '../types';
import { SimpleLayers } from './SimpleLayers';
import { SimpleProperties } from './SimpleProperties';

interface SimpleSidebarProps {
    layout: ILayout;
}

export const SimpleSidebar: React.FC<SimpleSidebarProps> = ({ layout }) => {
    const { state, addElement, groupElements } = useEditor();
    const hasSelection = state.selectedElementIds.length > 0;

    const handleAddBlock = (type: string) => {
        const timestamp = new Date().toISOString();
        const baseElement = {
            id: `el-${timestamp}`,
            x: 20,
            y: 20,
            width: 150,
            height: 40,
            style: {}
        };

        switch (type) {
            case 'text':
                addElement({ ...baseElement, type: 'text', content: 'Novo Texto', width: 120, height: 30 });
                break;
            case 'image':
                addElement({ ...baseElement, type: 'image', content: 'https://via.placeholder.com/150', width: 150, height: 150 });
                break;
            case 'box':
                addElement({ ...baseElement, type: 'box', content: '', width: 200, height: 100, style: { border: '1px solid #ccc' } });
                break;
            case 'text-container':
                addElement({ ...baseElement, type: 'text-container', content: 'Texto em Caixa', width: 150, height: 50, style: { backgroundColor: '#f0f0f0', padding: '10px' } });
                break;
            case 'separator':
                addElement({ ...baseElement, type: 'box', content: '', width: 300, height: 2, style: { backgroundColor: '#000000' } });
                break;
            case 'timestamp':
                addElement({ ...baseElement, type: 'text', content: '{{timestamp}}', width: 150, height: 30, formatting: { type: 'date', dateFormat: 'dd/MM/yyyy HH:mm' } });
                break;
            case 'badge':
                addElement({ ...baseElement, type: 'text-container', content: 'Badge', width: 80, height: 30, style: { backgroundColor: '#007bff', color: 'white', borderRadius: '15px', textAlign: 'center', lineHeight: '30px' } });
                break;
            case 'list-item':
                // Create a "Card" structure: Container + Image + Title + Description
                const containerId = crypto.randomUUID();
                const imageId = crypto.randomUUID();
                const titleId = crypto.randomUUID();
                const descId = crypto.randomUUID();

                // 1. Container
                addElement({
                    // @ts-ignore - ID injection
                    id: containerId,
                    type: 'box',
                    x: 20,
                    y: 20,
                    width: 300,
                    height: 120,
                    style: {
                        backgroundColor: '#ffffff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }
                });

                // 2. Image (Left)
                addElement({
                    // @ts-ignore
                    id: imageId,
                    type: 'image',
                    content: 'https://via.placeholder.com/80',
                    x: 35, // 20 + 15 padding
                    y: 35,
                    width: 80,
                    height: 80,
                    style: { borderRadius: '4px' }
                });

                // 3. Title (Right Top)
                addElement({
                    // @ts-ignore
                    id: titleId,
                    type: 'text',
                    content: 'Título do Item',
                    x: 130, // 35 + 80 + 15
                    y: 35,
                    width: 170,
                    height: 24,
                    style: { fontSize: '18px', fontWeight: 'bold', color: '#333' }
                });

                // 4. Description (Right Bottom)
                addElement({
                    // @ts-ignore
                    id: descId,
                    type: 'text',
                    content: 'Descrição curta do item. Adicione detalhes aqui.',
                    x: 130,
                    y: 65,
                    width: 170,
                    height: 40,
                    style: { fontSize: '14px', color: '#666' }
                });

                // Group the elements
                setTimeout(() => {
                    groupElements([containerId, imageId, titleId, descId]);
                }, 100);
                break;
        }
    };

    return (
        <Flex direction="column" style={{ height: '100%' }}>
            {/* Top Section: Properties or Helper */}
            <Box p="4" style={{ borderBottom: '1px solid var(--gray-5)', minHeight: '180px', flexShrink: 0, overflowY: 'auto' }}>
                {hasSelection ? (
                    <SimpleProperties />
                ) : (
                    <Flex direction="column" align="center" justify="center" style={{ height: '100%', minHeight: '100px' }} gap="3">
                        <Text size="2" color="gray" align="center">
                            Selecione um item no desenho<br />para editar suas propriedades
                        </Text>
                        <Badge color="blue" variant="soft">Dica: Clique no desenho</Badge>
                    </Flex>
                )}
            </Box>

            {/* Bottom Section: Tabs */}
            <Box p="4" style={{ flexGrow: 1, overflowY: 'auto' }}>
                <Tabs.Root defaultValue="blocks">
                    <Tabs.List>
                        <Tabs.Trigger value="blocks">Blocos</Tabs.Trigger>
                        <Tabs.Trigger value="layers">Conteúdo</Tabs.Trigger>
                        <Tabs.Trigger value="data">Dados</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        {/* Block Library */}
                        <Tabs.Content value="blocks">
                            <Text size="2" weight="bold" mb="2" as="div">Adicionar Elemento</Text>
                            <Text size="1" color="gray" mb="3" as="div">Clique para adicionar ao desenho</Text>

                            <Grid columns="2" gap="2">
                                <BlockCard
                                    icon={<FileTextIcon width="20" height="20" />}
                                    label="Texto"
                                    onClick={() => handleAddBlock('text')}
                                />
                                <BlockCard
                                    icon={<ImageIcon width="20" height="20" />}
                                    label="Imagem"
                                    onClick={() => handleAddBlock('image')}
                                />
                                <BlockCard
                                    icon={<SquareIcon width="20" height="20" />}
                                    label="Caixa / Grupo"
                                    onClick={() => handleAddBlock('box')}
                                />
                                <BlockCard
                                    icon={<ViewVerticalIcon width="20" height="20" />}
                                    label="Texto em Caixa"
                                    onClick={() => handleAddBlock('text-container')}
                                />
                                <BlockCard
                                    icon={<DividerHorizontalIcon width="20" height="20" />}
                                    label="Separador"
                                    onClick={() => handleAddBlock('separator')}
                                />
                                <BlockCard
                                    icon={<TimerIcon width="20" height="20" />}
                                    label="Data/Hora"
                                    onClick={() => handleAddBlock('timestamp')}
                                />
                                <BlockCard
                                    icon={<StarIcon width="20" height="20" />}
                                    label="Badge / Etiqueta"
                                    onClick={() => handleAddBlock('badge')}
                                />
                            </Grid>
                        </Tabs.Content>

                        {/* Layers (Simplified) */}
                        <Tabs.Content value="layers">
                            <SimpleLayers />
                        </Tabs.Content>

                        {/* Data (Variables) */}
                        <Tabs.Content value="data">
                            <Box>
                                <Text size="2" weight="bold" mb="2" as="div">Campos Disponíveis</Text>
                                <Text size="1" color="gray" mb="2" as="div">Arraste para o desenho</Text>
                                <Flex direction="column" gap="2">
                                    {layout.props.map((prop, index) => (
                                        <Badge
                                            key={index}
                                            color="green"
                                            variant="soft"
                                            size="2"
                                            style={{ padding: '8px', justifyContent: 'flex-start', cursor: 'grab' }}
                                            title={`Campo: ${prop.name}`}
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
                                        </Badge>
                                    ))}
                                    {layout.props.length === 0 && (
                                        <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
                                            Nenhum dado configurado.
                                        </Text>
                                    )}
                                </Flex>
                            </Box>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Box>
        </Flex>
    );
};

const BlockCard: React.FC<{ icon: React.ReactNode, label: string, onClick: () => void }> = ({ icon, label, onClick }) => (
    <Card
        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
        onClick={onClick}
    >
        <Flex direction="column" align="center" gap="2" p="2">
            <Box style={{ color: 'var(--accent-9)' }}>
                {icon}
            </Box>
            <Text size="1" weight="medium" align="center">{label}</Text>
        </Flex>
    </Card>
);
