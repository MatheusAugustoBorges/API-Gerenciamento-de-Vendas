const express = require('express');
// const productsRouter = require('./routers');
const { productsController } = require('./controllers');

const app = express();

// Não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

// app.use('/', () => productsRouter.productRouter);

app.get('/products', productsController.findAllProductsController);

app.get('/products/:id', productsController.findProductByIdController);

module.exports = app;
