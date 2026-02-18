import { default as React } from 'react';
import { ITemplate } from '../types';
interface GlobalHeaderProps {
    onSave?: (json: string) => void;
    templates?: ITemplate[];
    setIsTemplatesOpen: (isOpen: boolean) => void;
    onFinish?: () => void;
}
export declare const GlobalHeader: React.FC<GlobalHeaderProps>;
export {};
