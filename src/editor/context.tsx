import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface IElement {
    id: string;
    type: 'text' | 'image' | 'box';
    content: string;
    x: number;
    y: number;
    width: number;
    height: number;
    style?: React.CSSProperties;
}

interface IEditorState {
    elements: IElement[];
    selectedElementId: string | null;
    isList: boolean;
}

interface IEditorContext {
    state: IEditorState;
    addElement: (element: Omit<IElement, 'id' | 'x' | 'y' | 'width' | 'height'> & Partial<Pick<IElement, 'x' | 'y' | 'width' | 'height'>>) => void;
    removeElement: (id: string) => void;
    selectElement: (id: string | null) => void;
    moveElement: (dragIndex: number, hoverIndex: number) => void;
    updateElement: (id: string, updates: Partial<IElement>) => void;
}

const EditorContext = createContext<IEditorContext | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode; isList?: boolean }> = ({ children, isList = false }) => {
    const [state, setState] = useState<IEditorState>({
        elements: [],
        selectedElementId: null,
        isList
    });

    // Update state if prop changes
    React.useEffect(() => {
        setState(prev => ({ ...prev, isList }));
    }, [isList]);

    const addElement = (element: Omit<IElement, 'id' | 'x' | 'y' | 'width' | 'height'> & Partial<Pick<IElement, 'x' | 'y' | 'width' | 'height'>>) => {
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
    };

    const removeElement = (id: string) => {
        setState(prev => ({
            ...prev,
            elements: prev.elements.filter(el => el.id !== id),
            selectedElementId: prev.selectedElementId === id ? null : prev.selectedElementId
        }));
    };

    const selectElement = (id: string | null) => {
        setState(prev => ({ ...prev, selectedElementId: id }));
    };

    const moveElement = (dragIndex: number, hoverIndex: number) => {
        const draggedElement = state.elements[dragIndex];
        const newElements = [...state.elements];
        newElements.splice(dragIndex, 1);
        newElements.splice(hoverIndex, 0, draggedElement);
        
        setState(prev => ({ ...prev, elements: newElements }));
    };

    const updateElement = (id: string, updates: Partial<IElement>) => {
        setState(prev => ({
            ...prev,
            elements: prev.elements.map(el => el.id === id ? { ...el, ...updates } : el)
        }));
    };

    return (
        <EditorContext.Provider value={{ state, addElement, removeElement, selectElement, moveElement, updateElement }}>
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
