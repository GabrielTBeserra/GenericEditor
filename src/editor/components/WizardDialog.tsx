import { ArrowRightIcon, CheckIcon, FileTextIcon, MagicWandIcon } from '@radix-ui/react-icons';
import { Box, Button, Card, Dialog, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import type { ITemplate } from '../types';

export interface WizardDialogProps {
    isOpen: boolean;
    onClose: () => void;
    templates: ITemplate[];
    onSelectTemplate: (template: ITemplate | null) => void;
    initialStep?: number;
    onFinishWizard?: () => void;
    onStartTour?: () => void;
}

export const WizardDialog: React.FC<WizardDialogProps> = ({ isOpen, onClose, templates, onSelectTemplate, initialStep = 1, onFinishWizard, onStartTour }) => {
    const [step, setStep] = useState(initialStep);
    const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);

    React.useEffect(() => {
        if (isOpen && initialStep) {
            setStep(initialStep);
        }
    }, [isOpen, initialStep]);

    const handleNext = () => {
        if (step === 1 && selectedTemplateId) {
            const template = templates.find(t => t.id === selectedTemplateId) || null;
            onSelectTemplate(template);
            setStep(2);
        } else if (step === 2) {
            onClose();
            if (onStartTour) onStartTour();
        } else if (step === 3) {
            if (onFinishWizard) onFinishWizard();
            onClose();
        }
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Content style={{ maxWidth: 800 }}>
                <Flex direction="column" gap="4">
                    <Flex justify="between" align="center">
                        <Dialog.Title>
                            <Flex align="center" gap="2">
                                <MagicWandIcon /> Assistente de Criação
                            </Flex>
                        </Dialog.Title>
                        <Flex gap="2">
                            <StepIndicator current={step} total={3} />
                        </Flex>
                    </Flex>

                    <Box>
                        {step === 1 && (
                            <Flex direction="column" gap="4">
                                <Heading size="4">Passo 1: Escolha um Modelo (Template)</Heading>
                                <Text color="gray" size="2">
                                    Comece com um layout pronto e personalize conforme sua necessidade.
                                </Text>

                                <Grid columns="3" gap="3">
                                    {templates.map(template => (
                                        <Card
                                            key={template.id}
                                            variant={selectedTemplateId === template.id ? 'surface' : 'classic'}
                                            style={{
                                                cursor: 'pointer',
                                                border: selectedTemplateId === template.id ? '2px solid var(--accent-9)' : undefined,
                                                backgroundColor: selectedTemplateId === template.id ? 'var(--accent-2)' : undefined
                                            }}
                                            onClick={() => setSelectedTemplateId(template.id)}
                                        >
                                            <Flex direction="column" gap="2" align="center" p="2">
                                                <Box style={{ width: '100%', height: 100, backgroundColor: 'var(--gray-3)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <FileTextIcon width={32} height={32} color="var(--gray-8)" />
                                                </Box>
                                                <Text weight="bold" size="2">{template.name}</Text>
                                                <Text size="1" color="gray" align="center">{template.description}</Text>
                                            </Flex>
                                        </Card>
                                    ))}
                                    <Card
                                        variant={selectedTemplateId === 'blank' ? 'surface' : 'classic'}
                                        style={{
                                            cursor: 'pointer',
                                            border: selectedTemplateId === 'blank' ? '2px solid var(--accent-9)' : undefined,
                                            backgroundColor: selectedTemplateId === 'blank' ? 'var(--accent-2)' : undefined
                                        }}
                                        onClick={() => setSelectedTemplateId('blank')}
                                    >
                                        <Flex direction="column" gap="2" align="center" p="2">
                                            <Box style={{ width: '100%', height: 100, backgroundColor: 'var(--gray-3)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Box style={{ width: 40, height: 40, border: '2px dashed var(--gray-8)', borderRadius: 4 }} />
                                            </Box>
                                            <Text weight="bold" size="2">Começar do Zero</Text>
                                            <Text size="1" color="gray" align="center">Tela em branco</Text>
                                        </Flex>
                                    </Card>
                                </Grid>

                                <Flex gap="3" mt="4" justify="end">
                                    <Button variant="soft" color="gray" onClick={onClose}>
                                        Pular Assistente
                                    </Button>
                                    <Button onClick={handleNext} disabled={!selectedTemplateId}>
                                        Continuar <ArrowRightIcon />
                                    </Button>
                                </Flex>
                            </Flex>
                        )}

                        {step === 2 && (
                            <Flex direction="column" gap="4">
                                <Heading size="4">Passo 2: Personalizar Visual</Heading>
                                <Text color="gray" size="2">
                                    Agora é sua vez de ajustar o layout. Use as ferramentas disponíveis.
                                </Text>

                                <Grid columns="2" gap="4">
                                    <Card variant="surface">
                                        <Flex gap="3" align="start">
                                            <Box style={{ padding: 8, backgroundColor: 'var(--accent-3)', borderRadius: 4 }}>
                                                <FileTextIcon width={20} height={20} color="var(--accent-9)" />
                                            </Box>
                                            <Box>
                                                <Text weight="bold" size="2" as="div">Edite Conteúdo</Text>
                                                <Text size="1" color="gray">Clique duas vezes em qualquer texto ou imagem para editar suas propriedades.</Text>
                                            </Box>
                                        </Flex>
                                    </Card>

                                    <Card variant="surface">
                                        <Flex gap="3" align="start">
                                            <Box style={{ padding: 8, backgroundColor: 'var(--green-3)', borderRadius: 4 }}>
                                                <MagicWandIcon width={20} height={20} color="var(--green-9)" />
                                            </Box>
                                            <Box>
                                                <Text weight="bold" size="2" as="div">Adicione Blocos</Text>
                                                <Text size="1" color="gray">Use a barra lateral esquerda para arrastar novos elementos.</Text>
                                            </Box>
                                        </Flex>
                                    </Card>
                                </Grid>

                                <Flex gap="3" mt="4" justify="end">
                                    <Button variant="soft" color="gray" onClick={() => setStep(1)}>
                                        <ArrowRightIcon style={{ transform: 'rotate(180deg)' }} /> Voltar
                                    </Button>
                                    <Button onClick={onClose}>
                                        Começar a Editar <ArrowRightIcon />
                                    </Button>
                                </Flex>
                            </Flex>
                        )}

                        {step === 3 && (
                            <Flex direction="column" gap="4">
                                <Heading size="4">Passo 3: Testar e Exportar</Heading>
                                <Text color="gray" size="2">
                                    Seu layout está pronto? Teste com dados diferentes e exporte o resultado.
                                </Text>

                                <Card variant="surface" style={{ padding: 20 }}>
                                    <Flex direction="column" gap="3" align="center">
                                        <CheckIcon width={48} height={48} color="var(--green-9)" />
                                        <Heading size="3">Tudo pronto!</Heading>
                                        <Text align="center">
                                            Você completou a criação do layout. Agora você pode salvar, exportar ou continuar editando.
                                        </Text>
                                    </Flex>
                                </Card>

                                <Flex gap="3" mt="4" justify="end">
                                    <Button variant="soft" color="gray" onClick={onClose}>
                                        Voltar a Editar
                                    </Button>
                                    <Button onClick={handleNext} color="green">
                                        <CheckIcon /> Concluir e Exportar
                                    </Button>
                                </Flex>
                            </Flex>
                        )}
                    </Box>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

const StepIndicator: React.FC<{ current: number, total: number }> = ({ current, total }) => {
    return (
        <Flex gap="2">
            {[1, 2, 3].map(step => (
                <Flex key={step} align="center" gap="1">
                    <Box
                        style={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: step <= current ? 'var(--accent-9)' : 'var(--gray-4)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}
                    >
                        {step < current ? <CheckIcon /> : step}
                    </Box>
                    {step < total && <Box style={{ width: 20, height: 2, backgroundColor: 'var(--gray-4)' }} />}
                </Flex>
            ))}
        </Flex>
    );
};
