const router = require('express').Router();

const { productsController } = require('../controllers');

router.get('/products', productsController.findAllProductsController);

router.get('/products/:id', productsController.findProductByIdController);

module.exports = router;
