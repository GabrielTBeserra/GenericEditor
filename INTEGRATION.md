# Documentação de Integração do Editor Genérico

Este documento descreve como integrar o componente `GenericEditor` em sua aplicação (React, Electron, etc.), como gerenciar a entrada e saída de dados (JSON) e como renderizar o layout criado em outros contextos (HTML estático, Display).

## 1. Visão Geral

O `GenericEditor` é um componente React isolado que permite criar layouts visuais arrastando e soltando elementos (Texto, Imagem, Box). Ele exporta um JSON descrevendo o layout e fornece utilitários para gerar HTML/CSS puro que replica exatamente o visual criado.

## 2. Instalação e Configuração

Certifique-se de que as dependências necessárias (React, Radix UI Themes, etc.) estejam instaladas no projeto host.

### Importação

```typescript
import { GenericEditor as Editor } from "./path/to/editor";
// Importe também o CSS do Radix se ainda não estiver global
import "@radix-ui/themes/styles.css";
```

## 3. Entrada de Dados (Props)

O componente `Editor` aceita as seguintes propriedades principais:

```typescript
<Editor
    layout={editorLayout}       // Configuração inicial (variáveis, modo lista)
    initialState={savedJson}    // (Opcional) JSON de um layout salvo anteriormente
    onSave={handleSave}         // Callback acionado ao clicar em Salvar
/>
```

### Estrutura do Objeto `layout`

Define as variáveis disponíveis para interpolação (`{{variavel}}`) e se o editor deve se comportar como uma lista.

```typescript
const editorLayout = {
  isList: true, // true para listas (ex: feed, chat), false para item único (ex: crachá)
  name: "Nome do Modelo",
  props: [
    { name: "Título do Produto", dataName: "titulo" }, // 'titulo' será usado em {{titulo}}
    { name: "Preço", dataName: "preco" },
    { name: "URL da Imagem", dataName: "imagemUrl" },
  ],
};
```

### Carregando um Estado Salvo (`initialState`)

Para editar um layout existente, passe o objeto JSON (ou string JSON) salvo anteriormente para a prop `initialState`.

```typescript
const savedState = { elements: [...], isList: true, ... };
// ...
<Editor initialState={savedState} ... />
```

### Templates Externos

Para permitir que o sistema controle os templates e o editor apenas reconheça e aplique, use as props `templates`, `activeTemplateId` e `onTemplateChange`.

```typescript
const templates = [
  { id: 'classic', name: 'Clássico', state: savedJsonClassic },
  { id: 'card', name: 'Cartão', state: savedJsonCard },
];

const [activeTemplateId, setActiveTemplateId] = useState('classic');

<Editor
  layout={editorLayout}
  templates={templates}
  activeTemplateId={activeTemplateId}
  onTemplateChange={setActiveTemplateId}
/>
```

O editor aplica o template quando `activeTemplateId` muda. Se você não quiser controle externo, pode omitir `activeTemplateId` e `onTemplateChange` e o próprio editor aplica o template selecionado.

#### Como habilitar

- Envie a lista em `templates` com `id`, `name` e `state`.
- Controle qual template está ativo pelo `activeTemplateId`.
- Use `onTemplateChange` para receber a seleção do usuário e persistir no seu sistema.

#### Como enviar templates do sistema

Você pode entregar templates via API, arquivo local ou banco de dados. O campo `state` aceita:

- JSON completo salvo pelo editor (com `elements`, `listSettings`, `canvasHeight`, etc.)
- Array simples de elementos

Exemplo de payload:

```json
{
  "templates": [
    {
      "id": "classic",
      "name": "Clássico",
      "description": "Layout simples com nome e mensagem.",
      "state": {
        "elements": [
          {
            "type": "text",
            "content": "{{displayName}}",
            "x": 20,
            "y": 20,
            "width": 240,
            "height": 40
          }
        ]
      }
    }
  ]
}
```

#### Como usar no frontend

```typescript
const [activeTemplateId, setActiveTemplateId] = useState('classic');

<Editor
  layout={editorLayout}
  templates={templates}
  activeTemplateId={activeTemplateId}
  onTemplateChange={setActiveTemplateId}
/>
```

Ao trocar o `activeTemplateId`, o editor aplica imediatamente o estado do template no canvas.

## 4. Saída de Dados (Salvamento)

Quando o usuário clica em "Salvar", a função `onSave` é chamada com uma string JSON.

