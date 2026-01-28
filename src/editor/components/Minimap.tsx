import { Box } from '@radix-ui/themes';
import React from 'react';
import { useEditor } from '../context';

export const Minimap: React.FC = () => {
    const { state } = useEditor();
    const { elements, zoom, pan } = state;

    // Constants
    const MINIMAP_SIZE = 150;
    const SCALE = 0.1; // Minimap scale relative to world

    // Calculate bounds of content
    const getBounds = () => {
        if (elements.length === 0) return { minX: 0, minY: 0, maxX: 1000, maxY: 1000 };

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        elements.forEach(el => {
            minX = Math.min(minX, el.x);
            minY = Math.min(minY, el.y);
            maxX = Math.max(maxX, el.x + el.width);
            maxY = Math.max(maxY, el.y + el.height);
        });

        // Add padding
        return {
            minX: minX - 100,
            minY: minY - 100,
            maxX: maxX + 100,
            maxY: maxY + 100,
            width: (maxX - minX) + 200,
            height: (maxY - minY) + 200
        };
    };

    const bounds = getBounds();

    // Determine view rectangle in world coordinates
    // We don't know the exact canvas size here easily without a ref to the main canvas container,
    // but we can estimate or assume a standard viewport size (e.g. window size)
    const viewportWidth = window.innerWidth / zoom;
    const viewportHeight = window.innerHeight / zoom;

    // Viewport position in world coords
    const viewX = -pan.x / zoom;
    const viewY = -pan.y / zoom;

    return (
        <Box
            style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                width: MINIMAP_SIZE,
                height: MINIMAP_SIZE,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid var(--gray-6)',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                zIndex: 100
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transform: `scale(${SCALE}) translate(${-bounds.minX}px, ${-bounds.minY}px)`,
                    transformOrigin: 'top left'
                }}
            >
                {/* Elements */}
                {elements.filter(el => !el.hidden).map(el => (
                    <div
                        key={el.id}
                        style={{
                            position: 'absolute',
                            left: el.x,
                            top: el.y,
                            width: el.width,
                            height: el.height,
                            backgroundColor: 'var(--accent-9)',
                            opacity: 0.5,
                            border: '1px solid var(--accent-11)'
                        }}
                    />
                ))}

                {/* Viewport Indicator */}
                <div
                    style={{
                        position: 'absolute',
                        left: viewX,
                        top: viewY,
                        width: viewportWidth,
                        height: viewportHeight,
                        border: '20px solid rgba(0, 0, 0, 0.2)', // Thick border to make it visible
                        pointerEvents: 'none'
                    }}
                />
            </div>
        </Box>
    );
};
