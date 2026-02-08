import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { GenericData } from './types';
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
    duration: number; // in seconds
    delay: number; // in seconds
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
    rotation?: number; // Rotation in degrees
    style?: React.CSSProperties;
    dataBinding?: string;
    formatting?: IElementFormatting;
    conditions?: IElementCondition[];
    autoGrow?: boolean;
    containerExpansion?: 'vertical' | 'horizontal';
    animation?: IElementAnimation;
    styleBindings?: Record<string, string>; // propName -> variableName
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
    mockData: GenericData[]; // Used for list mode
    singleMockData: GenericData; // Used for non-list mode
    listSettings: IListSettings;
    canvasHeight?: number; // Height of the canvas in list mode
    availableProps: IProp[];
    availableFonts: string[];
    theme: 'light' | 'dark';
    history: IElement[][];
    historyDescriptions: string[];
    historyIndex: number;
    clipboard: IElement[];
    gridSize: number; // 0 to disable
    zoom: number;
    pan: { x: number, y: number };
    snapLines: { orientation: 'horizontal' | 'vertical', position: number }[];
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
    setPan: (pan: { x: number, y: number }) => void;
    setSnapLines: (lines: { orientation: 'horizontal' | 'vertical', position: number }[]) => void;
    addElement: (element: Omit<IElement, 'id' | 'x' | 'y' | 'width' | 'height'> & Partial<Pick<IElement, 'x' | 'y' | 'width' | 'height'>>) => void;
    removeElement: (id: string) => void;
    removeSelected: () => void;
    selectElement: (id: string | null, multi?: boolean) => void;
    setSelectedElements: (ids: string[]) => void;
    moveElement: (dragIndex: number, hoverIndex: number) => void;
    updateElement: (id: string, updates: Partial<IElement>, addToHistory?: boolean) => void;
    updateElements: (updates: { id: string, changes: Partial<IElement> }[], addToHistory?: boolean) => void;
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

