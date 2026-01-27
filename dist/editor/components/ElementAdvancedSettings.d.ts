import { default as React } from 'react';
interface ElementAdvancedSettingsProps {
    elementId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialTab?: string;
}
export declare const ElementAdvancedSettings: React.FC<ElementAdvancedSettingsProps>;
export {};
