import { default as React } from 'react';
import { ILayout } from './types';
interface EditorProps {
    layout: ILayout;
    initialState?: any;
    onSave?: (json: string) => void;
    theme?: 'light' | 'dark';
}
export declare const GenericEditor: React.FC<EditorProps>;
export {};
