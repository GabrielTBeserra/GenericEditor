# Plano de Exportação HTML/CSS

## Objetivo
O editor deve ser capaz de gerar um código HTML e CSS limpo e independente que reproduza fielmente o layout criado visualmente. O output deve ser idêntico ao que é exibido no componente `Preview`.

## Requisitos
1.  **Fidelidade Visual**: O HTML/CSS gerado deve corresponder pixel-perfect (ou o mais próximo possível) ao que o usuário vê no Preview.
2.  **Independência**: O código gerado não deve depender de bibliotecas React, Radix UI ou scripts complexos, a menos que estritamente necessário (e.g., para interatividade específica). O ideal é HTML estático + CSS.
3.  **Estrutura**:
    *   **HTML**: Semântico e limpo.
    *   **CSS**: Classes utilitárias ou CSS inline (configurável), mas preferencialmente um bloco `<style>` ou arquivo `.css` separado.

## Estratégia de Implementação (Futuro)

### 1. Modelo de Dados (IElement)
O modelo de dados atual (`IElement`) deve armazenar todas as propriedades de estilo necessárias:
*   Posição (x, y, z-index)
*   Dimensões (width, height)
*   Tipografia (font-family, size, weight, color)
*   Estilos de caixa (background, border, radius, shadow)

### 2. Gerador de Código (Export Engine)
Criar uma função `generateExport(elements: IElement[]): { html: string, css: string }`.

*   **Abordagem**:
    *   Iterar sobre o array de elementos.
    *   Para cada elemento, gerar a tag HTML correspondente (`<div>`, `<p>`, `<img>`).
    *   Converter o objeto `style` (React.CSSProperties) para uma string CSS válida.
    *   Gerar nomes de classes únicos ou usar estilos inline para garantir isolamento.

### 3. Validação
*   Criar um botão "Exportar" no editor.
*   Exibir o código gerado e uma visualização dele em um `iframe` para garantir que o renderizador nativo do navegador interprete o código da mesma forma que o React.

## Notas para Desenvolvimento Atual
*   Ao adicionar novas propriedades aos elementos (ex: cor, fonte), certifique-se de que elas são serializáveis e facilmente convertíveis para CSS padrão.
*   Evite usar componentes do Radix UI *dentro* da estrutura de dados salva se eles não puderem ser facilmente traduzidos para HTML/CSS puro. O `Preview.tsx` atual usa `Box` e `Flex` do Radix, o que é ótimo para o editor, mas o exportador precisará traduzir `<Box>` para `<div>` com os estilos correspondentes.
