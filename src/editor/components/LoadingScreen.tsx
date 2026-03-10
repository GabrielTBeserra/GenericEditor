import { Flex, Text } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.25 },
    },
};

const item = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0 },
};

export const LoadingScreen: React.FC = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 24,
                backgroundColor: 'var(--gray-1)',
                zIndex: 1000,
            }}
        >
            {/* Spinner */}
            <motion.div
                variants={item}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '3px solid var(--gray-5)',
                    borderTopColor: 'var(--accent-9)',
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                aria-hidden
            />

            <Flex direction="column" align="center" gap="2" asChild>
                <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <Text size="3" weight="medium" color="gray">
                        Carregando editor…
                    </Text>
                    <Flex direction="column" gap="2" style={{ marginTop: 8 }}>
                        <motion.div
                            variants={item}
                            style={{
                                width: 120,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'var(--gray-4)',
                            }}
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                        <motion.div
                            variants={item}
                            style={{
                                width: 80,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'var(--gray-4)',
                            }}
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                        />
                    </Flex>
                </motion.div>
            </Flex>
        </motion.div>
    );
};

/** Wrapper para usar com AnimatePresence e permitir animação de saída */
export const LoadingScreenWithPresence: React.FC<{ show: boolean }> = ({ show }) => {
    return (
        <AnimatePresence>
            {show && (
                <LoadingScreen key="loading" />
            )}
        </AnimatePresence>
    );
};
