import { default as React } from 'react';
import { IElement } from '../context';
interface DraggableElementProps {
    element: IElement;
    isSelected: boolean;
}
export declare const DraggableElement: React.FC<DraggableElementProps>;
export {};
