const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');
const middlewares = jsonServer.defaults();

// CORS Headers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Usar middlewares padrão do json-server
server.use(middlewares);

// Middleware para servir arquivos estáticos ANTES da API
server.use((req, res, next) => {
  const filePath = path.join(__dirname, 'public', req.path);
  
  // Verifica se é um arquivo estático
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return res.sendFile(filePath);
  }
  
  next();
});

// Rota para a raiz serve index.html
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Router da API
server.use(router);

// Fallback para SPA (qualquer rota não encontrada volta para index.html)
server.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
  console.log(`Servindo arquivos estáticos de: ${path.join(__dirname, 'public')}`);
});
