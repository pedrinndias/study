document.addEventListener('DOMContentLoaded', () => {
    // Seletores de elementos da página
    const teamTitleEl = document.getElementById('team-title');
    const teamDescriptionEl = document.getElementById('team-description');
    const membersListEl = document.getElementById('members-list');
    const chatWindowEl = document.getElementById('chat-window');
    const messageFormEl = document.getElementById('message-form');
    const messageInputEl = document.getElementById('message-input');
    const chatAreaEl = document.getElementById('chat-area');
    const loginPromptEl = document.getElementById('login-prompt');

    // Obter ID da equipe pela URL
    const params = new URLSearchParams(window.location.search);
    const teamId = params.get('id');

    // Obter usuário atual da sessão
    const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));

    // Função principal
    async function init() {
        if (!teamId) {
            teamTitleEl.textContent = "Equipe não encontrada!";
            return;
        }

        const teamData = await getTeamData(teamId);
        if (!teamData) {
            teamTitleEl.textContent = "Erro ao carregar dados da equipe.";
            return;
        }
        
        displayTeamDetails(teamData);
        displayMembers(teamData.membros);
        
        // Verifica se o usuário está logado
        if (currentUser) {
            chatAreaEl.style.display = 'block';
            loginPromptEl.style.display = 'none';
            loadMessages();
        } else {
            chatAreaEl.style.display = 'none';
            loginPromptEl.style.display = 'block';
            displayLoginPromptMessage();
        }
    }

    // Busca os dados de todas as equipes e encontra a correta
    async function getTeamData(id) {
        try {
            const response = await fetch('dados.json');
            const allTeams = await response.json();
            return allTeams.find(team => team.id == id);
        } catch (error) {
            console.error("Falha ao buscar dados.json:", error);
            return null;
        }
    }

    // Exibe os detalhes da equipe no topo da página
    function displayTeamDetails(team) {
        document.title = `${team.titulo} | Organize`;
        teamTitleEl.textContent = team.titulo;
        teamDescriptionEl.textContent = team.conteudo;
    }
    
    // Exibe a lista de membros
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
    
    // Carrega mensagens do localStorage (simulação de banco de dados)
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem(`organize_chat_team_${teamId}`)) || [];
        chatWindowEl.innerHTML = '';
        messages.forEach(msg => {
            appendMessage(msg);
        });
        chatWindowEl.scrollTop = chatWindowEl.scrollHeight; // Rola para a última mensagem
    }

    // Adiciona uma mensagem à janela do chat
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

    // Salva uma nova mensagem no localStorage
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

    // Exibe uma mensagem de exemplo para usuários deslogados
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

    // Event listener para o formulário de envio
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

    init();
});