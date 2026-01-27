import React, { createContext, useContext, useState, type ReactNode } from 'react';

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
    type: 'none' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'zoomIn' | 'bounceIn' | 'pulse' | 'shake' | 'spin';
    duration: number; // in seconds
    delay: number; // in seconds
    iterationCount?: number | 'infinite';
    timingFunction?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface IElement {
    id: string;
    type: 'text' | 'image' | 'box';
    content: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation?: number; // Rotation in degrees
    style?: React.CSSProperties;
    dataBinding?: string;
    formatting?: IElementFormatting;
    conditions?: IElementCondition[];
    autoGrow?: boolean;
    animation?: IElementAnimation;
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
    mockData: any[]; // Used for list mode
    singleMockData: Record<string, any>; // Used for non-list mode
    listSettings: IListSettings;
    canvasHeight?: number; // Height of the canvas in list mode
    availableProps: IProp[];
    availableFonts: string[];
    theme: 'light' | 'dark';
    history: IElement[][];
    historyIndex: number;
    clipboard: IElement[];
}

interface IEditorContext {
    state: IEditorState;
    addElement: (element: Omit<IElement, 'id' | 'x' | 'y' | 'width' | 'height'> & Partial<Pick<IElement, 'x' | 'y' | 'width' | 'height'>>) => void;
    removeElement: (id: string) => void;
    removeSelected: () => void;
    selectElement: (id: string | null, multi?: boolean) => void;
    moveElement: (dragIndex: number, hoverIndex: number) => void;
    updateElement: (id: string, updates: Partial<IElement>, addToHistory?: boolean) => void;
    updateElements: (updates: { id: string, changes: Partial<IElement> }[], addToHistory?: boolean) => void;
    setMockData: (data: any[], singleData: Record<string, any>) => void;
    updateListSettings: (settings: Partial<IListSettings>) => void;
    setCanvasHeight: (height: number) => void;
    loadState: (savedState: Partial<IEditorState>) => void;
    undo: () => void;
    redo: () => void;
    copy: () => void;
    paste: () => void;
}

const EditorContext = createContext<IEditorContext | undefined>(undefined);

const SAFE_FONTS = [
    'Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia',
    'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'
];

