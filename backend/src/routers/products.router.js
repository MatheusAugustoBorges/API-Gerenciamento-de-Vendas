const express = require('express');

const router = express.Router();

const { productsController } = require('../controllers');

router.get('/products', productsController.findAllProductsController);

router.get('/products/:id', productsController.findProductByIdController);

router.post('/products', productsController.createProductController);

module.exports = router;
