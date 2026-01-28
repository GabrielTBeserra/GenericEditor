import { useState } from 'react';
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
