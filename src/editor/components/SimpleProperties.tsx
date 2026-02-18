import {
    ChevronDownIcon,
    ChevronRightIcon,
    CopyIcon,
    EyeNoneIcon,
    EyeOpenIcon,
    FontItalicIcon,
    LockClosedIcon,
    LockOpen1Icon,
    StrikethroughIcon,
    TextAlignCenterIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
    TrashIcon,
    UnderlineIcon
} from '@radix-ui/react-icons';
import { Box, Button, DropdownMenu, Flex, Grid, IconButton, Separator, Slider, Text, TextArea, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useEditor, type IElement } from '../context';
import { ensureFontInOptions, FONT_WEIGHT_OPTIONS, normalizeFontWeightForSelect } from '../utils/helpers';
import { AdvancedPropertiesPanel } from './AdvancedPropertiesPanel';
import { ColorInput } from './ColorPicker';

export const SimpleProperties: React.FC = () => {
    const { state, portalContainer, updateElement, removeSelected, copy } = useEditor();
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
    const currentBorderRadius = parseInt((element.style?.borderRadius as string) || '0', 10);
    const currentOpacity = Math.round((parseFloat(String(element.style?.opacity ?? '1')) || 1) * 100);
    const currentFontFamily = (element.style?.fontFamily as string) || 'Arial';
    const currentFontWeight = normalizeFontWeightForSelect(element.style?.fontWeight, FONT_WEIGHT_OPTIONS);
    const baseFontOptions = state.availableFonts || ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Tahoma', 'Trebuchet MS'];
    const fontOptions = ensureFontInOptions(currentFontFamily, baseFontOptions);

    return (
        <Flex key={elementId} direction="column" gap="4">
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
                    <Text size="2" weight="bold" mb="2" as="div">Imagem</Text>
                    <Box mb="2">
                        <Text size="1" color="gray" mb="1" as="div">Vínculo de Propriedade</Text>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                    {element.dataBinding ? (state.availableProps.find(p => p.dataName === element.dataBinding)?.name || element.dataBinding) : 'Nenhum (URL fixa)'}
                                    <ChevronDownIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                <DropdownMenu.Item onSelect={() => handleUpdate({ dataBinding: undefined })}>Nenhum (URL fixa)</DropdownMenu.Item>
                                {state.availableProps.map(p => (
                                    <DropdownMenu.Item key={p.dataName} onSelect={() => handleUpdate({ dataBinding: p.dataName, content: `{{${p.dataName}}}` })}>
                                        {p.name}
                                    </DropdownMenu.Item>
                                ))}
                                {state.availableProps.length === 0 && (
                                    <DropdownMenu.Item disabled>Nenhuma variável disponível</DropdownMenu.Item>
                                )}
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </Box>
                    <Box>
                        <Text size="1" color="gray" mb="1" as="div">{'URL ou {{variável}}'}</Text>
                        <TextField.Root
                            value={element.content}
                            onChange={e => handleUpdate({ content: e.target.value })}
                            placeholder="https://... ou {{profilePicture}}"
                        />
                        <Text size="1" color="gray" mt="1" as="div">
                            Se o valor vinculado for um link/URL válido, a imagem será exibida.
                        </Text>
                    </Box>
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
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                                <span style={{ fontFamily: currentFontFamily }}>{currentFontFamily}</span>
                                                <ChevronDownIcon />
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                            {fontOptions.map(font => (
                                                <DropdownMenu.Item
                                                    key={font}
                                                    onSelect={() => handleStyleUpdate({ fontFamily: font })}
                                                    style={{ fontFamily: font }}
                                                >
                                                    {font}
                                                </DropdownMenu.Item>
                                            ))}
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                </Box>
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Peso</Text>
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                                {currentFontWeight === 'normal' ? 'Normal' : currentFontWeight === 'bold' ? 'Negrito' : currentFontWeight === '100' ? 'Fina' : currentFontWeight === '300' ? 'Leve' : 'Pesada'}
                                                <ChevronDownIcon />
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                                <DropdownMenu.Item onSelect={() => handleStyleUpdate({ fontWeight: 'normal' })}>Normal</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => { handleStyleUpdate({ fontWeight: 'bold' }); }}>Negrito</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => { handleStyleUpdate({ fontWeight: '100' }); }}>Fina</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => { handleStyleUpdate({ fontWeight: '300' }); }}>Leve</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => { handleStyleUpdate({ fontWeight: '900' }); }}>Pesada</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
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

                            <Grid columns="2" gap="3">
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Estilo</Text>
                                    <Flex gap="1">
                                        <IconButton
                                            variant={(element.style?.fontStyle as string) === 'italic' ? 'solid' : 'soft'}
                                            color="gray"
                                            onClick={(e) => { e.stopPropagation(); handleStyleUpdate({ fontStyle: (element.style?.fontStyle as string) === 'italic' ? 'normal' : 'italic' }); }}
                                            title="Itálico"
                                        >
                                            <FontItalicIcon />
                                        </IconButton>
                                        <IconButton
                                            variant={(element.style?.textDecoration as string) === 'underline' ? 'solid' : 'soft'}
                                            color="gray"
                                            onClick={(e) => { e.stopPropagation(); handleStyleUpdate({ textDecoration: (element.style?.textDecoration as string) === 'underline' ? 'none' : 'underline' }); }}
                                            title="Sublinhado"
                                        >
                                            <UnderlineIcon />
                                        </IconButton>
                                        <IconButton
                                            variant={(element.style?.textDecoration as string) === 'line-through' ? 'solid' : 'soft'}
                                            color="gray"
                                            onClick={(e) => { e.stopPropagation(); handleStyleUpdate({ textDecoration: (element.style?.textDecoration as string) === 'line-through' ? 'none' : 'line-through' }); }}
                                            title="Tachado"
                                        >
                                            <StrikethroughIcon />
                                        </IconButton>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Transformação</Text>
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                                {((element.style?.textTransform as string) || 'none') === 'none' ? 'Nenhum' : (element.style?.textTransform as string) === 'uppercase' ? 'MAIÚSCULA' : (element.style?.textTransform as string) === 'lowercase' ? 'minúscula' : 'Capitalizada'}
                                                <ChevronDownIcon />
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                                <DropdownMenu.Item onSelect={() => handleStyleUpdate({ textTransform: 'none' })}>Nenhum</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleStyleUpdate({ textTransform: 'uppercase' })}>MAIÚSCULA</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleStyleUpdate({ textTransform: 'lowercase' })}>minúscula</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleStyleUpdate({ textTransform: 'capitalize' })}>Capitalizada</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                </Box>
                            </Grid>

                            <Grid columns="2" gap="3">
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Altura da Linha</Text>
                                    <TextField.Root
                                        placeholder="Normal"
                                        value={(element.style?.lineHeight as string) || ''}
                                        onChange={e => handleStyleUpdate({ lineHeight: e.target.value || 'normal' })}
                                    />
                                </Box>
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Espaçamento</Text>
                                    <TextField.Root
                                        placeholder="Normal"
                                        value={(element.style?.letterSpacing as string) || ''}
                                        onChange={e => handleStyleUpdate({ letterSpacing: e.target.value || 'normal' })}
                                    />
                                </Box>
                            </Grid>

                            {element.type === 'text-container' && (
                                <Box>
                                    <Text size="1" color="gray" mb="1" as="div">Alinhamento Vertical</Text>
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                                {((element.style?.alignItems as string) || 'flex-start') === 'flex-start' ? 'Topo' : (element.style?.alignItems as string) === 'center' ? 'Centro' : 'Base'}
                                                <ChevronDownIcon />
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                                <DropdownMenu.Item onSelect={() => handleStyleUpdate({ alignItems: 'flex-start' })}>Topo</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleStyleUpdate({ alignItems: 'center' })}>Centro</DropdownMenu.Item>
                                            <DropdownMenu.Item onSelect={() => handleStyleUpdate({ alignItems: 'flex-end' })}>Base</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                </Box>
                            )}
                        </>
                    )}

                    {element.type === 'image' && (
                        <Box>
                            <Text size="1" color="gray" mb="1" as="div">Ajuste da Imagem</Text>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Button variant="soft" color="gray" style={{ width: '100%', justifyContent: 'space-between' }}>
                                        {((element.style?.objectFit as string) || 'cover') === 'cover' ? 'Cobrir (Cover)' : (element.style?.objectFit as string) === 'contain' ? 'Conter (Contain)' : 'Esticar (Fill)'}
                                        <ChevronDownIcon />
                                    </Button>
                                </DropdownMenu.Trigger>
                                        <DropdownMenu.Content {...(portalContainer && { container: portalContainer })} style={{ zIndex: 100000 }}>
                                                <DropdownMenu.Item onSelect={() => handleStyleUpdate({ objectFit: 'cover' })}>Cobrir (Cover)</DropdownMenu.Item>
                                    <DropdownMenu.Item onSelect={() => handleStyleUpdate({ objectFit: 'contain' })}>Conter (Contain)</DropdownMenu.Item>
                                    <DropdownMenu.Item onSelect={() => handleStyleUpdate({ objectFit: 'fill' })}>Esticar (Fill)</DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Box>
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

                    {currentBorderWidth > 0 && (
                        <Box>
                            <Text size="1" color="gray" mb="1" as="div">Cor da Borda</Text>
                            <ColorInput
                                color={element.style?.borderColor as string || '#000000'}
                                onChange={c => handleStyleUpdate({ borderColor: c })}
                            />
                        </Box>
                    )}

                    <Box>
                        <Flex justify="between" mb="1">
                            <Text size="1" color="gray">Cantos Arredondados</Text>
                            <Text size="1">{currentBorderRadius}px</Text>
                        </Flex>
                        <Slider
                            min={0}
                            max={50}
                            value={[currentBorderRadius]}
                            onValueChange={v => handleStyleUpdate({ borderRadius: `${v[0]}px` })}
                        />
                    </Box>

                    <Box>
                        <Flex justify="between" mb="1">
                            <Text size="1" color="gray">Opacidade</Text>
                            <Text size="1">{currentOpacity}%</Text>
                        </Flex>
                        <Slider
                            min={0}
                            max={100}
                            value={[currentOpacity]}
                            onValueChange={v => handleStyleUpdate({ opacity: v[0] / 100 })}
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
