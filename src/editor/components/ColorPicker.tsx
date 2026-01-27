import React from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { Box, Flex, TextField, Popover, Button } from '@radix-ui/themes';

interface ColorPickerContentProps {
    color: string;
    onChange: (color: string) => void;
}

export const ColorPickerContent: React.FC<ColorPickerContentProps> = ({ color, onChange }) => {
    // Ensure color is a valid hex string for the picker, defaulting to black if empty or invalid
    // react-colorful expects hex format. Handle 'transparent' keyword.
    
    const getSafeColor = (c: string) => {
        if (c === 'transparent') return '#00000000';
        if (!c) return '#000000';
        // If it looks like a hex without hash, add it for the picker
        if (/^[0-9A-Fa-f]{3,8}$/.test(c)) {
            return '#' + c;
        }
        return c;
    };
    
    const safeColor = getSafeColor(color);

    const handleBlur = () => {
        // Auto-fix hex on blur
        if (color && /^[0-9A-Fa-f]{3,8}$/.test(color)) {
            onChange('#' + color);
        }
    };

    return (
        <Flex direction="column" gap="3" style={{ width: '100%' }}>
            <HexAlphaColorPicker color={safeColor} onChange={onChange} style={{ width: '100%' }} />
            <Flex gap="2" align="center">
                <Box
                    style={{
                        width: 32,
                        height: 32,
                        backgroundColor: safeColor,
                        borderRadius: 4,
                        border: '1px solid var(--gray-5)',
                        flexShrink: 0
                    }}
                />
                <TextField.Root
                    value={color}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={handleBlur}
                    placeholder="#RRGGBBAA"
                    style={{ flexGrow: 1 }}
                />
            </Flex>
        </Flex>
    );
};

interface ColorInputProps extends ColorPickerContentProps {
    label?: string;
}

export const ColorInput: React.FC<ColorInputProps> = ({ color, onChange, label }) => {
    return (
        <Popover.Root>
            <Popover.Trigger>
                <Button variant="surface" color="gray" style={{ width: '100%', justifyContent: 'flex-start', padding: '0 8px', height: 32 }}>
                    <Box
                        style={{
                            width: 18,
                            height: 18,
                            backgroundColor: color || 'transparent',
                            borderRadius: 2,
                            border: '1px solid var(--gray-8)',
                            marginRight: 8,
                            backgroundImage: color === 'transparent' ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)' : 'none',
                            backgroundSize: '8px 8px',
                            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
                        }}
                    />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {label || color || 'Transparente'}
                    </span>
                </Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 240 }}>
                <ColorPickerContent color={color} onChange={onChange} />
            </Popover.Content>
        </Popover.Root>
    );
};
