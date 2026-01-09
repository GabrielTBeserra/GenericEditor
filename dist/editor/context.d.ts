import { default as React, ReactNode } from 'react';
export interface IElementCondition {
    id: string;
    property: string;
    operator: 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan' | 'truthy' | 'falsy';
    value: string;
    style: React.CSSProperties;
}
export interface IElementFormatting {
    type: 'text' | 'number' | 'date' | 'boolean' | 'map';
    dateFormat?: string;
    numberFormat?: 'decimal' | 'currency' | 'percent';
    currencySymbol?: string;
    decimalPlaces?: number;
    trueLabel?: string;
    falseLabel?: string;
    mapping?: Record<string, string>;
}
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
    formatting?: IElementFormatting;
    conditions?: IElementCondition[];
}
export interface IListSettings {
    sortProp?: string;
    sortOrder: 'asc' | 'desc';
    newestPosition?: 'top' | 'bottom';
    scrollDirection?: 'up' | 'down';
    containerHeight?: number;
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
    canvasHeight?: number;
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
    setCanvasHeight: (height: number) => void;
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
