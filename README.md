# Desafio Técnico - Desenvolvedor Front-End

Bem-vindo ao desafio técnico para a vaga de **Desenvolvedor Front-End**!

Este repositório contém as instruções para o desenvolvimento de uma **Rede Social de Fotos (Mini-Instagram)**, com o objetivo de avaliar seus conhecimentos em consumo de API (https://unsplash.com/developers) utilizando Next.js, Tailwind CSS, Typescript.

---

## 🎯 Objetivo

Criar uma Rede Social de Fotos:

1. **Crie um grid de fotos aleatórias (como um feed)**
2. **Permita que o usuário pesquise fotos por termos (natureza, animais, etc.)**
3. **Ao clicar em uma foto, exiba-a em um modal com detalhes do autor**
4. **Implemente um sistema de "favoritos" usando localStorage, zustand ou outra biblioteca de estado**

---

## 🛠️ Requisitos Básicos

Feed de Fotos:
- Exiba um grid de fotos aleatórias (mínimo 12) ao carregar a página.
- Cada foto deve mostrar:
    - Imagem em alta qualidade (com lazy loading).
    - Nome do autor (photographer).

Barra de Pesquisa:
- Permita que o usuário busque fotos por termos (ex: "cats", "beach").

Modal de Detalhes:
- Ao clicar em uma foto, exiba-a em um modal mostrando:
    - Imagem em alta qualidade.
    - Nome do autor (photographer).
    - Descrição da foto (se disponível).
    - Link para o perfil do autor no Unsplash.

Sistema de Favoritos:
- Implemente um sistema de favoritos usando localStorage, zustand ou outra biblioteca de estado.
- Adicione um botão de favorito em cada foto.
- Exiba um ícone de coração para indicar fotos favoritas.
- Permita que o usuário remova fotos dos favoritos.


## 🛠️ Requisitos Técnicos

Para este desafio, é obrigatório:

- Utilizar **Next.JS**
- Utilizar **Tailwind CSS**
- Utilizar **Typescript**

---

## 📝 API: Unsplash API (https://unsplash.com/developers) (crie uma conta gratuita para obter uma chave de acesso).

---

## 📝 Dicas de UI/UX:
- Design Responsivo
- Adapte o grid para mobile (ex: 1 coluna) e desktop (3+ colunas).
- Animações suaves ao curtir fotos ou abrir o modal.
- Tratamento de Erros
- Mostre uma mensagem se a API falhar ou não houver resultados na busca.

## ✅ Critérios de Avaliação

- Organização do código e estrutura do projeto
- Boas práticas com Next.js e Typescript
- Funcionamento completo da aplicação
- Adoção de boas práticas de **Clean Code**
- Organização geral do projeto (estrutura de diretórios, componetização, etc.)
- Uso de **commits semânticos** (Conventional Commits)
- README bem estruturado e informativo

---

## 🚀 Entrega

- Faça um **fork deste repositório** no GitHub.
- Crie uma **branch com o seu nome** para trabalhar no desafio.
- Incluir no README instruções claras de como rodar o projeto.
- Hospedar o projeto em um servidor (Heroku, Vercel, Netlify)

---

Boa sorte! 💻

