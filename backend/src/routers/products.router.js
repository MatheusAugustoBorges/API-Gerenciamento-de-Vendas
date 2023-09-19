const express = require('express');

const router = express.Router();

const { productsController } = require('../controllers');
const { validateProduct } = require('../middlewares/validateProducts');

router.get('/products', productsController.findAllProductsController);

router.get('/products/:id', productsController.findProductByIdController);

router.post('/products', validateProduct, productsController.createProductController);

router.put('/products/:id', validateProduct, productsController.updateProductController);

router.delete('/products/:id', productsController.deleteProductController);

module.exports = router;
