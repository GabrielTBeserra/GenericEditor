import { Cross2Icon, PlusIcon, ImageIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, Grid, IconButton, ScrollArea, Text } from '@radix-ui/themes';
import React, { useRef } from 'react';
import { useEditor, type IAsset } from '../context';

export const AssetsPanel: React.FC = () => {
    const { state, addAsset, removeAsset } = useEditor();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const url = event.target?.result as string;
            
            // Create an image to get dimensions
            const img = new Image();
            img.onload = () => {
                const newAsset: IAsset = {
                    id: crypto.randomUUID(),
                    name: file.name,
                    url: url,
                    width: img.width,
                    height: img.height
                };
                addAsset(newAsset);
            };
            img.src = url;
        };
        reader.readAsDataURL(file);
        
        // Reset input
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <Flex direction="column" style={{ height: '100%', width: '100%' }}>
            <Flex justify="between" align="center" p="2" style={{ borderBottom: '1px solid var(--gray-5)' }}>
                <Flex align="center" gap="2">
                    <ImageIcon />
                    <Text size="2" weight="bold">Assets</Text>
                </Flex>
                <Button size="1" variant="soft" onClick={() => fileInputRef.current?.click()}>
                    <PlusIcon /> Adicionar
                </Button>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </Flex>

            <ScrollArea scrollbars="vertical" style={{ flex: 1 }}>
                <Box p="2">
                    {state.assets.length === 0 ? (
                        <Flex direction="column" align="center" justify="center" py="4" gap="2">
                            <Text size="1" color="gray" align="center">Nenhuma imagem adicionada.</Text>
                            <Button size="1" variant="outline" onClick={() => fileInputRef.current?.click()}>
                                Upload Imagem
                            </Button>
                        </Flex>
                    ) : (
                        <Grid columns="2" gap="2">
                            {state.assets.map(asset => (
                                <Box 
                                    key={asset.id} 
                                    style={{ 
                                        position: 'relative', 
                                        border: '1px solid var(--gray-5)', 
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                        aspectRatio: '1',
                                        cursor: 'grab'
                                    }}
                                    draggable
                                    onDragStart={(e) => {
                                        e.dataTransfer.setData('application/x-editor-asset', JSON.stringify(asset));
                                        e.dataTransfer.effectAllowed = 'copy';
                                    }}
                                >
                                    <img 
                                        src={asset.url} 
                                        alt={asset.name} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                    <IconButton 
                                        size="1" 
                                        variant="solid" 
                                        color="red" 
                                        style={{ 
                                            position: 'absolute', 
                                            top: 2, 
                                            right: 2, 
                                            opacity: 0.8 
                                        }}
                                        onClick={() => removeAsset(asset.id)}
                                    >
                                        <Cross2Icon />
                                    </IconButton>
                                    <Box style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(0,0,0,0.5)',
                                        padding: '2px 4px'
                                    }}>
                                        <Text size="1" style={{ color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                                            {asset.name}
                                        </Text>
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                    )}
                </Box>
            </ScrollArea>
        </Flex>
    );
};
