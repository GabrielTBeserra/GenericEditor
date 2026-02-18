# Checklist de Usabilidade e Prevenção de Erros

Este documento define os critérios de qualidade para garantir que o Generic Editor seja acessível e seguro para usuários leigos.

## 1. O que deve estar ÓBVIO

O usuário deve ser capaz de responder às seguintes perguntas em menos de 5 segundos ao olhar para a tela:

*   **"Onde eu estou?"**: O título do template ou projeto atual deve estar visível no topo.
*   **"O que eu faço agora?"**: A ação principal (ex: "Adicionar Bloco" ou "Editar Texto") deve ter destaque visual (cor de acento, tamanho).
*   **"Como eu salvo?"**: O botão de salvar/finalizar deve estar sempre visível, preferencialmente no canto superior direito.
*   **"Isso é editável?"**: Elementos interativos no canvas devem mudar o cursor (`cursor: pointer` ou `text`) e ter um feedback visual (borda, sombra) ao passar o mouse (hover).
*   **"Como eu volto?"**: Um botão de "Desfazer" (Undo) deve estar sempre acessível e habilitado quando houver ações no histórico.

### Critérios de Design
- [ ] **Hierarquia Visual**: Botões primários (Finalizar, Adicionar) > Secundários (Ajustes) > Terciários (Cancelar).
- [ ] **Labels em Português**: Evitar termos como "Padding", "Margin", "Border-Radius". Usar "Espaçamento Interno", "Margem", "Arredondamento".
- [ ] **Feedback de Ação**: Toda ação (clique, arrasto, salvamento) deve ter uma resposta imediata (toast, mudança de cor, animação).

## 2. O que deve ser IMPOSSÍVEL de quebrar

O sistema deve impedir estados inválidos antes que eles aconteçam (Poka-Yoke).

*   **Layout Quebrado**:
    - [ ] Elementos não podem ser arrastados para fora da área visível do canvas (devem ter limites/bounds).
    - [ ] Elementos filhos não podem ser maiores que seus pais (overflow deve ser tratado ou bloqueado).
    - [ ] Textos longos devem quebrar linha automaticamente (word-wrap) e empurrar o conteúdo abaixo, em vez de sobrepor.

*   **Perda de Dados**:
    - [ ] O usuário não pode sair da página com alterações não salvas sem um alerta de confirmação.
    - [ ] "Deletar" um elemento complexo (como um Card agrupado) deve pedir confirmação ou ser facilmente reversível com "Desfazer".

*   **Erros Técnicos**:
    - [ ] Inputs numéricos (ex: tamanho da fonte) não devem aceitar letras ou caracteres especiais.
    - [ ] Upload de imagem deve validar o tipo de arquivo (JPG, PNG) e tamanho antes de tentar processar.

## 3. Erros Comuns e Como Prevenir

| Erro Comum do Usuário | Prevenção (Solução de UI/UX) |
| :--- | :--- |
| **"Sumiu meu texto!"** | Definir cor de texto padrão contrastante com o fundo. Impedir texto branco em fundo branco via aviso ou borda automática na seleção. |
| **"Não consigo clicar"** | Garantir que elementos sobrepostos (z-index) não bloqueiem cliques. Usar a aba "Conteúdo" (Camadas) para selecionar itens "enterrados". |
| **"Ficou tudo desalinhado"** | Implementar "Snap to Grid" (Grudar na grade) e Guias Inteligentes ativadas por padrão no Modo Simples. |
| **"A imagem ficou esticada"** | Definir `object-fit: cover` ou `contain` por padrão em todas as imagens. Bloquear redimensionamento desproporcional (exigir Shift ou travar aspect ratio). |
| **"Onde clico para editar?"** | Adicionar um botão de lápis ou ícone de engrenagem flutuante ao passar o mouse sobre qualquer bloco, além do clique duplo. |

## 4. Diagnóstico de UX (Auditoria Atual)

### Problemas Identificados (Versão Anterior)
1.  **Excesso de Informação**: Sidebar avançada exibia todas as propriedades CSS (Flexbox, Position) assustando o usuário. -> *Resolvido com Modo Simples.*
2.  **Terminologia Técnica**: Termos como "Camadas", "Assets", "Binding" eram obscuros. -> *Renomeados para "Conteúdo", "Imagens", "Dados".*
3.  **Falta de Fluxo**: O usuário entrava e não sabia por onde começar. -> *Resolvido com Wizard de 3 Passos e Onboarding.*

### Próximos Passos Prioritários
1.  Refinar o comportamento de "Agrupamento" para que Cards funcionem como uma unidade sólida no Modo Simples.
2.  Melhorar o feedback visual de "Drop Zone" (onde o elemento vai cair) ao arrastar da biblioteca.
