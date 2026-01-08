import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useEditor, IElement } from '../context';
import './context-menu.css';

export const ElementContextMenu: React.FC<{ children: React.ReactNode; element: IElement }> = ({ children, element }) => {
    const { updateElement, removeElement, addElement, moveElement, state } = useEditor();

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
         addElement({
             type: element.type,
             content: element.content,
             x: element.x + 20,
             y: element.y + 20,
             width: element.width,
             height: element.height,
             style: element.style
         });
    };

    const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFA500', '#808080', '#800080', 'transparent'];
    const fileInputRef = React.useRef<HTMLInputElement>(null);

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

    const handleUrlInput = () => {
        const url = window.prompt("Insira a URL da imagem:", element.content);
        if (url !== null) {
            updateElement(element.id, { content: url });
        }
    };

    return (
        <>
            <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                accept="image/*" 
                onChange={handleFileChange} 
            />
            <ContextMenu.Root>
                <ContextMenu.Trigger asChild>
                    {children}
                </ContextMenu.Trigger>
                <ContextMenu.Portal>
                    <ContextMenu.Content className="ContextMenuContent">
                        {/* Common Actions */}
                        <ContextMenu.Item className="ContextMenuItem" onSelect={handleDuplicate}>
                            Duplicar
                        </ContextMenu.Item>
                        <ContextMenu.Item className="ContextMenuItem" onSelect={() => removeElement(element.id)}>
                            Excluir
                        </ContextMenu.Item>
                        <ContextMenu.Separator className="ContextMenuSeparator" />
                        
                        {/* Image Specific */}
                        {element.type === 'image' && (
                            <>
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                        Alterar Imagem
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent">
                                            <ContextMenu.Item className="ContextMenuItem" onSelect={() => fileInputRef.current?.click()}>
                                                Carregar do Computador
                                            </ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onSelect={handleUrlInput}>
                                                Inserir URL
                                            </ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>
                                
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                        Ajuste da Imagem
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent">
                                            <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ objectFit: 'cover' })}>
                                                Preencher (Cover)
                                            </ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ objectFit: 'contain' })}>
                                                Ajustar (Contain)
                                            </ContextMenu.Item>
                                            <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ objectFit: 'fill' })}>
                                                Esticar (Fill)
                                            </ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>

                                <ContextMenu.Separator className="ContextMenuSeparator" />
                            </>
                        )}
                        
                        {/* Layering */}
                        <ContextMenu.Sub>
                        <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                            Camadas
                            <div className="RightSlot"><ChevronRightIcon /></div>
                        </ContextMenu.SubTrigger>
                        <ContextMenu.Portal>
                            <ContextMenu.SubContent className="ContextMenuSubContent">
                                <ContextMenu.Item className="ContextMenuItem" onSelect={handleBringToFront}>
                                    Trazer para frente
                                </ContextMenu.Item>
                                <ContextMenu.Item className="ContextMenuItem" onSelect={handleSendToBack}>
                                    Enviar para trás
                                </ContextMenu.Item>
                            </ContextMenu.SubContent>
                        </ContextMenu.Portal>
                    </ContextMenu.Sub>
                    
                     <ContextMenu.Separator className="ContextMenuSeparator" />

                    {/* Text Specific */}
                    {element.type === 'text' && (
                        <>
                            <ContextMenu.Sub>
                                <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                    Tamanho da Fonte
                                    <div className="RightSlot"><ChevronRightIcon /></div>
                                </ContextMenu.SubTrigger>
                                <ContextMenu.Portal>
                                    <ContextMenu.SubContent className="ContextMenuSubContent">
                                        {[12, 14, 16, 20, 24, 32, 48, 64].map(size => (
                                            <ContextMenu.Item 
                                                key={size} 
                                                className="ContextMenuItem"
                                                onSelect={() => handleUpdateStyle({ fontSize: `${size}px` })}
                                            >
                                                {size}px
                                            </ContextMenu.Item>
                                        ))}
                                    </ContextMenu.SubContent>
                                </ContextMenu.Portal>
                            </ContextMenu.Sub>
                            
                             <ContextMenu.Sub>
                                <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                    Cor do Texto
                                    <div className="RightSlot"><ChevronRightIcon /></div>
                                </ContextMenu.SubTrigger>
                                <ContextMenu.Portal>
                                    <ContextMenu.SubContent className="ContextMenuSubContent">
                                        {colors.filter(c => c !== 'transparent').map(color => (
                                            <ContextMenu.Item 
                                                key={color} 
                                                className="ContextMenuItem"
                                                onSelect={() => handleUpdateStyle({ color })}
                                            >
                                                <div style={{ width: 12, height: 12, backgroundColor: color, marginRight: 8, border: '1px solid #ccc' }} />
                                                {color}
                                            </ContextMenu.Item>
                                        ))}
                                    </ContextMenu.SubContent>
                                </ContextMenu.Portal>
                            </ContextMenu.Sub>
                            
                            <ContextMenu.Sub>
                                <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                    Peso da Fonte
                                    <div className="RightSlot"><ChevronRightIcon /></div>
                                </ContextMenu.SubTrigger>
                                <ContextMenu.Portal>
                                    <ContextMenu.SubContent className="ContextMenuSubContent">
                                        <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ fontWeight: 'normal' })}>Normal</ContextMenu.Item>
                                        <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ fontWeight: 'bold' })}>Negrito</ContextMenu.Item>
                                    </ContextMenu.SubContent>
                                </ContextMenu.Portal>
                            </ContextMenu.Sub>

                            <ContextMenu.Sub>
                                <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                    Alinhamento
                                    <div className="RightSlot"><ChevronRightIcon /></div>
                                </ContextMenu.SubTrigger>
                                <ContextMenu.Portal>
                                    <ContextMenu.SubContent className="ContextMenuSubContent">
                                        <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ textAlign: 'left' })}>Esquerda</ContextMenu.Item>
                                        <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ textAlign: 'center' })}>Centro</ContextMenu.Item>
                                        <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ textAlign: 'right' })}>Direita</ContextMenu.Item>
                                    </ContextMenu.SubContent>
                                </ContextMenu.Portal>
                            </ContextMenu.Sub>
                        </>
                    )}
                    
                     {/* Background Color */}
                     <ContextMenu.Sub>
                        <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                            Cor de Fundo
                            <div className="RightSlot"><ChevronRightIcon /></div>
                        </ContextMenu.SubTrigger>
                        <ContextMenu.Portal>
                            <ContextMenu.SubContent className="ContextMenuSubContent">
                                {colors.map(color => (
                                    <ContextMenu.Item 
                                        key={color} 
                                        className="ContextMenuItem"
                                        onSelect={() => handleUpdateStyle({ backgroundColor: color })}
                                    >
                                        <div style={{ width: 12, height: 12, backgroundColor: color, marginRight: 8, border: '1px solid #ccc' }} />
                                        {color === 'transparent' ? 'Transparente' : color}
                                    </ContextMenu.Item>
                                ))}
                            </ContextMenu.SubContent>
                        </ContextMenu.Portal>
                    </ContextMenu.Sub>
                    
                    {/* Border Radius */}
                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                            Arredondamento
                            <div className="RightSlot"><ChevronRightIcon /></div>
                        </ContextMenu.SubTrigger>
                        <ContextMenu.Portal>
                            <ContextMenu.SubContent className="ContextMenuSubContent">
                                {[0, 4, 8, 12, 16, 24, '50%'].map(radius => (
                                    <ContextMenu.Item 
                                        key={radius} 
                                        className="ContextMenuItem"
                                        onSelect={() => handleUpdateStyle({ borderRadius: typeof radius === 'number' ? `${radius}px` : radius })}
                                    >
                                        {radius === '50%' ? 'Círculo' : `${radius}px`}
                                    </ContextMenu.Item>
                                ))}
                            </ContextMenu.SubContent>
                        </ContextMenu.Portal>
                    </ContextMenu.Sub>
                    
                    {/* Padding */}
                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                            Espaçamento
                            <div className="RightSlot"><ChevronRightIcon /></div>
                        </ContextMenu.SubTrigger>
                        <ContextMenu.Portal>
                            <ContextMenu.SubContent className="ContextMenuSubContent">
                                {[0, 4, 8, 12, 16, 24, 32].map(padding => (
                                    <ContextMenu.Item 
                                        key={padding} 
                                        className="ContextMenuItem"
                                        onSelect={() => handleUpdateStyle({ padding: `${padding}px` })}
                                    >
                                        {padding}px
                                    </ContextMenu.Item>
                                ))}
                            </ContextMenu.SubContent>
                        </ContextMenu.Portal>
                    </ContextMenu.Sub>

                     {/* Border */}
                     <ContextMenu.Sub>
                        <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                            Borda
                            <div className="RightSlot"><ChevronRightIcon /></div>
                        </ContextMenu.SubTrigger>
                        <ContextMenu.Portal>
                            <ContextMenu.SubContent className="ContextMenuSubContent">
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                        Cor da Borda
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent">
                                            {colors.filter(c => c !== 'transparent').map(color => (
                                                <ContextMenu.Item 
                                                    key={color} 
                                                    className="ContextMenuItem"
                                                    onSelect={() => handleUpdateStyle({ borderColor: color, borderStyle: 'solid' })}
                                                >
                                                    <div style={{ width: 12, height: 12, backgroundColor: color, marginRight: 8, border: '1px solid #ccc' }} />
                                                    {color}
                                                </ContextMenu.Item>
                                            ))}
                                            <ContextMenu.Item className="ContextMenuItem" onSelect={() => handleUpdateStyle({ borderStyle: 'none' })}>
                                                Sem Borda
                                            </ContextMenu.Item>
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>
                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                        Espessura
                                        <div className="RightSlot"><ChevronRightIcon /></div>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.SubContent className="ContextMenuSubContent">
                                            {[1, 2, 4, 8].map(w => (
                                                <ContextMenu.Item 
                                                    key={w} 
                                                    className="ContextMenuItem"
                                                    onSelect={() => handleUpdateStyle({ borderWidth: `${w}px`, borderStyle: 'solid' })}
                                                >
                                                    {w}px
                                                </ContextMenu.Item>
                                            ))}
                                        </ContextMenu.SubContent>
                                    </ContextMenu.Portal>
                                </ContextMenu.Sub>
                            </ContextMenu.SubContent>
                        </ContextMenu.Portal>
                    </ContextMenu.Sub>

                </ContextMenu.Content>
            </ContextMenu.Portal>
        </ContextMenu.Root>
        </>
    );
};
