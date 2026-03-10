import {
    CheckIcon,
    EyeOpenIcon,
    FileTextIcon,
    MoveIcon,
    Pencil1Icon,
    RocketIcon,
    SymbolIcon,
    ViewVerticalIcon
} from '@radix-ui/react-icons';
import { Box, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import Joyride, { type CallBackProps, type Step } from 'react-joyride';

/* Tour usa cores fixas pois renderiza fora do Theme (portal), garantindo aparência consistente com tema escuro */
const TOUR_COLORS = {
    bg: '#1e293b',
    bgElevated: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    accent: '#3b82f6',
    accentHover: '#60a5fa',
    accentMuted: 'rgba(59, 130, 246, 0.25)'
} as const;

const TOUR_STYLES = `
  .react-joyride__tooltip {
    animation: tour-tooltip-enter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
    border: 1px solid ${TOUR_COLORS.border} !important;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px ${TOUR_COLORS.border} !important;
  }
  @keyframes tour-tooltip-enter {
    from { opacity: 0; transform: scale(0.9) translateY(-12px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  .react-joyride__tooltip button[data-action="primary"] {
    background: ${TOUR_COLORS.accent} !important;
    color: white !important;
    border-radius: 10px !important;
    padding: 10px 20px !important;
    font-weight: 600 !important;
    transition: all 0.2s ease !important;
  }
  .react-joyride__tooltip button[data-action="primary"]:hover {
    background: ${TOUR_COLORS.accentHover} !important;
    transform: translateY(-2px) !important;
  }
  .react-joyride__tooltip button[data-action="back"] {
    color: ${TOUR_COLORS.textMuted} !important;
    border-radius: 10px !important;
    padding: 10px 16px !important;
    transition: all 0.2s ease !important;
  }
  .react-joyride__tooltip button[data-action="back"]:hover {
    color: ${TOUR_COLORS.text} !important;
  }
  .react-joyride__tooltip button[data-action="skip"] {
    color: ${TOUR_COLORS.textMuted} !important;
    background: transparent !important;
    border-radius: 10px !important;
    padding: 10px 16px !important;
    font-weight: 500 !important;
    transition: all 0.2s ease !important;
  }
  .react-joyride__tooltip button[data-action="skip"]:hover {
    color: ${TOUR_COLORS.text} !important;
    background: rgba(255,255,255,0.05) !important;
  }
  .react-joyride__tooltip [data-test-id="button-close"] {
    color: ${TOUR_COLORS.textMuted} !important;
    opacity: 0.8 !important;
    transition: opacity 0.2s !important;
  }
  .react-joyride__tooltip [data-test-id="button-close"]:hover {
    color: ${TOUR_COLORS.text} !important;
    opacity: 1 !important;
  }
`;

const StepContent: React.FC<{ icon: React.ReactNode; title: string; body: string }> = ({ icon, title, body }) => (
    <Flex direction="column" gap="3">
        <Flex align="center" gap="3">
            <Box style={{
                color: TOUR_COLORS.accent,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: TOUR_COLORS.accentMuted
            }}>
                {icon}
            </Box>
            <Text size="4" weight="bold" style={{ color: TOUR_COLORS.text }}>{title}</Text>
        </Flex>
        <Text size="2" style={{ color: TOUR_COLORS.textMuted, lineHeight: 1.65 }}>{body}</Text>
    </Flex>
);

function buildSteps(): Step[] {
    return [
        {
            target: 'body',
            content: (
                <StepContent
                    icon={<RocketIcon width="22" height="22" />}
                    title="Bem-vindo ao Editor"
                    body="Este tour mostra o essencial para criar um layout. Siga os passos para conhecer a biblioteca de blocos, o canvas e os atalhos."
                />
            ),
            placement: 'center',
            disableBeacon: true
        },
        {
            target: '#sidebar-area',
            content: (
                <StepContent
                    icon={<ViewVerticalIcon width="20" height="20" />}
                    title="Biblioteca de Blocos"
                    body="Aqui estão os blocos disponíveis. Clique em um bloco (por exemplo Texto) para adicionar ao canvas."
                />
            ),
            placement: 'right',
            disableBeacon: true
        },
        {
            target: '[data-tour="block-text"]',
            content: (
                <StepContent
                    icon={<FileTextIcon width="20" height="20" />}
                    title="Adicionar Texto"
                    body="Clique em 'Texto' para adicionar seu primeiro elemento. Depois você pode arrastá-lo no canvas para posicionar."
                />
            ),
            placement: 'right',
            disableBeacon: true
        },
        {
            target: '#canvas-area',
            content: (
                <StepContent
                    icon={<MoveIcon width="20" height="20" />}
                    title="Mover Elementos"
                    body="Arraste os elementos para mover. Selecione um elemento (clique nele) e use as setas do teclado. Shift+setas move 10px por vez."
                />
            ),
            placement: 'bottom',
            disableBeacon: true
        },
        {
            target: '#canvas-area',
            content: (
                <StepContent
                    icon={<Pencil1Icon width="20" height="20" />}
                    title="Clique duplo: Propriedades"
                    body="Clique duplo em qualquer elemento abre o painel de propriedades para editar texto, cores e estilo."
                />
            ),
            placement: 'bottom',
            disableBeacon: true
        },
        {
            target: '#tour-shortcuts-trigger',
            content: (
                <StepContent
                    icon={<SymbolIcon width="20" height="20" />}
                    title="Atalhos de Teclado"
                    body="Ctrl+Z/Y desfazer e refazer, Ctrl+C/V copiar e colar, Delete excluir. Setas e Shift+setas movem o elemento selecionado. Espaço+arrastar move o canvas. Abra 'Ajuda' para ver a lista completa."
                />
            ),
            placement: 'bottom',
            disableBeacon: true
        },
        {
            target: '#preview-area',
            content: (
                <StepContent
                    icon={<EyeOpenIcon width="20" height="20" />}
                    title="Visualização em Tempo Real"
                    body="Aqui você vê o resultado final com dados reais. O que você vê é o que será exportado."
                />
            ),
            placement: 'left',
            disableBeacon: true
        },
        {
            target: '#finish-button',
            content: (
                <StepContent
                    icon={<CheckIcon width="20" height="20" />}
                    title="Pronto!"
                    body="Use 'Finalizar e Testar' para exportar seu layout ou continue editando à vontade."
                />
            ),
            placement: 'bottom',
            disableBeacon: true
        }
    ];
}

const TOUR_STEPS = buildSteps();

const STEP_FINISH_BODY: Step = {
    target: 'body',
    placement: 'center',
    disableBeacon: true,
    content: (
        <StepContent
            icon={<CheckIcon width="20" height="20" />}
            title="Pronto!"
            body="Você concluiu o tour. Continue editando e use 'Ajuda' para ver os atalhos. Bom trabalho!"
        />
    )
};

const LOCALE = {
    back: 'Voltar',
    close: 'Fechar',
    last: 'Entendi!',
    next: 'Próximo',
    skip: 'Pular'
};

interface OnboardingTourProps {
    isOpen: boolean;
    onClose: () => void;
}

export const OnboardingTour: React.FC<OnboardingTourProps> = ({ isOpen, onClose }) => {
    const styleId = 'tour-guided-styles';

    React.useEffect(() => {
        if (!isOpen) return;
        const el = document.getElementById(styleId);
        if (!el) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = TOUR_STYLES;
            document.head.appendChild(style);
        }
        return () => {
            document.getElementById(styleId)?.remove();
        };
    }, [isOpen]);

    const handleCallback = React.useCallback((data: CallBackProps) => {
        const { action, status } = data;
        if (status === 'finished' || status === 'skipped' || action === 'close') {
            onClose();
        }
    }, [onClose]);

    // When #finish-button doesn't exist (e.g. no onFinish), use body for last step
    const steps = React.useMemo(() => {
        const list = [...TOUR_STEPS];
        if (typeof document !== 'undefined' && !document.getElementById('finish-button')) {
            list[list.length - 1] = STEP_FINISH_BODY;
        }
        return list;
    }, []);

    if (!isOpen) return null;

    return (
        <Joyride
            steps={steps}
            run={isOpen}
            continuous
            showProgress
            showSkipButton
            spotlightPadding={12}
            spotlightClicks
            locale={LOCALE}
            callback={handleCallback}
            styles={{
                options: {
                    primaryColor: TOUR_COLORS.accent,
                    arrowColor: TOUR_COLORS.bg,
                    backgroundColor: TOUR_COLORS.bg,
                    textColor: TOUR_COLORS.text,
                    zIndex: 10000,
                    overlayColor: 'rgba(0, 0, 0, 0.75)',
                    spotlightShadow: '0 0 0 4px rgba(59, 130, 246, 0.3)'
                },
                overlay: {
                    transition: 'opacity 0.3s ease-out'
                },
                tooltip: {
                    borderRadius: 16,
                    padding: 24,
                    backgroundColor: TOUR_COLORS.bg,
                    color: TOUR_COLORS.text,
                    border: `1px solid ${TOUR_COLORS.border}`,
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                    maxWidth: 380
                },
                tooltipContainer: {
                    textAlign: 'left'
                },
                tooltipContent: {
                    padding: '8px 0 0 0'
                },
                tooltipFooter: {
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: `1px solid ${TOUR_COLORS.border}`
                },
                buttonNext: {
                    borderRadius: 10,
                    padding: '10px 20px',
                    fontWeight: 600
                },
                buttonBack: {
                    borderRadius: 10,
                    fontWeight: 500
                },
                buttonSkip: {
                    borderRadius: 10,
                    color: TOUR_COLORS.textMuted,
                    fontWeight: 500
                },
                buttonClose: {
                    color: TOUR_COLORS.textMuted
                }
            }}
        />
    );
};
