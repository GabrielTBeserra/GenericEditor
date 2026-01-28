import {
    AspectRatioIcon,
    MinusIcon,
    PlusIcon,
    SizeIcon
} from '@radix-ui/react-icons';
import { Flex, IconButton, Separator, Text, Tooltip } from '@radix-ui/themes';
import React from 'react';
import { useEditor } from '../context';

export const ViewToolbar: React.FC = () => {
    const { state, setZoom, setPan } = useEditor();
    const { zoom, elements } = state;

    const handleZoomIn = () => setZoom(Math.min(5, zoom + 0.1));
    const handleZoomOut = () => setZoom(Math.max(0.1, zoom - 0.1));
    const handleResetZoom = () => setZoom(1);

    const handleFitToScreen = () => {
        if (elements.length === 0) return;

        // Calculate bounding box of all elements
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        elements.forEach(el => {
            minX = Math.min(minX, el.x);
            minY = Math.min(minY, el.y);
            maxX = Math.max(maxX, el.x + el.width);
            maxY = Math.max(maxY, el.y + el.height);
        });

        // Add padding
        const padding = 50;
        const contentWidth = maxX - minX + padding * 2;
        const contentHeight = maxY - minY + padding * 2;

        // Get viewport size (approximation, as we don't have direct ref to container here)
        // We can assume a reasonable default or try to use window size minus sidebar
        const viewportWidth = window.innerWidth - 300; // Sidebar ~280px
        const viewportHeight = window.innerHeight - 100; // Header/Rulers

        const scaleX = viewportWidth / contentWidth;
        const scaleY = viewportHeight / contentHeight;

        // Choose the smaller scale to fit both dimensions
        let newZoom = Math.min(scaleX, scaleY);
        newZoom = Math.min(Math.max(newZoom, 0.1), 5); // Clamp

        setZoom(newZoom);

        // Center the content
        // New Pan = (ViewportCenter - ContentCenter * Zoom)
        // Ideally we want the content top-left at (0,0) plus centering?
        // Let's just center the bounding box

        const contentCenterX = (minX + maxX) / 2;
        const contentCenterY = (minY + maxY) / 2;

        // Note: Pan logic in Canvas is: canvasX = (screenX - panX) / zoom
        // So screenX = canvasX * zoom + panX
        // We want screenCenter = contentCenter * newZoom + newPan
        // newPan = screenCenter - contentCenter * newZoom

        // Using fixed viewport center for now
        const viewCenterX = viewportWidth / 2;
        const viewCenterY = viewportHeight / 2;

        setPan({
            x: viewCenterX - contentCenterX * newZoom,
            y: viewCenterY - contentCenterY * newZoom
        });
    };

    return (
        <Flex
            align="center"
            gap="2"
            style={{
                backgroundColor: 'var(--color-panel-solid)',
                padding: '4px 8px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: '1px solid var(--gray-6)'
            }}
        >
            <Tooltip content="Diminuir Zoom (-)">
                <IconButton size="1" variant="ghost" color="gray" onClick={handleZoomOut}>
                    <MinusIcon />
                </IconButton>
            </Tooltip>

            <Text size="1" style={{ width: 40, textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>
                {Math.round(zoom * 100)}%
            </Text>

            <Tooltip content="Aumentar Zoom (+)">
                <IconButton size="1" variant="ghost" color="gray" onClick={handleZoomIn}>
                    <PlusIcon />
                </IconButton>
            </Tooltip>

            <Separator orientation="vertical" style={{ height: 16 }} />

            <Tooltip content="Resetar (100%)">
                <IconButton size="1" variant="ghost" color="gray" onClick={handleResetZoom}>
                    <SizeIcon />
                </IconButton>
            </Tooltip>

            <Tooltip content="Ajustar à Tela">
                <IconButton size="1" variant="ghost" color="gray" onClick={handleFitToScreen}>
                    <AspectRatioIcon />
                </IconButton>
            </Tooltip>
        </Flex>
    );
};
