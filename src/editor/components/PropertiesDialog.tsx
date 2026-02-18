import {
    BookmarkIcon,
    BorderAllIcon,
    BorderBottomIcon,
    BorderLeftIcon,
    BorderRightIcon,
    BorderTopIcon,
    CaretDownIcon,
    CaretRightIcon,
    CopyIcon,
    Cross2Icon,
    EyeNoneIcon,
    EyeOpenIcon,
    FontItalicIcon,
    LockClosedIcon,
    LockOpen1Icon,
    MagnifyingGlassIcon,
    PlusIcon,
    ResetIcon,
    StrikethroughIcon,
    TextAlignCenterIcon,
    TextAlignJustifyIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
    TrashIcon,
    UnderlineIcon
} from '@radix-ui/react-icons';
import { Box, Button, Dialog, DropdownMenu, Flex, Grid, IconButton, SegmentedControl, Select, Slider, Tabs, Text, TextArea, TextField, Tooltip } from '@radix-ui/themes';
import React, { useEffect, useMemo, useState } from 'react';
import { useEditor, type IElement } from '../context';
import { ensureFontInOptions, FONT_WEIGHT_OPTIONS_FULL, normalizeFontWeightForSelect } from '../utils/helpers';
import { AnimationSettings, ConditionalSettings, FormattingSettings } from './AdvancedPropertiesPanel';
import { ColorInput } from './ColorPicker';

// --- Helper Components ---

const AccordionItem: React.FC<{
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    onReset?: () => void;
}> = ({ title, isOpen, onToggle, children, onReset }) => {
    return (
        <Box style={{ borderBottom: '1px solid var(--gray-4)' }}>
            <Flex align="center" style={{ width: '100%' }}>
                <Button
                    variant="ghost"
                    onClick={onToggle}
                    style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        padding: '12px 8px',
                        borderRadius: 0,
                        height: 'auto',
                        cursor: 'pointer',
                        color: 'var(--gray-12)'
                    }}
                >
                    <Text weight="bold" size="2">{title}</Text>
                    {isOpen ? <CaretDownIcon /> : <CaretRightIcon />}
                </Button>
                {onReset && isOpen && (
                    <Tooltip content="Resetar para padrão">
                        <IconButton
                            variant="ghost"
                            color="gray"
                            onClick={(e) => { e.stopPropagation(); onReset(); }}
                            style={{ marginRight: 8 }}
                        >
                            <ResetIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Flex>
            {isOpen && (
                <Box p="3" style={{ backgroundColor: 'var(--gray-2)' }}>
                    {children}
                </Box>
            )}
        </Box>
    );
};

interface UnitInputProps {
    value: string | number | undefined;
    onChange: (val: string) => void;
    units?: string[];
    min?: number;
    max?: number;
    placeholder?: string;
    label?: string;
}

/** Sentinel for empty unit - Radix Select.Item cannot use value="" */
const EMPTY_UNIT = '__';

const UnitInput: React.FC<UnitInputProps> = ({ value, onChange, units = ['px', '%', 'em', 'rem', 'vw', 'vh'], min, max, placeholder, label }) => {
    const toSelectValue = (u: string) => (u === '' ? EMPTY_UNIT : u);
    const fromSelectValue = (v: string) => (v === EMPTY_UNIT ? '' : v);

    const parseValue = (val: string | number | undefined) => {
        if (val === undefined || val === null || val === '') return { num: '', unit: units[0] };
        const strVal = String(val);
        const match = strVal.match(/^(-?[\d.]+)([a-z%]+)?$/i);
        if (match) {
            return { num: match[1], unit: match[2] || units[0] };
        }
        return { num: '', unit: units[0] };
    };

    const [localValue, setLocalValue] = useState(parseValue(value));

    useEffect(() => {
        setLocalValue(parseValue(value));
    }, [value]);

    const handleChange = (num: string, unit: string) => {
        if (num === '') {
            onChange('');
            return;
        }
        onChange(`${num}${unit}`);
    };

    return (
        <Box>
            {label && <Text size="1" color="gray" mb="1" as="div">{label}</Text>}
            <Flex>
                <TextField.Root
                    type="number"
                    value={localValue.num}
                    onChange={e => {
                        const newNum = e.target.value;
                        setLocalValue({ ...localValue, num: newNum });
                        handleChange(newNum, localValue.unit);
                    }}
                    placeholder={placeholder}
                    style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, flex: 1 }}
                    min={min}
                    max={max}
                />
                <Select.Root
                    value={toSelectValue(localValue.unit)}
                    onValueChange={val => {
                        const unit = fromSelectValue(val);
                        setLocalValue({ ...localValue, unit });
                        handleChange(localValue.num, unit);
                    }}
                >
                    <Select.Trigger style={{ width: 60, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -1 }} />
                    <Select.Content>
                        {units.map(u => <Select.Item key={u || EMPTY_UNIT} value={toSelectValue(u)}>{u || placeholder || '—'}</Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </Flex>
        </Box>
    );
};

interface SideInputProps {
    values: { top?: string, right?: string, bottom?: string, left?: string };
    onChange: (values: { top?: string, right?: string, bottom?: string, left?: string }) => void;
    label?: string;
}

