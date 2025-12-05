document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const dashboardUserWelcome = document.getElementById('dashboard-user-welcome');
    const centralNavLinks = document.getElementById('central-nav-links');
    const rightNavAction = document.getElementById('right-nav-action');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    const API_URL = 'http://localhost:3000';

    if (mobileMenuBtn && centralNavLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            centralNavLinks.classList.toggle('hidden');

            if (!centralNavLinks.classList.contains('hidden')) {
                centralNavLinks.classList.add('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-gray-800', 'p-6', 'border-t', 'border-gray-700', 'shadow-xl', 'z-50');
                centralNavLinks.classList.remove('md:flex');
            } else {
                centralNavLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-gray-800', 'p-6', 'border-t', 'border-gray-700', 'shadow-xl', 'z-50');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            try {
                const response = await fetch(`${API_URL}/usuarios?email=${email}&senha=${password}`);
                const users = await response.json();

                if (users.length > 0) {
                    const user = users[0];
                    sessionStorage.setItem('organize_currentUser', JSON.stringify(user));
                    window.location.href = 'index.html';
                } else {
                    alert('Email ou senha incorretos.');
                }
            } catch (error) {
                console.error("Erro no login:", error);
                alert("Erro ao conectar com o servidor.");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            try {
                const checkUser = await fetch(`${API_URL}/usuarios?email=${email}`);
                const existing = await checkUser.json();

                if (existing.length > 0) {
                    alert('Este email já está registrado. Tente fazer login.');
                    return;
                }

                const newUser = {
                    nome: name,
                    email: email,
                    senha: password,
                    admin: false,
                    avatar: `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`,
                    cargo: "Membro da Comunidade",
                    bio: "Olá! Sou novo no Organize e estou ansioso para colaborar.",
                    github: "",
                    linkedin: "",
                    data_cadastro: new Date().toISOString()
                };

                const response = await fetch(`${API_URL}/usuarios`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)
                });

                if (response.ok) {
                    alert('Conta criada com sucesso! Faça login para continuar.');
                    window.location.href = 'login.html';
                } else {
                    throw new Error('Falha ao salvar usuário.');
                }

            } catch (error) {
                console.error("Erro no registro:", error);
                alert("Erro ao criar conta. Verifique a API.");
            }
        });
    }

    function checkLoginStatus() {
        const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));

        const paginasProtegidas = ['dashboard-page', 'favoritos-page'];
        if (paginasProtegidas.includes(document.body.id) && !currentUser) {
            window.location.href = 'login.html';
            return;
        }

        if (!centralNavLinks || !rightNavAction) return;

        if (currentUser) {
            const adminBadge = currentUser.admin === true
                ? `<span class="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded ml-2 uppercase tracking-wider border border-red-400 shadow-sm" title="Administrador do Sistema">Admin</span>`
                : '';

            const createButtons = `
                <div class="flex flex-col md:flex-row md:items-center md:border-l md:border-gray-600 md:pl-4 md:ml-4 gap-4 mt-4 md:mt-0">
                    <a href="cadastro_equipe.html" class="text-green-400 font-bold hover:text-green-300 transition duration-300 flex items-center text-sm" title="Criar Nova Equipe">
                         <i class="fas fa-plus mr-1"></i> Equipe
                    </a>
                    <a href="cadastro_noticia.html" class="text-yellow-400 font-bold hover:text-yellow-300 transition duration-300 flex items-center text-sm" title="Publicar Notícia">
                         <i class="fas fa-newspaper mr-1"></i> Notícia
                    </a>
                </div>
            `;

            centralNavLinks.innerHTML = `
                <a href="dashboard.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Dashboard</a>
                <a href="equipes.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Explorar</a>
                <a href="favoritos.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Favoritos</a>
                <a href="estatisticas.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Estatísticas</a>
                <a href="sobre.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Sobre</a>
                ${createButtons}
            `;

            rightNavAction.innerHTML = `
                <div class="flex items-center gap-4">
                    <div class="flex flex-col items-end leading-tight hidden md:flex">
                        <span class="text-white text-sm font-semibold">Olá, ${currentUser.nome.split(' ')[0]}</span>
                        ${adminBadge}
                    </div>

                    <a href="perfil.html?id=${currentUser.id}" class="text-gray-400 hover:text-white transition transform hover:scale-110" title="Meu Perfil">
                        <img src="${currentUser.avatar || 'https://ui-avatars.com/api/?background=random'}" class="w-8 h-8 rounded-full border border-gray-600 object-cover">
                    </a>

                    <a href="#" id="logout-button" class="text-gray-500 hover:text-red-400 text-lg ml-2" title="Sair">
                        <i class="fas fa-sign-out-alt"></i>
                    </a>
                </div>
            `;

            document.getElementById('logout-button')?.addEventListener('click', (e) => {
                e.preventDefault();
                sessionStorage.removeItem('organize_currentUser');
                window.location.href = 'index.html';
            });

            if (dashboardUserWelcome) {
                dashboardUserWelcome.textContent = `Painel de Controle de ${currentUser.nome}`;
            }

        } else {
            centralNavLinks.innerHTML = `
                <a href="index.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Início</a>
                <a href="sobre.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Sobre</a>
                <a href="equipes.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Equipes</a>
                <a href="estatisticas.html" class="text-gray-300 hover:text-blue-400 transition duration-300 text-sm font-medium block py-2 md:py-0">Estatísticas</a>
            `;

            rightNavAction.innerHTML = `
                 <a href="login.html" class="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center shadow-lg text-sm font-bold">
                    <i class="fas fa-user mr-2"></i>Entrar
                </a>
            `;
        }
    }

    checkLoginStatus();
});