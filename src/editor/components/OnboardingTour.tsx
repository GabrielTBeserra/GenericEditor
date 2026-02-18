import { Cross2Icon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';

interface Step {
    targetId: string;
    title: string;
    content: string;
    position: 'left' | 'right' | 'top' | 'bottom' | 'center';
}

const steps: Step[] = [
    {
        targetId: 'sidebar-area',
        title: 'Biblioteca de Blocos',
        content: 'Arraste ou clique nos blocos para adicionar ao layout. Aqui você também gerencia o conteúdo.',
        position: 'right'
    },
    {
        targetId: 'canvas-area',
        title: 'Área de Criação',
        content: 'Seu espaço de trabalho. Mova, redimensione e organize os elementos livremente.',
        position: 'center'
    },
    {
        targetId: 'preview-area',
        title: 'Visualização Real',
        content: 'Confira o resultado final com dados reais enquanto edita. O que você vê é o que será exportado.',
        position: 'left'
    },
    {
        targetId: 'finish-button',
        title: 'Finalizar e Testar',
        content: 'Pronto? Clique aqui para testar com mais dados e exportar seu layout.',
        position: 'bottom'
    }
];

interface OnboardingTourProps {
    isOpen: boolean;
    onClose: () => void;
}

export const OnboardingTour: React.FC<OnboardingTourProps> = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [coords, setCoords] = useState<{ top: number, left: number } | null>(null);

    useEffect(() => {
        if (!isOpen) return;
        
        const step = steps[currentStep];
        const element = document.getElementById(step.targetId);
        
        if (element) {
            const rect = element.getBoundingClientRect();
            let top = 0;
            let left = 0;
            const offset = 20;

            // Simple positioning logic
            switch (step.position) {
                case 'right':
                    top = rect.top + (rect.height / 2) - 100; // Center vertically roughly
                    left = rect.right + offset;
                    break;
                case 'left':
                    top = rect.top + (rect.height / 2) - 100;
                    left = rect.left - 320 - offset; // Width of card approx
                    break;
                case 'bottom':
                    top = rect.bottom + offset;
                    left = rect.left + (rect.width / 2) - 160;
                    break;
                case 'top':
                    top = rect.top - 200 - offset;
                    left = rect.left + (rect.width / 2) - 160;
                    break;
                case 'center':
                    top = window.innerHeight / 2 - 100;
                    left = window.innerWidth / 2 - 160;
                    break;
            }

            // Boundary checks (basic)
            if (left < 20) left = 20;
            if (top < 20) top = 20;
            if (left + 320 > window.innerWidth) left = window.innerWidth - 340;
            if (top + 200 > window.innerHeight) top = window.innerHeight - 220;

            setCoords({ top, left });
        } else {
            // Fallback to center if element not found
             setCoords({ 
                top: window.innerHeight / 2 - 100, 
                left: window.innerWidth / 2 - 160 
            });
        }
    }, [isOpen, currentStep]);

    if (!isOpen || !coords) return null;

    const step = steps[currentStep];
    const isLast = currentStep === steps.length - 1;

    return (
        <Box 
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100vw', 
                height: '100vh', 
                zIndex: 9999, 
                pointerEvents: 'none' // Let clicks pass through except on the card
            }}
        >
            <Card 
                style={{ 
                    position: 'absolute', 
                    top: coords.top, 
                    left: coords.left, 
                    width: 320, 
                    pointerEvents: 'auto',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 0 0 2px var(--accent-9)',
                    backgroundColor: 'var(--color-panel-solid)',
                    transition: 'all 0.3s ease-out'
                }}
            >
                <Flex direction="column" gap="3">
                    <Flex justify="between" align="center">
                        <Heading size="3" color="blue">{step.title}</Heading>
                        <Button variant="ghost" color="gray" onClick={onClose} size="1" style={{ cursor: 'pointer' }}>
                            <Cross2Icon />
                        </Button>
                    </Flex>
                    <Text size="2" color="gray">
                        {step.content}
                    </Text>
                    <Flex justify="between" align="center" mt="2">
                        <Text size="1" color="gray">
                            {currentStep + 1} de {steps.length}
                        </Text>
                        <Flex gap="2">
                            {currentStep > 0 && (
                                <Button variant="soft" color="gray" onClick={() => setCurrentStep(c => c - 1)} style={{ cursor: 'pointer' }}>
                                    Voltar
                                </Button>
                            )}
                            <Button onClick={() => {
                                if (isLast) onClose();
                                else setCurrentStep(c => c + 1);
                            }} style={{ cursor: 'pointer' }}>
                                {isLast ? 'Entendi!' : 'Próximo'}
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Card>
        </Box>
    );
};
