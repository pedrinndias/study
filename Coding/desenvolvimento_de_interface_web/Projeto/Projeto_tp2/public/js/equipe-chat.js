document.addEventListener('DOMContentLoaded', () => {
    const teamTitleEl = document.getElementById('team-title');
    const teamDescriptionEl = document.getElementById('team-description');
    const membersListEl = document.getElementById('members-list');
    const chatWindowEl = document.getElementById('chat-window');
    const messageFormEl = document.getElementById('message-form');
    const messageInputEl = document.getElementById('message-input');
    const chatAreaEl = document.getElementById('chat-area');
    const loginPromptEl = document.getElementById('login-prompt');
    const API_URL = 'http://localhost:3000';

    const params = new URLSearchParams(window.location.search);
    const teamId = params.get('id');

    const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));

    async function init() {
            if (!teamId) {
                teamTitleEl.textContent = "Equipe não encontrada!";
                return;
            }

            const teamData = await getTeamData(teamId);
            if (!teamData || !teamData.id) {
                teamTitleEl.textContent = "Equipe não encontrada ou já excluída.";
                teamDescriptionEl.textContent = "Esta equipe pode ter sido removida.";
                document.getElementById('chat-area')?.remove();
                document.getElementById('members-list')?.remove();
                document.getElementById('admin-actions')?.remove();
                return;
            }
            
            displayTeamDetails(teamData);
            displayMembers(teamData.membros);
            
            const adminActionsEl = document.getElementById('admin-actions');

            if (currentUser) {
                chatAreaEl.style.display = 'block';
                loginPromptEl.style.display = 'none';
                loadMessages(); 

                if (adminActionsEl) {
                    adminActionsEl.style.display = 'block';
                }

                const deleteButton = document.getElementById('delete-equipe-btn');
                if (deleteButton) {
                    deleteButton.addEventListener('click', handleDeleteEquipe);
                }

                const editLink = document.getElementById('edit-equipe-link');
                if (editLink) {
                    editLink.href = `editar_equipe.html?id=${teamId}`;
                }

            } else {
                chatAreaEl.style.display = 'none';
                loginPromptEl.style.display = 'block';
                displayLoginPromptMessage(); 

                if (adminActionsEl) {
                    adminActionsEl.style.display = 'none';
                }
            }

            if (teamData.github_repo) {
                loadGithubCommits(teamData.github_repo);
            } else {
                document.getElementById('github-feed')?.remove();
            }
        }

        async function getTeamData(id) {
            try {
                const response = await fetch(`http://localhost:3000/equipes/${id}`);
                const teamData = await response.json();
                return teamData;
            } catch (error) {
                console.error("Falha ao buscar dados da equipe:", error);
                return null;
            }
        }

        function displayTeamDetails(team) {
            document.title = `${team.titulo} | Organize`;
            teamTitleEl.textContent = team.titulo;
            teamDescriptionEl.textContent = team.conteudo;
        }
        
        function displayMembers(members) {
            membersListEl.innerHTML = '';
            members.forEach(member => {
                const memberEl = `
                    <div class="flex items-center">
                        <i class="fas fa-user-circle text-gray-400 text-2xl mr-3"></i>
                        <span class="text-gray-300">${member.nome}</span>
                    </div>
                `;
                membersListEl.innerHTML += memberEl;
            });
        }
        
        function loadMessages() {
            const messages = JSON.parse(localStorage.getItem(`organize_chat_team_${teamId}`)) || [];
            chatWindowEl.innerHTML = '';
            messages.forEach(msg => {
                appendMessage(msg);
            });
            chatWindowEl.scrollTop = chatWindowEl.scrollHeight; 
        }

        function appendMessage(msg) {
            const isCurrentUser = currentUser && msg.user === currentUser.name;
            const messageAlignment = isCurrentUser ? 'justify-end' : 'justify-start';
            const messageBubbleColor = isCurrentUser ? 'bg-blue-600' : 'bg-gray-700';
            
            const messageEl = `
                <div class="flex ${messageAlignment} mb-4">
                    <div class="${messageBubbleColor} rounded-lg p-3 max-w-lg">
                        <p class="text-sm text-white">${msg.text}</p>
                        <p class="text-xs text-gray-400 text-right mt-1">${msg.user} - ${new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    </div>
                </div>
            `;
            chatWindowEl.innerHTML += messageEl;
        }

        function saveMessage(text) {
            const messages = JSON.parse(localStorage.getItem(`organize_chat_team_${teamId}`)) || [];
            const newMessage = {
                user: currentUser.name,
                text: text,
                timestamp: new Date().toISOString()
            };
            messages.push(newMessage);
            localStorage.setItem(`organize_chat_team_${teamId}`, JSON.stringify(messages));
            return newMessage;
        }

        function displayLoginPromptMessage() {
            chatWindowEl.innerHTML = `
                <div class="flex justify-start mb-4">
                    <div class="bg-gray-700 rounded-lg p-3 max-w-lg">
                        <p class="text-sm text-white">Olá! Este é o chat da equipe. Faça login para participar da conversa.</p>
                        <p class="text-xs text-gray-400 text-right mt-1">Sistema - Agora</p>
                    </div>
                </div>
            `;
        }

        if (messageFormEl) {
            messageFormEl.addEventListener('submit', (e) => {
                e.preventDefault();
                const messageText = messageInputEl.value.trim();
                if (messageText && currentUser) {
                    const newMessage = saveMessage(messageText);
                    appendMessage(newMessage);
                    messageInputEl.value = '';
                    chatWindowEl.scrollTop = chatWindowEl.scrollHeight;
                }
            });
        }

        async function handleDeleteEquipe() {
        if (!confirm(`Tem certeza que deseja excluir a equipe "${teamTitleEl.textContent}"?\n\nEsta ação não pode ser desfeita.`)) {
            return; 
        }

        try {
            const response = await fetch(`${API_URL}/equipes/${teamId}`, {
                method: 'DELETE' 
            });

            if (response.ok) {
                alert('Equipe excluída com sucesso!');
                window.location.href = 'equipes.html';
            } else {
                throw new Error('Falha ao excluir a equipe.');
            }

        } catch (error) {
            console.error('Erro ao deletar:', error);
            alert('Não foi possível excluir a equipe. Verifique a conexão com a API.');
        }
    }

