document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro-equipe');
    const feedbackMessage = document.getElementById('feedback-message');
    const API_URL = 'http://localhost:3000';

    // Pega o usuário logado para adicionar como membro
    const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // 1. Coletar os dados do formulário
        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const conteudo = document.getElementById('conteudo').value;
        const imagem = document.getElementById('imagem').value;
        const responsavel = document.getElementById('responsavel').value;
        const vagas = parseInt(document.getElementById('vagas').value, 10);
        
        // Converte a string "Node.js, React" em um array ["Node.js", "React"]
        const tecnologias = document.getElementById('tecnologias').value
            .split(',') // Divide a string pela vírgula
            .map(tech => tech.trim()) // Remove espaços em branco (ex: " React" vira "React")
            .filter(tech => tech.length > 0); // Remove itens vazios

        // 2. Montar o objeto JSON para a API
        const novaEquipe = {
            titulo: titulo,
            descricao: descricao,
            imagem: imagem,
            conteudo: conteudo,
            responsavel: responsavel,
            data_inicio: new Date().toISOString().split('T')[0], // Data de hoje, ex: "2025-11-07"
            tecnologias: tecnologias,
            vagas: vagas,
            membros: [
                // Adiciona o usuário logado (ou o responsável) como o primeiro membro
                { "nome": currentUser ? currentUser.name : responsavel }
            ]
        };

        // 3. Enviar para a API (o "C" do CRUD)
        try {
            const response = await fetch(`${API_URL}/equipes`, {
                method: 'POST', // Método de criação
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaEquipe), // Converte o objeto JS em string JSON
            });

            if (response.ok) {
                // Sucesso!
                feedbackMessage.innerHTML = `<p class="text-green-400">Equipe "${titulo}" criada com sucesso!</p>`;
                form.reset(); // Limpa o formulário
                // Redireciona o usuário após 2 segundos
                setTimeout(() => {
                    window.location.href = 'equipes.html'; // Leva para a página de equipes
                }, 2000);
            } else {
                // Erro do servidor
                throw new Error('Falha ao criar equipe. O servidor respondeu com um erro.');
            }

        } catch (error) {
            console.error('Erro no cadastro:', error);
            feedbackMessage.innerHTML = `<p class="text-red-400">Erro ao conectar com a API. Verifique se o json-server está rodando.</p>`;
        }
    });
}); 