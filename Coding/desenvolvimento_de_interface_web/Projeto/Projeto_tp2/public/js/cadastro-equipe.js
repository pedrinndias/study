document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro-equipe');
    const feedbackMessage = document.getElementById('feedback-message');
    const API_URL = 'http://localhost:3000';

    const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const conteudo = document.getElementById('conteudo').value;
        const imagem = document.getElementById('imagem').value;
        const responsavel = document.getElementById('responsavel').value;
        const vagas = parseInt(document.getElementById('vagas').value, 10);
        
        const tecnologias = document.getElementById('tecnologias').value
            .split(',') 
            .map(tech => tech.trim()) 
            .filter(tech => tech.length > 0); 

        const novaEquipe = {
            titulo: titulo,
            descricao: descricao,
            imagem: imagem,
            conteudo: conteudo,
            responsavel: responsavel,
            data_inicio: new Date().toISOString().split('T')[0], 
            tecnologias: tecnologias,
            vagas: vagas,
            membros: [
                { "nome": currentUser ? currentUser.name : responsavel }
            ]
        };

        try {
            const response = await fetch(`${API_URL}/equipes`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaEquipe), 
            });

            if (response.ok) {
                feedbackMessage.innerHTML = `<p class="text-green-400">Equipe "${titulo}" criada com sucesso!</p>`;
                form.reset(); 
                setTimeout(() => {
                    window.location.href = 'equipes.html'; 
                }, 2000);
            } else {
                throw new Error('Falha ao criar equipe. O servidor respondeu com um erro.');
            }

        } catch (error) {
            console.error('Erro no cadastro:', error);
            feedbackMessage.innerHTML = `<p class="text-red-400">Erro ao conectar com a API. Verifique se o json-server está rodando.</p>`;
        }
    });
});