const SideInput: React.FC<SideInputProps> = ({ values, onChange, label }) => {
    const [isLinked, setIsLinked] = useState(true);

    const handleAllChange = (val: string) => {
        onChange({ top: val, right: val, bottom: val, left: val });
    };

    const handleIndividualChange = (side: keyof typeof values, val: string) => {
        onChange({ ...values, [side]: val });
    };

    return (
        <Box>
            <Flex justify="between" align="center" mb="1">
                {label && <Text size="1" color="gray">{label}</Text>}
                <Tooltip content={isLinked ? "Desvincular lados" : "Vincular lados"}>
                    <IconButton
                        size="1"
                        variant="ghost"
                        color={isLinked ? "blue" : "gray"}
                        onClick={() => setIsLinked(!isLinked)}
                    >
                        {isLinked ? <LinkIcon /> : <UnlinkIcon />}
                    </IconButton>
                </Tooltip>
            </Flex>
            {isLinked ? (
                <UnitInput
                    value={values.top || ''}
                    onChange={handleAllChange}
                    placeholder="Todos"
                />
            ) : (
                <Grid columns="2" gap="2">
                    <UnitInput value={values.top} onChange={v => handleIndividualChange('top', v)} label="Top" />
                    <UnitInput value={values.right} onChange={v => handleIndividualChange('right', v)} label="Right" />
                    <UnitInput value={values.bottom} onChange={v => handleIndividualChange('bottom', v)} label="Bottom" />
                    <UnitInput value={values.left} onChange={v => handleIndividualChange('left', v)} label="Left" />
                </Grid>
            )}
        </Box>
    );
};

// Icons for Link/Unlink (simulated as they might not be exported directly with these names)
const LinkIcon = () => (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 6.5L1.35355 9.64645C0.908293 10.0917 0.908293 10.8134 1.35355 11.2587L3.74132 13.6464C4.18658 14.0917 4.90829 14.0917 5.35355 13.6464L8.5 10.5M10.5 8.5L13.6464 5.35355C14.0917 4.90829 14.0917 4.18658 13.6464 3.74132L11.2587 1.35355C10.8134 0.908293 10.0917 0.908293 9.64645 1.35355L6.5 4.5M6.5 8.5H8.5" stroke="currentColor"></path></svg>
);
const UnlinkIcon = () => (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 6.5L1.35355 9.64645C0.908293 10.0917 0.908293 10.8134 1.35355 11.2587L3.74132 13.6464C4.18658 14.0917 4.90829 14.0917 5.35355 13.6464L8.5 10.5M10.5 8.5L13.6464 5.35355C14.0917 4.90829 14.0917 4.18658 13.6464 3.74132L11.2587 1.35355C10.8134 0.908293 10.0917 0.908293 9.64645 1.35355L6.5 4.5" stroke="currentColor"></path></svg>
);


