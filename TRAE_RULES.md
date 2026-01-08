# Regras do Projeto (Trae Rules)

1. **Biblioteca de UI**: Utilizar EXCLUSIVAMENTE **Radix UI** (@radix-ui/themes e @radix-ui/primitives) para construção de interfaces e estilos.
   - Evitar CSS customizado (`.css` files) sempre que possível.
   - Usar componentes de layout (`Flex`, `Box`, `Grid`) do Radix Themes em vez de `div` com classes.
   - Usar componentes de UI (`Button`, `TextField`, `DropdownMenu`, `Badge`, `Tabs`) do Radix Themes.

2. **Fidelidade de Exportação**: O código final gerado deve ser HTML e CSS puro, fiel ao visual do Preview.
   - Mantenha o modelo de dados (`IElement`) serializável e compatível com CSS padrão.
   - O `Preview` é a "verdade" visual que o exportador deve replicar.
