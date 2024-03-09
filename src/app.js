const express = require('express');
const usuarioRouter = require('./routes/usuarioRoutes');
const postagemRouter = require('./routes/postagemRoutes');
const comentarioRouter = require('./routes/comentarioRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();
// eslint-disable-next-line linebreak-style

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
  )
  .use(
    authRouter,
    usuarioRouter,
    postagemRouter,
    comentarioRouter,
  );

app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'Blog',
    status: 200,
  });
});

module.exports = app;
