import React from 'react';
import { useEditor } from '../context';

export const SmartGuides: React.FC = () => {
    const { state } = useEditor();
    const { snapLines } = state;

    if (snapLines.length === 0) return null;

    return (
        <>
            {snapLines.map((line, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: line.orientation === 'vertical' ? line.position : 0,
                        top: line.orientation === 'horizontal' ? line.position : 0,
                        width: line.orientation === 'vertical' ? '1px' : '100%',
                        height: line.orientation === 'horizontal' ? '1px' : '100%',
                        backgroundColor: '#ff0000', // Red for visibility
                        zIndex: 9999,
                        pointerEvents: 'none',
                        borderLeft: line.orientation === 'vertical' ? '1px dashed #ff0000' : 'none',
                        borderTop: line.orientation === 'horizontal' ? '1px dashed #ff0000' : 'none',
                    }}
                />
            ))}
        </>
    );
};