export const EditorProvider: React.FC<{ children: ReactNode; isList?: boolean; availableProps?: IProp[]; theme?: 'light' | 'dark' }> = ({ children, isList = false, availableProps = [], theme = 'light' }) => {
    const [state, setState] = useState<IEditorState>({
        elements: [],
        selectedElementIds: [],
        isList,
        mockData: [],
        singleMockData: {},
        listSettings: {
            sortOrder: 'asc',
            newestPosition: 'bottom',
            scrollDirection: 'down'
        },
        availableProps,
        availableFonts: [
            ...SAFE_FONTS,
            'Roboto',
            'Open Sans',
            'Lato',
            'Montserrat'
        ],
        theme,
        history: [[]],
        historyIndex: 0,
        clipboard: []
    });

    // Load fonts
    React.useEffect(() => {
        state.availableFonts.forEach(font => {
            if (SAFE_FONTS.includes(font)) return;

            const linkId = `font-${font.replace(/\s+/g, '-').toLowerCase()}`;
            if (!document.getElementById(linkId)) {
                const link = document.createElement('link');
                link.id = linkId;
                link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}&display=swap`;
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }
        });
    }, [state.availableFonts]);

    // Update state if props change (only basic props, don't overwrite elements)
    React.useEffect(() => {
        setState(prev => ({ ...prev, isList, availableProps, theme }));
    }, [isList, availableProps, theme]);

    const setCanvasHeight = React.useCallback((height: number) => {
        setState(prev => ({ ...prev, canvasHeight: height }));
    }, []);

    const loadState = React.useCallback((savedState: Partial<IEditorState>) => {
        setState(prev => {
            const newElements = savedState.elements || prev.elements;
            return {
                ...prev,
                ...savedState,
                // Ensure these are preserved if not present in savedState
                isList: savedState.isList ?? prev.isList,
                availableProps: savedState.availableProps ?? prev.availableProps,
                availableFonts: savedState.availableFonts ?? prev.availableFonts,
                // Reset selection
                selectedElementIds: [],
                // Reset history when loading new state
                history: [newElements],
                historyIndex: 0,
                clipboard: []
            };
        });
    }, []);

    const undo = React.useCallback(() => {
        setState(prev => {
            if (prev.historyIndex > 0) {
                const newIndex = prev.historyIndex - 1;
                return {
                    ...prev,
                    elements: prev.history[newIndex],
                    historyIndex: newIndex,
                    selectedElementIds: []
                };
            }
            return prev;
        });
    }, []);

    const redo = React.useCallback(() => {
        setState(prev => {
            if (prev.historyIndex < prev.history.length - 1) {
                const newIndex = prev.historyIndex + 1;
                return {
                    ...prev,
                    elements: prev.history[newIndex],
                    historyIndex: newIndex,
                    selectedElementIds: []
                };
            }
            return prev;
        });
    }, []);

    const copy = React.useCallback(() => {
        setState(prev => {
            if (prev.selectedElementIds.length > 0) {
                const elements = prev.elements.filter(el => prev.selectedElementIds.includes(el.id));
                return { ...prev, clipboard: elements };
            }
            return prev;
        });
    }, []);

    const paste = React.useCallback(() => {
        setState(prev => {
            if (prev.clipboard.length > 0) {
                const newElementsToAdd = prev.clipboard.map(clipEl => ({
                    ...clipEl,
                    id: crypto.randomUUID(),
                    x: clipEl.x + 20,
                    y: clipEl.y + 20
                }));

                const newElements = [...prev.elements, ...newElementsToAdd];
                const newHistory = prev.history.slice(0, prev.historyIndex + 1);
                newHistory.push(newElements);

                return {
                    ...prev,
                    elements: newElements,
                    history: newHistory,
                    historyIndex: newHistory.length - 1,
                    selectedElementIds: newElementsToAdd.map(el => el.id)
                };
            }
            return prev;
        });
    }, []);

    const addElement = React.useCallback((element: Omit<IElement, 'id' | 'x' | 'y' | 'width' | 'height'> & Partial<Pick<IElement, 'x' | 'y' | 'width' | 'height'>>) => {
        const defaultStyles: React.CSSProperties = {};
        if (element.type === 'box') {
            defaultStyles.backgroundColor = 'var(--gray-4)';
        }

        const newElement: IElement = {
            id: crypto.randomUUID(),
            x: 50,
            y: 50,
            width: 200,
            height: element.type === 'text' ? 50 : 150,
            ...element,
            style: {
                ...defaultStyles,
                ...(element.style || {})
            },
        };
        setState(prev => {
            const newElements = [...prev.elements, newElement];
            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);
            return {
                ...prev,
                elements: newElements,
                history: newHistory,
                historyIndex: newHistory.length - 1,
                selectedElementIds: [newElement.id]
            };
        });
    }, []);

    const removeElement = React.useCallback((id: string) => {
        setState(prev => {
            const newElements = prev.elements.filter(el => el.id !== id);
            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);
            return {
                ...prev,
                elements: newElements,
                selectedElementIds: prev.selectedElementIds.filter(selId => selId !== id),
                history: newHistory,
                historyIndex: newHistory.length - 1
            };
        });
    }, []);

    const removeSelected = React.useCallback(() => {
        setState(prev => {
            if (prev.selectedElementIds.length === 0) return prev;

            const newElements = prev.elements.filter(el => !prev.selectedElementIds.includes(el.id));
            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);

            return {
                ...prev,
                elements: newElements,
                selectedElementIds: [],
                history: newHistory,
                historyIndex: newHistory.length - 1
            };
        });
    }, []);

    const selectElement = React.useCallback((id: string | null, multi: boolean = false) => {
        setState(prev => {
            if (id === null) {
                return { ...prev, selectedElementIds: [] };
            }

            if (multi) {
                const isSelected = prev.selectedElementIds.includes(id);
                let newSelection;
                if (isSelected) {
                    newSelection = prev.selectedElementIds.filter(selId => selId !== id);
                } else {
                    newSelection = [...prev.selectedElementIds, id];
                }
                return { ...prev, selectedElementIds: newSelection };
            } else {
                return { ...prev, selectedElementIds: [id] };
            }
        });
    }, []);

    const moveElement = React.useCallback((dragIndex: number, hoverIndex: number) => {
        setState(prev => {
            const newElements = [...prev.elements];
            const draggedElement = newElements[dragIndex];
            newElements.splice(dragIndex, 1);
            newElements.splice(hoverIndex, 0, draggedElement);

            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);

            return {
                ...prev,
                elements: newElements,
                history: newHistory,
                historyIndex: newHistory.length - 1
            };
        });
    }, []);

    const updateElement = React.useCallback((id: string, updates: Partial<IElement>, addToHistory: boolean = true) => {
        setState(prev => {
            const newElements = prev.elements.map(el => el.id === id ? { ...el, ...updates } : el);

            let newHistory = prev.history;
            let historyIndex = prev.historyIndex;

            if (addToHistory) {
                newHistory = prev.history.slice(0, prev.historyIndex + 1);
                newHistory.push(newElements);
                historyIndex = newHistory.length - 1;
            }

            return {
                ...prev,
                elements: newElements,
                history: newHistory,
                historyIndex: historyIndex
            };
        });
    }, []);

    const updateElements = React.useCallback((updates: { id: string, changes: Partial<IElement> }[], addToHistory: boolean = true) => {
        setState(prev => {
            const newElements = [...prev.elements];

            updates.forEach(({ id, changes }) => {
                const index = newElements.findIndex(el => el.id === id);
                if (index !== -1) {
                    newElements[index] = { ...newElements[index], ...changes };
                }
            });

            let newHistory = prev.history;
            let historyIndex = prev.historyIndex;

            if (addToHistory) {
                newHistory = prev.history.slice(0, prev.historyIndex + 1);
                newHistory.push(newElements);
                historyIndex = newHistory.length - 1;
            }

            return {
                ...prev,
                elements: newElements,
                history: newHistory,
                historyIndex: historyIndex
            };
        });
    }, []);

    const setMockData = React.useCallback((data: any[], singleData: Record<string, any>) => {
        setState(prev => ({
            ...prev,
            mockData: data,
            singleMockData: singleData
        }));
    }, []);

    const updateListSettings = React.useCallback((settings: Partial<IListSettings>) => {
        setState(prev => ({
            ...prev,
            listSettings: { ...prev.listSettings, ...settings }
        }));
    }, []);

    const contextValue = React.useMemo(() => ({
        state,
        addElement,
        removeElement,
        removeSelected,
        selectElement,
        moveElement,
        updateElement,
        updateElements,
        setMockData,
        updateListSettings,
        setCanvasHeight,
        loadState,
        undo,
        redo,
        copy,
        paste
    }), [state, addElement, removeElement, removeSelected, selectElement, moveElement, updateElement, updateElements, setMockData, updateListSettings, setCanvasHeight, loadState, undo, redo, copy, paste]);

    return (
        <EditorContext.Provider value={contextValue}>
            {children}
        </EditorContext.Provider>
    );
};

export const useEditor = () => {
    const context = useContext(EditorContext);
    if (!context) {
        throw new Error('useEditor must be used within an EditorProvider');
    }
    return context;
};
