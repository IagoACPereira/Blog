const app = require('./src/app');

const porta = 3000;

// eslint-disable-next-line no-console
app.listen(porta, () => console.log(`Servidor rodando ok em http://localhost:${porta}`));
