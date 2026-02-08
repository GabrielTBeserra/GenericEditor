import { default as React, ReactNode } from 'react';
import { GenericData } from './types';
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
export interface IElementAnimation {
    type: 'none' | 'fadeIn' | 'slideIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'zoomIn' | 'bounceIn' | 'pulse' | 'shake' | 'spin' | 'smoothSlideUp' | 'popIn' | 'blurIn';
    duration: number;
    delay: number;
    iterationCount?: number | 'infinite';
    timingFunction?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce';
}
export interface IElement {
    id: string;
    type: 'text' | 'image' | 'box' | 'group' | 'text-container' | 'checkbox';
    name?: string;
    groupId?: string;
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
    autoGrow?: boolean;
    containerExpansion?: 'vertical' | 'horizontal';
    animation?: IElementAnimation;
    styleBindings?: Record<string, string>;
    locked?: boolean;
    hidden?: boolean;
}
export interface IListSettings {
    sortProp?: string;
    sortOrder: 'asc' | 'desc';
    newestPosition?: 'top' | 'bottom';
    scrollDirection?: 'up' | 'down';
    containerHeight?: number;
    entryAnimation?: IElementAnimation;
}
export interface IProp {
    name: string;
    dataName: string;
}
interface IEditorState {
    elements: IElement[];
    selectedElementIds: string[];
    isList: boolean;
    mockData: GenericData[];
    singleMockData: GenericData;
    listSettings: IListSettings;
    canvasHeight?: number;
    availableProps: IProp[];
    availableFonts: string[];
    theme: 'light' | 'dark';
    history: IElement[][];
    historyDescriptions: string[];
    historyIndex: number;
    clipboard: IElement[];
    gridSize: number;
    zoom: number;
    pan: {
        x: number;
        y: number;
    };
    snapLines: {
        orientation: 'horizontal' | 'vertical';
        position: number;
    }[];
    assets: IAsset[];
}
export interface IAsset {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
}
export interface IEditorContext {
    state: IEditorState;
    setGridSize: (size: number) => void;
    setZoom: (zoom: number) => void;
    setPan: (pan: {
        x: number;
        y: number;
    }) => void;
    setSnapLines: (lines: {
        orientation: 'horizontal' | 'vertical';
        position: number;
    }[]) => void;
    addElement: (element: Omit<IElement, 'id' | 'x' | 'y' | 'width' | 'height'> & Partial<Pick<IElement, 'x' | 'y' | 'width' | 'height'>>) => void;
    removeElement: (id: string) => void;
    removeSelected: () => void;
    selectElement: (id: string | null, multi?: boolean) => void;
    setSelectedElements: (ids: string[]) => void;
    moveElement: (dragIndex: number, hoverIndex: number) => void;
    updateElement: (id: string, updates: Partial<IElement>, addToHistory?: boolean) => void;
    updateElements: (updates: {
        id: string;
        changes: Partial<IElement>;
    }[], addToHistory?: boolean) => void;
    groupElements: (ids: string[]) => void;
    ungroupElements: (groupId: string) => void;
    renameElement: (id: string, name: string) => void;
    addToGroup: (elementId: string, groupId: string) => void;
    removeFromGroup: (elementId: string) => void;
    resizeGroup: (groupId: string, newWidth: number, newHeight: number) => void;
    setMockData: (data: GenericData[], singleData: GenericData) => void;
    updateListSettings: (settings: Partial<IListSettings>) => void;
    setCanvasHeight: (height: number) => void;
    loadState: (savedState: Partial<IEditorState>) => void;
    undo: () => void;
    redo: () => void;
    jumpToHistory: (index: number) => void;
    copy: () => void;
    paste: () => void;
    addAsset: (asset: IAsset) => void;
    removeAsset: (id: string) => void;
}
export interface ISnapGuide {
    type: 'horizontal' | 'vertical';
    position: number;
}
export declare const EditorContext: React.Context<IEditorContext | undefined>;
export declare const EditorProvider: React.FC<{
    children: ReactNode;
    isList?: boolean;
    availableProps?: IProp[];
    theme?: 'light' | 'dark';
}>;
export declare const useEditor: () => IEditorContext;
export {};
