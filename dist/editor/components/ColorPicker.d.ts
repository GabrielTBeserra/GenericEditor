import { default as React } from 'react';
interface ColorPickerContentProps {
    color: string;
    onChange: (color: string) => void;
}
export declare const ColorPickerContent: React.FC<ColorPickerContentProps>;
interface ColorInputProps extends ColorPickerContentProps {
    label?: string;
}
export declare const ColorInput: React.FC<ColorInputProps>;
export {};
