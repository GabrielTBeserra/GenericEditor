import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, Grid, IconButton, Select, Separator, Switch, Tabs, Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useEditor, type IElement, type IElementAnimation, type IElementCondition, type IElementFormatting } from '../context';
import type { IProp } from '../types';

interface AdvancedPropertiesPanelProps {
    elementId: string;
}

export const AdvancedPropertiesPanel: React.FC<AdvancedPropertiesPanelProps> = ({ elementId }) => {
    const { state, updateElement } = useEditor();
    const element = state.elements.find(el => el.id === elementId);

    if (!element) return null;

    return (
        <Box pt="2">
            <Tabs.Root defaultValue="formatting">
                <Tabs.List>
                    <Tabs.Trigger value="formatting" style={{ flex: 1 }}>Formatação</Tabs.Trigger>
                    <Tabs.Trigger value="style" style={{ flex: 1 }}>Estilo</Tabs.Trigger>
                    <Tabs.Trigger value="conditional" style={{ flex: 1 }}>Regras</Tabs.Trigger>
                    <Tabs.Trigger value="animation" style={{ flex: 1 }}>Anim</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="formatting">
                        <FormattingSettings element={element} updateElement={updateElement} />
                    </Tabs.Content>

                    <Tabs.Content value="style">
                        <StyleSettings element={element} updateElement={updateElement} />
                    </Tabs.Content>

                    <Tabs.Content value="conditional">
                        <ConditionalSettings element={element} updateElement={updateElement} availableProps={state.availableProps || []} />
                    </Tabs.Content>

                    <Tabs.Content value="animation">
                        <AnimationSettings element={element} updateElement={updateElement} />
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </Box>
    );
};

const AnimationSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void }> = ({ element, updateElement }) => {
    const animation = element.animation || { type: 'none', duration: 1, delay: 0 };

    const handleUpdate = (updates: Partial<IElementAnimation>) => {
        updateElement(element.id, {
            animation: { ...animation, ...updates }
        });
    };

    return (
        <Flex direction="column" gap="3">
            <Box>
                <Text size="1" mb="1" as="div" color="gray">Tipo de Animação</Text>
                <Select.Root 
                    value={animation.type} 
                    onValueChange={(val) => handleUpdate({ type: val as IElementAnimation['type'] })}
                >
                    <Select.Trigger style={{ width: '100%' }} />
                    <Select.Content>
                        <Select.Item value="none">Nenhuma</Select.Item>
                        <Select.Item value="fadeIn">Fade In</Select.Item>
                        <Select.Item value="smoothSlideUp">Slide Suave (Up)</Select.Item>
                        <Select.Item value="popIn">Pop In</Select.Item>
                        <Select.Item value="blurIn">Blur In</Select.Item>
                        <Select.Item value="slideInLeft">Slide In (Esquerda)</Select.Item>
                        <Select.Item value="slideInRight">Slide In (Direita)</Select.Item>
                        <Select.Item value="slideInUp">Slide In (Cima)</Select.Item>
                        <Select.Item value="slideInDown">Slide In (Baixo)</Select.Item>
                        <Select.Item value="zoomIn">Zoom In</Select.Item>
                        <Select.Item value="bounceIn">Bounce In</Select.Item>
                        <Select.Item value="pulse">Pulse (Atenção)</Select.Item>
                        <Select.Item value="shake">Shake (Atenção)</Select.Item>
                        <Select.Item value="spin">Spin (Loop)</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Box>

            {animation.type !== 'none' && (
                <>
                    <Grid columns="2" gap="3">
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Duração (s)</Text>
                            <TextField.Root
                                type="number"
                                step="0.1"
                                min="0.1"
                                value={animation.duration}
                                onChange={e => handleUpdate({ duration: parseFloat(e.target.value) || 0.5 })}
                            />
                        </Box>
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Atraso (s)</Text>
                            <TextField.Root
                                type="number"
                                step="0.1"
                                min="0"
                                value={animation.delay}
                                onChange={e => handleUpdate({ delay: parseFloat(e.target.value) || 0 })}
                            />
                        </Box>
                    </Grid>

                    <Box>
                        <Text size="1" mb="1" as="div" color="gray">Curva de Tempo</Text>
                        <Select.Root 
                            value={animation.timingFunction || 'ease'} 
                            onValueChange={(val) => handleUpdate({ timingFunction: val as IElementAnimation['timingFunction'] })}
                        >
                            <Select.Trigger style={{ width: '100%' }} />
                            <Select.Content>
                                <Select.Item value="linear">Linear</Select.Item>
                                <Select.Item value="ease">Ease</Select.Item>
                                <Select.Item value="ease-in">Ease In</Select.Item>
                                <Select.Item value="ease-out">Ease Out</Select.Item>
                                <Select.Item value="ease-in-out">Ease In Out</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </Box>

                    {['pulse', 'shake', 'spin'].includes(animation.type) && (
                        <Box>
                            <Flex align="center" gap="2" mt="2">
                                <Switch
                                    checked={animation.iterationCount === 'infinite'}
                                    onCheckedChange={(checked) => handleUpdate({ iterationCount: checked ? 'infinite' : 1 })}
                                />
                                <Text size="2">Repetir Infinitamente</Text>
                            </Flex>
                        </Box>
                    )}
                </>
            )}
        </Flex>
    );
};

const FormattingSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void }> = ({ element, updateElement }) => {
    const formatting = element.formatting || { type: 'text' };

    const handleUpdate = (updates: Partial<IElementFormatting>) => {
        updateElement(element.id, {
            formatting: { ...formatting, ...updates }
        });
    };

    return (
        <Flex direction="column" gap="3">
            {(element.type === 'text' || element.type === 'text-container') && (
                <Box>
                    <Flex align="center" gap="2" mb="3">
                        <Switch
                            checked={element.autoGrow || false}
                            onCheckedChange={(checked) => updateElement(element.id, { autoGrow: checked })}
                        />
                        <Text size="2">
                            {element.type === 'text-container'
                                ? "Expandir container automaticamente"
                                : "Expandir altura automaticamente"}
                        </Text>
                    </Flex>

                    {element.type === 'text-container' && element.autoGrow && (
                        <Box mb="3" ml="4">
                            <Text size="1" mb="1" as="div" color="gray">Direção de Expansão</Text>
                            <Select.Root 
                                value={element.containerExpansion || 'vertical'} 
                                onValueChange={(val) => updateElement(element.id, { containerExpansion: val as 'vertical' | 'horizontal' })}
                            >
                                <Select.Trigger style={{ width: '100%' }} />
                                <Select.Content>
                                    <Select.Item value="vertical">Vertical (Altura Cresce)</Select.Item>
                                    <Select.Item value="horizontal">Horizontal (Largura Cresce)</Select.Item>
                                </Select.Content>
                            </Select.Root>
                        </Box>
                    )}
                    <Separator size="4" mb="2" />
                </Box>
            )}

            <Box>
                <Text size="1" mb="1" as="div" color="gray">Tipo de Formatação</Text>
                <Select.Root 
                    value={formatting.type} 
                    onValueChange={(val) => handleUpdate({ type: val as IElementFormatting['type'] })}
                >
                    <Select.Trigger style={{ width: '100%' }} />
                    <Select.Content>
                        <Select.Item value="text">Texto (Padrão)</Select.Item>
                        <Select.Item value="boolean">Booleano (Sim/Não)</Select.Item>
                        <Select.Item value="date">Data</Select.Item>
                        <Select.Item value="number">Número / Moeda</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Box>

            {formatting.type === 'boolean' && (
                <Grid columns="2" gap="3">
                    <Box>
                        <Text size="1" mb="1" as="div" color="gray">Texto para Verdadeiro</Text>
                        <TextField.Root
                            placeholder="Ex: Sim"
                            value={formatting.trueLabel || ''}
                            onChange={e => handleUpdate({ trueLabel: e.target.value })}
                        />
                    </Box>
                    <Box>
                        <Text size="1" mb="1" as="div" color="gray">Texto para Falso</Text>
                        <TextField.Root
                            placeholder="Ex: Não"
                            value={formatting.falseLabel || ''}
                            onChange={e => handleUpdate({ falseLabel: e.target.value })}
                        />
                    </Box>
                </Grid>
            )}

            {formatting.type === 'date' && (
                <Box>
                    <Text size="1" mb="1" as="div" color="gray">Formato da Data</Text>
                    <TextField.Root
                        placeholder="Ex: DD/MM/YYYY"
                        value={formatting.dateFormat || ''}
                        onChange={e => handleUpdate({ dateFormat: e.target.value })}
                    />
                    <Text size="1" color="gray" mt="1" style={{ fontSize: 10 }}>
                        Use DD, MM, YYYY, HH, mm, ss.
                    </Text>
                </Box>
            )}

            {formatting.type === 'number' && (
                <Flex direction="column" gap="3">
                    <Box>
                        <Text size="1" mb="1" as="div" color="gray">Estilo</Text>
                        <Select.Root 
                            value={formatting.numberFormat || 'decimal'} 
                            onValueChange={(val) => handleUpdate({ numberFormat: val as IElementFormatting['numberFormat'] })}
                        >
                            <Select.Trigger style={{ width: '100%' }} />
                            <Select.Content>
                                <Select.Item value="decimal">Decimal</Select.Item>
                                <Select.Item value="currency">Moeda</Select.Item>
                                <Select.Item value="percent">Porcentagem</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </Box>
                    {formatting.numberFormat === 'currency' && (
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Símbolo da Moeda</Text>
                            <TextField.Root
                                placeholder="Ex: R$"
                                value={formatting.currencySymbol || ''}
                                onChange={e => handleUpdate({ currencySymbol: e.target.value })}
                            />
                        </Box>
                    )}
                    <Box>
                        <Text size="1" mb="1" as="div" color="gray">Casas Decimais</Text>
                        <TextField.Root
                            type="number"
                            placeholder="2"
                            value={formatting.decimalPlaces !== undefined ? formatting.decimalPlaces : ''}
                            onChange={e => handleUpdate({ decimalPlaces: parseInt(e.target.value) || 0 })}
                        />
                    </Box>
                </Flex>
            )}
        </Flex>
    );
};

const StyleSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void }> = ({ element, updateElement }) => {
    const style = element.style || {};
    const [isIndividual, setIsIndividual] = useState(
        style.borderTopLeftRadius !== undefined ||
        style.borderTopRightRadius !== undefined ||
        style.borderBottomRightRadius !== undefined ||
        style.borderBottomLeftRadius !== undefined
    );

    const handleUpdate = (updates: React.CSSProperties) => {
        updateElement(element.id, {
            style: { ...style, ...updates }
        });
    };

    const handleRadiusChange = (val: number | string, prop: string) => {
        const value = typeof val === 'number' ? val : parseInt(val as string) || 0;
        handleUpdate({ [prop]: value });
    };

    return (
        <Flex direction="column" gap="3">
            <Box>
                <Flex align="center" justify="between" mb="2">
                    <Text size="2" weight="bold">Arredondamento</Text>
                    <Flex align="center" gap="2">
                        <Text size="1">Individual</Text>
                        <Switch
                            checked={isIndividual}
                            onCheckedChange={(checked) => {
                                setIsIndividual(checked);
                                if (!checked) {
                                    const common = style.borderTopLeftRadius || style.borderRadius || 0;
                                    handleUpdate({
                                        borderRadius: common,
                                        borderTopLeftRadius: undefined,
                                        borderTopRightRadius: undefined,
                                        borderBottomRightRadius: undefined,
                                        borderBottomLeftRadius: undefined
                                    });
                                } else {
                                    const common = style.borderRadius || 0;
                                    handleUpdate({
                                        borderRadius: undefined,
                                        borderTopLeftRadius: common,
                                        borderTopRightRadius: common,
                                        borderBottomRightRadius: common,
                                        borderBottomLeftRadius: common
                                    });
                                }
                            }}
                        />
                    </Flex>
                </Flex>

                {!isIndividual ? (
                    <Box>
                        <Text size="1" mb="1" as="div" color="gray">Raio (Todos os cantos)</Text>
                        <TextField.Root
                            type="number"
                            min="0"
                            value={parseInt(style.borderRadius as string) || 0}
                            onChange={e => handleUpdate({ borderRadius: parseInt(e.target.value) || 0 })}
                        />
                    </Box>
                ) : (
                    <Grid columns="2" gap="3">
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Sup. Esq.</Text>
                            <TextField.Root
                                type="number"
                                min="0"
                                value={parseInt(style.borderTopLeftRadius as string) || 0}
                                onChange={e => handleRadiusChange(e.target.value, 'borderTopLeftRadius')}
                            />
                        </Box>
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Sup. Dir.</Text>
                            <TextField.Root
                                type="number"
                                min="0"
                                value={parseInt(style.borderTopRightRadius as string) || 0}
                                onChange={e => handleRadiusChange(e.target.value, 'borderTopRightRadius')}
                            />
                        </Box>
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Inf. Esq.</Text>
                            <TextField.Root
                                type="number"
                                min="0"
                                value={parseInt(style.borderBottomLeftRadius as string) || 0}
                                onChange={e => handleRadiusChange(e.target.value, 'borderBottomLeftRadius')}
                            />
                        </Box>
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Inf. Dir.</Text>
                            <TextField.Root
                                type="number"
                                min="0"
                                value={parseInt(style.borderBottomRightRadius as string) || 0}
                                onChange={e => handleRadiusChange(e.target.value, 'borderBottomRightRadius')}
                            />
                        </Box>
                    </Grid>
                )}
            </Box>

            <Separator size="4" my="2" />

            <Box>
                <Text size="2" weight="bold" mb="2">Espaçamento Interno</Text>
                <Grid columns="2" gap="3">
                    <Box>
                        <Text size="1" mb="1" as="div" color="gray">Tamanho (px)</Text>
                        <TextField.Root
                            type="number"
                            min="0"
                            value={parseInt(style.padding as string) || 0}
                            onChange={e => handleUpdate({ padding: parseInt(e.target.value) || 0 })}
                        />
                    </Box>
                </Grid>
            </Box>
        </Flex>
    );
};

const ConditionalSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void; availableProps: IProp[] }> = ({ element, updateElement, availableProps }) => {
    const conditions = element.conditions || [];

    const handleAdd = () => {
        const newRule: IElementCondition = {
            id: crypto.randomUUID(),
            property: availableProps.length > 0 ? availableProps[0].dataName : '',
            operator: 'equals',
            value: '',
            style: { color: '#ff0000' }
        };
        updateElement(element.id, { conditions: [...conditions, newRule] });
    };

    const handleRemove = (id: string) => {
        updateElement(element.id, { conditions: conditions.filter(c => c.id !== id) });
    };

    const handleUpdateRule = (id: string, updates: Partial<IElementCondition>) => {
        updateElement(element.id, {
            conditions: conditions.map(c => c.id === id ? { ...c, ...updates } : c)
        });
    };

    return (
        <Flex direction="column" gap="3">
            <Flex justify="between" align="center">
                <Text size="2" color="gray">Regras de Exibição</Text>
                <Button size="1" variant="soft" onClick={handleAdd}>
                    <PlusIcon /> Nova Regra
                </Button>
            </Flex>

            {conditions.length === 0 ? (
                <Text size="1" color="gray" style={{ fontStyle: 'italic' }}>
                    Nenhuma regra condicional definida.
                </Text>
            ) : (
                <Flex direction="column" gap="2">
                    {conditions.map(condition => (
                        <Box key={condition.id} style={{ border: '1px solid var(--gray-6)', borderRadius: 4, padding: 8 }}>
                            <Flex justify="between" align="center" mb="2">
                                <Text size="1" weight="bold">Se {condition.property}...</Text>
                                <IconButton size="1" color="red" variant="ghost" onClick={() => handleRemove(condition.id)}>
                                    <TrashIcon />
                                </IconButton>
                            </Flex>

                            <Grid columns="2" gap="2" mb="2">
                                <Select.Root 
                                    value={condition.property} 
                                    onValueChange={(val) => handleUpdateRule(condition.id, { property: val })}
                                >
                                    <Select.Trigger style={{ width: '100%' }} placeholder="Propriedade" />
                                    <Select.Content>
                                        {availableProps.map(p => (
                                            <Select.Item key={p.dataName} value={p.dataName}>{p.name}</Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Root>

                                <Select.Root 
                                    value={condition.operator} 
                                    onValueChange={(val) => handleUpdateRule(condition.id, { operator: val as any })}
                                >
                                    <Select.Trigger style={{ width: '100%' }} />
                                    <Select.Content>
                                        <Select.Item value="equals">Igual a</Select.Item>
                                        <Select.Item value="notEquals">Diferente de</Select.Item>
                                        <Select.Item value="contains">Contém</Select.Item>
                                        <Select.Item value="greaterThan">Maior que</Select.Item>
                                        <Select.Item value="lessThan">Menor que</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            </Grid>

                            <TextField.Root
                                size="1"
                                placeholder="Valor"
                                value={condition.value}
                                onChange={e => handleUpdateRule(condition.id, { value: e.target.value })}
                            />
                        </Box>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};
