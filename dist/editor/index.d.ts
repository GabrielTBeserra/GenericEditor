import { default as React } from 'react';
import { ILayout, ITemplate } from './types';
export interface EditorProps {
    layout: ILayout;
    initialState?: unknown;
    onSave?: (json: string) => void;
    theme?: 'light' | 'dark';
    templates?: ITemplate[];
    activeTemplateId?: string;
    onTemplateChange?: (templateId: string) => void;
}
export declare const GenericEditor: React.FC<EditorProps>;
