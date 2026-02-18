import { default as React } from 'react';
import { ITemplate } from '../types';
export interface WizardDialogProps {
    isOpen: boolean;
    onClose: () => void;
    templates: ITemplate[];
    onSelectTemplate: (template: ITemplate | null) => void;
    initialStep?: number;
    onFinishWizard?: () => void;
    onStartTour?: () => void;
}
export declare const WizardDialog: React.FC<WizardDialogProps>;