```typescript
const handleSave = (jsonString: string) => {
  // Salve este JSON no seu banco de dados ou sistema de arquivos
  console.log("JSON exportado:", jsonString);

  // Exemplo: Salvar em arquivo no Electron
  // window.electronAPI.saveLayout(jsonString);
};
```

## 5. Renderização em Outros Contextos (HTML/CSS)

Para exibir o layout criado em outras partes da aplicação (ou em janelas separadas do Electron), você não precisa carregar o editor inteiro. Utilize o utilitário `generateHTML`.

### Gerando HTML Estático/Dinâmico

A função `generateHTML` cria uma string HTML completa com estilos inline e CSS embutido, pronta para ser injetada em um `div` ou salva como arquivo `.html`.

```typescript
import { generateHTML } from './path/to/editor/utils/htmlGenerator';

// 1. Recupere o JSON do layout (salvo anteriormente)
const layoutConfig = JSON.parse(savedJsonString);

// 2. Prepare os dados reais
// Se isList: true, passe um Array de objetos.
// Se isList: false, passe um único objeto.
const realData = [
    { titulo: 'Produto A', preco: 'R$ 10,00', imagemUrl: '...' },
    { titulo: 'Produto B', preco: 'R$ 20,00', imagemUrl: '...' }
];

// 3. Gere o HTML
const htmlOutput = generateHTML(
    layoutConfig.elements, // Array de elementos do JSON
    realData,              // Dados para preencher {{variavel}}
    {
        isList: layoutConfig.isList,
        listSettings: layoutConfig.listSettings
    }
);

// 4. Use o HTML
// Exemplo em React:
<div dangerouslySetInnerHTML={{ __html: htmlOutput }} />

// Exemplo em Electron (fs):
// fs.writeFileSync('output.html', htmlOutput);
```

### Comportamento de Lista (Feed/Chat)

Se `isList: true`, o HTML gerado incluirá CSS para:

- Posicionar novos itens no final da lista (`justify-content: flex-end`).
- Animar a entrada de novos itens (slide in de baixo para cima).
- Manter o scroll ancorado na parte inferior.

Isso é ideal para displays que recebem dados via Socket.

## 6. Uso com Socket / Atualização em Tempo Real

Se você precisa que o HTML gerado seja atualizado em tempo real (ex: recebendo dados via Socket sem recarregar a página), você tem duas opções:

### Opção A: Regenerar HTML (Mais simples para React)

Sempre que novos dados chegarem no componente pai, chame `generateHTML` novamente com o array de dados atualizado. O React atualizará o DOM.

### Opção B: Renderer JavaScript Puro (Para HTML estático independente)

O editor exporta uma função `getRendererCode()` que retorna o código fonte de uma função JS `renderTemplate`. Você pode injetar esse código em um arquivo HTML estático.

### Opção C: Smart Script Injection (Recomendado para Listas)

Ao gerar o HTML com `generateHTML` no modo lista (`isList: true`), o editor injeta automaticamente um script inteligente no final do HTML. Este script expõe a função global `window.addItem(data)`.

Isso permite adicionar novos itens dinamicamente sem precisar regenerar o HTML inteiro e sem perder o estado do scroll ou animações.

**Exemplo de Uso (Cliente/Browser):**

```javascript
// O HTML já foi carregado na página (via iframe, webview ou innerHTML)

// Quando chegar um novo dado via Socket/Evento:
const novoItem = {
  titulo: "Novo Produto Chegou",
  preco: "R$ 50,00",
  imagemUrl: "...",
};

// Basta chamar a função global.
// Ela cuida de gerar o HTML, inserir na posição correta e animar.
if (window.addItem) {
  window.addItem(novoItem);
}
```

Essa abordagem é ideal para **Displays, Overlays de OBS ou Webviews Electron**, pois é extremamente performática e mantém a lógica de renderização encapsulada dentro do próprio HTML gerado.

Exemplo de estrutura de um arquivo HTML "player" (Manual - Opção B):

```html
<html>
  <body>
    <div id="app"></div>
    <script>
      // Código do renderer (obtido via getRendererCode() ou copiado do projeto)
      function renderTemplate(elements, data, options) { ... }

      // Configuração (injetada pelo seu app)
      const layoutConfig = { ... }; // JSON do editor

      // Socket ou Evento
      window.electronAPI.onNewData((newData) => {
          // Se for lista, adicione ao array existente ou renderize apenas o novo item e faça append
          const html = renderTemplate(layoutConfig.elements, newData, { isList: true });
          document.getElementById('app').innerHTML = html;
      });
    </script>
  </body>
</html>
```
