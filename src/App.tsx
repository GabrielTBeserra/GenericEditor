import { useMemo, useState } from 'react';
import { GenericEditor as Editor } from './editor';
import './App.css'

/**
 * Exemplo de Integração
 * Consulte o arquivo INTEGRATION.md na raiz para documentação detalhada.
 */

const editorLayout = { 
   name: "Editor de Chat", 
   isList: true, // Chat é uma lista de mensagens 
   props: [ 
     { name: "Nome de Usuário (Login)", dataName: "username" }, 
     { name: "Nome de Exibição", dataName: "displayName" }, 
     { name: "Mensagem", dataName: "message" }, 
     { name: "Cor do Usuário", dataName: "color" }, 
     { name: "Avatar", dataName: "profilePicture" }, 
     { name: "Horário", dataName: "timestamp" }, 
     { name: "É Moderador", dataName: "isMod" }, 
     { name: "É Inscrito", dataName: "isSubscriber" }, 
     { name: "É Streamer", dataName: "isBroadcaster" }, 
     { name: "É VIP", dataName: "isVip" }, 
     { name: "Emblemas", dataName: "badges" }, 
     { name: "Emotes", dataName: "emotes" }, 
     { name: "Fonte", dataName: "source" }, 
   ], 
 };

function App() {
  const [layoutState, setLayoutState] = useState<unknown>(null);
  const [activeTemplateId, setActiveTemplateId] = useState('template-chat-classic');

  const templates = useMemo(() => ([
    {
      id: 'template-chat-classic',
      name: 'Chat Clássico',
      description: 'Layout simples com nome e mensagem em destaque.',
      state: [
        {
          id: 'chat-1',
          type: 'text',
          content: '{{displayName}}',
          x: 24,
          y: 20,
          width: 320,
          height: 40,
          style: {
            fontSize: '24px',
            fontWeight: 700,
            color: '#0f172a'
          }
        },
        {
          id: 'chat-2',
          type: 'text',
          content: '{{message}}',
          x: 24,
          y: 60,
          width: 420,
          height: 60,
          style: {
            fontSize: '18px',
            color: '#334155'
          }
        }
      ]
    },
    {
      id: 'template-chat-card',
      name: 'Cartão Moderno',
      description: 'Mensagem em cartão com avatar e badge.',
      state: [
        {
          id: 'card-bg',
          type: 'box',
          content: 'Card',
          x: 16,
          y: 16,
          width: 520,
          height: 120,
          style: {
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15)',
            border: '1px solid #e2e8f0'
          }
        },
        {
          id: 'card-avatar',
          type: 'image',
          content: '{{profilePicture}}',
          x: 32,
          y: 36,
          width: 64,
          height: 64,
          style: {
            borderRadius: '50%',
            objectFit: 'cover'
          }
        },
        {
          id: 'card-name',
          type: 'text',
          content: '{{displayName}}',
          x: 112,
          y: 36,
          width: 320,
          height: 32,
          style: {
            fontSize: '20px',
            fontWeight: 700,
            color: '#0f172a'
          }
        },
        {
          id: 'card-message',
          type: 'text',
          content: '{{message}}',
          x: 112,
          y: 70,
          width: 380,
          height: 40,
          style: {
            fontSize: '16px',
            color: '#475569'
          }
        }
      ]
    }
  ]), []);

  const handleSave = (json: string) => {
    console.log("Salvando Layout:", json);
    setLayoutState(JSON.parse(json));
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 20, display: 'flex', gap: 8 }}>
          {templates.map(template => (
            <button
              key={template.id}
              onClick={() => setActiveTemplateId(template.id)}
              style={{
                padding: '8px 12px',
                borderRadius: 8,
                border: template.id === activeTemplateId ? '1px solid #2563eb' : '1px solid #cbd5f5',
                background: template.id === activeTemplateId ? '#2563eb' : '#ffffff',
                color: template.id === activeTemplateId ? '#ffffff' : '#0f172a',
                cursor: 'pointer'
              }}
            >
              {template.name}
            </button>
          ))}
        </div>

        <Editor 
            layout={editorLayout}
            onSave={handleSave}
            initialState={layoutState}
            theme={'light'}
            templates={templates}
            activeTemplateId={activeTemplateId}
            onTemplateChange={setActiveTemplateId}
        />
    </div>
  )
}

export default App
