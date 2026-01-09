import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Dialog, Button, Flex, TextArea, TextField, Text, Badge } from '@radix-ui/themes';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useEditor, type IElement } from '../context';
import './context-menu.css';

// Componentes Auxiliares para o Menu Customizado
const MenuItem: React.FC<{ 
    children: React.ReactNode; 
    onClick?: () => void; 
    rightSlot?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}> = ({ children, onClick, rightSlot, style, className }) => (
    <div 
        className={`custom-menu-item ${className || ''}`} 
        onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick();
        }}
        style={style}
    >
        {children}
        {rightSlot && <div className="custom-menu-right-slot">{rightSlot}</div>}
    </div>
);

const MenuSeparator: React.FC = () => <div className="custom-menu-separator" />;

const SubMenu: React.FC<{ 
    label: React.ReactNode; 
    children: React.ReactNode; 
    scrollable?: boolean 
}> = ({ label, children, scrollable }) => (
    <div className="custom-menu-item">
        {label}
        <div className="custom-menu-right-slot"><ChevronRightIcon /></div>
        <div className={`custom-submenu ${scrollable ? 'scrollable' : ''}`}>
            {children}
        </div>
    </div>
);

export const ElementContextMenu: React.FC<{ children: React.ReactNode; element: IElement }> = ({ children, element }) => {
    const { updateElement, removeElement, addElement, moveElement, state } = useEditor();
    
    // Estado do Menu
    const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null);
    
    // Estado dos Modais
    const [isEditContentOpen, setIsEditContentOpen] = useState(false);
    const [isBindDataOpen, setIsBindDataOpen] = useState(false);
    
    // Estado Temporário para Edição
    const [tempContent, setTempContent] = useState(element.content);
    const [tempBinding, setTempBinding] = useState(element.dataBinding || "");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Fechar menu ao rolar a página ou redimensionar
    useEffect(() => {
        const closeMenu = () => setMenuPosition(null);
        window.addEventListener('scroll', closeMenu, true);
        window.addEventListener('resize', closeMenu);
        return () => {
            window.removeEventListener('scroll', closeMenu, true);
            window.removeEventListener('resize', closeMenu);
        };
    }, []);

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuPosition({ x: e.clientX, y: e.clientY });
    };

    const closeMenu = () => setMenuPosition(null);

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
        closeMenu();
    };
    
    const handleBringToFront = () => {
         const index = state.elements.findIndex(e => e.id === element.id);
         if (index < state.elements.length - 1) {
             moveElement(index, state.elements.length - 1);
         }
         closeMenu();
    };
    
    const handleSendToBack = () => {
         const index = state.elements.findIndex(e => e.id === element.id);
         if (index > 0) {
             moveElement(index, 0);
         }
         closeMenu();
    };

    const handleDuplicate = () => {
         addElement({
             type: element.type,
             content: element.content,
             x: element.x + 20,
             y: element.y + 20,
             width: element.width,
             height: element.height,
             style: element.style
         });
         closeMenu();
    };

    const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFA500', '#808080', '#800080', 'transparent'];

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
        closeMenu();
    };

    const handleUrlInput = () => {
        closeMenu();
        // Pequeno timeout para garantir que o prompt não bloqueie o fechamento visual do menu
        setTimeout(() => {
            const url = window.prompt("Insira a URL da imagem:", element.content);
            if (url !== null) {
                updateElement(element.id, { content: url });
            }
        }, 10);
    };

    const handleOpenBindData = () => {
        setTempBinding(element.dataBinding || "");
        setIsBindDataOpen(true);
        closeMenu();
    };

    const handleSaveBinding = () => {
        const propName = tempBinding;
        const updates: Partial<IElement> = { dataBinding: propName };
        if (element.type === 'text') {
            updates.content = `{{${propName}}}`;
        }
        updateElement(element.id, updates);
        setIsBindDataOpen(false);
    };

    const handleOpenEditContent = () => {
        setTempContent(element.content);
        setIsEditContentOpen(true);
        closeMenu();
    };

    const handleSaveContent = () => {
        updateElement(element.id, { content: tempContent });
        setIsEditContentOpen(false);
    };

    return (
        <>
            {/* Wrapper para capturar o clique direito */}
            <div onContextMenu={handleContextMenu} style={{ display: 'contents' }}>
                {children}
            </div>

            {/* Modais de Edição (Mantidos com Radix UI Dialog) */}
            <Dialog.Root open={isEditContentOpen} onOpenChange={setIsEditContentOpen}>
                <Dialog.Content style={{ maxWidth: 450 }}>
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
                <Dialog.Content style={{ maxWidth: 450 }}>
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

            <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                accept="image/*" 
                onChange={handleFileChange} 
            />

            {/* Menu Customizado via Portal */}
            {menuPosition && createPortal(
                <>
                    <div className="custom-context-menu-overlay" style={{ zIndex: 2147483646 }} onClick={closeMenu} onContextMenu={(e) => { e.preventDefault(); closeMenu(); }} />
                    <div 
                        className="custom-context-menu"
                        style={{ 
                            top: Math.min(menuPosition.y, window.innerHeight - 300), // Evita cortar embaixo (simplificado)
                            left: Math.min(menuPosition.x, window.innerWidth - 250),  // Evita cortar a direita (simplificado)
                            zIndex: 2147483647
                        }}
                    >
                        {/* Data Binding */}
                        <SubMenu label={
                            <>
                                Vincular Dados {element.dataBinding && <span style={{fontSize: 10, marginLeft: 4, opacity: 0.7}}>({element.dataBinding})</span>}
                            </>
                        }>
                            {state.availableProps && state.availableProps.length > 0 && (
                                <>
                                    {state.availableProps.map(prop => (
                                        <MenuItem 
                                            key={prop.dataName} 
                                            onClick={() => {
                                                const updates: Partial<IElement> = { dataBinding: prop.dataName };
                                                if (element.type === 'text') {
                                                    updates.content = `{{${prop.dataName}}}`;
                                                }
                                                updateElement(element.id, updates);
                                                closeMenu();
                                            }}
                                            rightSlot={<span style={{fontSize: 10}}>{prop.dataName}</span>}
                                        >
                                            {prop.name}
                                        </MenuItem>
                                    ))}
                                    <MenuSeparator />
                                </>
                            )}
                            
                            <MenuItem onClick={handleOpenBindData}>
                                Outro / Manual...
                            </MenuItem>
                            
                            {element.dataBinding && (
                                <>
                                    <MenuSeparator />
                                    <MenuItem 
                                        onClick={() => {
                                            updateElement(element.id, { dataBinding: undefined });
                                            closeMenu();
                                        }}
                                        style={{ color: 'var(--red-9)' }}
                                    >
                                        Remover Vínculo
                                    </MenuItem>
                                </>
                            )}
                        </SubMenu>
                        
                        <MenuSeparator />

                        {/* Text Specific Actions */}
                        {element.type === 'text' && (
                            <>
                                <MenuItem onClick={handleOpenEditContent}>
                                    Editar Texto...
                                </MenuItem>
                                <MenuSeparator />
                            </>
                        )}

                        {/* Common Actions */}
                        <MenuItem onClick={handleDuplicate}>Duplicar</MenuItem>
                        <MenuItem onClick={() => { removeElement(element.id); closeMenu(); }}>Excluir</MenuItem>
                        <MenuSeparator />
                        
                        {/* Image Specific */}
                        {element.type === 'image' && (
                            <>
                                <SubMenu label="Alterar Imagem">
                                    <MenuItem onClick={() => { fileInputRef.current?.click(); closeMenu(); }}>Carregar do Computador</MenuItem>
                                    <MenuItem onClick={handleUrlInput}>Inserir URL</MenuItem>
                                </SubMenu>
                                
                                <SubMenu label="Ajuste da Imagem">
                                    <MenuItem onClick={() => handleUpdateStyle({ objectFit: 'cover' })}>Preencher (Cover)</MenuItem>
                                    <MenuItem onClick={() => handleUpdateStyle({ objectFit: 'contain' })}>Ajustar (Contain)</MenuItem>
                                    <MenuItem onClick={() => handleUpdateStyle({ objectFit: 'fill' })}>Esticar (Fill)</MenuItem>
                                </SubMenu>

                                <MenuSeparator />
                            </>
                        )}
                        
                        {/* Layering */}
                        <SubMenu label="Camadas">
                            <MenuItem onClick={handleBringToFront}>Trazer para frente</MenuItem>
                            <MenuItem onClick={handleSendToBack}>Enviar para trás</MenuItem>
                        </SubMenu>
                        
                        <MenuSeparator />

                        {/* Text Styling */}
                        {element.type === 'text' && (
                            <>
                                <SubMenu label="Fonte" scrollable>
                                    {state.availableFonts && state.availableFonts.map(font => (
                                        <MenuItem 
                                            key={font} 
                                            onClick={() => handleUpdateStyle({ fontFamily: font })}
                                            style={{ fontFamily: font }}
                                            rightSlot={element.style?.fontFamily === font ? '✓' : undefined}
                                        >
                                            {font}
                                        </MenuItem>
                                    ))}
                                </SubMenu>

                                <SubMenu label="Tamanho da Fonte">
                                    {[12, 14, 16, 20, 24, 32, 48, 64].map(size => (
                                        <MenuItem key={size} onClick={() => handleUpdateStyle({ fontSize: `${size}px` })}>
                                            {size}px
                                        </MenuItem>
                                    ))}
                                </SubMenu>
                                
                                <SubMenu label="Cor do Texto">
                                    {colors.filter(c => c !== 'transparent').map(color => (
                                        <MenuItem key={color} onClick={() => handleUpdateStyle({ color })}>
                                            <div style={{ width: 12, height: 12, backgroundColor: color, marginRight: 8, border: '1px solid #ccc' }} />
                                            {color}
                                        </MenuItem>
                                    ))}
                                </SubMenu>
                                
                                <SubMenu label="Peso da Fonte">
                                    <MenuItem onClick={() => handleUpdateStyle({ fontWeight: 'normal' })}>Normal</MenuItem>
                                    <MenuItem onClick={() => handleUpdateStyle({ fontWeight: 'bold' })}>Negrito</MenuItem>
                                </SubMenu>

                                <SubMenu label="Alinhamento">
                                    <MenuItem onClick={() => handleUpdateStyle({ textAlign: 'left' })}>Esquerda</MenuItem>
                                    <MenuItem onClick={() => handleUpdateStyle({ textAlign: 'center' })}>Centro</MenuItem>
                                    <MenuItem onClick={() => handleUpdateStyle({ textAlign: 'right' })}>Direita</MenuItem>
                                </SubMenu>
                            </>
                        )}
                        
                        {/* Background Color */}
                        <SubMenu label="Cor de Fundo">
                            {colors.map(color => (
                                <MenuItem key={color} onClick={() => handleUpdateStyle({ backgroundColor: color })}>
                                    <div style={{ width: 12, height: 12, backgroundColor: color, marginRight: 8, border: '1px solid #ccc' }} />
                                    {color === 'transparent' ? 'Transparente' : color}
                                </MenuItem>
                            ))}
                        </SubMenu>
                        
                        {/* Border Radius */}
                        <SubMenu label="Arredondamento">
                            {[0, 4, 8, 12, 16, 24, '50%'].map(radius => (
                                <MenuItem 
                                    key={radius} 
                                    onClick={() => handleUpdateStyle({ borderRadius: typeof radius === 'number' ? `${radius}px` : radius })}
                                >
                                    {radius === '50%' ? 'Círculo' : `${radius}px`}
                                </MenuItem>
                            ))}
                        </SubMenu>
                        
                        {/* Padding */}
                        <SubMenu label="Espaçamento">
                            {[0, 4, 8, 12, 16, 24, 32].map(padding => (
                                <MenuItem key={padding} onClick={() => handleUpdateStyle({ padding: `${padding}px` })}>
                                    {padding}px
                                </MenuItem>
                            ))}
                        </SubMenu>

                        {/* Border */}
                        <SubMenu label="Borda">
                            <SubMenu label="Cor da Borda">
                                {colors.filter(c => c !== 'transparent').map(color => (
                                    <MenuItem key={color} onClick={() => handleUpdateStyle({ borderColor: color, borderStyle: 'solid' })}>
                                        <div style={{ width: 12, height: 12, backgroundColor: color, marginRight: 8, border: '1px solid #ccc' }} />
                                        {color}
                                    </MenuItem>
                                ))}
                                <MenuItem onClick={() => handleUpdateStyle({ borderStyle: 'none' })}>Sem Borda</MenuItem>
                            </SubMenu>
                            <SubMenu label="Espessura">
                                {[1, 2, 4, 8].map(w => (
                                    <MenuItem key={w} onClick={() => handleUpdateStyle({ borderWidth: `${w}px`, borderStyle: 'solid' })}>
                                        {w}px
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        </SubMenu>

                    </div>
                </>,
                document.body
            )}
        </>
    );
};
