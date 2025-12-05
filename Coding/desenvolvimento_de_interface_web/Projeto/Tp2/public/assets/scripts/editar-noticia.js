document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro-noticia');
    const feedbackMessage = document.getElementById('feedback-message');
    const API_URL = 'http://localhost:3000';

    const params = new URLSearchParams(window.location.search);
    const noticiaId = params.get('id');

    if (!noticiaId) {
        window.location.href = 'index.html';
        return;
    }

    async function carregarDadosNoticia() {
        try {
            const response = await fetch(`${API_URL}/noticias/${noticiaId}`);
            if (!response.ok) throw new Error('Notícia não encontrada.');

            const noticia = await response.json();

            document.getElementById('titulo').value = noticia.titulo;
            document.getElementById('categoria').value = noticia.categoria;
            document.getElementById('resumo').value = noticia.resumo;
            document.getElementById('conteudo').value = noticia.conteudo;
            document.getElementById('imagem').value = noticia.imagem;

        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            feedbackMessage.innerHTML = `<p class="text-red-400">Não foi possível carregar a notícia.</p>`;
        }
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dadosAtualizados = {
            titulo: document.getElementById('titulo').value,
            categoria: document.getElementById('categoria').value,
            resumo: document.getElementById('resumo').value,
            conteudo: document.getElementById('conteudo').value,
            imagem: document.getElementById('imagem').value,
        };

        try {
            const response = await fetch(`${API_URL}/noticias/${noticiaId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosAtualizados),
            });

            if (response.ok) {
                feedbackMessage.innerHTML = `<p class="text-green-400">Notícia atualizada com sucesso!</p>`;
                setTimeout(() => {
                    window.location.href = `dashboard.html`;
                }, 2000);
            } else {
                throw new Error('Falha ao atualizar notícia.');
            }
        } catch (error) {
            console.error('Erro ao salvar:', error);
            feedbackMessage.innerHTML = `<p class="text-red-400">Erro ao salvar. Verifique o servidor.</p>`;
        }
    });

    carregarDadosNoticia();
});