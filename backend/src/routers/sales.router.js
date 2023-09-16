const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');

router.get('/sales', salesController.findAllSalesController);

router.get('/sales/:id', salesController.findSalesByIdController);

router.post('/sales', salesController.createSaleProductController);

module.exports = router;
