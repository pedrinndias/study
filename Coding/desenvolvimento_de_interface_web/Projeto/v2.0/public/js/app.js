document.addEventListener('DOMContentLoaded', function() {
    
    // Define a URL base da nossa API
    const API_URL = 'http://localhost:3000';

    async function main() {
        try {
            // --- CORREÇÃO: Buscando da API ---
            const equipesResponse = await fetch(`${API_URL}/equipes`);
            const dadosEquipes = await equipesResponse.json();

            const noticiasResponse = await fetch(`${API_URL}/noticias`);
            const dadosNoticias = await noticiasResponse.json();
            
            // --- Fim da Correção ---

            // Seletores dos contêineres em todas as páginas
            const infoCardsContainer = document.getElementById('info-cards');
            const detalheContainer = document.getElementById('detalhe-container');
            const equipesContainer = document.getElementById('equipes-container');
            
            // Seletores das Notícias
            const newsCardsContainer = document.getElementById('news-cards-container');
            const noticiaDetalheContainer = document.getElementById('noticia-detalhe-container');


            // Renderiza o conteúdo dependendo da página que está aberta
            // --- VERIFICAÇÃO DE LÓGICA ---
            // Garante que os dados corretos vão para as funções corretas
            
            if (infoCardsContainer) { // Se for a página inicial
                renderInfoCards(dadosEquipes); // Passa dados das Equipes
            }
            if (detalheContainer) { // Se for a página de detalhes da Equipe
                renderDetalhes(dadosEquipes); // Passa dados das Equipes
            }
            if (equipesContainer) { // Se for a nova página de equipes
                renderEquipesPage(dadosEquipes); // Passa dados das Equipes
            }
            if (newsCardsContainer) { // Se for a seção de notícias na home
                renderNewsCards(dadosNoticias, newsCardsContainer); // Passa dados das Notícias
            }
            if (noticiaDetalheContainer) { // Se for a página de detalhe da Notícia
                renderNoticiaDetalhe(dadosNoticias, noticiaDetalheContainer); // Passa dados das Notícias
            }
            // --- Fim da Verificação ---

        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
            // Mostra um erro amigável se a API estiver desligada
            const infoCardsContainer = document.getElementById('info-cards');
            if (infoCardsContainer) {
                infoCardsContainer.innerHTML = `<p class="text-red-400 text-center">Erro ao conectar à API. Você ligou o json-server?</p>`;
            }
            const newsCardsContainer = document.getElementById('news-cards-container');
            if (newsCardsContainer) {
                newsCardsContainer.innerHTML = `<p class="text-red-400 text-center">Erro ao conectar à API. Você ligou o json-server?</p>`;
            }
        }
    }

    // Esta função renderiza os cards na BARRA LATERAL da Home
    function renderInfoCards(dados) {
        const infoCardsContainer = document.getElementById('info-cards');
        if (!infoCardsContainer) return; 

        infoCardsContainer.innerHTML = '';
        dados.forEach(card => {
            // A linha abaixo é a que estava dando o erro
            // Só funciona se 'card' for um objeto de Equipe (que tem 'membros')
            const vagasDisponiveis = card.vagas - (card.membros ? card.membros.length : 0);
            const vagasTexto = vagasDisponiveis > 0 ? `${vagasDisponiveis} vagas abertas` : 'Equipe cheia';
            const vagasClasse = vagasDisponiveis > 0 ? 'bg-green-600' : 'bg-red-600';

            const tagsHTML = (card.tecnologias || []).map(tag => 
                `<span class="bg-gray-700 text-blue-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${tag}</span>`
            ).join('');

            const cardElement = `
                <article class="project-card bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                    <img src="${card.imagem}" alt="${card.titulo}" class="w-full h-32 object-cover">
                    <div class="p-4 flex flex-col flex-grow">
                        <h3 class="font-bold text-gray-100 text-md mb-2">${card.titulo}</h3>
                        <div class="mb-3">
                            ${tagsHTML}
                        </div>
                        <p class="text-gray-400 text-sm flex-grow">${card.descricao}</p>
                        <div class="mt-4 flex justify-between items-center">
                            <span class="text-sm font-bold text-white px-3 py-1 rounded ${vagasClasse}">
                                ${vagasTexto}
                            </span>
                            <a href="equipe-chat.html?id=${card.id}" class="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                                Ver Equipe
                            </a>
                        </div>
                    </div>
                </article>
            `;
            infoCardsContainer.innerHTML += cardElement;
        });
    }
        
    // Esta função renderiza os cards na PÁGINA DE EQUIPES
    function renderEquipesPage(dados) {
        const equipesContainer = document.getElementById('equipes-container');
        if (!equipesContainer) return; 

        equipesContainer.innerHTML = '';
        dados.forEach(card => {
            const vagasDisponiveis = card.vagas - (card.membros ? card.membros.length : 0);
            const vagasTexto = vagasDisponiveis > 0 ? `${vagasDisponiveis} vagas abertas` : 'Equipe cheia';
            const vagasClasse = vagasDisponiveis > 0 ? 'bg-green-600' : 'bg-red-600';

            const tagsHTML = (card.tecnologias || []).map(tag => 
                `<span class="bg-gray-700 text-blue-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${tag}</span>`
            ).join('');

            const cardElement = `
                <article class="project-card bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                    <img src="${card.imagem}" alt="${card.titulo}" class="w-full h-48 object-cover">
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="font-bold text-gray-100 text-xl mb-3">${card.titulo}</h3>
                        <div class="mb-4">
                            ${tagsHTML}
                        </div>
                        <p class="text-gray-400 text-sm flex-grow">${card.descricao}</p>
                        <div class="mt-5 flex justify-between items-center">
                            <span class="text-sm font-bold text-white px-3 py-1 rounded ${vagasClasse}">
                                ${vagasTexto}
                            </span>
                            <a href="equipe-chat.html?id=${card.id}" class="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                                Ver Equipe
                            </a>
                        </div>
                    </div>
                </article>
            `;
            equipesContainer.innerHTML += cardElement;
        });
    }

    // Esta é a sua função original de detalhes da EQUIPE
    function renderDetalhes(dados) {
        const detalheContainer = document.getElementById('detalhe-container');
        if (!detalheContainer) return; 
        
        document.body.style.backgroundColor = '#1a202c';
        
        const params = new URLSearchParams(window.location.search);
        const itemId = params.get('id');
        
        // --- CORREÇÃO: Busca da API ---
        // Em vez de receber todos os dados, buscamos o item certo
        async function fetchDetalheEquipe(id) {
            try {
                const response = await fetch(`${API_URL}/equipes/${id}`);
                const item = await response.json();
                
                if (item) {
                    document.title = item.titulo;
                    const detalheElement = `
                        <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">${item.titulo}</h1>
                        <img src="${item.imagem}" alt="${item.titulo}" class="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg mb-8">
                        
                        <div class="bg-gray-800 p-8 rounded-lg shadow-md">
                            <h2 class="text-2xl font-bold text-white mb-4">Sobre a Equipe</h2>
                            <p class="text-gray-300 text-lg leading-relaxed">${item.conteudo}</p>
                            
                            <div class="mt-8 border-t border-gray-700 pt-6">
                                <h3 class="text-xl font-bold text-white mb-3">Detalhes Adicionais</h3>
                                <p class="text-gray-300"><strong class="font-semibold text-gray-100">Coordenador(a):</strong> ${item.responsavel}</p>
                                <p class="text-gray-300"><strong class="font-semibold text-gray-100">Início das Atividades:</strong> ${new Date(item.data_inicio).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</p>
                            </div>
                        </div>
                    `;
                    detalheContainer.innerHTML = detalheElement;
                } else {
                    detalheContainer.innerHTML = '<h1 class="text-center text-2xl font-bold text-red-500">Equipe não encontrada!</h1>';
                }
            } catch (error) {
                console.error("Erro ao buscar detalhe da equipe:", error);
                detalheContainer.innerHTML = '<h1 class="text-center text-2xl font-bold text-red-500">Erro ao carregar equipe.</h1>';
            }
        }
        
        if (itemId) {
            fetchDetalheEquipe(itemId);
        } else {
            detalheContainer.innerHTML = '<h1 class="text-center text-2xl font-bold text-red-500">ID da Equipe não fornecido.</h1>';
        }
        // --- Fim da Correção ---
    }


    // Função para renderizar os cards de NOTÍCIAS na index.html
    function renderNewsCards(noticias, container) {
        if (!container) return;
        container.innerHTML = '';
        noticias.forEach(noticia => {
            const cardElement = `
                <a href="noticia-detalhe.html?id=${noticia.id}" class="block transform hover:-translate-y-1 transition-transform duration-300">
                    <article class="bg-gray-700 rounded-lg shadow-md overflow-hidden h-full">
                        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <p class="text-sm text-blue-400 font-semibold">${noticia.categoria}</p>
                            <h3 class="font-bold text-gray-100 text-xl mt-2">${noticia.titulo}</h3>
                            <p class="text-gray-400 mt-3">${noticia.resumo}</p>
                        </div>
                    </article>
                </a>
            `;
            container.innerHTML += cardElement;
        });
    }

    // Função para renderizar o DETALHE DA NOTÍCIA na noticia-detalhe.html
    function renderNoticiaDetalhe(dados, container) {
        if (!container) return;
        
        document.body.style.backgroundColor = '#1a202c';
            
        const params = new URLSearchParams(window.location.search);
        const itemId = params.get('id');

        // --- CORREÇÃO: Busca da API ---
        async function fetchDetalheNoticia(id) {
            try {
                const response = await fetch(`${API_URL}/noticias/${id}`);
                const item = await response.json();

                if (item) {
                    document.title = item.titulo;
                    const detalheElement = `
                        <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">${item.titulo}</h1>
                        <img src="${item.imagem}" alt="${item.titulo}" class="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg mb-8">
                        
                        <div class="bg-gray-800 p-8 rounded-lg shadow-md">
                            <h2 class="text-2xl font-bold text-white mb-4">Sobre a Notícia</h2>
                            <p class="text-gray-300 text-lg leading-relaxed">${item.conteudo}</p>
                            
                            <div class="mt-8 border-t border-gray-700 pt-6">
                                <h3 class="text-xl font-bold text-white mb-3">Categoria</h3>
                                <p class="text-gray-300"><strong class="font-semibold text-blue-400">${item.categoria}</strong></p>
                            </div>
                        </div>
                    `;
                    container.innerHTML = detalheElement;
                } else {
                    container.innerHTML = '<h1 class="text-center text-2xl font-bold text-red-500">Notícia não encontrada!</h1>';
                }
            } catch (error) {
                console.error("Erro ao buscar detalhe da notícia:", error);
                container.innerHTML = '<h1 class="text-center text-2xl font-bold text-red-500">Erro ao carregar notícia.</h1>';
            }
        }
        
        if (itemId) {
            fetchDetalheNoticia(itemId);
        } else {
            container.innerHTML = '<h1 class="text-center text-2xl font-bold text-red-500">ID da Notícia não fornecido.</h1>';
        }
        // --- Fim da Correção ---
    }


    main();
});