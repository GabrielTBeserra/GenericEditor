import {
    ChevronDownIcon,
    ChevronRightIcon,
    CopyIcon,
    EyeNoneIcon,
    EyeOpenIcon,
    LockClosedIcon,
    LockOpen1Icon,
    TextAlignCenterIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
    TrashIcon
} from '@radix-ui/react-icons';
import { Box, Button, Flex, Grid, IconButton, Select, Separator, Slider, Text, TextArea, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useEditor, type IElement } from '../context';
import { AdvancedPropertiesPanel } from './AdvancedPropertiesPanel';
import { ColorInput } from './ColorPicker';

export const SimpleProperties: React.FC = () => {
    const { state, updateElement, removeSelected, copy } = useEditor();
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

    // In Simple Mode, we focus on the first selected element
    const elementId = state.selectedElementIds[0];
    const element = state.elements.find(el => el.id === elementId);

    if (!element) return null;

    const handleUpdate = (changes: Partial<IElement>) => {
        updateElement(element.id, changes);
    };

    const handleStyleUpdate = (styleChanges: React.CSSProperties) => {
        handleUpdate({
            style: { ...element.style, ...styleChanges }
        });
    };

    const currentTextAlign = (element.style?.textAlign as string) || 'left';
    const currentFontSize = parseInt((element.style?.fontSize as string) || '14', 10);
    const currentBorderWidth = parseInt((element.style?.borderWidth as string) || '0', 10);
    const currentPadding = parseInt((element.style?.padding as string) || '0', 10);
    const currentFontFamily = (element.style?.fontFamily as string) || 'Arial';
    const currentFontWeight = (element.style?.fontWeight as string) || 'normal';

    const fontOptions = state.availableFonts || ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Tahoma', 'Trebuchet MS'];

    return (
        <Flex direction="column" gap="4">
            <Flex justify="between" align="center">
                <Text size="3" weight="bold">
                    {getElementLabel(element.type)}
                </Text>
                <Flex gap="2">
                    <IconButton
                        variant="soft"
                        color={element.locked ? 'orange' : 'gray'}
                        onClick={() => handleUpdate({ locked: !element.locked })}
                        title={element.locked ? "Desbloquear" : "Bloquear"}
                    >
                        {element.locked ? <LockClosedIcon /> : <LockOpen1Icon />}
                    </IconButton>
                    <IconButton
                        variant="soft"
                        color={element.hidden ? 'blue' : 'gray'}
                        onClick={() => handleUpdate({ hidden: !element.hidden })}
                        title={element.hidden ? "Mostrar" : "Ocultar"}
                    >
                        {element.hidden ? <EyeNoneIcon /> : <EyeOpenIcon />}
                    </IconButton>
                    <Separator orientation="vertical" />
                    <IconButton variant="soft" color="gray" onClick={copy} title="Copiar">
                        <CopyIcon />
                    </IconButton>
                    <IconButton variant="soft" color="red" onClick={removeSelected} title="Excluir">
                        <TrashIcon />
                    </IconButton>
                </Flex>
            </Flex>

            <Separator size="4" />

            {/* Content Section */}
            {(element.type === 'text' || element.type === 'text-container') && (
                <Box>
                    <Text size="2" weight="bold" mb="2" as="div">Conteúdo</Text>
                    <TextArea
                        value={element.content}
                        onChange={e => handleUpdate({ content: e.target.value })}
                        rows={3}
                        placeholder="Digite o texto aqui..."
                    />
                </Box>
            )}

            {element.type === 'image' && (
                <Box>
                    <Text size="2" weight="bold" mb="2" as="div">Imagem URL</Text>
                    <TextField.Root
                        value={element.content}
                        onChange={e => handleUpdate({ content: e.target.value })}
                        placeholder="https://..."
                    />
                </Box>
            )}

            {/* Visual Style Section */}
            <Box>
                <Text size="2" weight="bold" mb="2" as="div">Aparência</Text>

                <Flex direction="column" gap="3">

                    {/* Typography for Text Elements */}
                    {(element.type === 'text' || element.type === 'text-container') && (
                        <>
                            <Grid columns="2" gap="3">
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Fonte</Text>
                                    <Select.Root
                                        value={currentFontFamily}
                                        onValueChange={(val) => handleStyleUpdate({ fontFamily: val })}
                                    >
                                        <Select.Trigger style={{ width: '100%' }} />
                                        <Select.Content>
                                            <Select.Group>
                                                <Select.Label>Fontes</Select.Label>
                                                {fontOptions.map(font => (
                                                    <Select.Item key={font} value={font} style={{ fontFamily: font }}>
                                                        {font}
                                                    </Select.Item>
                                                ))}
                                            </Select.Group>
                                        </Select.Content>
                                    </Select.Root>
                                </Box>
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Peso</Text>
                                    <Select.Root
                                        value={currentFontWeight}
                                        onValueChange={(val) => handleStyleUpdate({ fontWeight: val })}
                                    >
                                        <Select.Trigger style={{ width: '100%' }} />
                                        <Select.Content>
                                            <Select.Item value="normal">Normal</Select.Item>
                                            <Select.Item value="bold">Negrito</Select.Item>
                                            <Select.Item value="100">Fina</Select.Item>
                                            <Select.Item value="300">Leve</Select.Item>
                                            <Select.Item value="900">Pesada</Select.Item>
                                        </Select.Content>
                                    </Select.Root>
                                </Box>
                            </Grid>

                            <Box>
                                <Flex justify="between" mb="1">
                                    <Text size="1" color="gray">Tamanho do Texto</Text>
                                    <Text size="1">{currentFontSize}px</Text>
                                </Flex>
                                <Slider
                                    min={8}
                                    max={72}
                                    value={[currentFontSize]}
                                    onValueChange={v => handleStyleUpdate({ fontSize: `${v[0]}px` })}
                                />
                            </Box>

                            <Box>
                                <Text size="1" color="gray" mb="1" as="div">Alinhamento</Text>
                                <Flex gap="2">
                                    <IconButton
                                        variant={currentTextAlign === 'left' ? 'solid' : 'soft'}
                                        color="gray"
                                        onClick={() => handleStyleUpdate({ textAlign: 'left' })}
                                    >
                                        <TextAlignLeftIcon />
                                    </IconButton>
                                    <IconButton
                                        variant={currentTextAlign === 'center' ? 'solid' : 'soft'}
                                        color="gray"
                                        onClick={() => handleStyleUpdate({ textAlign: 'center' })}
                                    >
                                        <TextAlignCenterIcon />
                                    </IconButton>
                                    <IconButton
                                        variant={currentTextAlign === 'right' ? 'solid' : 'soft'}
                                        color="gray"
                                        onClick={() => handleStyleUpdate({ textAlign: 'right' })}
                                    >
                                        <TextAlignRightIcon />
                                    </IconButton>
                                </Flex>
                            </Box>
                        </>
                    )}

                    <Grid columns="2" gap="3">
                        {/* Background Color */}
                        <Box>
                            <Text size="1" color="gray" mb="1" as="div">Cor de Fundo</Text>
                            <ColorInput
                                color={element.style?.backgroundColor as string || 'transparent'}
                                onChange={c => handleStyleUpdate({ backgroundColor: c })}
                            />
                        </Box>

                        {/* Text Color */}
                        {(element.type === 'text' || element.type === 'text-container') && (
                            <Box>
                                <Text size="1" color="gray" mb="1" as="div">Cor do Texto</Text>
                                <ColorInput
                                    color={element.style?.color as string || '#000000'}
                                    onChange={c => handleStyleUpdate({ color: c })}
                                />
                            </Box>
                        )}
                    </Grid>

                    {/* Border & Spacing */}
                    <Box>
                        <Flex justify="between" mb="1">
                            <Text size="1" color="gray">Borda (Espessura)</Text>
                            <Text size="1">{currentBorderWidth}px</Text>
                        </Flex>
                        <Slider
                            min={0}
                            max={10}
                            value={[currentBorderWidth]}
                            onValueChange={v => handleStyleUpdate({ borderWidth: `${v[0]}px`, borderStyle: v[0] > 0 ? 'solid' : 'none', borderColor: element.style?.borderColor || '#000000' })}
                        />
                    </Box>

                    <Box>
                        <Flex justify="between" mb="1">
                            <Text size="1" color="gray">Espaçamento Interno (Padding)</Text>
                            <Text size="1">{currentPadding}px</Text>
                        </Flex>
                        <Slider
                            min={0}
                            max={40}
                            value={[currentPadding]}
                            onValueChange={v => handleStyleUpdate({ padding: `${v[0]}px` })}
                        />
                    </Box>
                </Flex>
            </Box>

            {/* Advanced Properties (Contextual Expansion) */}
            <Box mt="2" pt="2" style={{ borderTop: '1px solid var(--gray-5)' }}>
                <Button
                    variant="ghost"
                    onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                    style={{ width: '100%', justifyContent: 'space-between', color: 'var(--gray-11)', cursor: 'pointer' }}
                >
                    <Flex align="center" gap="2">
                        <Text size="2">Mais opções</Text>
                    </Flex>
                    {isAdvancedOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                </Button>

                {isAdvancedOpen && (
                    <Box mt="3" className="advanced-properties-content">
                        <AdvancedPropertiesPanel elementId={element.id} />
                    </Box>
                )}
            </Box>
        </Flex>
    );
};

const getElementLabel = (type: string) => {
    switch (type) {
        case 'text': return 'Texto';
        case 'image': return 'Imagem';
        case 'box': return 'Caixa / Grupo';
        case 'text-container': return 'Texto em Caixa';
        default: return 'Elemento';
    }
};
