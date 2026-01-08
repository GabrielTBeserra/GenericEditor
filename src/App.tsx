import React, { useState, useEffect } from 'react';
import { GenericEditor as Editor } from './editor';
import './App.css'
import { generateHTML } from './editor/utils/htmlGenerator';

/**
 * Exemplo de Integração
 * Consulte o arquivo INTEGRATION.md na raiz para documentação detalhada.
 */

const editorLayout = { 
    
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
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [mockRecords, setMockRecords] = useState<any[]>([
    { id: 1, titulo: 'Produto Inicial', preco: 'R$ 50,00', imagemUrl: 'https://via.placeholder.com/150' }
  ]);

  const handleSave = (json: string) => {
    console.log("Salvando Layout:", json);
    setLayoutState(JSON.parse(json));
  };

  const addRecord = () => {
    const newRecord = {
      id: mockRecords.length + 1,
      titulo: `Produto Novo ${mockRecords.length + 1}`,
      preco: `R$ ${(Math.random() * 100).toFixed(2)}`,
      imagemUrl: 'https://via.placeholder.com/150',
      descricao: 'Descrição gerada automaticamente.'
    };
    setMockRecords([...mockRecords, newRecord]);
  };

  useEffect(() => {
    if (layoutState && layoutState.elements) {
      const html = generateHTML(
        layoutState.elements, 
        layoutState.isList ? mockRecords : mockRecords[0],
        { 
            isList: layoutState.isList,
            listSettings: layoutState.listSettings
        }
      );
      setGeneratedHtml(html);
    }
  }, [layoutState, mockRecords]);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row' }}>
      {/* Editor Section */}
      <div style={{ flex: 1, height: '100%', borderRight: '2px solid #ccc', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px', background: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
            <strong>Área do Editor (Integração)</strong>
        </div>
        <Editor 
            layout={editorLayout}
            onSave={handleSave}
            initialState={layoutState}
        />
      </div>

      {/* External System Simulation */}
      <div style={{ width: '400px', height: '100%', display: 'flex', flexDirection: 'column', background: '#fafafa' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
            <h3>Sistema Externo</h3>
            <p style={{ fontSize: '12px', color: '#666' }}>
                Este painel simula a aplicação consumindo o layout exportado pelo editor.
            </p>
            <button 
                onClick={addRecord}
                style={{ 
                    padding: '8px 16px', 
                    background: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px'
                }}
            >
                + Adicionar Registro Dinâmico
            </button>
            <div style={{ marginTop: '10px', fontSize: '12px' }}>
                Registros Atuais: <strong>{mockRecords.length}</strong>
            </div>
        </div>

        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <h4>Renderização em Tempo Real</h4>
            <div 
                style={{ 
                    flex: 1, 
                    border: '1px solid #ddd', 
                    background: 'white', 
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                {layoutState ? (
                     <div 
                        dangerouslySetInnerHTML={{ __html: generatedHtml }} 
                        style={{ width: '100%', height: '100%' }}
                     />
                ) : (
                    <div style={{ padding: '20px', color: '#999', textAlign: 'center' }}>
                        Salve o layout no editor (Botão "Salvar / Exportar" &rarr; "Salvar (Aplicação)") para ver o resultado aqui.
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
