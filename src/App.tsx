import { useState } from 'react';
import { GenericEditor as Editor } from './editor';
import './App.css'

/**
 * Exemplo de Integração
 * Consulte o arquivo INTEGRATION.md na raiz para documentação detalhada.
 */

const editorLayout = { 
    isList: true,
    name: 'Cartão de Produto', 
    props: [
        { name: 'ID', dataName: 'id' },
        { name: 'Título do Produto', dataName: 'titulo' },
        { name: 'Descrição Curta', dataName: 'descricao' },
        { name: 'Preço Atual', dataName: 'preco' },
        { name: 'URL da Imagem', dataName: 'imagemUrl' },
    ] 
};

function App() {
  const [layoutState, setLayoutState] = useState<any>(null);

  const handleSave = (json: string) => {
    console.log("Salvando Layout:", json);
    setLayoutState(JSON.parse(json));
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
       
        <Editor 
            layout={editorLayout}
            onSave={handleSave}
            initialState={layoutState}
            theme={'light'}
        />
    </div>
  )
}

export default App
