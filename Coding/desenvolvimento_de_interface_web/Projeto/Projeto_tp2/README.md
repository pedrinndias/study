Organize - Hub de Colaboração para Desenvolvedores

Este projeto é o Trabalho Prático 2 (TP2) da disciplina de Desenvolvimento de Interfaces Web (DIW), do curso de Ciência de Dados e Inteligência Artificial da PUC Minas.

O Organize é uma aplicação web que simula um ambiente de comunidade (Hub) onde desenvolvedores podem encontrar equipas, partilhar notícias e colaborar em projetos de software.

🚀 Funcionalidades

O projeto foi desenvolvido como uma aplicação dinâmica com persistência de dados via API REST (JSON Server).

Autenticação e Perfis:

Login e Registo de utilizadores com validação.

Criação automática de Perfil Público (Avatar, Bio, Redes Sociais).

Gestão de Sessão segura (sessionStorage).

Gestão de Conteúdo (CRUD):

Criar: Qualquer utilizador logado pode criar Equipas e Notícias.

Moderar (Admin): O Administrador tem permissão para editar ou excluir qualquer conteúdo da plataforma.

Editar: Utilizadores comuns podem editar apenas o conteúdo que criaram.

Interatividade:

Pesquisa Inteligente: Filtre equipas por nome ou tecnologia na Home Page.

Favoritos: Marque equipas como favoritas e aceda-as numa página exclusiva.

Chat de Equipa: Sistema de mensagens persistente (localStorage) exclusivo para cada equipa.

Visualização de Dados:

Dashboard Pessoal: Painel para gerir as suas criações.

Estatísticas: Gráficos dinâmicos (Chart.js) mostrando a distribuição de notícias por categoria.

UX/UI (Experiência do Utilizador):

Layout totalmente responsivo (Mobile/Desktop).

Modo Escuro (Dark Theme) nativo.

Scroll Inteligente: Suporte a gestos de trackpad/touch para arrastar listas horizontais e verticais.

🛠️ Tecnologias Utilizadas

Front-End:

HTML5 Semântico

CSS3 (com Tailwind CSS via CDN para estilização rápida)

JavaScript (ES6+ - Async/Await, Fetch API)

Chart.js (Para gráficos estatísticos)

FontAwesome (Para ícones)

Back-End (Simulado):

JSON Server (Simulação de API RESTful completa)

Node.js (Ambiente de execução)

📦 Pré-requisitos e Instalação

Para rodar este projeto, precisa de ter o Node.js instalado no seu computador.

Clone ou Baixe este repositório/pasta.

Abra o terminal na raiz do projeto.

Instale as dependências (JSON Server):

npm install


▶️ Como Executar

Inicie o servidor backend simulado:

npm start


Este comando irá iniciar o JSON Server na porta 3000 a observar o ficheiro db/db.json.

Abra o ficheiro public/index.html no seu navegador de preferência.

Dica: Se usar VS Code, recomendo usar a extensão "Live Server" na pasta public para uma melhor experiência.

🔑 Acesso para Testes

O projeto já vem com utilizadores pré-configurados no db.json para facilitar a avaliação:

1. Conta de Administrador (Super User)

Tem acesso total: pode apagar e editar qualquer equipa ou notícia.

Email: pedro3soares@gmail.com

Senha: 123

2. Conta de Visitante (Utilizador Comum)

Acesso padrão: pode criar itens e gerir apenas os seus próprios dados.

Email: visitante@teste.com

Senha: 123

Nota: Na página "Sobre", existe um botão "Testar Aplicação" que permite fazer login automático nessas contas sem precisar digitar a senha.

📂 Estrutura de Pastas

/
├── db/
│   └── db.json          # Base de dados (Utilizadores, Equipas, Notícias, Favoritos)
├── public/              # Ficheiros do Front-End (Site)
│   ├── css/             # Folhas de estilo
│   ├── js/              # Scripts e Lógica (App, Auth, Dashboard, etc.)
│   ├── index.html       # Página Principal
│   └── ... (outras páginas HTML)
├── package.json         # Configuração do projeto e scripts npm
└── README.md            # Documentação do Projeto


👨‍💻 Autor

Pedro Dias Soares

Curso: Ciência de Dados e Inteligência Artificial

Instituição: Pontifícia Universidade Católica de Minas Gerais (PUC Minas)

Disciplina: Desenvolvimento de Interfaces Web