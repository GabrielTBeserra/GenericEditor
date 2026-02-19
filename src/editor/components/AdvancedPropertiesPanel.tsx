import { ChevronDownIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { Box, Button, DropdownMenu, Flex, Grid, IconButton, Select, Separator, Switch, Tabs, Text, TextField } from '@radix-ui/themes';
import { ColorInput } from './ColorPicker';
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
                    <Tabs.Trigger value="bindings" style={{ flex: 1 }}>Vínculos</Tabs.Trigger>
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

                    <Tabs.Content value="bindings">
                        <StyleBindingsSettings element={element} updateElement={updateElement} availableProps={state.availableProps || []} />
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

export const AnimationSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void }> = ({ element, updateElement }) => {
    const { portalContainer } = useEditor();
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
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                            {animation.type === 'none' ? 'Nenhuma' : animation.type === 'slideIn' ? 'Slide In (Padrão)' : animation.type === 'fadeIn' ? 'Fade In' : animation.type === 'smoothSlideUp' ? 'Slide Suave (Up)' : animation.type === 'popIn' ? 'Pop In' : animation.type === 'blurIn' ? 'Blur In' : animation.type === 'slideInLeft' ? 'Slide In (Esquerda)' : animation.type === 'slideInRight' ? 'Slide In (Direita)' : animation.type === 'slideInUp' ? 'Slide In (Cima)' : animation.type === 'slideInDown' ? 'Slide In (Baixo)' : animation.type === 'zoomIn' ? 'Zoom In' : animation.type === 'bounceIn' ? 'Bounce In' : animation.type === 'pulse' ? 'Pulse (Atenção)' : animation.type === 'shake' ? 'Shake (Atenção)' : 'Spin (Loop)'}
                            <ChevronDownIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'none' })}>Nenhuma</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'slideIn' })}>Slide In (Padrão)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'fadeIn' })}>Fade In</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'smoothSlideUp' })}>Slide Suave (Up)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'popIn' })}>Pop In</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'blurIn' })}>Blur In</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'slideInLeft' })}>Slide In (Esquerda)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'slideInRight' })}>Slide In (Direita)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'slideInUp' })}>Slide In (Cima)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'slideInDown' })}>Slide In (Baixo)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'zoomIn' })}>Zoom In</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'bounceIn' })}>Bounce In</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'pulse' })}>Pulse (Atenção)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'shake' })}>Shake (Atenção)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'spin' })}>Spin (Loop)</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
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
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                    {(animation.timingFunction || 'ease') === 'linear' ? 'Linear' : (animation.timingFunction || 'ease') === 'ease-in' ? 'Ease In' : (animation.timingFunction || 'ease') === 'ease-out' ? 'Ease Out' : (animation.timingFunction || 'ease') === 'ease-in-out' ? 'Ease In Out' : (animation.timingFunction || 'ease') === 'bounce' ? 'Bounce' : 'Ease'}
                                    <ChevronDownIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                <DropdownMenu.Item onSelect={() => handleUpdate({ timingFunction: 'linear' })}>Linear</DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => handleUpdate({ timingFunction: 'ease' })}>Ease</DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => handleUpdate({ timingFunction: 'ease-in' })}>Ease In</DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => handleUpdate({ timingFunction: 'ease-out' })}>Ease Out</DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => handleUpdate({ timingFunction: 'ease-in-out' })}>Ease In Out</DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => handleUpdate({ timingFunction: 'bounce' })}>Bounce</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
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

const FORMAT_TYPE_OPTIONS = ['text', 'boolean', 'date', 'number'] as const;
type FormatTypeOption = (typeof FORMAT_TYPE_OPTIONS)[number];

export const FormattingSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void }> = ({ element, updateElement }) => {
    const { portalContainer } = useEditor();
    const rawFormatting = element.formatting || { type: 'text' };
    const formatting = {
        ...rawFormatting,
        type: FORMAT_TYPE_OPTIONS.includes(rawFormatting.type as FormatTypeOption) ? rawFormatting.type : 'text'
    };

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
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                        {(element.containerExpansion || 'vertical') === 'vertical' ? 'Vertical (Altura Cresce)' : 'Horizontal (Largura Cresce)'}
                                        <ChevronDownIcon />
                                    </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                    <DropdownMenu.Item onSelect={() => updateElement(element.id, { containerExpansion: 'vertical' })}>Vertical (Altura Cresce)</DropdownMenu.Item>
                                    <DropdownMenu.Item onSelect={() => updateElement(element.id, { containerExpansion: 'horizontal' })}>Horizontal (Largura Cresce)</DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Box>
                    )}
                    <Separator size="4" mb="2" />
                </Box>
            )}

            <Box>
                <Text size="1" mb="1" as="div" color="gray">Tipo de Formatação</Text>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <Button variant="soft" color="gray" size="2" style={{ width: '100%', justifyContent: 'space-between' }}>
                            {formatting.type === 'text' && 'Texto (Padrão)'}
                            {formatting.type === 'boolean' && 'Booleano (Sim/Não)'}
                            {formatting.type === 'date' && 'Data'}
                            {formatting.type === 'number' && 'Número / Moeda'}
                            <ChevronDownIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100001 }}>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'text' })}>Texto (Padrão)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'boolean' })}>Booleano (Sim/Não)</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'date' })}>Data</DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleUpdate({ type: 'number' })}>Número / Moeda</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
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
                            <Select.Content {...(portalContainer && { container: portalContainer })}>
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

