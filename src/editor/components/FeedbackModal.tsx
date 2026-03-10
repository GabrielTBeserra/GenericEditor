import { Box, Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import React, { useCallback, useEffect, useState } from 'react';
import { useEditor } from '../context';

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

export const FeedbackModal: React.FC = () => {
    const { portalContainer, state, clearFeedback } = useEditor();
    const feedback = state.feedback;
    const [promptValue, setPromptValue] = useState('');
    const open = !!feedback;

    useEffect(() => {
        if (feedback?.type === 'prompt') {
            setPromptValue(feedback.promptDefaultValue ?? '');
        }
    }, [feedback?.type, feedback?.promptDefaultValue]);

    const handleClose = useCallback(() => {
        feedback?.onCancel?.();
        clearFeedback();
    }, [feedback, clearFeedback]);

    const handleConfirm = useCallback(() => {
        if (feedback?.type === 'alert' || feedback?.type === 'confirm') {
            feedback?.onConfirm?.();
        } else if (feedback?.type === 'prompt' && feedback.onPromptSubmit) {
            feedback.onPromptSubmit(promptValue);
        }
        clearFeedback();
    }, [feedback, promptValue, clearFeedback]);

    const handleCancel = useCallback(() => {
        feedback?.onCancel?.();
        clearFeedback();
    }, [feedback, clearFeedback]);

    if (!feedback) return null;

    const hasCancel = feedback.type === 'confirm' || feedback.type === 'prompt';
    const title = feedback.title ?? (feedback.type === 'alert' ? 'Aviso' : feedback.type === 'confirm' ? 'Confirmar' : feedback.message);

    return (
        <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
            <Dialog.Content
                {...(portalContainer && { container: portalContainer })}
                style={{ maxWidth: 400 }}
                onPointerDown={(e) => e.stopPropagation()}
            >
                <Flex direction="column" gap="4">
                    <Dialog.Title>{feedback.type === 'prompt' ? feedback.message : title}</Dialog.Title>
                    {feedback.type === 'prompt' ? (
                        <Box>
                            <TextField.Root
                                placeholder="Digite aqui..."
                                value={promptValue}
                                onChange={(e) => setPromptValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleConfirm();
                                    if (e.key === 'Escape') handleCancel();
                                }}
                                autoFocus
                            />
                        </Box>
                    ) : (
                        <Text size="2" color="gray">{feedback.message}</Text>
                    )}
                    <Flex gap="2" justify="end" mt="2">
                        {hasCancel && (
                            <Button variant="soft" color="gray" onClick={handleCancel}>
                                {feedback.cancelLabel ?? 'Cancelar'}
                            </Button>
                        )}
                        <Button onClick={handleConfirm}>
                            {feedback.type === 'prompt'
                                ? 'OK'
                                : feedback.confirmLabel ?? (feedback.type === 'alert' ? 'OK' : 'Confirmar')}
                        </Button>
                    </Flex>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};
