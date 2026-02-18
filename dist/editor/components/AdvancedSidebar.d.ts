import { default as React } from 'react';
import { ILayout } from '../types';
interface AdvancedSidebarProps {
    layout: ILayout;
    onOpenSettings: (id: string) => void;
}
export declare const AdvancedSidebar: React.FC<AdvancedSidebarProps>;
export {};
