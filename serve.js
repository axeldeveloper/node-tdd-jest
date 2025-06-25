const express = require('express');
const user = require('./user');

const postsRouter = require('./routes/posts');

const app = express();

app.use(express.json());

app.get('/api/user', (req, res) => {
  res.json(user);
});


app.use('/posts', postsRouter);


// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}


// Fechar conexão com o banco ao encerrar o servidor
process.on('SIGINT', () => {
  sqlite.close();
  process.exit();
});


exports = app; // Export the app for testing purposes
module.exports = app; // Export the app for testing purposes