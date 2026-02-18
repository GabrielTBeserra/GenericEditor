# Plano de Implementação (Backlog)

Este documento detalha o plano para evoluir o Generic Editor, com foco na usabilidade para leigos e robustez técnica.

## Prioridade 0 (Crítico - Imediato)

### 1. **Correção de Agrupamento de Elementos (Cards)**
*   **Objetivo**: Permitir que usuários arrastem blocos complexos (como "Card de Produto") e eles se comportem como uma unidade única no canvas, sem desmontar ao mover.
*   **Critérios de Pronto (DoD)**:
    - [ ] Ao arrastar um "Card" da biblioteca, ele deve ser inserido como um Grupo.
    - [ ] Ao clicar no grupo, seleciona o grupo inteiro.
    - [ ] Ao clicar duas vezes, entra no grupo para editar filhos.
    - [ ] O grupo deve mover todos os filhos juntos.

### 2. **Refinamento do Wizard de Criação**
*   **Objetivo**: Garantir que o fluxo de 3 passos seja fluido e intuitivo.
*   **Critérios de Pronto (DoD)**:
    - [ ] Passo 2 (Instruções) deve ser claro e permitir fechar o modal para iniciar a edição.
    - [ ] Passo 3 (Finalizar) deve aparecer automaticamente ao clicar em "Salvar/Finalizar".
    - [ ] Botões "Voltar" e "Avançar" devem funcionar corretamente em todos os passos.

### 3. **Melhoria na Seleção Bidirecional (Canvas <-> Preview)**
*   **Objetivo**: Quando o usuário clica em um item no Preview (lado direito), o elemento correspondente no Canvas (centro) deve ser selecionado e focado.
*   **Critérios de Pronto (DoD)**:
    - [ ] Clique no Preview destaca o elemento no Canvas.
    - [ ] Scroll automático no Canvas para mostrar o elemento selecionado se estiver fora da visão.
    - [ ] Hover no Preview destaca a borda no Canvas (opcional, mas desejável).

## Prioridade 1 (Alta - Próxima Sprint)

### 4. **Editor de Propriedades Simplificado (V2)**
*   **Objetivo**: Expandir o painel lateral direito do Modo Simples para incluir mais controles visuais amigáveis.
*   **Critérios de Pronto (DoD)**:
    - [ ] Adicionar controle de "Sombra" (Drop Shadow) com presets (Suave, Médio, Forte).
    - [ ] Adicionar controle de "Borda" (Arredondamento e Espessura) visual.
    - [ ] Adicionar color picker simplificado com paleta pré-definida.

### 5. **Drag & Drop da Biblioteca para o Canvas**
*   **Objetivo**: Atualmente, clicar na biblioteca adiciona no centro. O usuário espera arrastar e soltar na posição desejada.
*   **Critérios de Pronto (DoD)**:
    - [ ] Implementar `draggable` nos itens da Sidebar.
    - [ ] Implementar `drop zone` no Canvas.
    - [ ] Calcular posição X/Y correta ao soltar.

### 6. **Responsividade Mobile do Editor**
*   **Objetivo**: Permitir edições rápidas via tablet ou celular, escondendo painéis desnecessários.
*   **Critérios de Pronto (DoD)**:
    - [ ] Sidebar esquerda deve virar um menu "hambúrguer" ou drawer em telas pequenas.
    - [ ] Painel de propriedades deve ser um bottom sheet ou modal.
    - [ ] Gestos de pinça (zoom) no canvas devem funcionar nativamente.

## Prioridade 2 (Média - Futuro Próximo)

### 7. **Templates Globais e Temas**
*   **Objetivo**: Permitir trocar "Tema" (conjunto de cores e fontes) de todo o layout com um clique.
*   **Critérios de Pronto (DoD)**:
    - [ ] Criar sistema de variáveis CSS globais para cores primárias/secundárias.
    - [ ] Interface para escolher "Tema Azul", "Tema Escuro", etc.

### 8. **Histórico de Versões Visual**
*   **Objetivo**: Mostrar miniaturas das versões anteriores ao desfazer/refazer.
*   **Critérios de Pronto (DoD)**:
    - [ ] Painel de histórico com screenshots ou descrições claras ("Adicionou Imagem", "Mudou Cor").

### 9. **Exportação Otimizada**
*   **Objetivo**: Garantir que o HTML/CSS gerado seja limpo e compatível com email marketing ou web.
*   **Critérios de Pronto (DoD)**:
    - [ ] Inliner de CSS automático.
    - [ ] Validação de compatibilidade com clientes de email (se aplicável).

## Prioridade 3 (Baixa/Nice-to-have)

### 10. **Assistente de IA para Textos**
*   **Objetivo**: Sugerir melhorias nos textos do layout usando LLM.
*   **Critérios de Pronto (DoD)**:
    - [ ] Botão "Melhorar Texto" no painel de propriedades.
    - [ ] Integração com API de IA.

### 11. **Modo Colaborativo em Tempo Real**
*   **Objetivo**: Vários usuários editando o mesmo layout.
*   **Critérios de Pronto (DoD)**:
    - [ ] Websockets para sincronizar estado.
    - [ ] Cursores de outros usuários visíveis.
