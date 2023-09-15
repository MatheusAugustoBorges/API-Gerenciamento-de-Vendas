const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');

router.get('/sales', salesController.findAllSalesController);

router.get('/sales/:id', salesController.findSalesByIdController);

module.exports = router;
