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
    /** Elemento para renderizar portais (modais, dropdowns). Passe o elemento em fullscreen para que modais apareçam. */
    portalContainer?: HTMLElement | null;
}
export declare const GenericEditor: React.FC<EditorProps>;
