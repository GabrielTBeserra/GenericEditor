import {
    ClipboardIcon,
    CursorArrowIcon,
    MagnifyingGlassIcon,
    MoveIcon,
    QuestionMarkIcon,
    SpaceEvenlyHorizontallyIcon,
    SymbolIcon,
    TrashIcon
} from '@radix-ui/react-icons';
import { Box, Button, Dialog, Flex, Grid, Kbd, Separator, Text } from '@radix-ui/themes';
import React from 'react';

const ShortcutRow = ({ icon: Icon, label, keys }: { icon: React.ElementType, label: string, keys: string[] }) => (
    <Flex align="center" justify="between" py="2">
        <Flex align="center" gap="2">
            <Box style={{ color: 'var(--gray-10)' }}>
                <Icon />
            </Box>
            <Text size="2">{label}</Text>
        </Flex>
        <Flex gap="1">
            {keys.map((k, i) => (
                <React.Fragment key={i}>
                    <Kbd>{k}</Kbd>
                    {i < keys.length - 1 && <Text size="1" color="gray">+</Text>}
                </React.Fragment>
            ))}
        </Flex>
    </Flex>
);

export const ShortcutsDialog: React.FC = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button
                    variant="solid"
                    color="amber"
                    radius="full"
                    style={{
                        height: 36,
                        padding: '0 14px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                    title="Atalhos de Teclado"
                >
                    <QuestionMarkIcon width="18" height="18" />
                    Ajuda
                </Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 700 }} onPointerDown={(e) => e.stopPropagation()}>
                <Dialog.Title>Atalhos de Teclado</Dialog.Title>
                <Text size="2" color="gray" mb="4" as="p">
                    Agilize seu fluxo de trabalho com estes atalhos.
                </Text>

                <Grid columns="2" gap="6">
                    <Box>
                        <Text size="2" weight="bold" mb="2" color="blue">Edição Básica</Text>
                        <Separator size="4" mb="2" />
                        <ShortcutRow icon={SymbolIcon} label="Desfazer" keys={['Ctrl', 'Z']} />
                        <ShortcutRow icon={SymbolIcon} label="Refazer" keys={['Ctrl', 'Y']} />
                        <ShortcutRow icon={ClipboardIcon} label="Copiar" keys={['Ctrl', 'C']} />
                        <ShortcutRow icon={ClipboardIcon} label="Colar" keys={['Ctrl', 'V']} />
                        <ShortcutRow icon={TrashIcon} label="Excluir" keys={['Delete']} />
                    </Box>

                    <Box>
                        <Text size="2" weight="bold" mb="2" color="blue">Navegação e Seleção</Text>
                        <Separator size="4" mb="2" />
                        <ShortcutRow icon={MoveIcon} label="Mover Elemento" keys={['Setas']} />
                        <ShortcutRow icon={MoveIcon} label="Mover Rápido" keys={['Shift', 'Setas']} />
                        <ShortcutRow icon={CursorArrowIcon} label="Multiseleção" keys={['Shift', 'Click']} />
                        <ShortcutRow icon={SpaceEvenlyHorizontallyIcon} label="Mover Canvas (Pan)" keys={['Espaço', 'Arrastar']} />
                        <ShortcutRow icon={MagnifyingGlassIcon} label="Zoom" keys={['Ctrl', 'Scroll']} />
                    </Box>
                </Grid>

                <Flex justify="end" mt="5">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">Fechar</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};