export const StyleSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void }> = ({ element, updateElement }) => {
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
        handleUpdate({ [prop]: `${value}px` });
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
                            onChange={e => handleUpdate({ borderRadius: `${parseInt(e.target.value) || 0}px` })}
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
                            onChange={e => handleUpdate({ padding: `${parseInt(e.target.value) || 0}px` })}
                        />
                    </Box>
                </Grid>
            </Box>

            <Separator size="4" my="2" />

            <Box>
                <Text size="2" weight="bold" mb="2">Sombra (Box Shadow)</Text>
                <Flex direction="column" gap="3">
                    <Box>
                        <Text size="1" mb="1" as="div" color="gray">Cor</Text>
                        <ColorInput
                            color={parseBoxShadowColor(style.boxShadow as string)}
                            onChange={c => handleUpdate({ boxShadow: updateBoxShadowColor(style.boxShadow as string, c) })}
                        />
                    </Box>
                    <Grid columns="2" gap="3">
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Blur (px)</Text>
                            <TextField.Root
                                type="number"
                                min="0"
                                value={parseBoxShadowBlur(style.boxShadow as string)}
                                onChange={e => handleUpdate({ boxShadow: updateBoxShadowBlur(style.boxShadow as string, parseInt(e.target.value) || 0) })}
                            />
                        </Box>
                        <Box>
                            <Text size="1" mb="1" as="div" color="gray">Spread (px)</Text>
                            <TextField.Root
                                type="number"
                                value={parseBoxShadowSpread(style.boxShadow as string)}
                                onChange={e => handleUpdate({ boxShadow: updateBoxShadowSpread(style.boxShadow as string, parseInt(e.target.value) || 0) })}
                            />
                        </Box>
                    </Grid>
                    <Button
                        variant="soft"
                        color="gray"
                        size="1"
                        onClick={() => handleUpdate({ boxShadow: style.boxShadow ? undefined : '0 4px 12px 0 rgba(0,0,0,0.15)' })}
                    >
                        {style.boxShadow ? 'Remover Sombra' : 'Adicionar Sombra'}
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};

const parseBoxShadowColor = (shadow: string | undefined): string => {
    if (!shadow || shadow === 'none') return '#0000001a';
    const colorMatch = shadow.match(/(?:rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}|[a-zA-Z]+)\s*$/);
    return colorMatch ? colorMatch[0].trim() : '#0000001a';
};

const parseBoxShadowBlur = (shadow: string | undefined): number => {
    if (!shadow || shadow === 'none') return 12;
    const parts = shadow.match(/(-?\d+(?:\.\d+)?)(?:px)?/g);
    return parts && parts.length >= 3 ? parseFloat(parts[2]) : 12;
};

const parseBoxShadowSpread = (shadow: string | undefined): number => {
    if (!shadow || shadow === 'none') return 0;
    const parts = shadow.match(/(-?\d+(?:\.\d+)?)(?:px)?/g);
    return parts && parts.length >= 4 ? parseFloat(parts[3]) : 0;
};

const updateBoxShadowColor = (shadow: string | undefined, color: string): string => {
    const x = 0, y = 4, blur = parseBoxShadowBlur(shadow), spread = parseBoxShadowSpread(shadow);
    const inset = shadow?.includes('inset') ? 'inset ' : '';
    return `${inset}${x}px ${y}px ${blur}px ${spread}px ${color}`;
};

const updateBoxShadowBlur = (shadow: string | undefined, blur: number): string => {
    const parts = (shadow || '0 4px 12px 0 #0000001a').match(/(-?\d+(?:\.\d+)?)(?:px)?/g) || ['0', '4', '12', '0'];
    const color = parseBoxShadowColor(shadow);
    const inset = shadow?.includes('inset') ? 'inset ' : '';
    return `${inset}${parts[0] || 0}px ${parts[1] || 4}px ${blur}px ${parts[3] || 0}px ${color}`;
};

const updateBoxShadowSpread = (shadow: string | undefined, spread: number): string => {
    const parts = (shadow || '0 4px 12px 0 #0000001a').match(/(-?\d+(?:\.\d+)?)(?:px)?/g) || ['0', '4', '12', '0'];
    const color = parseBoxShadowColor(shadow);
    const inset = shadow?.includes('inset') ? 'inset ' : '';
    return `${inset}${parts[0] || 0}px ${parts[1] || 4}px ${parts[2] || 12}px ${spread}px ${color}`;
};

