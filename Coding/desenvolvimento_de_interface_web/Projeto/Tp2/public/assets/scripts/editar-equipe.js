document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro-equipe');
    const feedbackMessage = document.getElementById('feedback-message');
    const API_URL = 'http://localhost:3000';

    const params = new URLSearchParams(window.location.search);
    const teamId = params.get('id');

    if (!teamId) {
        window.location.href = 'equipes.html';
        return;
    }

    async function carregarDadosEquipe() {
        try {
            const response = await fetch(`${API_URL}/equipes/${teamId}`);
            if (!response.ok) throw new Error('Equipe não encontrada.');

            const equipe = await response.json();

            document.getElementById('titulo').value = equipe.titulo;
            document.getElementById('descricao').value = equipe.descricao;
            document.getElementById('conteudo').value = equipe.conteudo;
            document.getElementById('imagem').value = equipe.imagem;
            document.getElementById('responsavel').value = equipe.responsavel;
            document.getElementById('vagas').value = equipe.vagas;
            document.getElementById('tecnologias').value = equipe.tecnologias.join(', ');

        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            feedbackMessage.innerHTML = `<p class="text-red-400">Não foi possível carregar os dados da equipe.</p>`;
        }
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const tecnologias = document.getElementById('tecnologias').value
            .split(',')
            .map(tech => tech.trim())
            .filter(tech => tech.length > 0);

        const dadosAtualizados = {
            titulo: document.getElementById('titulo').value,
            descricao: document.getElementById('descricao').value,
            conteudo: document.getElementById('conteudo').value,
            imagem: document.getElementById('imagem').value,
            responsavel: document.getElementById('responsavel').value,
            vagas: parseInt(document.getElementById('vagas').value, 10),
            tecnologias: tecnologias,
        };

        try {
            const response = await fetch(`${API_URL}/equipes/${teamId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosAtualizados),
            });

            if (response.ok) {
                feedbackMessage.innerHTML = `<p class="text-green-400">Equipe atualizada com sucesso!</p>`;
                setTimeout(() => {
                    window.location.href = `equipe-chat.html?id=${teamId}`;
                }, 2000);
            } else {
                throw new Error('Falha ao atualizar equipe.');
            }
        } catch (error) {
            console.error('Erro ao salvar:', error);
            feedbackMessage.innerHTML = `<p class="text-red-400">Erro ao salvar. Verifique o servidor.</p>`;
        }
    });

    carregarDadosEquipe();
});