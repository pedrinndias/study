document.addEventListener('DOMContentLoaded', () => {
    
    const API_URL = 'http://localhost:3000';

    async function carregarEstatisticasNoticias() {
        try {
            const response = await fetch(`${API_URL}/noticias`);
            if (!response.ok) {
                throw new Error('Falha ao buscar dados das notícias.');
            }
            const allNoticias = await response.json();

            const contagemCategorias = allNoticias.reduce((acc, noticia) => {
                const categoria = noticia.categoria || "Sem Categoria";
                acc[categoria] = (acc[categoria] || 0) + 1;
                return acc;
            }, {});

            const labels = Object.keys(contagemCategorias);
            const data = Object.values(contagemCategorias);

            renderizarGrafico(labels, data);

        } catch (error) {
            console.error('Erro ao carregar estatísticas:', error);
            const chartContainer = document.getElementById('noticiasPorCategoriaChart');
            if (chartContainer) {
                chartContainer.parentElement.innerHTML = '<p class="text-red-400">Não foi possível carregar o gráfico.</p>';
            }
        }
    }


    function renderizarGrafico(labels, data) {
        const ctx = document.getElementById('noticiasPorCategoriaChart').getContext('2d');
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Nº de Notícias',
                    data: data,
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#e2e8f0'
                        },
                        grid: {
                            color: '#4a5568'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#e2e8f0'
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#e2e8f0'
                        }
                    }
                }
            }
        });
    }
    carregarEstatisticasNoticias();
});