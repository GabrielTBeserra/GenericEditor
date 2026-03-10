import { default as React } from 'react';
export type FeedbackType = 'alert' | 'confirm' | 'prompt';
export interface FeedbackState {
    type: FeedbackType;
    message: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    onPromptSubmit?: (value: string) => void;
    promptDefaultValue?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    title?: string;
}
export declare const FeedbackModal: React.FC;
