[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=21671952)

# Trabalho Prático 07 - Semanas 13 e 14

A partir dos dados cadastrados na etapa anterior, vamos trabalhar formas de apresentação que representem de forma clara e interativa as informações do seu projeto. Você poderá usar gráficos (barra, linha, pizza), mapas, calendários ou outras formas de visualização. Seu desafio é entregar uma página Web que organize, processe e exiba os dados de forma compreensível e esteticamente agradável.

Com base nos tipos de projetos escohidos, você deve propor **visualizações que estimulem a interpretação, agrupamento e exibição criativa dos dados**, trabalhando tanto a lógica quanto o design da aplicação.

Sugerimos o uso das seguintes ferramentas acessíveis: [FullCalendar](https://fullcalendar.io/), [Chart.js](https://www.chartjs.org/), [Mapbox](https://docs.mapbox.com/api/), para citar algumas.

## Informações do trabalho

- **Nome:** Pedro Dias Soares
- **Matricula:** 879672
- **Proposta de projeto escolhida:** Organizações e Equipes

---

## Breve descrição sobre seu projeto (Base - CRUDs)

O projeto é um hub de colaboração para desenvolvedores chamado **"Organize"**. Ele funciona como um portal onde usuários podem se cadastrar, criar equipes de desenvolvimento e publicar notícias de tecnologia.

O sistema utiliza o `json-server` como back-end simulado para persistir os dados e `localStorage`/`sessionStorage` para a autenticação de usuários.

As principais funcionalidades de CRUD implementadas são:

* **CRUD de Equipes:**
    * **Create:** Usuários logados podem criar novas equipes (com título, descrição, vagas, tecnologias, etc.) através de um formulário (`cadastro_equipe.html`).
    * **Read:** Todas as equipes são listadas na `index.html` e em `equipes.html`. Usuários podem ver detalhes, membros e um chat em `equipe-chat.html`.
    * **Update:** O dono da equipe pode editar as informações (`editar_equipe.html`).
    * **Delete:** O dono da equipe pode excluir a equipe de dentro da página `equipe-chat.html`.

* **CRUD de Notícias:**
    * **Create:** Usuários logados podem publicar novas notícias/artigos (`cadastro_noticia.html`).
    * **Read:** As notícias são exibidas em formato de card na `index.html` e os detalhes podem ser lidos em `noticia-detalhe.html`.
    * **Update:** O autor pode editar suas notícias através do `dashboard.html`, que redireciona para `editar_noticia.html`.
    * **Delete:** O autor pode excluir suas notícias diretamente do `dashboard.html`.

---

## Implementação nesta etapa (TP7 - Apresentação Dinâmica)

Seguindo a proposta do trabalho, esta etapa focou em criar visualizações dinâmicas para os dados existentes. A principal implementação foi uma página de estatísticas, além de melhorias visuais na apresentação dos dados na página inicial.

### 1. Página de Estatísticas com Chart.js

Foi criada a página `estatisticas.html`

* O script `js/stats.js` busca (`fetch`) todos os dados do endpoint `/noticias` da API.
* Os dados são processados em tempo real para agrupar as notícias por categoria e contar a quantidade de posts em cada uma.
* Utilizando a biblioteca **Chart.js**, um gráfico de barras é gerado dinamicamente, mostrando visualmente a distribuição de conteúdo do portal.
* O gráfico é responsivo e se atualiza automaticamente caso novas notícias sejam cadastradas (via CRUD) e a página recarregada.

---

## Print da tela com a implementação

Abaixo estão os *prints* da nova página de estatísticas em funcionamento, conforme solicitado.

**Print 1: Gráfico de Notícias por Categoria (Chart.js)**
<img width="1365" height="660" alt="Estatisticas" src="https://github.com/user-attachments/assets/74d93a5d-226e-4d67-b2eb-f8f8f209efc4" />
<img width="1365" height="659" alt="Cadastrandonovanoticia" src="https://github.com/user-attachments/assets/2ffb14cf-f9ad-476e-8780-9480b98e81bd" />


**Print 2: Gráfico Atualizado após CRUD**
<img width="1365" height="655" alt="novanoticia-teste" src="https://github.com/user-attachments/assets/637a8e67-a206-413d-b5da-b19fb69249ee" />

