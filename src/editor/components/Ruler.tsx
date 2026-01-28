import React, { useEffect, useRef } from 'react';
import { useEditor } from '../context';

const RULER_THICKNESS = 20;
const RULER_BG = '#f5f5f5';
const RULER_FG = '#999';

export const Ruler: React.FC<{ orientation: 'horizontal' | 'vertical' }> = ({ orientation }) => {
    const { state } = useEditor();
    const { zoom, pan } = state;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;

        // Clear
        ctx.fillStyle = RULER_BG;
        ctx.fillRect(0, 0, width, height);
        
        ctx.fillStyle = RULER_FG;
        ctx.font = '10px sans-serif';
        ctx.strokeStyle = RULER_FG;
        ctx.lineWidth = 1;

        // Calculate start and end in "world" coordinates
        // Canvas pixel = (World coord * zoom) + pan
        // World coord = (Canvas pixel - pan) / zoom
        
        const start = orientation === 'horizontal' 
            ? -pan.x / zoom 
            : -pan.y / zoom;
            
        const end = orientation === 'horizontal'
            ? (width - pan.x) / zoom
            : (height - pan.y) / zoom;

        // Determine step size based on zoom
        let step = 100;
        if (zoom > 2) step = 10;
        else if (zoom > 0.8) step = 50;
        else if (zoom > 0.4) step = 100;
        else step = 200;

        // Align start to step
        const firstMark = Math.floor(start / step) * step;

        ctx.beginPath();
        for (let pos = firstMark; pos < end; pos += step) {
            const screenPos = (pos * zoom) + (orientation === 'horizontal' ? pan.x : pan.y);
            
            if (orientation === 'horizontal') {
                ctx.moveTo(screenPos, 0);
                ctx.lineTo(screenPos, RULER_THICKNESS);
                ctx.fillText(pos.toString(), screenPos + 2, 10);
            } else {
                ctx.moveTo(0, screenPos);
                ctx.lineTo(RULER_THICKNESS, screenPos);
                
                // Rotate text for vertical ruler
                ctx.save();
                ctx.translate(10, screenPos + 2);
                ctx.rotate(-Math.PI / 2);
                ctx.fillText(pos.toString(), 0, 0);
                ctx.restore();
            }
        }
        ctx.stroke();

    }, [zoom, pan, orientation, state.canvasHeight]); // Re-render on zoom/pan change

    // Resize observer to handle window resize
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const resizeObserver = new ResizeObserver(() => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (rect) {
                canvas.width = rect.width;
                canvas.height = rect.height;
            }
        });
        
        if (canvas.parentElement) {
            resizeObserver.observe(canvas.parentElement);
        }

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                width: '100%', 
                height: '100%', 
                display: 'block',
                pointerEvents: 'none' // For now, pass through events
            }} 
        />
    );
};
