document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro-noticia');
    const feedbackMessage = document.getElementById('feedback-message');
    const API_URL = 'http://localhost:3000';

    const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const categoria = document.getElementById('categoria').value;
        const resumo = document.getElementById('resumo').value;
        const conteudo = document.getElementById('conteudo').value;
        const imagem = document.getElementById('imagem').value;

        const novaNoticia = {
            titulo: titulo,
            categoria: categoria,
            resumo: resumo,
            conteudo: conteudo,
            imagem: imagem,
            author: currentUser ? currentUser.name : "Anônimo",
            data_publicacao: new Date().toISOString()
        };

        try {
            const response = await fetch(`${API_URL}/noticias`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novaNoticia),
            });

            if (response.ok) {
                feedbackMessage.innerHTML = `<p class="text-green-400">Notícia "${titulo}" publicada com sucesso!</p>`;
                form.reset();
                setTimeout(() => { window.location.href = 'index.html'; }, 2000);
            } else {
                throw new Error('Falha ao criar notícia.');
            }
        } catch (error) {
            console.error('Erro no cadastro:', error);
            feedbackMessage.innerHTML = `<p class="text-red-400">Erro ao conectar com a API.</p>`;
        }
    });
});