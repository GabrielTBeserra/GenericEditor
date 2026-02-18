import { default as React } from 'react';
import { IElement } from '../context';
import { IProp } from '../types';
interface AdvancedPropertiesPanelProps {
    elementId: string;
}
export declare const AdvancedPropertiesPanel: React.FC<AdvancedPropertiesPanelProps>;
export declare const AnimationSettings: React.FC<{
    element: IElement;
    updateElement: (id: string, changes: Partial<IElement>) => void;
}>;
export declare const FormattingSettings: React.FC<{
    element: IElement;
    updateElement: (id: string, changes: Partial<IElement>) => void;
}>;
export declare const StyleSettings: React.FC<{
    element: IElement;
    updateElement: (id: string, changes: Partial<IElement>) => void;
}>;
export declare const StyleBindingsSettings: React.FC<{
    element: IElement;
    updateElement: (id: string, changes: Partial<IElement>) => void;
    availableProps: IProp[];
}>;
export declare const ConditionalSettings: React.FC<{
    element: IElement;
    updateElement: (id: string, changes: Partial<IElement>) => void;
    availableProps: IProp[];
}>;
export {};
