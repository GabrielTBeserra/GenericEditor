import { 
    AlignBottomIcon, 
    AlignCenterHorizontallyIcon, 
    AlignCenterVerticallyIcon, 
    AlignLeftIcon, 
    AlignRightIcon, 
    AlignTopIcon, 
    SpaceEvenlyHorizontallyIcon, 
    SpaceEvenlyVerticallyIcon 
} from '@radix-ui/react-icons';
import { Flex, IconButton, Separator } from '@radix-ui/themes';
import React from 'react';
import { useEditor } from '../context';

export const AlignmentToolbar: React.FC = () => {
    const { state, updateElements } = useEditor();
    const { selectedElementIds, elements } = state;
    
    // Alignment needs at least 2 elements
    if (selectedElementIds.length < 2) return null;

    const getSelectedElements = () => {
        return elements.filter(el => selectedElementIds.includes(el.id));
    };

    const handleAlignLeft = () => {
        const selected = getSelectedElements();
        if (selected.length < 2) return;
        const minX = Math.min(...selected.map(el => el.x));
        const updates = selected.map(el => ({ id: el.id, changes: { x: minX } }));
        updateElements(updates);
    };
    
    const handleAlignCenterH = () => {
        const selected = getSelectedElements();
        if (selected.length < 2) return;
        const minX = Math.min(...selected.map(el => el.x));
        const maxX = Math.max(...selected.map(el => el.x + el.width));
        const centerX = (minX + maxX) / 2;
        
        const updates = selected.map(el => ({ 
            id: el.id, 
            changes: { x: centerX - el.width / 2 } 
        }));
        updateElements(updates);
    };

    const handleAlignRight = () => {
        const selected = getSelectedElements();
        if (selected.length < 2) return;
        const maxRight = Math.max(...selected.map(el => el.x + el.width));
        const updates = selected.map(el => ({ 
            id: el.id, 
            changes: { x: maxRight - el.width } 
        }));
        updateElements(updates);
    };

    const handleAlignTop = () => {
        const selected = getSelectedElements();
        if (selected.length < 2) return;
        const minY = Math.min(...selected.map(el => el.y));
        const updates = selected.map(el => ({ id: el.id, changes: { y: minY } }));
        updateElements(updates);
    };

    const handleAlignCenterV = () => {
        const selected = getSelectedElements();
        if (selected.length < 2) return;
        const minY = Math.min(...selected.map(el => el.y));
        const maxY = Math.max(...selected.map(el => el.y + el.height));
        const centerY = (minY + maxY) / 2;
        
        const updates = selected.map(el => ({ 
            id: el.id, 
            changes: { y: centerY - el.height / 2 } 
        }));
        updateElements(updates);
    };

    const handleAlignBottom = () => {
        const selected = getSelectedElements();
        if (selected.length < 2) return;
        const maxBottom = Math.max(...selected.map(el => el.y + el.height));
        const updates = selected.map(el => ({ 
            id: el.id, 
            changes: { y: maxBottom - el.height } 
        }));
        updateElements(updates);
    };
    
    const handleDistributeH = () => {
        const selected = getSelectedElements();
        if (selected.length < 3) return;
        
        const sorted = [...selected].sort((a, b) => a.x - b.x);
        const first = sorted[0];
        const last = sorted[sorted.length - 1];
        const totalCenterSpan = (last.x + last.width/2) - (first.x + first.width/2);
        const step = totalCenterSpan / (sorted.length - 1);
        
        const updates = sorted.map((el, i) => {
            if (i === 0 || i === sorted.length - 1) return null;
            const newCenter = (first.x + first.width/2) + (step * i);
            return {
                id: el.id,
                changes: { x: newCenter - el.width/2 }
            };
        }).filter(Boolean) as any;
        
        updateElements(updates);
    };

    const handleDistributeV = () => {
        const selected = getSelectedElements();
        if (selected.length < 3) return;
        
        const sorted = [...selected].sort((a, b) => a.y - b.y);
        const first = sorted[0];
        const last = sorted[sorted.length - 1];
        const totalCenterSpan = (last.y + last.height/2) - (first.y + first.height/2);
        const step = totalCenterSpan / (sorted.length - 1);
        
        const updates = sorted.map((el, i) => {
            if (i === 0 || i === sorted.length - 1) return null;
            const newCenter = (first.y + first.height/2) + (step * i);
            return {
                id: el.id,
                changes: { y: newCenter - el.height/2 }
            };
        }).filter(Boolean) as any;
        
        updateElements(updates);
    };

    return (
        <Flex 
            gap="2" 
            align="center" 
            style={{ 
                backgroundColor: 'var(--color-panel-solid)', 
                padding: '8px', 
                borderRadius: '8px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: '1px solid var(--gray-5)'
            }}
        >
            <IconButton variant="ghost" color="gray" onClick={handleAlignLeft} title="Alinhar à Esquerda">
                <AlignLeftIcon />
            </IconButton>
            <IconButton variant="ghost" color="gray" onClick={handleAlignCenterH} title="Alinhar ao Centro (Horizontal)">
                <AlignCenterHorizontallyIcon />
            </IconButton>
            <IconButton variant="ghost" color="gray" onClick={handleAlignRight} title="Alinhar à Direita">
                <AlignRightIcon />
            </IconButton>
            
            <Separator orientation="vertical" />
            
            <IconButton variant="ghost" color="gray" onClick={handleAlignTop} title="Alinhar ao Topo">
                <AlignTopIcon />
            </IconButton>
            <IconButton variant="ghost" color="gray" onClick={handleAlignCenterV} title="Alinhar ao Centro (Vertical)">
                <AlignCenterVerticallyIcon />
            </IconButton>
            <IconButton variant="ghost" color="gray" onClick={handleAlignBottom} title="Alinhar à Base">
                <AlignBottomIcon />
            </IconButton>
            
            {selectedElementIds.length >= 3 && (
                <>
                    <Separator orientation="vertical" />

                    <IconButton variant="ghost" color="gray" onClick={handleDistributeH} title="Distribuir Horizontalmente">
                        <SpaceEvenlyHorizontallyIcon />
                    </IconButton>
                    <IconButton variant="ghost" color="gray" onClick={handleDistributeV} title="Distribuir Verticalmente">
                        <SpaceEvenlyVerticallyIcon />
                    </IconButton>
                </>
            )}
        </Flex>
    );
};
