const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware para análise do corpo das solicitações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
  host: 'mysql', // Nome do serviço do contêiner MySQL no Docker Compose
  user: 'sup',
  password: '123456', // Altere conforme configurado no Docker Compose
  database: 'CADASTRO' // Nome do banco de dados
});

// Conexão com o banco de dados MySQL
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados MySQL:', err);
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para a página inicial
app.get('/', (req, res) => {
  // Consulta para buscar os nomes cadastrados no banco de dados
  const query = 'SELECT nome FROM pessoas';

  // Executar a consulta
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).send('Erro ao buscar nomes no banco de dados');
      return;
    }

    // Renderizar a página com a lista de nomes
    res.send(`
      <html>
        <body>
          <h1>Full Cycle Rocks!</h1>
          <h2>Informe seu nome:</h2>
          <form action="/salvar" method="POST">
            <input type="text" name="nome" placeholder="Seu nome">
            <button type="submit">Salvar</button>
          </form>
          <h3>Lista de nomes cadastrados no banco de dados:</h3>
          <ul>
            ${results.map(result => `<li>${result.nome}</li>`).join('')}
          </ul>
        </body>
      </html>
    `);
  });
});

// Rota para salvar o nome no banco de dados
app.post('/salvar', (req, res) => {
  const nome = req.body.nome;

  // Inserir o nome no banco de dados
  const query = 'INSERT INTO pessoas (nome) VALUES (?)';
  connection.query(query, [nome], (err, results) => {
    if (err) {
      console.error('Erro ao salvar nome no banco de dados:', err);
      res.status(500).send('Erro ao salvar nome no banco de dados');
      return;
    }

    console.log('Nome salvo no banco de dados com sucesso');
    res.redirect('/');
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Node.js executando na porta ${port}`);
});
