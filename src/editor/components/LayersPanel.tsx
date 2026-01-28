import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { BoxIcon, DragHandleDots2Icon, EyeNoneIcon, EyeOpenIcon, GearIcon, ImageIcon, LockClosedIcon, LockOpen1Icon, TextIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Text } from '@radix-ui/themes';
import React, { useMemo, useState } from 'react';
import type { IElement } from '../context';
import { useEditor } from '../context';

interface SortableLayerItemProps {
    element: IElement;
    isSelected: boolean;
    onSelect: (multi: boolean) => void;
    onToggleVisibility: () => void;
    onToggleLock: () => void;
    onOpenSettings?: () => void;
    depth?: number;
}

const SortableLayerItem = ({ element, isSelected, onSelect, onToggleVisibility, onToggleLock, onOpenSettings, depth = 0 }: SortableLayerItemProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: element.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        paddingLeft: `${8 + depth * 16}px`
    };

    return (
        <Box
            ref={setNodeRef}
            style={style}
            className={`layer-item ${isSelected ? 'selected' : ''}`}
        >
            <Flex
                align="center"
                justify="between"
                style={{
                    padding: '4px 8px',
                    backgroundColor: isSelected ? 'var(--accent-a3)' : 'transparent',
                    borderRadius: 4,
                    cursor: 'pointer',
                    userSelect: 'none'
                }}
                onClick={(e) => onSelect(e.shiftKey)}
            >
                <Flex align="center" gap="2" style={{ flex: 1, overflow: 'hidden' }}>
                    <Box {...attributes} {...listeners} style={{ cursor: 'grab', color: 'var(--gray-8)' }}>
                        <DragHandleDots2Icon />
                    </Box>

                    <Box style={{ color: 'var(--gray-10)' }}>
                        {element.type === 'text' && <TextIcon />}
                        {element.type === 'image' && <ImageIcon />}
                        {element.type === 'box' && <BoxIcon />}
                        {element.type === 'group' && <BoxIcon />}
                    </Box>

                    <Text size="2" truncate style={{ flex: 1 }}>
                        {element.name || (element.type === 'text' ? (element.content || 'Texto Vazio') : element.type)}
                    </Text>
                </Flex>

                <Flex align="center" gap="1" className="layer-actions">
                    <IconButton
                        size="1"
                        variant="ghost"
                        color={element.locked ? 'red' : 'gray'}
                        onClick={(e) => { e.stopPropagation(); onToggleLock(); }}
                    >
                        {element.locked ? <LockClosedIcon /> : <LockOpen1Icon />}
                    </IconButton>
                    <IconButton
                        size="1"
                        variant="ghost"
                        color={element.hidden ? 'gray' : 'gray'}
                        onClick={(e) => { e.stopPropagation(); onToggleVisibility(); }}
                    >
                        {element.hidden ? <EyeNoneIcon /> : <EyeOpenIcon />}
                    </IconButton>
                    {onOpenSettings && (
                        <IconButton
                            size="1"
                            variant="ghost"
                            color="gray"
                            onClick={(e) => { e.stopPropagation(); onOpenSettings(); }}
                        >
                            <GearIcon />
                        </IconButton>
                    )}
                </Flex>
            </Flex>
        </Box>
    );
};

export const LayersPanel: React.FC<{ onOpenSettings?: (id: string) => void }> = ({ onOpenSettings }) => {
    const { state, selectElement, updateElement, moveElement } = useEditor();
    const { elements, selectedElementIds } = state;

    // We want to show the top-most element (last in array) at the top of the list
    // So we reverse the array for display, but keep track of original indices
    const displayElements = useMemo(() => [...elements].reverse(), [elements]);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (over && active.id !== over.id) {
            const oldIndexDisplay = displayElements.findIndex(el => el.id === active.id);
            const newIndexDisplay = displayElements.findIndex(el => el.id === over.id);

            // Convert display indices (reversed) to actual array indices
            const oldIndexActual = elements.length - 1 - oldIndexDisplay;
            const newIndexActual = elements.length - 1 - newIndexDisplay;

            moveElement(oldIndexActual, newIndexActual);
        }
    };

    const handleToggleVisibility = (id: string, current: boolean) => {
        updateElement(id, { hidden: !current });
    };

    const handleToggleLock = (id: string, current: boolean) => {
        updateElement(id, { locked: !current });
    };

    return (
        <Flex direction="column" style={{ height: '100%' }}>
            <Box p="3" style={{ borderBottom: '1px solid var(--gray-6)' }}>
                <Text size="2" weight="bold">Camadas</Text>
            </Box>

            <Box style={{ flex: 1, overflowY: 'auto', padding: 8 }}>
                <DndContext
                    sensors={sensors}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={displayElements.map(el => el.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <Flex direction="column" gap="1">
                            {displayElements.map(el => (
                                <SortableLayerItem
                                    key={el.id}
                                    element={el}
                                    isSelected={selectedElementIds.includes(el.id)}
                                    onSelect={(multi) => selectElement(el.id, multi)}
                                    onToggleVisibility={() => handleToggleVisibility(el.id, !!el.hidden)}
                                    onToggleLock={() => handleToggleLock(el.id, !!el.locked)}
                                    onOpenSettings={onOpenSettings ? () => onOpenSettings(el.id) : undefined}
                                />
                            ))}
                        </Flex>
                    </SortableContext>

                    <DragOverlay>
                        {activeId ? (
                            <Box style={{
                                padding: '4px 8px',
                                backgroundColor: 'var(--gray-4)',
                                borderRadius: 4,
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}>
                                <Text>Movendo camada...</Text>
                            </Box>
                        ) : null}
                    </DragOverlay>
                </DndContext>
            </Box>
        </Flex>
    );
};
