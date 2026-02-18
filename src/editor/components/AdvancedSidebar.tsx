import { Badge, Box, Flex, Tabs, Text } from '@radix-ui/themes';
import React from 'react';
import type { ILayout } from '../types';
import { EditorSettings } from './EditorSettings';
import { HistoryPanel } from './HistoryPanel';
import { LayersPanel } from './LayersPanel';

interface AdvancedSidebarProps {
    layout: ILayout;
    onOpenSettings: (id: string) => void;
}

export const AdvancedSidebar: React.FC<AdvancedSidebarProps> = ({ layout, onOpenSettings }) => {
    return (
        <Flex direction="column">
            <Box p="4" style={{ borderBottom: '1px solid var(--gray-5)' }}>
                <EditorSettings />
            </Box>

            <Box p="4">
                <Tabs.Root defaultValue="layers">
                    <Tabs.List>
                        <Tabs.Trigger value="layers">Camadas</Tabs.Trigger>
                        <Tabs.Trigger value="history">Histórico</Tabs.Trigger>
                        <Tabs.Trigger value="vars">Variáveis</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="layers">
                            <LayersPanel onOpenSettings={onOpenSettings} />
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
        </Flex>
    );
};
