# Generic Editor

Uma biblioteca React poderosa e agnóstica de framework para criação de layouts dinâmicos, geração de templates e edição visual. Projetada para ser integrada em qualquer aplicação React (Web, Electron, Tauri, Next.js, etc.).

## Características

- **Editor Visual Drag & Drop**: Posicionamento livre, redimensionamento e rotação de elementos.
- **Data Binding**: Suporte a variáveis dinâmicas (ex: `{{produto.nome}}`) para geração de templates.
- **Framework Agnostic**: Funciona em qualquer ambiente React.
- **JSON Based**: Entrada e saída puramente em JSON, facilitando persistência e integração com backends.
- **Socket Ready**: Projetado para suportar atualizações em tempo real via WebSockets.
- **Preview em Tempo Real**: Visualização instantânea de como o layout ficará renderizado.

## Instalação

```bash
npm install generic-editor
# ou
yarn add generic-editor
```

### Peer Dependencies

Certifique-se de ter as seguintes dependências instaladas em seu projeto, pois o editor depende delas para UI e funcionalidades:

```bash
npm install @radix-ui/themes @radix-ui/react-icons react-resizable-panels re-resizable framer-motion @dnd-kit/core
```

E não esqueça de importar os estilos do Radix UI no topo da sua aplicação:

```tsx
import '@radix-ui/themes/styles.css';
```

## Como Usar

### Exemplo Básico

```tsx
import React, { useState } from 'react';
import { EditorContent } from 'generic-editor';

const MyPage = () => {
  // Configuração das variáveis disponíveis para o usuário arrastar/usar
  const layoutConfig = {
    props: [
      { name: 'Nome do Produto', dataName: 'productName' },
      { name: 'Preço', dataName: 'price' },
      { name: 'Imagem URL', dataName: 'imageUrl' }
    ]
  };

  const handleSave = (jsonState: string) => {
    console.log("Layout salvo:", jsonState);
    // Envie para sua API, salve em arquivo, etc.
  };

  return (
    <div style={{ height: '100vh' }}>
      <EditorContent 
        layout={layoutConfig}
        onSave={handleSave}
      />
    </div>
  );
};
```

## API Reference

### `<EditorContent />`

Componente principal do editor.

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `layout` | `ILayout` | Sim | Configuração das variáveis disponíveis para data-binding. |
| `initialState` | `any` (JSON string ou Objeto) | Não | Estado inicial do editor. Útil para carregar layouts salvos ou atualizações via socket. |
| `onSave` | `(json: string) => void` | Não | Callback disparado quando o usuário clica em "Salvar". Retorna o estado completo em JSON. |

### Interfaces

#### `ILayout`

Define as propriedades disponíveis para o usuário utilizar no layout (Data Binding).

```typescript
interface ILayout {
  props: IProp[];
}

interface IProp {
  name: string;      // Nome visível para o usuário (ex: "Nome do Cliente")
  dataName: string;  // Chave da variável no JSON de dados (ex: "customerName") -> gera {{customerName}}
}
```

## Estrutura de Dados (JSON)

O editor exporta e importa um JSON com a seguinte estrutura:

```json
{
  "elements": [
    {
      "id": "uuid-1234",
      "type": "text", // ou 'image', 'box'
      "content": "Olá {{name}}",
      "x": 50,
      "y": 100,
      "width": 200,
      "height": 50,
      "rotation": 0,
      "style": { "color": "#000000" }
    }
  ],
  "listSettings": { ... },
  "mockData": [ ... ],
  "isList": false
}
```

## Guias de Integração

### 1. Integração com WebSockets (Real-time)

O editor reage a mudanças na prop `initialState`. Isso permite que você conecte o editor a um WebSocket e atualize o layout em tempo real quando outro usuário fizer alterações (colaboração básica) ou carregar dados remotamente.

```tsx
import React, { useEffect, useState } from 'react';
import { EditorContent } from 'generic-editor';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const SocketEditor = () => {
  const [remoteState, setRemoteState] = useState(null);

  useEffect(() => {
    // Escuta atualizações do servidor
    socket.on('layout-update', (data) => {
      setRemoteState(data);
    });

    return () => socket.off('layout-update');
  }, []);

  const handleSave = (jsonState) => {
    // Envia alterações para o servidor
    socket.emit('save-layout', jsonState);
  };

  return (
    <EditorContent 
      layout={{ props: [] }}
      initialState={remoteState} // O editor atualizará quando remoteState mudar
      onSave={handleSave}
    />
  );
};
```

> **Nota**: O editor faz um "merge" inteligente ao receber `initialState`, mas para colaboração em tempo real (estilo Google Docs), recomenda-se gerenciar conflitos no backend ou usar bibliotecas como Yjs, passando apenas o estado final consolidado para o `initialState`.

### 2. Integração com Electron / Tauri (File System)

Para aplicativos desktop, você pode usar o `onSave` para escrever diretamente no disco.

```tsx
// Exemplo Tauri / Electron
import { writeFile, readTextFile } from '@tauri-apps/api/fs'; // ou 'fs' do Node no Electron

const DesktopEditor = () => {
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    // Carregar arquivo ao abrir
    readTextFile('path/to/layout.json').then(content => {
      setFileContent(content);
    });
  }, []);

  const handleSave = async (jsonState) => {
    await writeFile({
      path: 'path/to/layout.json',
      contents: jsonState
    });
    alert('Salvo com sucesso no disco!');
  };

  return (
    <EditorContent 
      layout={{ props: [] }}
      initialState={fileContent}
      onSave={handleSave}
    />
  );
};
```

### 3. Integração com Backend (REST API)

```tsx
const CloudEditor = () => {
  const handleSave = async (jsonState) => {
    await fetch('/api/layouts/123', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: jsonState // Envia o JSON completo
    });
  };

  return <EditorContent layout={...} onSave={handleSave} />;
};
```
