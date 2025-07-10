# Mini Instagram - Galeria de Fotos

Um clone simplificado do Instagram, construído com Next.js e a API da Unsplash. Este projeto exibe uma galeria de fotos, permite a busca por imagens, visualização em um modal e a funcionalidade de favoritar fotos.

**[Acesse a demonstração ao vivo](https://desafio-frontend-sage.vercel.app/)**

## Funcionalidades

*   **Galeria de Fotos:** Exibe uma grade de fotos da API da Unsplash.
*   **Busca de Imagens:** Permite que os usuários pesquisem por fotos específicas.
*   **Visualização Detalhada:** Ao clicar em uma foto, um modal é aberto com a imagem em tamanho maior e detalhes como o nome do fotógrafo.
*   **Sistema de Favoritos:** Os usuários podem marcar e desmarcar fotos como favoritas, e essa seleção persiste durante a sessão do navegador.
*   **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, de dispositivos móveis a desktops.

## Tecnologias Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes de UI:** [shadcn/ui](https://ui.shadcn.com/) (utilizando Radix UI e Lucide React)
*   **Gerenciamento de Estado:** [Zustand](https://github.com/pmndrs/zustand)
*   **Requisições HTTP:** [Axios](https://axios-http.com/)
*   **Ícones:** [React Icons](https://react-icons.github.io/react-icons/)
*   **API de Imagens:** [Unsplash API](https://unsplash.com/developers)

## Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em sua máquina.

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
*   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)
*   Uma chave de acesso da API da [Unsplash](https://unsplash.com/developers).

### 1. Clone o Repositório

Primeiro, clone o repositório para a sua máquina local.

```bash
git clone https://github.com/maytearaujo/desafio-front-end.git
cd desafio-front-end
```

### 2. Instale as Dependências

Usando o gerenciador de pacotes de sua preferência:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as Variáveis de Ambiente

Para que a aplicação possa se comunicar com a API da Unsplash, você precisa de uma chave de acesso.

1.  Crie um arquivo chamado `.env.local` na raiz do projeto.
2.  Adicione a seguinte linha, substituindo `SUA_CHAVE_DE_ACESSO_UNSPLASH` pela sua chave:

    ```env
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=SUA_CHAVE_DE_ACESSO_UNSPLASH
    NEXT_PUBLIC_API_URL=https://api.unsplash.com/
    ```

### 4. Rode o Servidor de Desenvolvimento

Agora, você pode iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.

## Build para Produção

Para criar uma versão otimizada para produção, execute o comando:

```bash
npm run build
```

E para iniciar o servidor de produção:

```bash
npm run start
```

## Estrutura do Projeto

```
desafio-front-end/
├── src/
│   ├── app/                  # Rotas e páginas do Next.js
│   │   ├── photos/
│   │   │   └── page.tsx      # Componente principal da galeria de fotos
│   │   └── page.tsx          # Página inicial que monta o layout
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── ui/               # Componentes de UI (shadcn/ui)
│   │   ├── cardPhoto.tsx     # Card individual de cada foto
│   │   ├── menu.tsx          # Menu de navegação lateral
│   │   └── PhotoModal.tsx    # Modal para visualização de fotos
│   ├── lib/                  # Funções utilitárias (ex: cn)
│   ├── models/               # Definições de tipos e interfaces (ex: Photo)
│   ├── services/             # Lógica de comunicação com APIs externas
│   └── store/                # Configuração do Zustand para estado global
├── public/                   # Arquivos estáticos
└── ...                       # Arquivos de configuração (tailwind, next, etc.)
```