export const PropertiesDialog: React.FC = () => {
    const { state, setPropertiesPanelOpen, updateElement, updateElements, removeSelected, copy, paste, addElement } = useEditor();
    const { isPropertiesPanelOpen, selectedElementIds, elements } = state;

    const selectedElements = useMemo(() => {
        return elements.filter(el => selectedElementIds.includes(el.id));
    }, [elements, selectedElementIds]);

    const element = selectedElements[0];
    const isMulti = selectedElements.length > 1;

    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        content: true,
        layout: true,
        typography: true,
        appearance: false,
        borders: false,
        effects: false,
        transform: false,
        animation: false,
        conditions: false,
        formatting: false,
        spacing: false
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [presets, setPresets] = useState<Record<string, Partial<IElement>>>({});

    useEffect(() => {
        const savedPresets = localStorage.getItem('editor-presets');
        if (savedPresets) {
            try {
                setPresets(JSON.parse(savedPresets));
            } catch (e) {
                console.error("Failed to load presets", e);
            }
        }
    }, []);

    const savePreset = (name: string) => {
        if (!element) return;
        const newPresets = { ...presets, [name]: { style: element.style } };
        setPresets(newPresets);
        localStorage.setItem('editor-presets', JSON.stringify(newPresets));
    };

    const loadPreset = (name: string) => {
        const preset = presets[name];
        if (preset && preset.style) {
            handleStyleUpdate(preset.style);
        }
    };

    if (!isPropertiesPanelOpen || !element) return null;

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleUpdate = (updates: Partial<IElement>) => {
        if (isMulti) {
            updateElements(selectedElementIds.map(id => ({ id, changes: updates })));
        } else {
            updateElement(element.id, updates);
        }
    };

    const handleDuplicate = () => {
        if (isMulti) {
            copy();
            paste();
        } else {
            const { id: _id, ...rest } = element;
            addElement({ ...rest, x: element.x + 20, y: element.y + 20 });
        }
    };

    const handleStyleUpdate = (styleUpdates: React.CSSProperties) => {
        if (isMulti) {
            const updates = selectedElements.map(el => ({
                id: el.id,
                changes: { style: { ...el.style, ...styleUpdates } }
            }));
            updateElements(updates);
        } else {
            updateElement(element.id, { style: { ...element.style, ...styleUpdates } });
        }
    };

    const handleResetStyle = (props: (keyof React.CSSProperties)[]) => {
        const effectiveReset: any = {};
        props.forEach(p => effectiveReset[p] = undefined); // Use undefined to remove
        handleStyleUpdate(effectiveReset);
    };

    const matchesSearch = (sectionTitle: string, keywords: string[]) => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return sectionTitle.toLowerCase().includes(term) || keywords.some(k => k.toLowerCase().includes(term));
    };

    const getValue = <T,>(getter: (el: IElement) => T): T | 'Mixed' => {
        if (!isMulti) return getter(element);
        const first = getter(element);
        const allSame = selectedElements.every(el => getter(el) === first);
        return allSame ? first : 'Mixed';
    };

    const getStyle = (prop: keyof React.CSSProperties, defaultValue: any = '') => {
        const val = getValue(el => el.style?.[prop]);
        return val === 'Mixed' ? 'Mixed' : (val !== undefined ? val : defaultValue);
    };

    const currentFont = String(getStyle('fontFamily', 'Arial'));
    const fontOptionsForSelect = ensureFontInOptions(currentFont, state.availableFonts || ['Arial']);
    const getNormalizedFontWeight = () => {
        const v = getStyle('fontWeight', 'normal');
        return v === 'Mixed' ? '400' : normalizeFontWeightForSelect(v, FONT_WEIGHT_OPTIONS_FULL);
    };

    // --- Specific Logic ---
    const parseShadow = (shadowStr: string) => {
        const defaultShadow = { x: 0, y: 4, blur: 12, spread: 0, color: '#0000001a', inset: false };
        if (!shadowStr || shadowStr === 'none') return defaultShadow;
        const str = shadowStr.trim();
        const isInset = str.includes('inset');
        const cleanStr = str.replace('inset', '').trim();
        const numbersRegex = /(-?\d+(?:\.\d+)?)(?:px)?\s+(-?\d+(?:\.\d+)?)(?:px)?(?:\s+(\d+(?:\.\d+)?)(?:px)?)?(?:\s+(\d+(?:\.\d+)?)(?:px)?)?/;
        const numMatch = cleanStr.match(numbersRegex);
        if (numMatch) {
            return {
                x: parseFloat(numMatch[1]),
                y: parseFloat(numMatch[2]),
                blur: numMatch[3] ? parseFloat(numMatch[3]) : 0,
                spread: numMatch[4] ? parseFloat(numMatch[4]) : 0,
                color: cleanStr.replace(numMatch[0], '').trim() || defaultShadow.color,
                inset: isInset
            };
        }
        return defaultShadow;
    };

    const shadowState = parseShadow(element.style?.boxShadow as string);
    const updateShadow = (updates: Partial<typeof shadowState>) => {
        const newState = { ...shadowState, ...updates };
        const shadowString = `${newState.inset ? 'inset ' : ''}${newState.x}px ${newState.y}px ${newState.blur}px ${newState.spread}px ${newState.color}`;
        handleStyleUpdate({ boxShadow: shadowString });
    };

    return (
        <Dialog.Root open={isPropertiesPanelOpen} onOpenChange={setPropertiesPanelOpen}>
            <Dialog.Content style={{ maxWidth: 500, width: '100%', maxHeight: '85vh', height: '100%', padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Header */}
                <Box style={{ borderBottom: '1px solid var(--gray-4)' }}>
                    <Flex justify="between" align="center" p="4" pb="2">
                        <Box>
                            <Dialog.Title style={{ margin: 0 }}>Propriedades</Dialog.Title>
                            <Dialog.Description size="1" color="gray">{isMulti ? `${selectedElements.length} selecionados` : element.name || 'Elemento'}</Dialog.Description>
                        </Box>
                        <Flex gap="2">
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger><IconButton variant="ghost" color="gray"><BookmarkIcon /></IconButton></DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Label>Presets</DropdownMenu.Label>
                                    {Object.keys(presets).length === 0 && (
                                        <DropdownMenu.Item disabled>Nenhum preset salvo</DropdownMenu.Item>
                                    )}
                                    {Object.keys(presets).map(name => (
                                        <DropdownMenu.Item
                                            key={name}
                                            onSelect={(e) => {
                                                e.preventDefault(); // Prevent menu from closing immediately if needed, or allow standard behavior
                                                loadPreset(name);
                                            }}
                                            onClick={() => loadPreset(name)} // Redundancy for safety
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {name}
                                        </DropdownMenu.Item>
                                    ))}
                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Item onSelect={(e) => {
                                        e.preventDefault(); // Prevent closing to allow prompt
                                        const name = prompt("Nome do novo preset:");
                                        if (name) savePreset(name);
                                    }}>
                                        <PlusIcon style={{ marginRight: 8 }} /> Salvar Atual
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                            <Dialog.Close><IconButton variant="ghost" color="gray"><Cross2Icon /></IconButton></Dialog.Close>
                        </Flex>
                    </Flex>
                    <Flex gap="2" px="4" pb="3">
                        <Tooltip content="Bloquear"><IconButton variant="soft" color={element.locked ? 'orange' : 'gray'} onClick={() => handleUpdate({ locked: !element.locked })}>{element.locked ? <LockClosedIcon /> : <LockOpen1Icon />}</IconButton></Tooltip>
                        <Tooltip content="Ocultar"><IconButton variant="soft" color={element.hidden ? 'blue' : 'gray'} onClick={() => handleUpdate({ hidden: !element.hidden })}>{element.hidden ? <EyeNoneIcon /> : <EyeOpenIcon />}</IconButton></Tooltip>
                        <Tooltip content="Duplicar"><IconButton variant="soft" color="gray" onClick={handleDuplicate}><CopyIcon /></IconButton></Tooltip>
                        <Box style={{ flex: 1 }} />
                        <Tooltip content="Excluir"><IconButton variant="soft" color="red" onClick={() => { removeSelected(); setPropertiesPanelOpen(false); }}><TrashIcon /></IconButton></Tooltip>
                    </Flex>
                </Box>

                {/* Search */}
                <Box p="3" style={{ borderBottom: '1px solid var(--gray-4)', backgroundColor: 'var(--gray-1)' }}>
                    <TextField.Root placeholder="Buscar..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}>
                        <TextField.Slot><MagnifyingGlassIcon height="16" width="16" /></TextField.Slot>
                    </TextField.Root>
                </Box>

                {/* Content */}
                <Box key={element?.id ?? selectedElementIds.join(',')} style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>

                    {/* Content Section */}
                    {matchesSearch('Conteúdo', ['text', 'image', 'url', 'value', 'content']) && (element.type === 'text' || element.type === 'text-container' || element.type === 'image') && (
                        <AccordionItem title="Conteúdo" isOpen={openSections.content} onToggle={() => toggleSection('content')}>
                            <Box>
                                {(element.type === 'text' || element.type === 'text-container') && (
                                    <>
                                        <Text size="1" color="gray" mb="1" as="div">Texto</Text>
                                        <TextArea value={element.content || ''} onChange={e => handleUpdate({ content: e.target.value })} rows={4} placeholder="Texto ou {{variavel}}..." />
                                    </>
                                )}
                                {element.type === 'image' && (
                                    <>
                                        <Text size="1" color="gray" mb="1" as="div">Vínculo de Propriedade</Text>
                                        <DropdownMenu.Root>
                                            <DropdownMenu.Trigger>
                                                <Button variant="soft" color="gray" size="1" style={{ width: '100%', justifyContent: 'space-between', marginBottom: 8 }}>
                                                    {element.dataBinding ? (state.availableProps.find(p => p.dataName === element.dataBinding)?.name || element.dataBinding) : 'Nenhum (URL fixa)'}
                                                    <CaretDownIcon />
                                                </Button>
                                            </DropdownMenu.Trigger>
                                            <DropdownMenu.Content style={{ zIndex: 100000 }}>
                                                <DropdownMenu.Item onSelect={() => handleUpdate({ dataBinding: undefined })}>Nenhum (URL fixa)</DropdownMenu.Item>
                                                {(state.availableProps || []).map(p => (
                                                    <DropdownMenu.Item key={p.dataName} onSelect={() => handleUpdate({ dataBinding: p.dataName, content: `{{${p.dataName}}}` })}>
                                                        {p.name}
                                                    </DropdownMenu.Item>
                                                ))}
                                            </DropdownMenu.Content>
                                        </DropdownMenu.Root>
                                        <Text size="1" color="gray" mb="1" as="div">URL ou {'{{variável}}'}</Text>
                                        <TextField.Root value={element.content || ''} onChange={e => handleUpdate({ content: e.target.value })} placeholder="https://... ou {{profilePicture}}" />
                                    </>
                                )}
                            </Box>
                        </AccordionItem>
                    )}

                    {/* Typography Section */}
                    {matchesSearch('Tipografia', ['font', 'text', 'color', 'align', 'size', 'weight', 'transform', 'decoration']) && (
                        <AccordionItem title="Tipografia" isOpen={openSections.typography} onToggle={() => toggleSection('typography')} onReset={() => handleResetStyle(['fontFamily', 'fontSize', 'fontWeight', 'color', 'textAlign', 'fontStyle', 'textDecoration', 'textTransform', 'lineHeight', 'letterSpacing'])}>
                            <Grid columns="2" gap="3">
                                <Box style={{ gridColumn: 'span 2' }}>
                                    <Text size="1" color="gray" mb="1" as="div">Família da Fonte</Text>
                                    <Select.Root value={currentFont} onValueChange={(val) => handleStyleUpdate({ fontFamily: val })}>
                                        <Select.Trigger style={{ width: '100%' }} placeholder="Selecione..." />
                                        <Select.Content style={{ zIndex: 100000 }}>
                                            {fontOptionsForSelect.map(f => <Select.Item key={f} value={f}>{f}</Select.Item>)}
                                        </Select.Content>
                                    </Select.Root>
                                </Box>
                                <UnitInput label="Tamanho" value={getStyle('fontSize', '16px')} onChange={val => handleStyleUpdate({ fontSize: val })} />
                                <UnitInput label="Altura da Linha" value={getStyle('lineHeight', 'normal')} onChange={val => handleStyleUpdate({ lineHeight: val })} units={['', 'px', 'em', '%']} placeholder="Normal" />
                                <UnitInput label="Espaçamento" value={getStyle('letterSpacing', 'normal')} onChange={val => handleStyleUpdate({ letterSpacing: val })} units={['px', 'em']} placeholder="Normal" />
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Peso</Text>
                                    <Select.Root
                                        value={getNormalizedFontWeight()}
                                        onValueChange={(val) => handleStyleUpdate({ fontWeight: val })}
                                    >
                                        <Select.Trigger style={{ width: '100%' }} placeholder="Normal" />
                                        <Select.Content style={{ zIndex: 100000 }}>
                                            <Select.Item value="100">100 - Thin</Select.Item>
                                            <Select.Item value="300">300 - Light</Select.Item>
                                            <Select.Item value="400">400 - Normal</Select.Item>
                                            <Select.Item value="500">500 - Medium</Select.Item>
                                            <Select.Item value="600">600 - Semi Bold</Select.Item>
                                            <Select.Item value="700">700 - Bold</Select.Item>
                                            <Select.Item value="900">900 - Black</Select.Item>
                                            <Select.Item value="normal">Normal</Select.Item>
                                            <Select.Item value="bold">Bold</Select.Item>
                                        </Select.Content>
                                    </Select.Root>
                                </Box>
                                <Box style={{ gridColumn: 'span 2' }}>
                                    <Flex justify="between" align="center">
                                        <Box>
                                            <Text size="1" color="gray" mb="1" as="div">Estilo</Text>
                                            <Flex gap="1">
                                                <IconButton variant={getStyle('fontStyle') === 'italic' ? 'solid' : 'soft'} onClick={() => handleStyleUpdate({ fontStyle: getStyle('fontStyle') === 'italic' ? 'normal' : 'italic' })}><FontItalicIcon /></IconButton>
                                                <IconButton variant={getStyle('textDecoration') === 'underline' ? 'solid' : 'soft'} onClick={() => handleStyleUpdate({ textDecoration: getStyle('textDecoration') === 'underline' ? 'none' : 'underline' })}><UnderlineIcon /></IconButton>
                                                <IconButton variant={getStyle('textDecoration') === 'line-through' ? 'solid' : 'soft'} onClick={() => handleStyleUpdate({ textDecoration: getStyle('textDecoration') === 'line-through' ? 'none' : 'line-through' })}><StrikethroughIcon /></IconButton>
                                            </Flex>
                                        </Box>
                                        <Box>
                                            <Text size="1" color="gray" mb="1" as="div">Transformação</Text>
                                            <Select.Root value={getStyle('textTransform', 'none') as string} onValueChange={(val) => handleStyleUpdate({ textTransform: val as any })}>
                                                <Select.Trigger style={{ width: 100 }} />
                                                <Select.Content>
                                                    <Select.Item value="none">Nenhum</Select.Item>
                                                    <Select.Item value="uppercase">MAIÚSCULA</Select.Item>
                                                    <Select.Item value="lowercase">minúscula</Select.Item>
                                                    <Select.Item value="capitalize">Capitalizada</Select.Item>
                                                </Select.Content>
                                            </Select.Root>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box style={{ gridColumn: 'span 2' }}>
                                    <Text size="1" color="gray" mb="1" as="div">Alinhamento</Text>
                                    <SegmentedControl.Root value={getStyle('textAlign', 'left') as string} onValueChange={val => handleStyleUpdate({ textAlign: val as any })}>
                                        <SegmentedControl.Item value="left"><TextAlignLeftIcon /></SegmentedControl.Item>
                                        <SegmentedControl.Item value="center"><TextAlignCenterIcon /></SegmentedControl.Item>
                                        <SegmentedControl.Item value="right"><TextAlignRightIcon /></SegmentedControl.Item>
                                        <SegmentedControl.Item value="justify"><TextAlignJustifyIcon /></SegmentedControl.Item>
                                    </SegmentedControl.Root>
                                </Box>
                                <Box style={{ gridColumn: 'span 2' }}>
                                    <Text size="1" color="gray" mb="1" as="div">Cor do Texto</Text>
                                    <ColorInput color={getStyle('color', '#000000') as string} onChange={c => handleStyleUpdate({ color: c })} />
                                </Box>
                            </Grid>
                        </AccordionItem>
                    )}

                    {/* Appearance Section */}
                    {matchesSearch('Aparência', ['background', 'opacity', 'blend', 'cursor']) && (
                        <AccordionItem title="Aparência" isOpen={openSections.appearance} onToggle={() => toggleSection('appearance')} onReset={() => handleResetStyle(['backgroundColor', 'backgroundImage', 'backgroundSize', 'opacity', 'mixBlendMode', 'cursor'])}>
                            <Tabs.Root defaultValue="solid">
                                <Tabs.List>
                                    <Tabs.Trigger value="solid">Sólido</Tabs.Trigger>
                                    <Tabs.Trigger value="gradient">Gradiente</Tabs.Trigger>
                                    <Tabs.Trigger value="image">Imagem</Tabs.Trigger>
                                </Tabs.List>
                                <Box pt="3">
                                    <Tabs.Content value="solid">
                                        <Text size="1" color="gray" mb="1" as="div">Cor de Fundo</Text>
                                        <ColorInput color={getStyle('backgroundColor', 'transparent') as string} onChange={c => handleStyleUpdate({ backgroundColor: c, backgroundImage: 'none' })} />
                                    </Tabs.Content>
                                    <Tabs.Content value="gradient">
                                        <Text size="1" color="gray" mb="1" as="div">CSS Gradient</Text>
                                        <TextArea
                                            value={getStyle('backgroundImage', '') as string}
                                            onChange={e => handleStyleUpdate({ backgroundImage: e.target.value })}
                                            placeholder="linear-gradient(to right, red, blue)"
                                            rows={3}
                                        />
                                    </Tabs.Content>
                                    <Tabs.Content value="image">
                                        <Text size="1" color="gray" mb="1" as="div">URL da Imagem</Text>
                                        <TextField.Root
                                            value={(getStyle('backgroundImage', '') as string).replace(/url\(['"]?(.*?)['"]?\)/, '$1')}
                                            onChange={e => handleStyleUpdate({ backgroundImage: `url('${e.target.value}')` })}
                                            placeholder="https://..."
                                            mb="2"
                                        />
                                        <Grid columns="2" gap="2">
                                            <Box>
                                                <Text size="1" color="gray" mb="1" as="div">Tamanho</Text>
                                                <Select.Root value={getStyle('backgroundSize', 'auto') as string} onValueChange={v => handleStyleUpdate({ backgroundSize: v })}>
                                                    <Select.Trigger style={{ width: '100%' }} />
                                                    <Select.Content>
                                                        <Select.Item value="auto">Auto</Select.Item>
                                                        <Select.Item value="cover">Cobrir (Cover)</Select.Item>
                                                        <Select.Item value="contain">Conter (Contain)</Select.Item>
                                                        <Select.Item value="100% 100%">Esticar</Select.Item>
                                                    </Select.Content>
                                                </Select.Root>
                                            </Box>
                                            <Box>
                                                <Text size="1" color="gray" mb="1" as="div">Repetição</Text>
                                                <Select.Root value={getStyle('backgroundRepeat', 'repeat') as string} onValueChange={v => handleStyleUpdate({ backgroundRepeat: v })}>
                                                    <Select.Trigger style={{ width: '100%' }} />
                                                    <Select.Content>
                                                        <Select.Item value="repeat">Repetir</Select.Item>
                                                        <Select.Item value="no-repeat">Não Repetir</Select.Item>
                                                        <Select.Item value="repeat-x">Horizontal</Select.Item>
                                                        <Select.Item value="repeat-y">Vertical</Select.Item>
                                                    </Select.Content>
                                                </Select.Root>
                                            </Box>
                                        </Grid>
                                    </Tabs.Content>
                                </Box>
                            </Tabs.Root>

                            <Box mt="3">
                                <Text size="1" color="gray" mb="1" as="div">Opacidade</Text>
                                <Flex align="center" gap="2">
                                    <Slider min={0} max={1} step={0.05} value={[parseFloat(getStyle('opacity', '1') as string)]} onValueChange={([val]) => handleStyleUpdate({ opacity: val })} style={{ flex: 1 }} />
                                    <Text size="1">{Math.round(parseFloat(getStyle('opacity', '1') as string) * 100)}%</Text>
                                </Flex>
                            </Box>

                            <Grid columns="2" gap="3" mt="3">
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Blend Mode</Text>
                                    <Select.Root value={getStyle('mixBlendMode', 'normal') as string} onValueChange={v => handleStyleUpdate({ mixBlendMode: v as any })}>
                                        <Select.Trigger style={{ width: '100%' }} />
                                        <Select.Content>
                                            <Select.Item value="normal">Normal</Select.Item>
                                            <Select.Item value="multiply">Multiply</Select.Item>
                                            <Select.Item value="screen">Screen</Select.Item>
                                            <Select.Item value="overlay">Overlay</Select.Item>
                                            <Select.Item value="darken">Darken</Select.Item>
                                            <Select.Item value="lighten">Lighten</Select.Item>
                                        </Select.Content>
                                    </Select.Root>
                                </Box>
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Cursor</Text>
                                    <Select.Root value={getStyle('cursor', 'auto') as string} onValueChange={v => handleStyleUpdate({ cursor: v })}>
                                        <Select.Trigger style={{ width: '100%' }} />
                                        <Select.Content>
                                            <Select.Item value="auto">Auto</Select.Item>
                                            <Select.Item value="default">Padrão</Select.Item>
                                            <Select.Item value="pointer">Mãozinha</Select.Item>
                                            <Select.Item value="text">Texto</Select.Item>
                                            <Select.Item value="move">Mover</Select.Item>
                                            <Select.Item value="not-allowed">Bloqueado</Select.Item>
                                        </Select.Content>
                                    </Select.Root>
                                </Box>
                            </Grid>
                        </AccordionItem>
                    )}

                    {/* Layout Section */}
                    {matchesSearch('Layout', ['width', 'height', 'x', 'y', 'z-index', 'overflow']) && (
                        <AccordionItem title="Layout & Dimensões" isOpen={openSections.layout} onToggle={() => toggleSection('layout')} onReset={() => handleUpdate({ width: 100, height: 100, x: 0, y: 0, style: { ...element.style, zIndex: undefined, overflow: undefined } })}>
                            <Grid columns="2" gap="3">
                                <UnitInput label="Largura" value={element.width} onChange={v => handleUpdate({ width: parseFloat(v) })} units={['px']} />
                                <UnitInput label="Altura" value={element.height} onChange={v => handleUpdate({ height: parseFloat(v) })} units={['px']} />
                                <UnitInput label="Posição X" value={element.x} onChange={v => handleUpdate({ x: parseFloat(v) })} units={['px']} />
                                <UnitInput label="Posição Y" value={element.y} onChange={v => handleUpdate({ y: parseFloat(v) })} units={['px']} />
                                <UnitInput label="Z-Index" value={getStyle('zIndex', 'auto')} onChange={v => handleStyleUpdate({ zIndex: v === '' ? undefined : parseInt(v) })} units={['']} placeholder="Auto" />
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Overflow</Text>
                                    <Select.Root value={getStyle('overflow', 'visible') as string} onValueChange={v => handleStyleUpdate({ overflow: v })}>
                                        <Select.Trigger style={{ width: '100%' }} />
                                        <Select.Content>
                                            <Select.Item value="visible">Visível</Select.Item>
                                            <Select.Item value="hidden">Oculto</Select.Item>
                                            <Select.Item value="scroll">Scroll</Select.Item>
                                            <Select.Item value="auto">Auto</Select.Item>
                                        </Select.Content>
                                    </Select.Root>
                                </Box>
                            </Grid>
                        </AccordionItem>
                    )}

                    {/* Spacing Section */}
                    {matchesSearch('Espaçamento', ['padding', 'margin']) && (
                        <AccordionItem title="Espaçamento (Margin/Padding)" isOpen={openSections.spacing} onToggle={() => toggleSection('spacing')} onReset={() => handleResetStyle(['padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft'])}>
                            <Box mb="3">
                                <SideInput
                                    label="Padding (Interno)"
                                    values={{
                                        top: getStyle('paddingTop', getStyle('padding')),
                                        right: getStyle('paddingRight', getStyle('padding')),
                                        bottom: getStyle('paddingBottom', getStyle('padding')),
                                        left: getStyle('paddingLeft', getStyle('padding'))
                                    }}
                                    onChange={vals => {
                                        if (vals.top === vals.right && vals.right === vals.bottom && vals.bottom === vals.left) {
                                            handleStyleUpdate({ padding: vals.top, paddingTop: undefined, paddingRight: undefined, paddingBottom: undefined, paddingLeft: undefined });
                                        } else {
                                            handleStyleUpdate({ padding: undefined, paddingTop: vals.top, paddingRight: vals.right, paddingBottom: vals.bottom, paddingLeft: vals.left });
                                        }
                                    }}
                                />
                            </Box>
                            <Box>
                                <SideInput
                                    label="Margin (Externo)"
                                    values={{
                                        top: getStyle('marginTop', getStyle('margin')),
                                        right: getStyle('marginRight', getStyle('margin')),
                                        bottom: getStyle('marginBottom', getStyle('margin')),
                                        left: getStyle('marginLeft', getStyle('margin'))
                                    }}
                                    onChange={vals => {
                                        if (vals.top === vals.right && vals.right === vals.bottom && vals.bottom === vals.left) {
                                            handleStyleUpdate({ margin: vals.top, marginTop: undefined, marginRight: undefined, marginBottom: undefined, marginLeft: undefined });
                                        } else {
                                            handleStyleUpdate({ margin: undefined, marginTop: vals.top, marginRight: vals.right, marginBottom: vals.bottom, marginLeft: vals.left });
                                        }
                                    }}
                                />
                            </Box>
                        </AccordionItem>
                    )}

                    {/* Borders Section */}
                    {matchesSearch('Bordas', ['border', 'radius', 'stroke']) && (
                        <AccordionItem title="Bordas & Cantos" isOpen={openSections.borders} onToggle={() => toggleSection('borders')} onReset={() => handleResetStyle(['border', 'borderWidth', 'borderStyle', 'borderColor', 'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'])}>
                            <Tabs.Root defaultValue="all">
                                <Tabs.List>
                                    <Tabs.Trigger value="all"><BorderAllIcon /></Tabs.Trigger>
                                    <Tabs.Trigger value="top"><BorderTopIcon /></Tabs.Trigger>
                                    <Tabs.Trigger value="right"><BorderRightIcon /></Tabs.Trigger>
                                    <Tabs.Trigger value="bottom"><BorderBottomIcon /></Tabs.Trigger>
                                    <Tabs.Trigger value="left"><BorderLeftIcon /></Tabs.Trigger>
                                </Tabs.List>
                                <Box pt="3">
                                    <Grid columns="2" gap="3">
                                        <Box>
                                            <Text size="1" color="gray" mb="1" as="div">Estilo</Text>
                                            <Select.Root value={getStyle('borderStyle', 'none') as string} onValueChange={v => handleStyleUpdate({ borderStyle: v })}>
                                                <Select.Trigger style={{ width: '100%' }} />
                                                <Select.Content>
                                                    <Select.Item value="none">Nenhuma</Select.Item>
                                                    <Select.Item value="solid">Sólida</Select.Item>
                                                    <Select.Item value="dashed">Tracejada</Select.Item>
                                                    <Select.Item value="dotted">Pontilhada</Select.Item>
                                                    <Select.Item value="double">Dupla</Select.Item>
                                                </Select.Content>
                                            </Select.Root>
                                        </Box>
                                        <UnitInput label="Espessura" value={getStyle('borderWidth', '0px')} onChange={v => handleStyleUpdate({ borderWidth: v })} />
                                        <Box style={{ gridColumn: 'span 2' }}>
                                            <Text size="1" color="gray" mb="1" as="div">Cor</Text>
                                            <ColorInput color={getStyle('borderColor', '#000000') as string} onChange={c => handleStyleUpdate({ borderColor: c })} />
                                        </Box>
                                    </Grid>
                                </Box>
                            </Tabs.Root>

                            <Box mt="3">
                                <SideInput
                                    label="Arredondamento (Radius)"
                                    values={{
                                        top: getStyle('borderTopLeftRadius', getStyle('borderRadius')),
                                        right: getStyle('borderTopRightRadius', getStyle('borderRadius')),
                                        bottom: getStyle('borderBottomRightRadius', getStyle('borderRadius')),
                                        left: getStyle('borderBottomLeftRadius', getStyle('borderRadius'))
                                    }}
                                    onChange={vals => {
                                        // Map Top/Right/Bottom/Left to corners logically: TL, TR, BR, BL
                                        // Using SideInput 'top' as 'topLeft', 'right' as 'topRight', etc. is confusing visually.
                                        // Let's assume SideInput logic is fine for generic sides, but for Radius we map:
                                        // Top -> TopLeft, Right -> TopRight, Bottom -> BottomRight, Left -> BottomLeft ??
                                        // Standard CSS Radius shorthand: TL TR BR BL

                                        if (vals.top === vals.right && vals.right === vals.bottom && vals.bottom === vals.left) {
                                            handleStyleUpdate({ borderRadius: vals.top, borderTopLeftRadius: undefined, borderTopRightRadius: undefined, borderBottomRightRadius: undefined, borderBottomLeftRadius: undefined });
                                        } else {
                                            handleStyleUpdate({
                                                borderRadius: undefined,
                                                borderTopLeftRadius: vals.top,
                                                borderTopRightRadius: vals.right,
                                                borderBottomRightRadius: vals.bottom,
                                                borderBottomLeftRadius: vals.left
                                            });
                                        }
                                    }}
                                />
                            </Box>
                        </AccordionItem>
                    )}

                    {/* Effects Section */}
                    {matchesSearch('Efeitos', ['shadow', 'sombra']) && (
                        <AccordionItem title="Efeitos (Sombra)" isOpen={openSections.effects} onToggle={() => toggleSection('effects')} onReset={() => handleResetStyle(['boxShadow', 'textShadow'])}>
                            <Tabs.Root defaultValue="box">
                                <Tabs.List>
                                    <Tabs.Trigger value="box">Box Shadow</Tabs.Trigger>
                                    <Tabs.Trigger value="text">Text Shadow</Tabs.Trigger>
                                </Tabs.List>
                                <Box pt="3">
                                    <Tabs.Content value="box">
                                        <Box p="2" style={{ backgroundColor: 'var(--gray-3)', borderRadius: 'var(--radius-2)' }}>
                                            <Flex justify="between" mb="2">
                                                <Text size="1" weight="bold">Box Shadow</Text>
                                                <Flex gap="2" align="center">
                                                    <Text size="1">Inset</Text>
                                                    <input type="checkbox" checked={shadowState.inset} onChange={e => updateShadow({ inset: e.target.checked })} />
                                                </Flex>
                                            </Flex>
                                            <Grid columns="2" gap="2" mb="2">
                                                <UnitInput label="X" value={shadowState.x} onChange={v => updateShadow({ x: parseFloat(v) })} units={['px']} />
                                                <UnitInput label="Y" value={shadowState.y} onChange={v => updateShadow({ y: parseFloat(v) })} units={['px']} />
                                                <UnitInput label="Blur" value={shadowState.blur} onChange={v => updateShadow({ blur: parseFloat(v) })} units={['px']} />
                                                <UnitInput label="Spread" value={shadowState.spread} onChange={v => updateShadow({ spread: parseFloat(v) })} units={['px']} />
                                            </Grid>
                                            <ColorInput color={shadowState.color} onChange={c => updateShadow({ color: c })} />
                                        </Box>
                                    </Tabs.Content>
                                    <Tabs.Content value="text">
                                        <Box p="2" style={{ backgroundColor: 'var(--gray-3)', borderRadius: 'var(--radius-2)' }}>
                                            <Text size="1" weight="bold" mb="2" as="div">Text Shadow</Text>
                                            <Grid columns="2" gap="2" mb="2">
                                                <UnitInput label="X" value={parseShadow(getStyle('textShadow', 'none') as string).x} onChange={v => {
                                                    const current = parseShadow(getStyle('textShadow', 'none') as string);
                                                    const newVal = `${v}px ${current.y}px ${current.blur}px ${current.color}`;
                                                    handleStyleUpdate({ textShadow: newVal });
                                                }} units={['px']} />
                                                <UnitInput label="Y" value={parseShadow(getStyle('textShadow', 'none') as string).y} onChange={v => {
                                                    const current = parseShadow(getStyle('textShadow', 'none') as string);
                                                    const newVal = `${current.x}px ${v}px ${current.blur}px ${current.color}`;
                                                    handleStyleUpdate({ textShadow: newVal });
                                                }} units={['px']} />
                                                <UnitInput label="Blur" value={parseShadow(getStyle('textShadow', 'none') as string).blur} onChange={v => {
                                                    const current = parseShadow(getStyle('textShadow', 'none') as string);
                                                    const newVal = `${current.x}px ${current.y}px ${v}px ${current.color}`;
                                                    handleStyleUpdate({ textShadow: newVal });
                                                }} units={['px']} />
                                            </Grid>
                                            <ColorInput color={parseShadow(getStyle('textShadow', 'none') as string).color} onChange={c => {
                                                const current = parseShadow(getStyle('textShadow', 'none') as string);
                                                const newVal = `${current.x}px ${current.y}px ${current.blur}px ${c}`;
                                                handleStyleUpdate({ textShadow: newVal });
                                            }} />
                                        </Box>
                                    </Tabs.Content>
                                </Box>
                            </Tabs.Root>
                        </AccordionItem>
                    )}

                    {/* Transform Section */}
                    {matchesSearch('Transform', ['scale', 'rotate', 'skew', 'translate']) && (
                        <AccordionItem title="Transformação" isOpen={openSections.transform} onToggle={() => toggleSection('transform')} onReset={() => handleUpdate({ rotation: 0, style: { ...element.style, transform: undefined } })}>
                            <Grid columns="2" gap="3">
                                <UnitInput label="Rotação (deg)" value={element.rotation} onChange={v => handleUpdate({ rotation: parseFloat(v) })} units={['deg']} />
                                <Box style={{ gridColumn: 'span 2' }}>
                                    <Text size="1" color="gray" mb="1" as="div">Transform CSS (Scale, Skew, Translate)</Text>
                                    <TextField.Root
                                        value={getStyle('transform', '') as string}
                                        onChange={e => handleStyleUpdate({ transform: e.target.value })}
                                        placeholder="ex: scale(1.5) skewX(10deg)"
                                    />
                                    <Text size="1" color="gray" mt="1">
                                        Use sintaxe CSS padrão. Ex: <code>scale(1.2)</code>, <code>skewY(10deg)</code>
                                    </Text>
                                </Box>
                            </Grid>
                        </AccordionItem>
                    )}

                    {/* Advanced Sections */}
                    {!isMulti && (
                        <>
                            {matchesSearch('Animação', ['animation']) && (
                                <AccordionItem title="Animação" isOpen={openSections.animation} onToggle={() => toggleSection('animation')} onReset={() => handleUpdate({ animation: undefined })}>
                                    <AnimationSettings element={element} updateElement={updateElement} />
                                </AccordionItem>
                            )}
                            {matchesSearch('Regras', ['condition']) && (
                                <AccordionItem title="Regras Condicionais" isOpen={openSections.conditions} onToggle={() => toggleSection('conditions')} onReset={() => handleUpdate({ conditions: [] })}>
                                    <ConditionalSettings element={element} updateElement={updateElement} availableProps={state.availableProps || []} />
                                </AccordionItem>
                            )}
                            {matchesSearch('Formatação', ['format']) && (
                                <AccordionItem title="Formatação" isOpen={openSections.formatting} onToggle={() => toggleSection('formatting')} onReset={() => handleUpdate({ formatting: undefined })}>
                                    <FormattingSettings element={element} updateElement={updateElement} />
                                </AccordionItem>
                            )}
                        </>
                    )}
                </Box>
            </Dialog.Content>
        </Dialog.Root>
    );
};
