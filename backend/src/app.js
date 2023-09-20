const express = require('express');
const productRouter = require('./routers');
const saleRouter = require('./routers');

const app = express();
// Body acusando undefined é por causa da falta do express.json()
app.use(express.json());

// Não remova esse endpoint, é para o avaliador funcionar!
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use(productRouter.productRouter);
app.use(saleRouter.saleRouter);

module.exports = app;
