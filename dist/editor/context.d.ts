import { default as React, ReactNode } from 'react';
export interface IElement {
    id: string;
    type: 'text' | 'image' | 'box';
    content: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation?: number;
    style?: React.CSSProperties;
    dataBinding?: string;
}
export interface IListSettings {
    sortProp?: string;
    sortOrder: 'asc' | 'desc';
}
export interface IProp {
    name: string;
    dataName: string;
}
interface IEditorState {
    elements: IElement[];
    selectedElementId: string | null;
    isList: boolean;
    mockData: any[];
    singleMockData: Record<string, any>;
    listSettings: IListSettings;
    availableProps: IProp[];
    availableFonts: string[];
    theme: 'light' | 'dark';
}
interface IEditorContext {
    state: IEditorState;
    addElement: (element: Omit<IElement, 'id' | 'x' | 'y' | 'width' | 'height'> & Partial<Pick<IElement, 'x' | 'y' | 'width' | 'height'>>) => void;
    removeElement: (id: string) => void;
    selectElement: (id: string | null) => void;
    moveElement: (dragIndex: number, hoverIndex: number) => void;
    updateElement: (id: string, updates: Partial<IElement>) => void;
    setMockData: (data: any[], singleData: Record<string, any>) => void;
    updateListSettings: (settings: Partial<IListSettings>) => void;
    loadState: (savedState: Partial<IEditorState>) => void;
}
export declare const EditorProvider: React.FC<{
    children: ReactNode;
    isList?: boolean;
    availableProps?: IProp[];
    theme?: 'light' | 'dark';
}>;
export declare const useEditor: () => IEditorContext;
export {};
