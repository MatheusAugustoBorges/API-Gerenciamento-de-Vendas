const express = require('express');
const productRouter = require('./routers');

const app = express();

// Não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use(productRouter.productRouter);

module.exports = app;
