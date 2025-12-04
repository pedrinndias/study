document.addEventListener('DOMContentLoaded', async () => {
    const API_URL = 'http://localhost:3000';
    const params = new URLSearchParams(window.location.search);
    const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));
    
    // Se não tiver ID na URL, tenta abrir o perfil do próprio usuário logado
    let profileId = params.get('id');
    if (!profileId && currentUser) {
        profileId = currentUser.id;
    }

    if (!profileId) {
        alert("Usuário não encontrado.");
        window.location.href = 'index.html';
        return;
    }

    // Elementos da tela
    const elName = document.getElementById('profile-name');
    const elRole = document.getElementById('profile-role');
    const elBio = document.getElementById('profile-bio');
    const elAvatar = document.getElementById('profile-avatar');
    const elSocial = document.getElementById('social-links');
    const btnEdit = document.getElementById('btn-edit-profile');

    // Elementos do Modal
    const modal = document.getElementById('edit-modal');
    const formEdit = document.getElementById('edit-profile-form');

    try {
        const response = await fetch(`${API_URL}/usuarios/${profileId}`);
        if (!response.ok) throw new Error("Usuário não existe");
        
        const user = await response.json();

        // 1. Preencher dados na tela
        document.title = `Perfil de ${user.nome} | Organize`;
        elName.textContent = user.nome;
        elRole.textContent = user.cargo || "Membro da Comunidade";
        elBio.textContent = user.bio || "Sem biografia.";
        elAvatar.src = user.avatar || `https://ui-avatars.com/api/?name=${user.nome}&background=random`;

        // 2. Redes Sociais
        let socialHTML = '';
        if (user.github) {
            socialHTML += `<a href="${user.github}" target="_blank" class="text-gray-400 hover:text-white transition"><i class="fab fa-github text-3xl"></i></a>`;
        }
        if (user.linkedin) {
            socialHTML += `<a href="${user.linkedin}" target="_blank" class="text-gray-400 hover:text-white transition"><i class="fab fa-linkedin text-3xl"></i></a>`;
        }
        elSocial.innerHTML = socialHTML;

        // 3. Verificar se sou o dono do perfil para mostrar botão de editar
        if (currentUser && currentUser.id === user.id) {
            btnEdit.classList.remove('hidden');
            
            // Preencher o modal com os dados atuais
            document.getElementById('edit-cargo').value = user.cargo || "";
            document.getElementById('edit-bio').value = user.bio || "";
            document.getElementById('edit-avatar').value = user.avatar || "";
            document.getElementById('edit-github').value = user.github || "";

            // Salvar Edição
            formEdit.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const updatedData = {
                    cargo: document.getElementById('edit-cargo').value,
                    bio: document.getElementById('edit-bio').value,
                    avatar: document.getElementById('edit-avatar').value,
                    github: document.getElementById('edit-github').value
                };

                // Patch atualiza só os campos enviados, mantém email/senha/admin intactos
                await fetch(`${API_URL}/usuarios/${user.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData)
                });

                // Atualiza sessão local se for o próprio usuário (para manter consistência)
                const newSession = { ...currentUser, ...updatedData };
                sessionStorage.setItem('organize_currentUser', JSON.stringify(newSession));

                alert("Perfil atualizado!");
                location.reload();
            });
        }

    } catch (error) {
        console.error(error);
        elName.textContent = "Erro ao carregar perfil.";
    }

    // Funções do Modal (Globais)
    window.openEditModal = () => modal.classList.remove('hidden', 'flex');
    window.openEditModal = () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    window.closeEditModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});