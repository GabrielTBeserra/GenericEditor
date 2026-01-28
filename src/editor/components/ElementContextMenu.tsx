import * as ContextMenu from '@radix-ui/react-context-menu';
import { CheckIcon, ChevronRightIcon, EyeNoneIcon, EyeOpenIcon, LockClosedIcon, LockOpen1Icon } from '@radix-ui/react-icons';
import { Badge, Button, Dialog, Flex, Text, TextArea, TextField } from '@radix-ui/themes';
import React, { useRef, useState } from 'react';
import { useEditor, type IElement } from '../context';
import { ColorPickerContent } from './ColorPicker';
import './context-menu.css';
import { ElementAdvancedSettings } from './ElementAdvancedSettings';

const stopProp = (e: React.PointerEvent) => e.stopPropagation();

export const ElementContextMenu: React.FC<{ children: React.ReactNode; element: IElement }> = ({ children, element }) => {
    const { updateElement, removeElement, removeSelected, addElement, moveElement, copy, paste, state, renameElement, groupElements, ungroupElements } = useEditor();

    // Estado dos Modais
    const [isRenameOpen, setIsRenameOpen] = useState(false);
    const [isEditContentOpen, setIsEditContentOpen] = useState(false);
    const [isBindDataOpen, setIsBindDataOpen] = useState(false);
    const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState(false);
    const [settingsTab, setSettingsTab] = useState("formatting");
    const [colorDialog, setColorDialog] = useState<{ open: boolean; prop: string; value: string }>({ open: false, prop: '', value: '' });
    const [isImageUrlOpen, setIsImageUrlOpen] = useState(false);
    const [tempImageUrl, setTempImageUrl] = useState('');

    // Estado Temporário para Edição
    const [tempName, setTempName] = useState("");
    const [tempContent, setTempContent] = useState(element.content);
    const [tempBinding, setTempBinding] = useState(element.dataBinding || "");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Ações do Editor
    const handleInsertVariable = (variable: string) => {
        const textarea = textAreaRef.current;
        if (textarea) {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const text = tempContent;
            const newText = text.substring(0, start) + `{{${variable}}}` + text.substring(end);
            setTempContent(newText);

            setTimeout(() => {
                textarea.focus();
                const newCursorPos = start + variable.length + 4;
                textarea.setSelectionRange(newCursorPos, newCursorPos);
            }, 0);
        } else {
            setTempContent(prev => prev + `{{${variable}}}`);
        }
    };

    const handleUpdateStyle = (style: React.CSSProperties) => {
        updateElement(element.id, {
            style: { ...element.style, ...style }
        });
    };

    const handleBringToFront = () => {
        const index = state.elements.findIndex(e => e.id === element.id);
        if (index < state.elements.length - 1) {
            moveElement(index, state.elements.length - 1);
        }
    };

    const handleSendToBack = () => {
        const index = state.elements.findIndex(e => e.id === element.id);
        if (index > 0) {
            moveElement(index, 0);
        }
    };

    const handleDuplicate = () => {
        if (state.selectedElementIds.includes(element.id) && state.selectedElementIds.length > 1) {
            copy();
            paste();
        } else {
            addElement({
                type: element.type,
                content: element.content,
                x: element.x + 20,
                y: element.y + 20,
                width: element.width,
                height: element.height,
                style: element.style
            });
        }
    };

    const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFA500', '#808080', '#800080', 'transparent'];

    const handleOpenColorDialog = (prop: string, currentValue: string) => {
        setColorDialog({ open: true, prop, value: currentValue });
    };

    const handleSaveColorDialog = () => {
        handleUpdateStyle({ [colorDialog.prop]: colorDialog.value });
        setColorDialog(prev => ({ ...prev, open: false }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    updateElement(element.id, { content: event.target.result as string });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleOpenImageUrl = () => {
        setTempImageUrl(typeof element.content === 'string' ? element.content : '');
        setIsImageUrlOpen(true);
    };
    const handleSaveImageUrl = () => {
        updateElement(element.id, { content: tempImageUrl });
        setIsImageUrlOpen(false);
    };

    const handleOpenBindData = () => {
        setTempBinding(element.dataBinding || "");
        setIsBindDataOpen(true);
    };

    const handleSaveBinding = () => {
        const propName = tempBinding;
        const updates: Partial<IElement> = { dataBinding: propName };
        if (element.type === 'text' || element.type === 'text-container') {
            updates.content = `{{${propName}}}`;
        }
        updateElement(element.id, updates);
        setIsBindDataOpen(false);
    };

    const handleOpenEditContent = () => {
        setTempContent(element.content);
        setIsEditContentOpen(true);
    };

    const handleSaveContent = () => {
        updateElement(element.id, { content: tempContent });
        setIsEditContentOpen(false);
    };

    const handleOpenRename = () => {
        setTempName(element.name || (element.type === 'group' ? 'Grupo' : 'Elemento'));
        setIsRenameOpen(true);
    };

    const handleSaveRename = () => {
        renameElement(element.id, tempName);
        setIsRenameOpen(false);
    };

    return (
        <>
            {/* Modais de Edição */}
            <Dialog.Root open={isRenameOpen} onOpenChange={setIsRenameOpen}>
                <Dialog.Content style={{ maxWidth: 450 }} onPointerDown={stopProp}>
                    <Dialog.Title>Renomear Camada</Dialog.Title>
                    <Flex direction="column" gap="3">
                        <TextField.Root
                            value={tempName}
                            onChange={e => setTempName(e.target.value)}
                            placeholder="Nome da camada..."
                        />
                        <Flex gap="3" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">Cancelar</Button>
                            </Dialog.Close>
                            <Button onClick={handleSaveRename}>Salvar</Button>
                        </Flex>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

            <Dialog.Root open={isEditContentOpen} onOpenChange={setIsEditContentOpen}>
                <Dialog.Content style={{ maxWidth: 450 }} onPointerDown={stopProp}>
                    <Dialog.Title>Editar Texto</Dialog.Title>
                    <Flex direction="column" gap="3">
                        <TextArea
                            ref={textAreaRef}
                            value={tempContent}
                            onChange={e => setTempContent(e.target.value)}
                            placeholder="Digite o novo texto..."
                            style={{ height: 100 }}
                        />

                        {state.availableProps && state.availableProps.length > 0 && (
                            <Flex direction="column" gap="2">
                                <Text size="1" color="gray">Inserir variável:</Text>
                                <Flex gap="2" wrap="wrap">
                                    {state.availableProps.map(prop => (
                                        <Badge
                                            key={prop.dataName}
                                            color="blue"
                                            variant="surface"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleInsertVariable(prop.dataName)}
                                        >
                                            {prop.name}
                                        </Badge>
                                    ))}
                                </Flex>
                            </Flex>
                        )}

                        <Flex gap="3" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">Cancelar</Button>
                            </Dialog.Close>
                            <Button onClick={handleSaveContent}>Salvar</Button>
                        </Flex>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

            <Dialog.Root open={isBindDataOpen} onOpenChange={setIsBindDataOpen}>
                <Dialog.Content style={{ maxWidth: 450 }} onPointerDown={stopProp}>
                    <Dialog.Title>Vincular Dados Manualmente</Dialog.Title>
                    <Flex direction="column" gap="3">
                        <Text size="2">Nome da propriedade (ex: titulo, preco, imagem):</Text>
                        <TextField.Root
                            value={tempBinding}
                            onChange={e => setTempBinding(e.target.value)}
                            placeholder="propriedade"
                        />
                        <Flex gap="3" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">Cancelar</Button>
                            </Dialog.Close>
                            <Button onClick={handleSaveBinding}>Vincular</Button>
                        </Flex>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

            <Dialog.Root open={colorDialog.open} onOpenChange={(open) => setColorDialog(prev => ({ ...prev, open }))}>
                <Dialog.Content style={{ maxWidth: 300 }} onPointerDown={stopProp}>
                    <Dialog.Title>Selecionar Cor</Dialog.Title>
                    <ColorPickerContent
                        color={colorDialog.value}
                        onChange={(val) => setColorDialog(prev => ({ ...prev, value: val }))}
                    />
                    <Flex gap="3" justify="end" mt="4">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">Cancelar</Button>
                        </Dialog.Close>
                        <Button onClick={handleSaveColorDialog}>Aplicar</Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

            <ElementAdvancedSettings
                elementId={element.id}
                open={isAdvancedSettingsOpen}
                onOpenChange={setIsAdvancedSettingsOpen}
                initialTab={settingsTab}
            />

            <Dialog.Root open={isImageUrlOpen} onOpenChange={setIsImageUrlOpen}>
                <Dialog.Content style={{ maxWidth: 450 }} onPointerDown={stopProp}>
                    <Dialog.Title>Inserir URL da Imagem</Dialog.Title>
                    <Flex direction="column" gap="3">
                        <TextField.Root
                            value={tempImageUrl}
                            onChange={e => setTempImageUrl(e.target.value)}
                            placeholder="https://exemplo.com/imagem.png"
                        />
                        <Flex gap="3" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">Cancelar</Button>
                            </Dialog.Close>
                            <Button onClick={handleSaveImageUrl}>Aplicar</Button>
                        </Flex>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
            />

            {/* Radix Context Menu */}
            <ContextMenu.Root>
                <ContextMenu.Trigger asChild>
                    <div style={{ display: 'contents' }}>
                        {children}
                    </div>
                </ContextMenu.Trigger>

                <ContextMenu.Portal>
                    <ContextMenu.Content className="ContextMenuContent">

                        <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => updateElement(element.id, { locked: !element.locked })}>
                            {element.locked ? 'Desbloquear' : 'Bloquear'}
                            <div className="RightSlot">{element.locked ? <LockOpen1Icon /> : <LockClosedIcon />}</div>
                        </ContextMenu.Item>
                        <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => updateElement(element.id, { hidden: !element.hidden })}>
                            {element.hidden ? 'Mostrar' : 'Ocultar'}
                            <div className="RightSlot">{element.hidden ? <EyeOpenIcon /> : <EyeNoneIcon />}</div>
                        </ContextMenu.Item>
                        <ContextMenu.Separator className="ContextMenuSeparator" />

                        {/* Data Binding */}
                        <ContextMenu.Sub>
                            <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                Vincular Dados
                                {element.dataBinding && <span style={{ fontSize: 10, marginLeft: 4, opacity: 0.7 }}>({element.dataBinding})</span>}
                                <div className="RightSlot">
                                    <ChevronRightIcon />
                                </div>
                            </ContextMenu.SubTrigger>
                            <ContextMenu.Portal>
                                <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                    {state.availableProps && state.availableProps.length > 0 && (
                                        <>
                                            {state.availableProps.map(prop => (
                                                <ContextMenu.Item
                                                    key={prop.dataName}
                                                    className="ContextMenuItem"
                                                    onPointerDown={stopProp}
                                                    onSelect={() => {
                                                        const updates: Partial<IElement> = { dataBinding: prop.dataName };
                                                        if (element.type === 'text' || element.type === 'text-container' || element.type === 'image') {
                                                            updates.content = `{{${prop.dataName}}}`;
                                                        }
                                                        updateElement(element.id, updates);
                                                    }}
                                                >
                                                    {prop.name} <div className="RightSlot">{prop.dataName}</div>
                                                </ContextMenu.Item>
                                            ))}
                                            <ContextMenu.Separator className="ContextMenuSeparator" />
                                        </>
                                    )}

                                    <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={handleOpenBindData}>
                                        Outro / Manual...
                                    </ContextMenu.Item>

                                    {element.dataBinding && (
                                        <>
                                            <ContextMenu.Separator className="ContextMenuSeparator" />
                                            <ContextMenu.Item
                                                className="ContextMenuItem"
                                                onPointerDown={stopProp}
                                                onSelect={() => updateElement(element.id, { dataBinding: undefined })}
                                                style={{ color: 'var(--red-9)' }}
                                            >
                                                Remover Vínculo
                                            </ContextMenu.Item>
                                        </>
                                    )}
                                </ContextMenu.SubContent>
                            </ContextMenu.Portal>
                        </ContextMenu.Sub>

                        <ContextMenu.Separator className="ContextMenuSeparator" />

                        {/* Text Specific Actions */}
                        {(element.type === 'text' || element.type === 'text-container') && (
                            <>
                                <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={handleOpenEditContent}>
                                    Editar Texto...
                                </ContextMenu.Item>
                                <ContextMenu.Separator className="ContextMenuSeparator" />
                            </>
                        )}

                        {/* Grouping Actions */}
                        <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={handleOpenRename}>
                            Renomear...
                        </ContextMenu.Item>

                        {/* Show Group option if selected items >= 1 and current element (or its parent) is part of selection */}
                        {(state.selectedElementIds.length >= 1 && (state.selectedElementIds.includes(element.id) || (element.groupId && state.selectedElementIds.includes(element.groupId)))) && (
                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => groupElements(state.selectedElementIds)}>
                                {state.selectedElementIds.length > 1 ? 'Agrupar Seleção' : 'Agrupar (Criar Pasta)'}
                            </ContextMenu.Item>
                        )}

                        {/* Show Ungroup if it is a group OR if its parent group is selected */}
                        {(element.type === 'group' || (element.groupId && state.selectedElementIds.includes(element.groupId))) && (
                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => ungroupElements(element.type === 'group' ? element.id : element.groupId!)}>
                                {element.type === 'group' ? 'Desagrupar' : 'Desagrupar Pai'}
                            </ContextMenu.Item>
                        )}

                        <ContextMenu.Separator className="ContextMenuSeparator" />

                        {/* Common Actions */}
                        <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => setIsAdvancedSettingsOpen(true)}>
                            Configurações Avançadas...
                        </ContextMenu.Item>
                        <ContextMenu.Separator className="ContextMenuSeparator" />

                        <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={handleDuplicate}>
                            {state.selectedElementIds.includes(element.id) && state.selectedElementIds.length > 1
                                ? `Duplicar Selecionados (${state.selectedElementIds.length})`
                                : 'Duplicar'}
                        </ContextMenu.Item>
                        <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => {
                            if (state.selectedElementIds.includes(element.id) && state.selectedElementIds.length > 1) {
                                removeSelected();
                            } else {
                                removeElement(element.id);
                            }
                        }}>
                            {state.selectedElementIds.includes(element.id) && state.selectedElementIds.length > 1
                                ? `Excluir Selecionados (${state.selectedElementIds.length})`
                                : 'Excluir'}
                        </ContextMenu.Item>
                        <ContextMenu.Separator className="ContextMenuSeparator" />

                        {/* Image Specific */}
                        {element.type === 'image' && (
                            <>
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                        Alterar Imagem
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => fileInputRef.current?.click()}>
                                                Carregar do Computador
                                            </ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={handleOpenImageUrl}>
                                                Inserir URL
                                            </ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                        Ajuste da Imagem
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ objectFit: 'cover' })}>Preencher (Cover)</ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ objectFit: 'contain' })}>Ajustar (Contain)</ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ objectFit: 'fill' })}>Esticar (Fill)</ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>

                                <ContextMenu.Separator className="ContextMenuSeparator" />
                            </>
                        )}

                        {/* Layering */}
                        <ContextMenu.Sub>
                            <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                Camadas
                                <div className="RightSlot"><ChevronRightIcon /></div>
                            </ContextMenu.SubTrigger>
                            <ContextMenu.Portal>
                                <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                    <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={handleBringToFront}>Trazer para frente</ContextMenu.Item>
                                    <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={handleSendToBack}>Enviar para trás</ContextMenu.Item>
                                </ContextMenu.SubContent>
                            </ContextMenu.Portal>
                        </ContextMenu.Sub>

                        <ContextMenu.Separator className="ContextMenuSeparator" />

                        {/* Text Styling */}
                        {(element.type === 'text' || element.type === 'text-container') && (
                            <>
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                        Fonte
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent ContextMenuScrollable" sideOffset={2} alignOffset={-5}>
                                            {state.availableFonts && state.availableFonts.map(font => (
                                                <ContextMenu.Item
                                                    key={font}
                                                    className="ContextMenuItem"
                                                    onPointerDown={stopProp}
                                                    onSelect={() => handleUpdateStyle({ fontFamily: font })}
                                                    style={{ fontFamily: font }}
                                                >
                                                    {font}
                                                    {element.style?.fontFamily === font && <div className="RightSlot"><CheckIcon /></div>}
                                                </ContextMenu.Item>
                                            ))}
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                        Tamanho da Fonte
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                            {[12, 14, 16, 20, 24, 32, 48, 64].map(size => (
                                                <ContextMenu.Item key={size} className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ fontSize: `${size}px` })}>
                                                    {size}px
                                                </ContextMenu.Item>
                                            ))}
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                        Cor do Texto
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                            {colors.filter(c => c !== 'transparent').map(color => (
                                                <ContextMenu.Item key={color} className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ color })}>
                                                    <div style={{ width: 12, height: 12, backgroundColor: color, marginRight: 8, border: '1px solid #ccc' }} />
                                                    {color}
                                                </ContextMenu.Item>
                                            ))}
                                            <ContextMenu.Separator className="ContextMenuSeparator" />
                                            <ContextMenu.Item
                                                className="ContextMenuItem"
                                                onPointerDown={stopProp}
                                                onSelect={() => handleOpenColorDialog('color', element.style?.color as string || '#000000')}
                                            >
                                                Outra Cor...
                                            </ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                        Peso da Fonte
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ fontWeight: 'normal' })}>Normal</ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ fontWeight: 'bold' })}>Negrito</ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                        Alinhamento
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ textAlign: 'left' })}>Esquerda</ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ textAlign: 'center' })}>Centro</ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ textAlign: 'right' })}>Direita</ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                        Alinhamento Vertical
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' })}>Topo</ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ display: 'flex', flexDirection: 'column', justifyContent: 'center' })}>Centro</ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' })}>Base</ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>
                            </>
                        )}

                        {/* Background Color */}
                        <ContextMenu.Sub>
                            <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                Cor de Fundo
                                <div className="RightSlot"><ChevronRightIcon /></div>
                            </ContextMenu.SubTrigger>
                            <ContextMenu.Portal>
                                <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                    {colors.map(color => (
                                        <ContextMenu.Item key={color} className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ backgroundColor: color })}>
                                            <div style={{ width: 12, height: 12, backgroundColor: color, marginRight: 8, border: '1px solid #ccc' }} />
                                            {color === 'transparent' ? 'Transparente' : color}
                                        </ContextMenu.Item>
                                    ))}
                                    <ContextMenu.Separator className="ContextMenuSeparator" />
                                    <ContextMenu.Item
                                        className="ContextMenuItem"
                                        onPointerDown={stopProp}
                                        onSelect={() => handleOpenColorDialog('backgroundColor', element.style?.backgroundColor as string || 'transparent')}
                                    >
                                        Outra Cor...
                                    </ContextMenu.Item>
                                </ContextMenu.SubContent>
                            </ContextMenu.Portal>
                        </ContextMenu.Sub>

                        {/* Border Radius */}
                        <ContextMenu.Sub>
                            <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                Arredondamento
                                <div className="RightSlot"><ChevronRightIcon /></div>
                            </ContextMenu.SubTrigger>
                            <ContextMenu.Portal>
                                <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                    {[0, 4, 8, 12, 16, 24, '50%'].map(radius => (
                                        <ContextMenu.Item
                                            key={radius}
                                            className="ContextMenuItem"
                                            onPointerDown={stopProp}
                                            onSelect={() => handleUpdateStyle({ borderRadius: typeof radius === 'number' ? `${radius}px` : radius })}
                                        >
                                            {radius === '50%' ? 'Círculo' : `${radius}px`}
                                        </ContextMenu.Item>
                                    ))}
                                    <ContextMenu.Separator className="ContextMenuSeparator" />
                                    <ContextMenu.Item
                                        className="ContextMenuItem"
                                        onPointerDown={stopProp}
                                        onSelect={() => {
                                            setSettingsTab("style");
                                            setIsAdvancedSettingsOpen(true);
                                        }}
                                    >
                                        Personalizar...
                                    </ContextMenu.Item>
                                </ContextMenu.SubContent>
                            </ContextMenu.Portal>
                        </ContextMenu.Sub>

                        {/* Padding */}
                        <ContextMenu.Sub>
                            <ContextMenu.SubTrigger className="ContextMenuSubTrigger" onPointerDown={stopProp}>
                                Espaçamento
                                <div className="RightSlot"><ChevronRightIcon /></div>
                            </ContextMenu.SubTrigger>
                            <ContextMenu.Portal>
                                <ContextMenu.SubContent className="ContextMenuSubContent" sideOffset={2} alignOffset={-5}>
                                    {[0, 4, 8, 12, 16, 24, 32].map(padding => (
                                        <ContextMenu.Item key={padding} className="ContextMenuItem" onPointerDown={stopProp} onSelect={() => handleUpdateStyle({ padding: `${padding}px` })}>
                                            {padding}px
                                        </ContextMenu.Item>
                                    ))}
                                    <ContextMenu.Separator className="ContextMenuSeparator" />
                                    <ContextMenu.Item
                                        className="ContextMenuItem"
                                        onPointerDown={stopProp}
                                        onSelect={() => {
                                            setSettingsTab("style");
                                            setIsAdvancedSettingsOpen(true);
                                        }}
                                    >
                                        Personalizar...
                                    </ContextMenu.Item>
                                </ContextMenu.SubContent>
                            </ContextMenu.Portal>
                        </ContextMenu.Sub>

                    </ContextMenu.Content>
                </ContextMenu.Portal>
            </ContextMenu.Root>
        </>
    );
};
