import { ResetIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, ScrollArea, Text } from '@radix-ui/themes';
import React from 'react';
import { useEditor } from '../context';

export const HistoryPanel: React.FC = () => {
    const { state, jumpToHistory, undo, redo } = useEditor();

    return (
        <Flex direction="column" style={{ height: '100%', width: '100%' }}>
            <Flex justify="between" align="center" p="2" style={{ borderBottom: '1px solid var(--gray-5)' }}>
                <Flex align="center" gap="2">
                    <ResetIcon />
                    <Text size="2" weight="bold">Histórico</Text>
                </Flex>
                <Flex gap="2">
                    <Button size="1" variant="soft" onClick={undo} disabled={state.historyIndex <= 0}>
                        Desfazer
                    </Button>
                    <Button size="1" variant="soft" onClick={redo} disabled={state.historyIndex >= state.history.length - 1}>
                        Refazer
                    </Button>
                </Flex>
            </Flex>

            <ScrollArea scrollbars="vertical" style={{ flex: 1 }}>
                <Box p="0">
                    {state.history.map((_, index) => {
                        const isCurrent = index === state.historyIndex;
                        const isFuture = index > state.historyIndex;
                        const description = state.historyDescriptions?.[index] || (index === 0 ? 'Estado Inicial' : `Alteração ${index}`);

                        return (
                            <Box
                                key={index}
                                p="2"
                                style={{
                                    backgroundColor: isCurrent ? 'var(--accent-3)' : 'transparent',
                                    opacity: isFuture ? 0.5 : 1,
                                    cursor: 'pointer',
                                    borderBottom: '1px solid var(--gray-3)'
                                }}
                                onClick={() => jumpToHistory(index)}
                                className="history-item"
                            >
                                <Flex align="center" justify="between">
                                    <Text size="2" weight={isCurrent ? 'bold' : 'regular'}>
                                        {description}
                                    </Text>
                                    {isCurrent && <Text size="1" color="blue">Atual</Text>}
                                </Flex>
                            </Box>
                        );
                    })}
                </Box>
            </ScrollArea>
        </Flex>
    );
};
