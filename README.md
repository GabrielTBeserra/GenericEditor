# Generic Editor

Uma biblioteca React poderosa, agnóstica de framework e **100% personalizável** para criação de layouts dinâmicos, geração de templates e edição visual. Projetada para ser o motor de design dentro da sua aplicação (Web, Electron, Tauri, Next.js, etc.).

---

## 📚 Índice

1. [Instalação e Configuração](#instalação-e-configuração)
2. [Guia do Usuário (Interface Visual)](#guia-do-usuário-interface-visual)
   - [Manipulação Básica](#manipulação-básica)
   - [Menu de Contexto e Estilização](#menu-de-contexto-e-estilização)
   - [Trabalhando com Textos e Fontes](#trabalhando-com-textos-e-fontes)
   - [Trabalhando com Imagens](#trabalhando-com-imagens)
3. [Guia do Desenvolvedor (Integração)](#guia-do-desenvolvedor-integração)
   - [Inicialização e Props](#inicialização-e-props)
   - [Data Binding e Variáveis](#data-binding-e-variáveis)
   - [Modos: Item Único vs. Lista](#modos-item-único-vs-lista)
   - [Estrutura do JSON](#estrutura-do-json)
   - [Gerando HTML (Backend/Print)](#gerando-html-backendprint)
4. [API Reference](#api-reference)

---

## Instalação e Configuração

### 1. Instale o pacote

```bash
npm install @1urso/generic-editor
# ou
yarn add @1urso/generic-editor
```

### 2. Instale as dependências (Peer Dependencies)

O editor utiliza bibliotecas modernas para garantir performance e acessibilidade. Você precisa instalá-las no seu projeto:

```bash
npm install @radix-ui/themes @radix-ui/react-icons react-resizable-panels re-resizable framer-motion @dnd-kit/core
```

### 3. Importe os Estilos

No arquivo de entrada da sua aplicação (ex: `main.tsx`, `App.tsx` ou `layout.tsx` no Next.js), importe o CSS do editor (obrigatório para o menu de contexto) e do Radix UI:

```tsx
import "@1urso/generic-editor/dist/generic-editor.css"; // Essencial para o funcionamento do editor
import "@radix-ui/themes/styles.css";
```

---

## Guia do Usuário (Interface Visual)

Esta seção descreve as funcionalidades disponíveis para o **usuário final** que utilizará o editor na sua plataforma.

### Manipulação Básica

O editor oferece uma experiência similar a ferramentas de design como Canva ou Figma:

- **Adicionar Elementos**: Utilize a barra lateral (ou botões que você implementar) para arrastar ou clicar e adicionar Textos, Imagens ou Caixas.
- **Mover**: Clique e arraste qualquer elemento para reposicioná-lo.
- **Redimensionar**: Clique no elemento para selecioná-lo. Puxe as alças (quadrados azuis) nas bordas ou cantos para alterar o tamanho.
- **Rotacionar**: Ao selecionar um elemento, uma alça circular aparecerá acima dele. Clique e arraste para girar livremente.
- **Deletar**: Selecione um elemento e pressione a tecla `Delete` ou use o menu de contexto.

### Menu de Contexto e Estilização

**Clique com o botão direito** em qualquer elemento para abrir o menu de opções avançadas.

#### Opções Gerais (Todos os Elementos)

- **Duplicar**: Cria uma cópia exata do elemento próximo ao original.
- **Remover**: Exclui o elemento.
- **Camadas**:
  - _Trazer para frente_: Coloca o elemento sobre todos os outros.
  - _Enviar para trás_: Coloca o elemento atrás de todos.
- **Cor de Fundo**: Altera a cor de fundo do elemento (inclui transparente).
- **Bordas**:
  - _Arredondamento_: De 0px (quadrado) até 50% (círculo/oval).
  - _Espessura_: Adiciona borda sólida de 1px a 4px.

### Configurações e Dados de Teste

No topo da barra lateral esquerda, o botão **Configurações** (ícone de engrenagem) permite simular como o layout ficará com dados reais.

- **Aba Configuração da Lista**:
  - _Propriedade para Ordenar_: Define qual campo será usado para ordenar a lista (ex: `preco`, `nome`).
  - _Ordem_: Crescente ou Decrescente.
- **Aba Dados Mockados**:
  - _Dados para Lista_: Um array JSON `[...]` para testar o modo lista.
  - _Dados Únicos_: Um objeto JSON `{...}` para testar o modo único.
    > Edite esses JSONs para ver o layout reagir em tempo real às suas variáveis.

### Trabalhando com Textos e Fontes

Ao clicar com o botão direito em um elemento de **Texto**:

- **Editar Texto**: Abre uma janela para digitar o conteúdo. É aqui que você insere variáveis (ex: Nome do Cliente) clicando nos botões disponíveis.
- **Fonte**: Selecione entre diversas fontes seguras para web (Arial, Helvetica, etc) e Google Fonts populares (Roboto, Open Sans, Montserrat).
  - _Importar Google Font_: Permite digitar o nome de qualquer fonte do Google Fonts (ex: "Pacifico") e o editor a carregará automaticamente.
- **Tamanho**: Ajuste de 12px a 64px.
- **Cor do Texto**: Paleta de cores pré-definida.
- **Peso**: Normal ou Negrito.
- **Alinhamento**: Esquerda, Centro ou Direita.

### Trabalhando com Imagens

Ao clicar com o botão direito em um elemento de **Imagem**:

- **Alterar Imagem**:
  - _Upload_: Carregue uma imagem do seu computador.
  - _URL_: Cole um link direto para uma imagem da web.
- **Ajuste (Object Fit)**:
  - _Ajustar (Contain)_: A imagem inteira é mostrada dentro da caixa, mantendo a proporção (pode sobrar espaço em branco).
  - _Esticar (Fill)_: A imagem preenche toda a caixa, podendo ser cortada ou distorcida dependendo da proporção.
- **Vincular Dados**: Conecta a imagem a uma variável dinâmica (ex: Foto do Produto).

---

## Guia do Desenvolvedor (Integração)

### Inicialização e Props

Para iniciar o editor, você deve fornecer a configuração de `layout` que dita quais dados (variáveis) estarão disponíveis para o usuário.

```tsx
import { EditorContent } from "@1urso/generic-editor";

const config = {
  isList: false, // Modo único (ex: Crachá) ou Lista (ex: Catálogo)
  name: "Crachá de Funcionário",
  props: [
    // Define as variáveis que aparecerão no botão "Inserir Variável"
    { name: "Nome Completo", dataName: "nome" },
    { name: "Cargo", dataName: "cargo" },
    { name: "Foto de Perfil", dataName: "fotoUrl" },
  ],
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <EditorContent
        layout={config}
        onSave={(json) => saveToBackend(json)}
        theme="light" // Opcional: 'light' ou 'dark'
      />
    </div>
  );
}
```

### Data Binding e Variáveis

O editor utiliza um sistema de interpolação baseado em chaves duplas `{{chave}}`.

1.  **Inserção**: O usuário não precisa digitar `{{...}}` manualmente. Na janela de edição de texto, ele verá botões (badges) com os nomes amigáveis (ex: "Nome Completo"). Ao clicar, o código `{{nome}}` é inserido.
2.  **Renderização**:
    - Se `data = { nome: "Maria" }`, o texto "Olá {{nome}}" vira "Olá Maria".
    - Se a variável não existir nos dados, o editor mantém o texto original `{{nome}}` ou exibe vazio, dependendo da configuração.

### Modos: Item Único vs. Lista

A propriedade `isList` muda drasticamente como o editor e o gerador de HTML se comportam.

#### `isList: false` (Modo Único)

- **Uso**: Certificados, Crachás, Banners, Capas.
- **Dados**: Espera um **Objeto Único** `{ nome: 'João', cargo: 'Dev' }`.
- **Canvas**: Mostra uma única página/arte.

#### `isList: true` (Modo Lista)

- **Uso**: Listas de Preços, Catálogos, Etiquetas de Gôndola, Relatórios.
- **Dados**: Espera um **Array de Objetos** `[{ nome: 'A' }, { nome: 'B' }]`.
- **Canvas**:
  - O usuário desenha o "Item Modelo" (Template).
  - O editor repete esse modelo verticalmente para cada item do array de dados mockados.
  - Permite visualizar como a lista se comporta com múltiplos itens.

### Estrutura do JSON

O output do `onSave` é um JSON pronto para ser armazenado.

```json
{
  "isList": false,
  "elements": [
    {
      "id": "uuid-v4",
      "type": "text", // 'text' | 'image' | 'box'
      "content": "Nome: {{nome}}",
      "x": 50,
      "y": 100,
      "width": 200,
      "height": 40,
      "rotation": 0,
      "style": {
        "color": "#000000",
        "fontSize": "16px",
        "fontFamily": "Roboto",
        "textAlign": "center"
      },
      "dataBinding": "nome" // Opcional, usado para vínculo direto
    }
  ],
  "listSettings": {
    "sortProp": "nome",
    "sortOrder": "asc"
  }
}
```

### Gerando HTML (Backend/Print)

Para gerar o resultado final (para imprimir, salvar PDF ou enviar por email), use a função `generateHTML`. Ela roda em qualquer ambiente JS (Node, Browser, etc).

```typescript
import { generateHTML } from "@1urso/generic-editor";

// 1. Carregue o layout e os dados
const layout = JSON.parse(db.getLayout());
const dados = db.getFuncionarios(); // Array ou Objeto

// 2. Gere o HTML
const htmlString = generateHTML(layout.elements, dados, {
  isList: layout.isList, // Importante passar o modo correto
  listSettings: layout.listSettings,
});

// 3. Injete onde precisar
document.getElementById("preview").innerHTML = htmlString;
```

---

## API Reference

### Componente `<EditorContent />`

| Propriedade    | Tipo                     | Obrigatório | Padrão | Descrição                                     |
| -------------- | ------------------------ | ----------- | ------ | --------------------------------------------- |
| `layout`       | `ILayout`                | **Sim**     | -      | Configuração inicial das variáveis e modo.    |
| `initialState` | `any`                    | Não         | `null` | Estado JSON para carregar um layout salvo.    |
| `onSave`       | `(json: string) => void` | Não         | -      | Callback acionado ao clicar no botão Salvar.  |
| `mockData`     | `any[]`                  | Não         | `[]`   | Dados para preview imediato durante a edição. |

### Tipos TypeScript

#### `ILayout`

```typescript
interface ILayout {
  name: string; // Nome do layout (metadado)
  isList?: boolean; // Define o comportamento padrão (Lista ou Único)
  props: IProp[]; // Lista de variáveis disponíveis
}
```

#### `IProp`

```typescript
interface IProp {
  name: string; // Rótulo visível (ex: "Preço do Produto")
  dataName: string; // Chave do objeto (ex: "product_price")
}
```

#### `EditorProps`

| Prop           | Tipo                     | Obrigatório | Descrição                                   |
| -------------- | ------------------------ | ----------- | ------------------------------------------- |
| `layout`       | `ILayout`                | Sim         | Configuração inicial e metadados.           |
| `onSave`       | `(json: string) => void` | Não         | Callback disparado ao salvar.               |
| `initialState` | `any`                    | Não         | Estado salvo anteriormente (JSON parseado). |
| `theme`        | `'light' \| 'dark'`      | Não         | Tema da interface (padrão: `'light'`).      |
