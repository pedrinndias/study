document.addEventListener('DOMContentLoaded', function() {
    async function main() {
        try {
            // Agora buscamos apenas o arquivo que existe
            const equipesResponse = await fetch('dados.json');
            const dadosEquipes = await equipesResponse.json();

            // Seletores dos contêineres em todas as páginas
            const infoCardsContainer = document.getElementById('info-cards');
            const detalheContainer = document.getElementById('detalhe-container');
            // A linha abaixo foi removida pois não estamos mais usando o blog
            // const postsContainer = document.getElementById('posts-container'); 
            const equipesContainer = document.getElementById('equipes-container');

            // Renderiza o conteúdo dependendo da página que está aberta
            if (infoCardsContainer) { // Se for a página inicial
                renderInfoCards(dadosEquipes);
            }
            // A lógica do blog foi removida
            // if (postsContainer) { ... }
            if (detalheContainer) { // Se for a página de detalhes
                renderDetalhes(dadosEquipes);
            }
            if (equipesContainer) { // Se for a nova página de equipes
                renderEquipesPage(dadosEquipes); 
            }

        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
        }
    }

    // Esta função renderiza os cards na BARRA LATERAL da Home
    function renderInfoCards(dados) {
    const infoCardsContainer = document.getElementById('info-cards');
    if (!infoCardsContainer) return; // Garante que o código não quebre em outras páginas

    infoCardsContainer.innerHTML = '';
    dados.forEach(card => {
        const vagasDisponiveis = card.vagas - card.membros.length;
        const vagasTexto = vagasDisponiveis > 0 ? `${vagasDisponiveis} vagas abertas` : 'Equipe cheia';
        const vagasClasse = vagasDisponiveis > 0 ? 'bg-green-600' : 'bg-red-600';

        const tagsHTML = card.tecnologias.map(tag => 
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
    
    // **NOVA FUNÇÃO** para renderizar os cards na PÁGINA DE EQUIPES
    function renderEquipesPage(dados) {
    const equipesContainer = document.getElementById('equipes-container');
    if (!equipesContainer) return; // Garante que o código não quebre em outras páginas

    equipesContainer.innerHTML = '';
    dados.forEach(card => {
        const vagasDisponiveis = card.vagas - card.membros.length;
        const vagasTexto = vagasDisponiveis > 0 ? `${vagasDisponiveis} vagas abertas` : 'Equipe cheia';
        const vagasClasse = vagasDisponiveis > 0 ? 'bg-green-600' : 'bg-red-600';

        const tagsHTML = card.tecnologias.map(tag => 
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

    function renderBlogPosts(posts) {
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = `
                <a href="#" class="block transform hover:-translate-y-1 transition-transform duration-300">
                    <article class="bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                        <div class="p-6 flex-grow">
                            <p class="text-sm text-blue-400 font-semibold">${post.categoria}</p>
                            <h3 class="font-bold text-gray-100 text-xl mt-2">${post.titulo}</h3>
                            <p class="text-gray-400 mt-3">${post.resumo}</p>
                        </div>
                        <div class="bg-gray-700 px-6 py-3">
                            <p class="text-sm text-gray-400">Por ${post.autor} - ${new Date(post.data).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</p>
                        </div>
                    </article>
                </a>
            `;
            postsContainer.innerHTML += postElement;
        });
    }

    function renderDetalhes(dados) {
        const detalheContainer = document.getElementById('detalhe-container');
        document.body.style.backgroundColor = '#1a202c';
        
        const params = new URLSearchParams(window.location.search);
        const itemId = params.get('id');
        const item = dados.find(d => d.id == itemId);

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
    }

    main();
});