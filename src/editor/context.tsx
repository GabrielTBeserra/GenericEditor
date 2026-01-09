import React, { createContext, useContext, useState, type ReactNode } from 'react';

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
    mockData: any[]; // Used for list mode
    singleMockData: Record<string, any>; // Used for non-list mode
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

const EditorContext = createContext<IEditorContext | undefined>(undefined);

const SAFE_FONTS = [
    'Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia',
    'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'
];

export const EditorProvider: React.FC<{ children: ReactNode; isList?: boolean; availableProps?: IProp[]; theme?: 'light' | 'dark' }> = ({ children, isList = false, availableProps = [], theme = 'light' }) => {
    const [state, setState] = useState<IEditorState>({
        elements: [],
        selectedElementId: null,
        isList,
        mockData: [],
        singleMockData: {},
        listSettings: {
            sortOrder: 'asc'
        },
        availableProps,
        availableFonts: [
            ...SAFE_FONTS,
            'Roboto',
            'Open Sans',
            'Lato',
            'Montserrat'
        ],
        theme
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

    const loadState = React.useCallback((savedState: Partial<IEditorState>) => {
        setState(prev => ({
            ...prev,
            ...savedState,
            // Ensure these are preserved if not present in savedState
            isList: savedState.isList ?? prev.isList,
            availableProps: savedState.availableProps ?? prev.availableProps,
            availableFonts: savedState.availableFonts ?? prev.availableFonts,
            // Reset selection
            selectedElementId: null
        }));
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
        setState(prev => ({
            ...prev,
            elements: [...prev.elements, newElement]
        }));
    }, []);

    const removeElement = React.useCallback((id: string) => {
        setState(prev => ({
            ...prev,
            elements: prev.elements.filter(el => el.id !== id),
            selectedElementId: prev.selectedElementId === id ? null : prev.selectedElementId
        }));
    }, []);

    const selectElement = React.useCallback((id: string | null) => {
        setState(prev => ({ ...prev, selectedElementId: id }));
    }, []);

    const moveElement = React.useCallback((dragIndex: number, hoverIndex: number) => {
        setState(prev => {
            const newElements = [...prev.elements];
            const draggedElement = newElements[dragIndex];
            newElements.splice(dragIndex, 1);
            newElements.splice(hoverIndex, 0, draggedElement);
            return { ...prev, elements: newElements };
        });
    }, []);

    const updateElement = React.useCallback((id: string, updates: Partial<IElement>) => {
        setState(prev => ({
            ...prev,
            elements: prev.elements.map(el => el.id === id ? { ...el, ...updates } : el)
        }));
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
        selectElement,
        moveElement,
        updateElement,
        setMockData,
        updateListSettings,
        loadState
    }), [state, addElement, removeElement, selectElement, moveElement, updateElement, setMockData, updateListSettings, loadState]);

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