export const EditorContext = createContext<IEditorContext | undefined>(undefined);

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
        historyDescriptions: [],
        historyIndex: 0,
        clipboard: [],
        gridSize: 0,
        zoom: 1,
        pan: { x: 0, y: 0 },
        snapLines: [],
        assets: []
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

    const setGridSize = React.useCallback((size: number) => {
        setState(prev => ({ ...prev, gridSize: size }));
    }, []);

    const setZoom = React.useCallback((zoom: number) => {
        setState(prev => ({ ...prev, zoom }));
    }, []);

    const setPan = React.useCallback((pan: { x: number, y: number }) => {
        setState(prev => ({ ...prev, pan }));
    }, []);

    const setSnapLines = React.useCallback((lines: { orientation: 'horizontal' | 'vertical', position: number }[]) => {
        setState(prev => ({ ...prev, snapLines: lines }));
    }, []);

    const loadState = React.useCallback((savedState: Partial<IEditorState>) => {
        setState(prev => {
            const rawElements = savedState.elements || prev.elements;

            // Sanitize elements to prevent ID collisions and missing props
            const validElements: IElement[] = [];
            const seenIds = new Set<string>();

            rawElements.forEach(el => {
                let id = el.id;
                // If ID is missing or duplicate, generate a new one
                if (!id || seenIds.has(id)) {
                    id = crypto.randomUUID();
                }
                seenIds.add(id);

                validElements.push({
                    ...el,
                    id,
                    // Ensure essential numeric props are valid numbers
                    x: Number.isFinite(el.x) ? el.x : 0,
                    y: Number.isFinite(el.y) ? el.y : 0,
                    width: Number.isFinite(el.width) ? el.width : 100,
                    height: Number.isFinite(el.height) ? el.height : 100,
                    // Default booleans
                    locked: !!el.locked,
                    hidden: !!el.hidden
                });
            });

            return {
                ...prev,
                ...savedState,
                elements: validElements,
                // Ensure these are preserved if not present in savedState
                isList: savedState.isList ?? prev.isList,
                availableProps: savedState.availableProps ?? prev.availableProps,
                availableFonts: savedState.availableFonts ?? prev.availableFonts,
                // Reset selection
                selectedElementIds: [],
                // Reset history when loading new state
                history: [validElements],
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

    const jumpToHistory = React.useCallback((index: number) => {
        setState(prev => {
            if (index >= 0 && index < prev.history.length) {
                return {
                    ...prev,
                    elements: prev.history[index],
                    historyIndex: index,
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
        if (element.type === 'text-container') {
            defaultStyles.backgroundColor = 'var(--gray-4)';
            defaultStyles.border = '1px solid var(--gray-8)';
            defaultStyles.padding = '8px';
            defaultStyles.display = 'flex';
            defaultStyles.alignItems = 'flex-start';
            defaultStyles.justifyContent = 'flex-start';
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

            const newDescriptions = prev.historyDescriptions.slice(0, prev.historyIndex + 1);
            newDescriptions.push(`Remover Elemento`);

            return {
                ...prev,
                elements: newElements,
                selectedElementIds: prev.selectedElementIds.filter(selId => selId !== id),
                history: newHistory,
                historyDescriptions: newDescriptions,
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

            const newDescriptions = prev.historyDescriptions.slice(0, prev.historyIndex + 1);
            newDescriptions.push(`Remover Itens Selecionados`);

            return {
                ...prev,
                elements: newElements,
                selectedElementIds: [],
                history: newHistory,
                historyDescriptions: newDescriptions,
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

    const setSelectedElements = React.useCallback((ids: string[]) => {
        setState(prev => ({
            ...prev,
            selectedElementIds: ids
        }));
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

            // Step 1: Normalize updates (Redirect Child -> Group)
            const normalizedUpdates: { id: string, changes: Partial<IElement> }[] = [];
            const processedGroupIds = new Set<string>();

            updates.forEach(({ id, changes }) => {
                const element = prev.elements.find(el => el.id === id);
                if (!element) return;

                // If moving a child of a group, redirect to group
                if (element.groupId && (changes.x !== undefined || changes.y !== undefined)) {
                    const group = prev.elements.find(el => el.id === element.groupId);
                    if (group && !processedGroupIds.has(group.id)) {
                        const dx = (changes.x ?? element.x) - element.x;
                        const dy = (changes.y ?? element.y) - element.y;

                        normalizedUpdates.push({
                            id: group.id,
                            changes: {
                                x: group.x + dx,
                                y: group.y + dy
                            }
                        });
                        processedGroupIds.add(group.id);
                    }
                    // Skip adding the child update directly, it will be handled by group expansion
                } else {
                    normalizedUpdates.push({ id, changes });
                }
            });

            // Step 2: Expand updates (Group -> Children)
            const finalUpdates = [...normalizedUpdates];

            normalizedUpdates.forEach(({ id, changes }) => {
                if (changes.x !== undefined || changes.y !== undefined) {
                    const element = prev.elements.find(el => el.id === id);
                    // If we are updating a group (either directly or via redirection), move its children
                    if (element && element.type === 'group') {
                        const dx = (changes.x ?? element.x) - element.x;
                        const dy = (changes.y ?? element.y) - element.y;

                        // Find children
                        prev.elements.forEach(child => {
                            if (child.groupId === id) {
                                // Add child update if not already in finalUpdates
                                if (!finalUpdates.some(u => u.id === child.id)) {
                                    finalUpdates.push({
                                        id: child.id,
                                        changes: {
                                            x: child.x + dx,
                                            y: child.y + dy
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });

            finalUpdates.forEach(({ id, changes }) => {
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

    const groupElements = React.useCallback((ids: string[]) => {
        setState(prev => {
            const elementsToGroup = prev.elements.filter(el => ids.includes(el.id));
            if (elementsToGroup.length === 0) return prev;

            // Calculate bounding box
            const minX = Math.min(...elementsToGroup.map(el => el.x));
            const minY = Math.min(...elementsToGroup.map(el => el.y));
            const maxX = Math.max(...elementsToGroup.map(el => el.x + el.width));
            const maxY = Math.max(...elementsToGroup.map(el => el.y + el.height));

            const groupElement: IElement = {
                id: crypto.randomUUID(),
                type: 'group',
                name: 'Novo Grupo',
                content: '',
                x: minX,
                y: minY,
                width: maxX - minX,
                height: maxY - minY,
                style: { zIndex: 0 } // Groups usually sit behind or are transparent
            };

            const newElements = prev.elements.map(el => {
                if (ids.includes(el.id)) {
                    return { ...el, groupId: groupElement.id };
                }
                return el;
            });

            // Add group element
            newElements.push(groupElement);

            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);

            const newDescriptions = prev.historyDescriptions.slice(0, prev.historyIndex + 1);
            newDescriptions.push(`Agrupar Elementos`);

            return {
                ...prev,
                elements: newElements,
                selectedElementIds: [groupElement.id],
                history: newHistory,
                historyDescriptions: newDescriptions,
                historyIndex: newHistory.length - 1
            };
        });
    }, []);

    const ungroupElements = React.useCallback((groupId: string) => {
        setState(prev => {
            const groupElement = prev.elements.find(el => el.id === groupId);
            if (!groupElement || groupElement.type !== 'group') return prev;

            const childrenIds: string[] = [];
            const newElements = prev.elements.filter(el => el.id !== groupId).map(el => {
                if (el.groupId === groupId) {
                    childrenIds.push(el.id);
                    return { ...el, groupId: undefined };
                }
                return el;
            });

            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);

            const newDescriptions = prev.historyDescriptions.slice(0, prev.historyIndex + 1);
            newDescriptions.push(`Desagrupar Elementos`);

            return {
                ...prev,
                elements: newElements,
                selectedElementIds: childrenIds,
                history: newHistory,
                historyDescriptions: newDescriptions,
                historyIndex: newHistory.length - 1
            };
        });
    }, []);

    const renameElement = React.useCallback((id: string, name: string) => {
        setState(prev => {
            const newElements = prev.elements.map(el => el.id === id ? { ...el, name } : el);
            // Renaming might not need history push every keystroke, but for simplicity:
            return { ...prev, elements: newElements };
        });
    }, []);

    const recalcGroupBounds = React.useCallback((elements: IElement[], groupId: string): IElement[] => {
        const group = elements.find(el => el.id === groupId && el.type === 'group');
        if (!group) return elements;
        const children = elements.filter(el => el.groupId === groupId);
        if (children.length === 0) {
            return elements;
        }
        const minX = Math.min(...children.map(el => el.x));
        const minY = Math.min(...children.map(el => el.y));
        const maxX = Math.max(...children.map(el => el.x + el.width));
        const maxY = Math.max(...children.map(el => el.y + el.height));
        return elements.map(el => el.id === groupId ? {
            ...el,
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        } : el);
    }, []);

    const addToGroup = React.useCallback((elementId: string, groupId: string) => {
        setState(prev => {
            const element = prev.elements.find(el => el.id === elementId);
            const group = prev.elements.find(el => el.id === groupId && el.type === 'group');
            if (!element || !group) return prev;
            let newElements = prev.elements.map(el => el.id === elementId ? { ...el, groupId } : el);
            newElements = recalcGroupBounds(newElements, groupId);
            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);

            const newDescriptions = prev.historyDescriptions.slice(0, prev.historyIndex + 1);
            newDescriptions.push(`Adicionar ao Grupo`);

            return {
                ...prev,
                elements: newElements,
                history: newHistory,
                historyDescriptions: newDescriptions,
                historyIndex: newHistory.length - 1
            };
        });
    }, [recalcGroupBounds]);

    const removeFromGroup = React.useCallback((elementId: string) => {
        setState(prev => {
            const element = prev.elements.find(el => el.id === elementId);
            if (!element || !element.groupId) return prev;
            const oldGroupId = element.groupId;
            let newElements = prev.elements.map(el => el.id === elementId ? { ...el, groupId: undefined } : el);
            newElements = recalcGroupBounds(newElements, oldGroupId);
            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);

            const newDescriptions = prev.historyDescriptions.slice(0, prev.historyIndex + 1);
            newDescriptions.push(`Remover do Grupo`);

            return {
                ...prev,
                elements: newElements,
                history: newHistory,
                historyDescriptions: newDescriptions,
                historyIndex: newHistory.length - 1
            };
        });
    }, [recalcGroupBounds]);

    const resizeGroup = React.useCallback((groupId: string, newWidth: number, newHeight: number) => {
        setState(prev => {
            const group = prev.elements.find(el => el.id === groupId && el.type === 'group');
            if (!group) return prev;
            const scaleX = newWidth / group.width;
            const scaleY = newHeight / group.height;
            const originX = group.x;
            const originY = group.y;
            const newElements = prev.elements.map(el => {
                if (el.id === groupId) {
                    return { ...el, width: newWidth, height: newHeight };
                }
                if (el.groupId === groupId) {
                    const relX = el.x - originX;
                    const relY = el.y - originY;
                    const scaledX = originX + relX * scaleX;
                    const scaledY = originY + relY * scaleY;
                    return {
                        ...el,
                        x: scaledX,
                        y: scaledY,
                        width: Math.max(1, el.width * scaleX),
                        height: Math.max(1, el.height * scaleY)
                    };
                }
                return el;
            });
            const newHistory = prev.history.slice(0, prev.historyIndex + 1);
            newHistory.push(newElements);

            const newDescriptions = prev.historyDescriptions.slice(0, prev.historyIndex + 1);
            newDescriptions.push(`Redimensionar Grupo`);

            return {
                ...prev,
                elements: newElements,
                history: newHistory,
                historyDescriptions: newDescriptions,
                historyIndex: newHistory.length - 1
            };
        });
    }, []);

    const setMockData = React.useCallback((data: GenericData[], singleData: GenericData) => {
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

    const addAsset = React.useCallback((asset: IAsset) => {
        setState(prev => ({
            ...prev,
            assets: [...prev.assets, asset]
        }));
    }, []);

    const removeAsset = React.useCallback((id: string) => {
        setState(prev => ({
            ...prev,
            assets: prev.assets.filter(a => a.id !== id)
        }));
    }, []);

    const contextValue = React.useMemo(() => ({
        state,
        addElement,
        removeElement,
        removeSelected,
        selectElement,
        setSelectedElements,
        moveElement,
        updateElement,
        updateElements,
        groupElements,
        ungroupElements,
        renameElement,
        addToGroup,
        removeFromGroup,
        resizeGroup,
        setMockData,
        updateListSettings,
        setCanvasHeight,
        loadState,
        undo,
        redo,
        jumpToHistory,
        copy,
        paste,
        setGridSize,
        setZoom,
        setPan,
        setSnapLines,
        addAsset,
        removeAsset
    }), [state, addElement, removeElement, removeSelected, selectElement, setSelectedElements, moveElement, updateElement, updateElements, groupElements, ungroupElements, renameElement, addToGroup, removeFromGroup, resizeGroup, setMockData, updateListSettings, setCanvasHeight, loadState, undo, redo, jumpToHistory, copy, paste, setGridSize, setZoom, setPan, setSnapLines, addAsset, removeAsset]);

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
