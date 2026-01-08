import { Editor } from './editor';
import './App.css'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Editor 
        layout={{ name: 'Layout Base', props: [{ name: 'Variavel 1', dataName: 'var1' }] }} 
      />
    </div>
  )
}

export default App
