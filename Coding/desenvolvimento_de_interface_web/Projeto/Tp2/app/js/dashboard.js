document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000';
    const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const myTeamsList = document.getElementById('my-teams-list');
    const joinedTeamsList = document.getElementById('joined-teams-list');
    const noMyTeams = document.getElementById('no-my-teams');
    const noJoinedTeams = document.getElementById('no-joined-teams');

    const myNoticiasList = document.getElementById('my-noticias-list');
    const noMyNoticias = document.getElementById('no-my-noticias');

    const tituloEquipes = document.querySelector('section:nth-of-type(1) h2');
    const tituloNoticias = document.querySelector('section:nth-of-type(3) h2');

    async function loadDashboard() {
        try {
            const equipesResponse = await fetch(`${API_URL}/equipes`);
            const allEquipes = await equipesResponse.json();

            const noticiasResponse = await fetch(`${API_URL}/noticias`);
            const allNoticias = await noticiasResponse.json();

            let myTeams = [];
            let joinedTeams = [];
            let myNoticias = [];

            if (currentUser.admin === true) {
                if(tituloEquipes) tituloEquipes.innerText = "Painel Admin: Gerenciar Todas as Equipes";
                if(tituloNoticias) tituloNoticias.innerText = "Painel Admin: Moderar Todas as Notícias";

                myTeams = allEquipes;
                myNoticias = allNoticias;

                joinedTeams = allEquipes.filter(team =>
                    team.membros.some(membro => membro.nome === currentUser.nome) &&
                    team.responsavel !== currentUser.nome
                );

            } else {
                myTeams = allEquipes.filter(team => team.responsavel === currentUser.nome);

                joinedTeams = allEquipes.filter(team =>
                    team.responsavel !== currentUser.nome &&
                    team.membros.some(membro => membro.nome === currentUser.nome)
                );

                myNoticias = allNoticias.filter(noticia => noticia.author === currentUser.nome);
            }

            renderEquipes(myTeams, myTeamsList, noMyTeams);
            renderEquipes(joinedTeams, joinedTeamsList, noJoinedTeams, true);
            renderNoticias(myNoticias, myNoticiasList, noMyNoticias);

        } catch (error) {
            console.error('Erro ao carregar dashboard:', error);
            if(myTeamsList) myTeamsList.innerHTML = `<p class="text-red-400">Erro de conexão com API.</p>`;
        }
    }

    function renderEquipes(equipes, container, noResultsEl, readOnly = false) {
        if (!container) return;

        if (equipes.length === 0) {
            if(noResultsEl) noResultsEl.style.display = 'block';
            return;
        }

        if(noResultsEl) noResultsEl.style.display = 'none';
        container.innerHTML = '';

        equipes.forEach(card => {
            const vagasDisponiveis = card.vagas - (card.membros ? card.membros.length : 0);
            const vagasTexto = vagasDisponiveis > 0 ? `${vagasDisponiveis} vagas` : 'Lotada';
            const vagasClasse = vagasDisponiveis > 0 ? 'bg-green-600' : 'bg-red-600';

            let actionButtons = '';

            if (!readOnly && (currentUser.admin === true || card.responsavel === currentUser.nome)) {
                const labelDelete = currentUser.admin && card.responsavel !== currentUser.nome
                    ? 'Banir (Admin)'
                    : 'Apagar';

                actionButtons = `
                    <div class="mt-4 pt-3 border-t border-gray-700 flex gap-2">
                        <a href="editar_equipe.html?id=${card.id}" class="flex-1 bg-blue-600 text-white text-center text-sm font-bold py-2 rounded hover:bg-blue-700 transition">
                            Editar
                        </a>
                        <button onclick="handleDeleteEquipe('${card.id}')" class="flex-1 bg-red-600 text-white text-sm font-bold py-2 rounded hover:bg-red-700 transition">
                            ${labelDelete}
                        </button>
                    </div>
                `;
            } else {
                actionButtons = `
                    <div class="mt-4 pt-3 border-t border-gray-700">
                        <a href="equipe-chat.html?id=${card.id}" class="block w-full bg-gray-600 text-white text-center text-sm font-bold py-2 rounded hover:bg-gray-500 transition">
                            Acessar Equipe
                        </a>
                    </div>
                `;
            }

            const cardElement = `
                <article id="equipe-${card.id}" class="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-700">
                    <img src="${card.imagem}" alt="${card.titulo}" class="w-full h-40 object-cover">
                    <div class="p-5 flex flex-col flex-grow">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-bold text-white text-lg leading-tight">${card.titulo}</h3>
                            <span class="text-xs font-bold text-white px-2 py-1 rounded ${vagasClasse} whitespace-nowrap ml-2">
                                ${vagasTexto}
                            </span>
                        </div>
                        <p class="text-gray-400 text-sm flex-grow line-clamp-3 mb-4">${card.descricao}</p>

                        ${actionButtons}
                    </div>
                </article>
            `;
            container.innerHTML += cardElement;
        });
    }

    function renderNoticias(noticias, container, noResultsEl) {
        if (!container) return;

        if (noticias.length === 0) {
            if(noResultsEl) noResultsEl.style.display = 'block';
            return;
        }

        if(noResultsEl) noResultsEl.style.display = 'none';
        container.innerHTML = '';

        noticias.forEach(card => {
            const isOwner = card.author === currentUser.nome;
            const isAdmin = currentUser.admin === true;

            let botoesAcao = '';

            if (isOwner || isAdmin) {
                const labelDelete = isAdmin && !isOwner ? 'Censurar (Admin)' : 'Apagar';

                botoesAcao = `
                    <div class="mt-4 pt-4 border-t border-gray-700 flex gap-3">
                        <a href="editar_noticia.html?id=${card.id}" class="flex-1 bg-blue-500 text-white text-center font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                            Editar
                        </a>
                        <button onclick="handleDeleteNoticia('${card.id}')" class="flex-1 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
                            ${labelDelete}
                        </button>
                    </div>
                `;
            }

            const cardElement = `
                <article id="noticia-${card.id}" class="bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col border border-gray-700">
                    <img src="${card.imagem}" alt="${card.titulo}" class="w-full h-48 object-cover">
                    <div class="p-6 flex flex-col flex-grow">
                        <p class="text-sm text-blue-400 font-semibold mb-1">${card.categoria}</p>
                        <h3 class="font-bold text-gray-100 text-xl mb-2 line-clamp-2">${card.titulo}</h3>
                        <p class="text-gray-400 text-sm flex-grow line-clamp-3">${card.resumo}</p>
                        <p class="text-xs text-gray-500 mt-2">Por: ${card.author || 'Desconhecido'}</p>

                        ${botoesAcao}
                    </div>
                </article>
            `;
            container.innerHTML += cardElement;
        });
    }

    window.handleDeleteNoticia = async function(id) {
        if (!confirm('Tem certeza que deseja apagar esta notícia permanentemente?')) return;

        try {
            const response = await fetch(`${API_URL}/noticias/${id}`, { method: 'DELETE' });
            if (response.ok) {
                const el = document.getElementById(`noticia-${id}`);
                if(el) el.remove();
                alert('Notícia removida com sucesso.');
            } else {
                throw new Error('Erro ao apagar');
            }
        } catch (error) {
            console.error(error);
            alert('Não foi possível apagar a notícia.');
        }
    }

    window.handleDeleteEquipe = async function(id) {
        if (!confirm('Tem certeza? Isso apagará a equipe e todo o chat associado.')) return;

        try {
            const response = await fetch(`${API_URL}/equipes/${id}`, { method: 'DELETE' });
            if (response.ok) {
                const el = document.getElementById(`equipe-${id}`);
                if(el) el.remove();
                alert('Equipe removida com sucesso.');
            } else {
                throw new Error('Erro ao apagar');
            }
        } catch (error) {
            console.error(error);
            alert('Não foi possível apagar a equipe.');
        }
    }

    loadDashboard();
});