async function loadGithubCommits(repoUrl) {
    const commitListEl = document.getElementById('github-commits-list');
    try {
        const response = await fetch(`https://api.github.com/repos/${repoUrl}/commits?per_page=5`);
        
        if (!response.ok) {
            throw new Error(`Erro do GitHub: ${response.statusText}`);
        }
        
        const commits = await response.json();
        
        commitListEl.innerHTML = ''; 
        
        commits.forEach(item => {
            renderCommit(item, commitListEl);
        });

    } catch (error) {
        console.error('Erro ao buscar commits do GitHub:', error);
        commitListEl.innerHTML = `<p class="text-red-400 text-sm">Não foi possível carregar os commits.</p>`;
    }
}

function renderCommit(item, container) {
    const message = item.commit.message.length > 50 
        ? `${item.commit.message.substring(0, 50)}...` 
        : item.commit.message;
        
    const commitDate = new Date(item.commit.author.date).toLocaleDateString('pt-BR', {day: '2-digit', month: 'short'});

    const commitElement = `
        <div class="bg-gray-700 p-3 rounded-lg">
            <a href="${item.html_url}" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-300 hover:underline break-words">
                ${message}
            </a>
            <div class="text-xs text-gray-400 mt-1">
                <span>por <strong>${item.commit.author.name}</strong></span>
                <span class="float-right">${commitDate}</span>
            </div>
        </div>
    `;
    container.innerHTML += commitElement;
}   

        init();
});