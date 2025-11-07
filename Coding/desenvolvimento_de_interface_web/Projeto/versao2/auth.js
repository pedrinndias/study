document.addEventListener('DOMContentLoaded', () => {
    // Formulários
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Elementos da página
    const dashboardUserWelcome = document.getElementById('dashboard-user-welcome');
    
    // Novos seletores para o menu de navegação
    const centralNavLinks = document.getElementById('central-nav-links');
    const rightNavAction = document.getElementById('right-nav-action');

    // Lógica de Registo
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            
            const users = JSON.parse(localStorage.getItem('organize_users')) || [];
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert('Este email já está registado. Tente fazer login.');
            } else {
                users.push({ name, email, password });
                localStorage.setItem('organize_users', JSON.stringify(users));
                alert('Conta criada com sucesso! Pode agora fazer login.');
                registerForm.reset();
            }
        });
    }

    // Lógica de Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            const users = JSON.parse(localStorage.getItem('organize_users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                sessionStorage.setItem('organize_currentUser', JSON.stringify(user));
                window.location.href = 'dashboard.html';
            } else {
                alert('Email ou senha incorretos.');
            }
        });
    }

    // Proteger Rotas e Atualizar UI
    function checkLoginStatus() {
        const currentUser = JSON.parse(sessionStorage.getItem('organize_currentUser'));

        if (document.body.id === 'dashboard-page' && !currentUser) {
            window.location.href = 'login.html';
            return;
        }
        
        // Verifica se os elementos de navegação existem antes de modificá-los
        if (!centralNavLinks || !rightNavAction) return;

        if (currentUser) {
            // Utilizador LOGADO
            centralNavLinks.innerHTML = `
                <a href="dashboard.html" class="text-gray-300 hover:text-blue-400 transition duration-300">Meu Dashboard</a>
                <a href="equipes.html" class="text-gray-300 hover:text-blue-400 transition duration-300">Explorar Equipes</a>
                <a href="#" id="logout-button" class="text-gray-300 hover:text-blue-400 transition duration-300">Sair</a>
            `;
            
            rightNavAction.innerHTML = `
                <div class="text-white flex items-center">
                    <i class="fas fa-user-circle mr-2 text-lg"></i>
                    <span>Olá, ${currentUser.name}!</span>
                </div>
            `;

            const logoutButton = document.getElementById('logout-button');
            if (logoutButton) {
                logoutButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    sessionStorage.removeItem('organize_currentUser');
                    window.location.href = 'index.html';
                });
            }
            
            if (dashboardUserWelcome) {
                dashboardUserWelcome.textContent = `Olá, ${currentUser.name}!`;
            }

        } else {
            // Utilizador DESLOGADO
            centralNavLinks.innerHTML = `
                <a href="index.html" class="text-gray-300 hover:text-blue-400 transition duration-300">Início</a>
                <a href="sobre.html" class="text-gray-300 hover:text-blue-400 transition duration-300">Sobre Nós</a>
                <a href="equipes.html" class="text-gray-300 hover:text-blue-400 transition duration-300">Equipes</a>
                <a href="#" class="text-gray-300 hover:text-blue-400 transition duration-300">Contato</a>
            `;
            
            rightNavAction.innerHTML = `
                 <a href="login.html" class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center">
                    <i class="fas fa-user-plus mr-2"></i>Participe
                </a>
            `;
        }
    }
    
    checkLoginStatus();
});