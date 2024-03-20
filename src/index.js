const express = require('express');
const app = express();
const port = 3000;

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello Hackthon');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor Express ouvindo na porta ${port}`);
});