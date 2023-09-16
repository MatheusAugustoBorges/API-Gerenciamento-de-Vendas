const express = require('express');

const router = express.Router();

const { productsController } = require('../controllers');
const { validateProduct } = require('../middlewares/validateProducts');

router.get('/products', productsController.findAllProductsController);

router.get('/products/:id', productsController.findProductByIdController);

router.post('/products', validateProduct, productsController.createProductController);

module.exports = router;
