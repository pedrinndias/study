document.addEventListener('DOMContentLoaded', function() {
    
    const API_URL = 'http://localhost:3000';
    let todasEquipes = []; // Variável global para pesquisa
    let meusFavoritosIds = []; // Variável global para favoritos

    // =========================================================
    // 1. FUNÇÃO DE SCROLL INTELIGENTE (NOVA FUNCIONALIDADE)
    // =========================================================
    function startSmartScroll(containerId, direction = 'horizontal', speed = 0.5) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Aplica estilos via JS para garantir que o scroll funcione
        // mesmo que você não tenha alterado o CSS ainda.
        if (direction === 'horizontal') {
            container.style.overflowX = 'auto';
            container.style.whiteSpace = 'nowrap';
        } else {
            container.style.overflowY = 'auto';
            container.style.height = '900px'; // Altura fixa para scroll vertical
        }
        container.style.cursor = 'grab';
        container.style.scrollbarWidth = 'none'; // Esconde barra (Firefox)
        
        let isUserInteracting = false;

        // Detecta interação do usuário (Mouse ou Toque)
        const pause = () => isUserInteracting = true;
        const play = () => isUserInteracting = false;

        container.addEventListener('mouseenter', pause);
        container.addEventListener('mouseleave', play);
        container.addEventListener('touchstart', pause, { passive: true });
        container.addEventListener('touchend', play);

        // Loop de Animação
        function autoScroll() {
            if (!isUserInteracting) {
                if (direction === 'horizontal') {
                    // Lógica Horizontal (Notícias)
                    // Se chegou na metade (fim do conteúdo original), volta pro início instantaneamente
                    if (container.scrollLeft >= (container.scrollWidth / 2) - 10) {
                        container.scrollLeft = 0; 
                    } else {
                        container.scrollLeft += speed;
                    }
                } else {
                    // Lógica Vertical (Equipes na Lateral)
                    if (container.scrollTop >= (container.scrollHeight / 2) - 10) {
                        container.scrollTop = 0;
                    } else {
                        container.scrollTop += speed;
                    }
                }
            }
            requestAnimationFrame(autoScroll);
        }

        // Inicia o loop
        requestAnimationFrame(autoScroll);
    }

    // =========================================================
    // 2. FUNÇÃO DE FAVORITAR (GLOBAL)
    // =========================================================
    window.toggleFavorito = async function(equipeId) {
        const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));
        
        if (!currentUser) {
            alert("Você precisa fazer login para favoritar!");
            window.location.href = "login.html";
            return;
        }

        try {
            // Verifica se já é favorito
            const checkResp = await fetch(`${API_URL}/favoritos?usuarioId=${currentUser.id}&equipeId=${equipeId}`);
            const checkData = await checkResp.json();

            const icon = document.getElementById(`fav-icon-${equipeId}`);
            const iconDetail = document.getElementById(`fav-icon-detail-${equipeId}`); // Caso esteja na pag de detalhes

            if (checkData.length > 0) {
                // REMOVER
                const favoritoId = checkData[0].id;
                await fetch(`${API_URL}/favoritos/${favoritoId}`, { method: 'DELETE' });
                
                // Atualiza visual (coração vazio)
                const emptyClass = "far fa-heart text-gray-400 text-2xl cursor-pointer hover:text-red-500 transition";
                if(icon) icon.className = emptyClass;
                if(iconDetail) iconDetail.className = emptyClass;
                
                meusFavoritosIds = meusFavoritosIds.filter(id => id !== equipeId);

            } else {
                // ADICIONAR
                await fetch(`${API_URL}/favoritos`, { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ usuarioId: currentUser.id, equipeId: equipeId })
                });

                // Atualiza visual (coração cheio)
                const fullClass = "fas fa-heart text-red-500 text-2xl cursor-pointer transition";
                if(icon) icon.className = fullClass;
                if(iconDetail) iconDetail.className = fullClass;
                
                meusFavoritosIds.push(equipeId);
            }
        } catch (error) {
            console.error("Erro ao favoritar:", error);
        }
    };

    // =========================================================
    // 3. FUNÇÃO PRINCIPAL (MAIN)
    // =========================================================
    async function main() {
        try {
            // A. Carregar Usuário e Seus Favoritos
            const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));
            if (currentUser) {
                const favResp = await fetch(`${API_URL}/favoritos?usuarioId=${currentUser.id}`);
                const favData = await favResp.json();
                meusFavoritosIds = favData.map(f => f.equipeId);
            }

            // B. Carregar Dados da API
            const equipesResponse = await fetch(`${API_URL}/equipes`);
            todasEquipes = await equipesResponse.json();

            const noticiasResponse = await fetch(`${API_URL}/noticias?_sort=data_publicacao&_order=desc`);
            const dadosNoticias = await noticiasResponse.json();
            
            // C. Identificar Containers na Tela
            const infoCardsContainer = document.getElementById('info-cards');
            const detalheContainer = document.getElementById('detalhe-container');
            const equipesContainer = document.getElementById('equipes-container');
            const newsCardsContainer = document.getElementById('news-cards-scroller');
            const noticiaDetalheContainer = document.getElementById('noticia-detalhe-container');

            // D. Renderizar Conteúdo
            if (infoCardsContainer) renderInfoCards(todasEquipes); 
            if (equipesContainer) renderEquipesPage(todasEquipes); 
            if (newsCardsContainer) renderNewsCards(dadosNoticias, newsCardsContainer); 
            if (detalheContainer) renderDetalhes(todasEquipes); 
            if (noticiaDetalheContainer) renderNoticiaDetalhe(dadosNoticias, noticiaDetalheContainer);

            // E. Configurar Pesquisa (Search)
            const searchInput = document.getElementById('search-input');
            if (searchInput && equipesContainer) {
                searchInput.addEventListener('input', (e) => {
                    const termo = e.target.value.toLowerCase();
                    const filtradas = todasEquipes.filter(eq => 
                        eq.titulo.toLowerCase().includes(termo) || 
                        eq.descricao.toLowerCase().includes(termo) ||
                        (eq.tecnologias && eq.tecnologias.join(' ').toLowerCase().includes(termo))
                    );
                    renderEquipesPage(filtradas);
                });
            }

            // F. INICIAR SCROLL INTELIGENTE (Aqui está a mágica!)
            // Verifica se os containers existem antes de iniciar
            if (newsCardsContainer) {
                startSmartScroll('news-carousel-container', 'horizontal', 0.6);
            }
            if (infoCardsContainer) {
                startSmartScroll('equipes-carousel-container', 'vertical', 0.6);
            }

        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
        }
    }

    // =========================================================
    // 4. FUNÇÕES DE RENDERIZAÇÃO
    // =========================================================

    function renderInfoCards(dados) {
        const infoCardsContainer = document.getElementById('info-cards');
        if (!infoCardsContainer) return; 

        let allCardsHTML = '';
        // Pega as 5 primeiras equipes para o sidebar
        const dadosLimitados = dados.slice(0, 5); 

        dadosLimitados.forEach(card => {
            const vagasDisponiveis = card.vagas - (card.membros ? card.membros.length : 0);
            const vagasTexto = vagasDisponiveis > 0 ? `${vagasDisponiveis} vagas` : 'Lotada';
            const vagasClasse = vagasDisponiveis > 0 ? 'bg-green-600' : 'bg-red-600';

            const cardElement = `
                <article class="project-card bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col transform hover:-translate-y-1 transition-transform duration-300 flex-shrink-0">
                    <img src="${card.imagem}" alt="${card.titulo}" class="w-full h-32 object-cover">
                    <div class="p-4 flex flex-col flex-grow">
                        <h3 class="font-bold text-gray-100 text-md mb-2">${card.titulo}</h3>
                        <div class="mt-auto flex justify-between items-center">
                            <span class="text-xs font-bold text-white px-2 py-1 rounded ${vagasClasse}">
                                ${vagasTexto}
                            </span>
                            <a href="equipe-chat.html?id=${card.id}" class="text-blue-400 text-sm hover:underline">
                                Ver
                            </a>
                        </div>
                    </div>
                </article>
            `;
            allCardsHTML += cardElement;
        });
        // DUPLICA O CONTEÚDO PARA O LOOP INFINITO
        infoCardsContainer.innerHTML = allCardsHTML + allCardsHTML;
    }
        
    function renderEquipesPage(dados) {
        const equipesContainer = document.getElementById('equipes-container');
        if (!equipesContainer) return; 

        if (dados.length === 0) {
            equipesContainer.innerHTML = '<p class="text-gray-400 col-span-3 text-center py-8">Nenhuma equipe encontrada com estes termos.</p>';
            return;
        }

        equipesContainer.innerHTML = '';
        dados.forEach(card => {
            const vagasDisponiveis = card.vagas - (card.membros ? card.membros.length : 0);
            const vagasTexto = vagasDisponiveis > 0 ? `${vagasDisponiveis} vagas` : 'Equipe cheia';
            const vagasClasse = vagasDisponiveis > 0 ? 'bg-green-600' : 'bg-red-600';

            const tagsHTML = (card.tecnologias || []).map(tag => 
                `<span class="bg-gray-700 text-blue-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${tag}</span>`
            ).join('');

            // Define coração vermelho ou cinza
            const isFav = meusFavoritosIds.includes(card.id);
            const heartClass = isFav ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-400';

            const cardElement = `
                <article class="project-card bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col transform hover:-translate-y-1 transition-transform duration-300 relative border border-gray-700">
                    <img src="${card.imagem}" alt="${card.titulo}" class="w-full h-48 object-cover">
                    
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-bold text-gray-100 text-xl">${card.titulo}</h3>
                            <button onclick="window.toggleFavorito('${card.id}')" class="focus:outline-none p-2 bg-gray-900/50 rounded-full hover:bg-gray-700 transition" title="Favoritar">
                                <i id="fav-icon-${card.id}" class="${heartClass} text-2xl cursor-pointer"></i>
                            </button>
                        </div>

                        <div class="mb-4 flex flex-wrap gap-1">
                            ${tagsHTML}
                        </div>
                        <p class="text-gray-400 text-sm flex-grow line-clamp-3 mb-4">${card.descricao}</p>
                        
                        <div class="mt-auto flex justify-between items-center border-t border-gray-700 pt-4">
                            <span class="text-sm font-bold text-white px-3 py-1 rounded ${vagasClasse}">
                                ${vagasTexto}
                            </span>
                            <a href="equipe-chat.html?id=${card.id}" class="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                                Ver Detalhes
                            </a>
                        </div>
                    </div>
                </article>
            `;
            equipesContainer.innerHTML += cardElement;
        });
    }

    function renderNewsCards(noticias, container) {
        if (!container) return;
        
        let allCardsHTML = ''; 

        noticias.forEach(noticia => {
            const estiloExtra = noticia.categoria === 'Tutorial' 
                ? 'border-2 border-blue-500 shadow-blue-500/20' 
                : 'border border-gray-700';

            const cardElement = `
                <div class="inline-block w-96 whitespace-normal align-top flex-shrink-0">
                    <a href="noticia-detalhe.html?id=${noticia.id}" class="block transform hover:-translate-y-1 transition-transform duration-300 h-full">
                        <article class="bg-gray-800 rounded-lg shadow-md overflow-hidden h-full ${estiloExtra} flex flex-col">
                            <img src="${noticia.imagem}" alt="${noticia.titulo}" class="w-full h-48 object-cover">
                            <div class="p-6 flex flex-col flex-grow">
                                <p class="text-xs text-blue-400 font-bold uppercase tracking-wide mb-2">${noticia.categoria}</p>
                                <h3 class="font-bold text-gray-100 text-xl mb-3 line-clamp-2 leading-tight">${noticia.titulo}</h3>
                                <p class="text-gray-400 text-sm line-clamp-3">${noticia.resumo}</p>
                            </div>
                        </article>
                    </a>
                </div>
            `;
            allCardsHTML += cardElement;
        });
        
        // DUPLICA O CONTEÚDO PARA O LOOP INFINITO HORIZONTAL
        container.innerHTML = allCardsHTML + allCardsHTML;
    }

    function renderDetalhes(equipes) {
        const detalheContainer = document.getElementById('detalhe-container');
        if (!detalheContainer) return;

        const params = new URLSearchParams(window.location.search);
        const itemId = params.get('id');
        
        // Procura nos dados já carregados
        const item = equipes.find(e => e.id == itemId);

        if (item) {
            document.title = `${item.titulo} | Organize`;
            
            const isFav = meusFavoritosIds.includes(item.id);
            const heartClass = isFav ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-400';

            detalheContainer.innerHTML = `
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight">${item.titulo}</h1>
                    <button onclick="window.toggleFavorito('${item.id}')" class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition flex items-center gap-3 font-bold shadow-lg">
                         <i id="fav-icon-detail-${item.id}" class="${heartClass} text-2xl"></i>
                         <span>Favoritar</span>
                    </button>
                </div>
                
                <img src="${item.imagem}" alt="${item.titulo}" class="w-full h-[400px] object-cover rounded-xl shadow-2xl mb-10 border border-gray-700">
                
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2 bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700">
                        <h2 class="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Sobre o Projeto</h2>
                        <p class="text-gray-300 text-lg leading-relaxed whitespace-pre-line">${item.conteudo}</p>
                    </div>

                    <div class="lg:col-span-1 space-y-6">
                        <div class="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
                            <h3 class="text-lg font-bold text-white mb-4">Ficha Técnica</h3>
                            <div class="space-y-3">
                                <p class="text-gray-400"><strong class="text-white block mb-1">Responsável:</strong> ${item.responsavel}</p>
                                <p class="text-gray-400"><strong class="text-white block mb-1">Vagas Totais:</strong> ${item.vagas}</p>
                                <p class="text-gray-400"><strong class="text-white block mb-1">Data Início:</strong> ${new Date(item.data_inicio).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div class="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
                             <h3 class="text-lg font-bold text-white mb-4">Stack Tecnológico</h3>
                             <div class="flex flex-wrap gap-2">
                                ${(item.tecnologias || []).map(t => `<span class="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800">${t}</span>`).join('')}
                             </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            detalheContainer.innerHTML = '<div class="text-center py-20"><h1 class="text-3xl font-bold text-red-500 mb-4">Equipe não encontrada!</h1><a href="equipes.html" class="text-blue-400 underline">Voltar para lista</a></div>';
        }
    }

    async function renderNoticiaDetalhe(noticias, container) {
        if (!container) return;
        const params = new URLSearchParams(window.location.search);
        const itemId = params.get('id');
        
        let item = noticias.find(n => n.id == itemId);
        
        // Fallback: se não achar na lista (ex: link direto), busca na API individualmente
        if(!item && itemId) {
             try {
                const resp = await fetch(`${API_URL}/noticias/${itemId}`);
                if(resp.ok) item = await resp.json();
             } catch(e) { console.error(e); }
        }

        if (item) {
            document.title = item.titulo;
            const dataF = new Date(item.data_publicacao || Date.now()).toLocaleDateString('pt-BR', {day:'numeric', month:'long', year:'numeric'});
            
            container.innerHTML = `
                <div class="max-w-4xl mx-auto">
                    <span class="text-blue-400 font-bold tracking-wide uppercase text-sm mb-2 block">${item.categoria}</span>
                    <h1 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">${item.titulo}</h1>
                    
                    <div class="flex items-center gap-4 text-gray-400 mb-8 border-b border-gray-700 pb-6">
                        <div class="flex flex-col">
                            <span class="text-white font-semibold">Por ${item.author || 'Redação Organize'}</span>
                            <span class="text-sm">${dataF}</span>
                        </div>
                    </div>

                    <img src="${item.imagem}" class="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl mb-10 border border-gray-700">
                    
                    <div class="bg-gray-800 p-8 md:p-12 rounded-xl shadow-md border border-gray-700 prose prose-invert prose-lg max-w-none">
                        ${item.conteudo}
                    </div>
                </div>
            `;
        } else {
            container.innerHTML = '<div class="text-center py-20"><h1 class="text-2xl font-bold text-red-500">Notícia não encontrada!</h1></div>';
        }
    }

    // Inicializa a aplicação
    main();
});