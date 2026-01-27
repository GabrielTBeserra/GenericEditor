import { Cross2Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { Box, Button, Dialog, Flex, Grid, IconButton, Separator, Switch, Tabs, Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useEditor, type IElement, type IElementAnimation, type IElementCondition, type IElementFormatting } from '../context';
import { ColorInput } from './ColorPicker';

interface ElementAdvancedSettingsProps {
    elementId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const ElementAdvancedSettings: React.FC<ElementAdvancedSettingsProps> = ({ elementId, open, onOpenChange }) => {
    const { state, updateElement } = useEditor();
    const element = state.elements.find(el => el.id === elementId);

    if (!element) return null;

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Content style={{ maxWidth: 600, minHeight: 400 }}>
                <Dialog.Title>Configurações Avançadas</Dialog.Title>

                <Tabs.Root defaultValue="formatting">
                    <Tabs.List>
                        <Tabs.Trigger value="formatting">Formatação</Tabs.Trigger>
                        <Tabs.Trigger value="conditional">Condicional</Tabs.Trigger>
                        <Tabs.Trigger value="animation">Animação</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="formatting">
                            <FormattingSettings element={element} updateElement={updateElement} />
                        </Tabs.Content>

                        <Tabs.Content value="conditional">
                            <ConditionalSettings element={element} updateElement={updateElement} availableProps={state.availableProps} />
                        </Tabs.Content>

                        <Tabs.Content value="animation">
                            <AnimationSettings element={element} updateElement={updateElement} />
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>

                <Flex justify="end" mt="4">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">Fechar</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

const AnimationSettings: React.FC<{ element: IElement; updateElement: any }> = ({ element, updateElement }) => {
    const animation = element.animation || { type: 'none', duration: 1, delay: 0 };

    const handleUpdate = (updates: Partial<IElementAnimation>) => {
        updateElement(element.id, {
            animation: { ...animation, ...updates }
        });
    };

    return (
        <Flex direction="column" gap="3">
            <Text size="2" color="gray">
                Configure animações de entrada para este elemento.
            </Text>

            <Box>
                <Text size="1" mb="1" as="div">Tipo de Animação</Text>
                <select
                    value={animation.type}
                    onChange={(e) => handleUpdate({ type: e.target.value as any })}
                    style={{
                        width: '100%',
                        padding: '6px',
                        borderRadius: '4px',
                        border: '1px solid var(--gray-6)',
                        backgroundColor: 'var(--color-panel-solid)',
                        color: 'var(--gray-12)',
                        fontSize: '14px'
                    }}
                >
                    <option value="none">Nenhuma</option>
                    <option value="fadeIn">Fade In</option>
                    <option value="slideInLeft">Slide In (Esquerda)</option>
                    <option value="slideInRight">Slide In (Direita)</option>
                    <option value="slideInUp">Slide In (Cima)</option>
                    <option value="slideInDown">Slide In (Baixo)</option>
                    <option value="zoomIn">Zoom In</option>
                    <option value="bounceIn">Bounce In</option>
                    <option value="pulse">Pulse (Atenção)</option>
                    <option value="shake">Shake (Atenção)</option>
                    <option value="spin">Spin (Loop)</option>
                </select>
            </Box>

            {animation.type !== 'none' && (
                <>
                    <Grid columns="2" gap="3">
                        <Box>
                            <Text size="1" mb="1" as="div">Duração (s)</Text>
                            <TextField.Root
                                type="number"
                                step="0.1"
                                min="0.1"
                                value={animation.duration}
                                onChange={e => handleUpdate({ duration: parseFloat(e.target.value) || 0.5 })}
                            />
                        </Box>
                        <Box>
                            <Text size="1" mb="1" as="div">Atraso (s)</Text>
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
                        <Text size="1" mb="1" as="div">Curva de Tempo (Easing)</Text>
                        <select
                            value={animation.timingFunction || 'ease'}
                            onChange={(e) => handleUpdate({ timingFunction: e.target.value as any })}
                            style={{
                                width: '100%',
                                padding: '6px',
                                borderRadius: '4px',
                                border: '1px solid var(--gray-6)',
                                backgroundColor: 'var(--color-panel-solid)',
                                color: 'var(--gray-12)',
                                fontSize: '14px'
                            }}
                        >
                            <option value="linear">Linear</option>
                            <option value="ease">Ease</option>
                            <option value="ease-in">Ease In</option>
                            <option value="ease-out">Ease Out</option>
                            <option value="ease-in-out">Ease In Out</option>
                        </select>
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

const FormattingSettings: React.FC<{ element: IElement; updateElement: any }> = ({ element, updateElement }) => {
    const formatting = element.formatting || { type: 'text' };

    const handleUpdate = (updates: Partial<IElementFormatting>) => {
        updateElement(element.id, {
            formatting: { ...formatting, ...updates }
        });
    };

    return (
        <Flex direction="column" gap="3">
            <Text size="2" color="gray">
                Configure como os dados serão exibidos quando substituídos.
            </Text>

            {element.type === 'text' && (
                <Box>
                    <Flex align="center" gap="2" mb="3">
                        <Switch
                            checked={element.autoGrow || false}
                            onCheckedChange={(checked) => updateElement(element.id, { autoGrow: checked })}
                        />
                        <Text size="2">Expandir altura automaticamente (Multilinha)</Text>
                    </Flex>
                    <Separator size="4" mb="3" />
                </Box>
            )}

            <Box>
                <Text size="1" mb="1" as="div">Tipo de Formatação</Text>
                <select
                    value={formatting.type}
                    onChange={(e) => handleUpdate({ type: e.target.value as any })}
                    style={{
                        width: '100%',
                        padding: '6px',
                        borderRadius: '4px',
                        border: '1px solid var(--gray-6)',
                        backgroundColor: 'var(--color-panel-solid)',
                        color: 'var(--gray-12)',
                        fontSize: '14px'
                    }}
                >
                    <option value="text">Texto (Padrão)</option>
                    <option value="boolean">Booleano (Sim/Não)</option>
                    <option value="date">Data</option>
                    <option value="number">Número / Moeda</option>
                </select>
            </Box>

            {formatting.type === 'boolean' && (
                <Grid columns="2" gap="3">
                    <Box>
                        <Text size="1" mb="1" as="div">Texto para Verdadeiro</Text>
                        <TextField.Root
                            placeholder="Ex: Sim"
                            value={formatting.trueLabel || ''}
                            onChange={e => handleUpdate({ trueLabel: e.target.value })}
                        />
                    </Box>
                    <Box>
                        <Text size="1" mb="1" as="div">Texto para Falso</Text>
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
                    <Text size="1" mb="1" as="div">Formato da Data</Text>
                    <TextField.Root
                        placeholder="Ex: DD/MM/YYYY"
                        value={formatting.dateFormat || ''}
                        onChange={e => handleUpdate({ dateFormat: e.target.value })}
                    />
                    <Text size="1" color="gray" mt="1">
                        Use DD, MM, YYYY, HH, mm, ss.
                    </Text>
                </Box>
            )}

            {formatting.type === 'number' && (
                <Flex direction="column" gap="3">
                    <Box>
                        <Text size="1" mb="1" as="div">Estilo</Text>
                        <select
                            value={formatting.numberFormat || 'decimal'}
                            onChange={(e) => handleUpdate({ numberFormat: e.target.value as any })}
                            style={{
                                width: '100%',
                                padding: '6px',
                                borderRadius: '4px',
                                border: '1px solid var(--gray-6)',
                                backgroundColor: 'var(--color-panel-solid)',
                                color: 'var(--gray-12)',
                                fontSize: '14px'
                            }}
                        >
                            <option value="decimal">Decimal</option>
                            <option value="currency">Moeda</option>
                            <option value="percent">Porcentagem</option>
                        </select>
                    </Box>
                    {formatting.numberFormat === 'currency' && (
                        <Box>
                            <Text size="1" mb="1" as="div">Símbolo da Moeda</Text>
                            <TextField.Root
                                placeholder="Ex: R$"
                                value={formatting.currencySymbol || ''}
                                onChange={e => handleUpdate({ currencySymbol: e.target.value })}
                            />
                        </Box>
                    )}
                    <Box>
                        <Text size="1" mb="1" as="div">Casas Decimais</Text>
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

const ConditionalSettings: React.FC<{ element: IElement; updateElement: any; availableProps: any[] }> = ({ element, updateElement, availableProps }) => {
    const conditions = element.conditions || [];
    const [editingId, setEditingId] = useState<string | null>(null);

    const handleAdd = () => {
        const newRule: IElementCondition = {
            id: crypto.randomUUID(),
            property: availableProps.length > 0 ? availableProps[0].dataName : '',
            operator: 'equals',
            value: '',
            style: { color: '#ff0000' }
        };
        updateElement(element.id, { conditions: [...conditions, newRule] });
        setEditingId(newRule.id);
    };

    const handleRemove = (id: string) => {
        updateElement(element.id, { conditions: conditions.filter(c => c.id !== id) });
        if (editingId === id) setEditingId(null);
    };

    const handleUpdateRule = (id: string, updates: Partial<IElementCondition>) => {
        updateElement(element.id, {
            conditions: conditions.map(c => c.id === id ? { ...c, ...updates } : c)
        });
    };

    const handleUpdateStyle = (id: string, styleUpdates: React.CSSProperties) => {
        const rule = conditions.find(c => c.id === id);
        if (rule) {
            handleUpdateRule(id, { style: { ...rule.style, ...styleUpdates } });
        }
    };

    const editingRule = conditions.find(c => c.id === editingId);

    return (
        <Flex direction="column" gap="3">
            {!editingId ? (
                <>
                    <Text size="2" color="gray">
                        Adicione regras para alterar o estilo baseada no valor dos dados.
                    </Text>
                    <Box style={{ maxHeight: 200, overflowY: 'auto', border: '1px solid var(--gray-5)', borderRadius: 4 }}>
                        {conditions.length === 0 && (
                            <Flex align="center" justify="center" p="4">
                                <Text color="gray">Nenhuma regra definida.</Text>
                            </Flex>
                        )}
                        {conditions.map(rule => (
                            <Flex key={rule.id} align="center" justify="between" p="2" style={{ borderBottom: '1px solid var(--gray-4)' }}>
                                <Box onClick={() => setEditingId(rule.id)} style={{ cursor: 'pointer', flexGrow: 1 }}>
                                    <Text size="1" weight="bold">Se {rule.property} {rule.operator} {rule.value}</Text>
                                    <Flex gap="2" mt="1">
                                        {rule.style.color && <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: rule.style.color }} />}
                                        {rule.style.backgroundColor && <div style={{ width: 12, height: 12, border: '1px solid #ccc', backgroundColor: rule.style.backgroundColor }} />}
                                    </Flex>
                                </Box>
                                <IconButton variant="ghost" color="red" onClick={() => handleRemove(rule.id)}>
                                    <TrashIcon />
                                </IconButton>
                            </Flex>
                        ))}
                    </Box>
                    <Button onClick={handleAdd}>
                        <PlusIcon /> Adicionar Regra
                    </Button>
                </>
            ) : (
                <Flex direction="column" gap="3">
                    <Flex justify="between" align="center">
                        <Text weight="bold">Editar Regra</Text>
                        <Button variant="ghost" onClick={() => setEditingId(null)}>Voltar</Button>
                    </Flex>

                    {editingRule && (
                        <>
                            <Box>
                                <Text size="1" mb="1" as="div">Propriedade</Text>
                                <select
                                    value={editingRule.property}
                                    onChange={(e) => handleUpdateRule(editingRule.id, { property: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '6px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--gray-6)',
                                        backgroundColor: 'var(--color-panel-solid)',
                                        color: 'var(--gray-12)',
                                        fontSize: '14px'
                                    }}
                                >
                                    {availableProps.map(p => (
                                        <option key={p.dataName} value={p.dataName}>{p.name}</option>
                                    ))}
                                    <option value="__custom__">Outra...</option>
                                </select>
                                {editingRule.property === '__custom__' && (
                                    <TextField.Root
                                        placeholder="Nome da propriedade"
                                        mt="2"
                                        onChange={e => handleUpdateRule(editingRule.id, { property: e.target.value })}
                                    />
                                )}
                            </Box>

                            <Flex gap="2">
                                <Box flexGrow="1">
                                    <Text size="1" mb="1" as="div">Operador</Text>
                                    <select
                                        value={editingRule.operator}
                                        onChange={(e) => handleUpdateRule(editingRule.id, { operator: e.target.value as any })}
                                        style={{
                                            width: '100%',
                                            padding: '6px',
                                            borderRadius: '4px',
                                            border: '1px solid var(--gray-6)',
                                            backgroundColor: 'var(--color-panel-solid)',
                                            color: 'var(--gray-12)',
                                            fontSize: '14px'
                                        }}
                                    >
                                        <option value="equals">Igual a</option>
                                        <option value="notEquals">Diferente de</option>
                                        <option value="contains">Contém</option>
                                        <option value="greaterThan">Maior que</option>
                                        <option value="lessThan">Menor que</option>
                                        <option value="truthy">É Verdadeiro (Truthy)</option>
                                        <option value="falsy">É Falso (Falsy)</option>
                                    </select>
                                </Box>
                                {['equals', 'notEquals', 'contains', 'greaterThan', 'lessThan'].includes(editingRule.operator) && (
                                    <Box flexGrow="1">
                                        <Text size="1" mb="1" as="div">Valor</Text>
                                        <TextField.Root
                                            value={editingRule.value}
                                            onChange={e => handleUpdateRule(editingRule.id, { value: e.target.value })}
                                        />
                                    </Box>
                                )}
                            </Flex>

                            <Flex gap="2">
                                <Box flexGrow="1">
                                    <Text size="1" mb="1" as="div">Ação</Text>
                                    <select
                                        value={editingRule.style.display === 'none' ? 'hide' : 'style'}
                                        onChange={(e) => {
                                            if (e.target.value === 'hide') {
                                                handleUpdateStyle(editingRule.id, { display: 'none' });
                                            } else {
                                                handleUpdateStyle(editingRule.id, { display: undefined });
                                            }
                                        }}
                                        style={{
                                            width: '100%',
                                            padding: '6px',
                                            borderRadius: '4px',
                                            border: '1px solid var(--gray-6)',
                                            backgroundColor: 'var(--color-panel-solid)',
                                            color: 'var(--gray-12)',
                                            fontSize: '14px'
                                        }}
                                    >
                                        <option value="style">Aplicar Estilo</option>
                                        <option value="hide">Ocultar Elemento</option>
                                    </select>
                                </Box>
                            </Flex>

                            <Separator size="4" my="2" />

                            {editingRule.style.display !== 'none' && (
                                <>
                                    <Text size="2" weight="bold">Aplicar Estilos</Text>

                                    <Grid columns="2" gap="3">
                                        <Box>
                                            <Text size="1" mb="1" as="div">Cor do Texto</Text>
                                            <ColorInput
                                                color={editingRule.style.color as string || '#000000'}
                                                onChange={val => handleUpdateStyle(editingRule.id, { color: val })}
                                            />
                                        </Box>
                                        <Box>
                                            <Text size="1" mb="1" as="div">Cor de Fundo</Text>
                                            <Flex gap="2">
                                                <Box flexGrow="1">
                                                    <ColorInput
                                                        color={editingRule.style.backgroundColor as string || '#ffffff'}
                                                        onChange={val => handleUpdateStyle(editingRule.id, { backgroundColor: val })}
                                                    />
                                                </Box>
                                                <IconButton
                                                    variant="outline"
                                                    onClick={() => handleUpdateStyle(editingRule.id, { backgroundColor: undefined })}
                                                    title="Limpar fundo"
                                                >
                                                    <Cross2Icon />
                                                </IconButton>
                                            </Flex>
                                        </Box>
                                    </Grid>
                                    <Flex gap="3" mt="2">
                                        <Button
                                            variant={editingRule.style.fontWeight === 'bold' ? 'solid' : 'outline'}
                                            onClick={() => handleUpdateStyle(editingRule.id, { fontWeight: editingRule.style.fontWeight === 'bold' ? 'normal' : 'bold' })}
                                        >
                                            Bold
                                        </Button>
                                        <Button
                                            variant={editingRule.style.fontStyle === 'italic' ? 'solid' : 'outline'}
                                            onClick={() => handleUpdateStyle(editingRule.id, { fontStyle: editingRule.style.fontStyle === 'italic' ? 'normal' : 'italic' })}
                                        >
                                            Italic
                                        </Button>
                                        <Button
                                            variant={editingRule.style.textDecoration === 'line-through' ? 'solid' : 'outline'}
                                            onClick={() => handleUpdateStyle(editingRule.id, { textDecoration: editingRule.style.textDecoration === 'line-through' ? 'none' : 'line-through' })}
                                        >
                                            Riscado
                                        </Button>
                                    </Flex>
                                </>
                            )}
                        </>
                    )}
                </Flex>
            )}
        </Flex>
    );
};