const BINDABLE_STYLE_PROPS: { key: string; label: string }[] = [
    { key: 'color', label: 'Cor do texto' },
    { key: 'backgroundColor', label: 'Cor de fundo' },
    { key: 'borderColor', label: 'Cor da borda' },
    { key: 'boxShadowColor', label: 'Cor da sombra' }
];

export const StyleBindingsSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void; availableProps: IProp[] }> = ({ element, updateElement, availableProps }) => {
    const { portalContainer } = useEditor();
    const styleBindings = element.styleBindings || {};

    const handleBindingChange = (styleProp: string, variableName: string | null) => {
        const next = { ...styleBindings };
        if (variableName) {
            next[styleProp] = variableName;
        } else {
            delete next[styleProp];
        }
        updateElement(element.id, { styleBindings: Object.keys(next).length > 0 ? next : undefined });
    };

    return (
        <Flex direction="column" gap="3">
            <Text size="2" weight="bold">Vínculos de Estilo (Data Binding)</Text>
            <Text size="1" color="gray" mb="2">
                Vincule propriedades de estilo a variáveis de dados. O valor da variável será aplicado em tempo real (ex.: cores em formato #RRGGBB, rgba(), etc.).
            </Text>
            {BINDABLE_STYLE_PROPS.map(({ key, label }) => (
                <Box key={key}>
                    <Text size="1" color="gray" mb="1" as="div">{label}</Text>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="gray" size="1" style={{ width: '100%', justifyContent: 'space-between' }}>
                                {styleBindings[key] ? availableProps.find(p => p.dataName === styleBindings[key])?.name || styleBindings[key] : 'Nenhum'}
                                <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                            <DropdownMenu.Item onSelect={() => handleBindingChange(key, null)}>Nenhum</DropdownMenu.Item>
                            {availableProps.map(p => (
                                <DropdownMenu.Item key={p.dataName} onSelect={() => handleBindingChange(key, p.dataName)}>
                                    {p.name}
                                </DropdownMenu.Item>
                            ))}
                            {availableProps.length === 0 && (
                                <DropdownMenu.Item disabled>Nenhuma variável disponível</DropdownMenu.Item>
                            )}
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Box>
            ))}
        </Flex>
    );
};

export const ConditionalSettings: React.FC<{ element: IElement; updateElement: (id: string, changes: Partial<IElement>) => void; availableProps: IProp[] }> = ({ element, updateElement, availableProps }) => {
    const { portalContainer } = useEditor();
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
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft" color="gray" size="1" style={{ width: '100%', justifyContent: 'space-between' }}>
                                            {availableProps.find(p => p.dataName === condition.property)?.name || condition.property || 'Propriedade'}
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                        {availableProps.map(p => (
                                            <DropdownMenu.Item key={p.dataName} onSelect={() => handleUpdateRule(condition.id, { property: p.dataName })}>
                                                {p.name}
                                            </DropdownMenu.Item>
                                        ))}
                                        {availableProps.length === 0 && (
                                            <DropdownMenu.Item disabled>Nenhuma variável disponível</DropdownMenu.Item>
                                        )}
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>

                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft" color="gray" size="1" style={{ width: '100%', justifyContent: 'space-between' }}>
                                            {condition.operator === 'equals' ? 'Igual a' : condition.operator === 'notEquals' ? 'Diferente de' : condition.operator === 'contains' ? 'Contém' : condition.operator === 'greaterThan' ? 'Maior que' : 'Menor que'}
                                            <ChevronDownIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                        <DropdownMenu.Item onSelect={() => handleUpdateRule(condition.id, { operator: 'equals' })}>Igual a</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => handleUpdateRule(condition.id, { operator: 'notEquals' })}>Diferente de</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => handleUpdateRule(condition.id, { operator: 'contains' })}>Contém</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => handleUpdateRule(condition.id, { operator: 'greaterThan' })}>Maior que</DropdownMenu.Item>
                                        <DropdownMenu.Item onSelect={() => handleUpdateRule(condition.id, { operator: 'lessThan' })}>Menor que</DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
                            </Grid>

                            <TextField.Root
                                size="1"
                                placeholder="Valor"
                                value={condition.value}
                                onChange={e => handleUpdateRule(condition.id, { value: e.target.value })}
                            />
                            <Box mt="2">
                                <Text size="1" color="gray" mb="1" as="div">Cor quando verdadeiro</Text>
                                <ColorInput
                                    color={(condition.style?.color as string) || '#ff0000'}
                                    onChange={c => handleUpdateRule(condition.id, { style: { ...condition.style, color: c } })}
                                />
                            </Box>
                        </Box>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};
