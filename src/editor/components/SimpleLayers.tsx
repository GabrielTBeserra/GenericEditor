import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { BoxIcon, DragHandleDots2Icon, EyeNoneIcon, EyeOpenIcon, ImageIcon, LockClosedIcon, LockOpen1Icon, TextIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Text } from '@radix-ui/themes';
import React, { useMemo, useState } from 'react';
import type { IElement } from '../context';
import { useEditor } from '../context';

const TYPE_NAMES: Record<string, string> = {
    'text': 'Texto',
    'image': 'Imagem',
    'box': 'Grupo / Cartão',
    'text-container': 'Texto em Caixa',
    'group': 'Grupo',
    'checkbox': 'Caixa de Seleção'
};

interface SimpleLayerItemProps {
    element: IElement;
    isSelected: boolean;
    onSelect: (multi: boolean) => void;
    onToggleLock: () => void;
    onToggleHide: () => void;
}

const SimpleLayerItem = ({ element, isSelected, onSelect, onToggleLock, onToggleHide }: SimpleLayerItemProps) => {
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
        touchAction: 'none'
    };

    return (
        <Box
            ref={setNodeRef}
            style={style}
        >
            <Flex
                align="center"
                style={{
                    padding: '8px 12px',
                    backgroundColor: isSelected ? 'var(--accent-a3)' : 'var(--gray-2)',
                    borderRadius: 6,
                    cursor: 'pointer',
                    marginBottom: 4,
                    border: isSelected ? '1px solid var(--accent-9)' : '1px solid transparent'
                }}
                onClick={(e) => onSelect(e.shiftKey)}
            >
                <Box {...attributes} {...listeners} style={{ cursor: 'grab', color: 'var(--gray-8)', marginRight: 8 }}>
                    <DragHandleDots2Icon />
                </Box>

                <Box style={{ color: 'var(--gray-10)', marginRight: 8 }}>
                    {element.type === 'text' && <TextIcon />}
                    {element.type === 'image' && <ImageIcon />}
                    {(element.type === 'box' || element.type === 'group') && <BoxIcon />}
                </Box>

                <Text size="2" weight={isSelected ? 'bold' : 'regular'} style={{ flex: 1 }} truncate>
                    {element.name || TYPE_NAMES[element.type] || element.type}
                </Text>

                <Flex gap="1" onClick={(e) => e.stopPropagation()}>
                    <IconButton
                        size="1"
                        variant="ghost"
                        color={element.locked ? 'orange' : 'gray'}
                        onClick={onToggleLock}
                        title={element.locked ? "Desbloquear" : "Bloquear"}
                    >
                        {element.locked ? <LockClosedIcon /> : <LockOpen1Icon />}
                    </IconButton>
                    <IconButton
                        size="1"
                        variant="ghost"
                        color={element.hidden ? 'red' : 'gray'}
                        onClick={onToggleHide}
                        title={element.hidden ? "Mostrar" : "Ocultar"}
                    >
                        {element.hidden ? <EyeNoneIcon /> : <EyeOpenIcon />}
                    </IconButton>
                </Flex>
            </Flex>
        </Box>
    );
};

export const SimpleLayers: React.FC = () => {
    const { state, selectElement, moveElement, updateElement } = useEditor();
    const { elements, selectedElementIds } = state;

    // Reverse for display (top layer first)
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

    return (
        <Box>
            <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={displayElements.map(el => el.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <Flex direction="column">
                        {displayElements.map(el => (
                            <SimpleLayerItem
                                key={el.id}
                                element={el}
                                isSelected={selectedElementIds.includes(el.id)}
                                onSelect={(multi) => selectElement(el.id, multi)}
                                onToggleLock={() => updateElement(el.id, { locked: !el.locked })}
                                onToggleHide={() => updateElement(el.id, { hidden: !el.hidden })}
                            />
                        ))}
                        {displayElements.length === 0 && (
                            <Text size="2" color="gray" align="center" style={{ padding: 20 }}>
                                Adicione itens para ver a lista aqui.
                            </Text>
                        )}
                    </Flex>
                </SortableContext>
                <DragOverlay>
                    {activeId ? (
                        <Box style={{
                            padding: '8px 12px',
                            backgroundColor: 'var(--gray-4)',
                            borderRadius: 6,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}>
                            <Text>Movendo...</Text>
                        </Box>
                    ) : null}
                </DragOverlay>
            </DndContext>
        </Box>
    );
};
