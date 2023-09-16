const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');
const { validateSalesProduct, validateSalesQuantity } = require('../middlewares/validateSales');

router.get('/sales', salesController.findAllSalesController);

router.get('/sales/:id', salesController.findSalesByIdController);

router.post(
  '/sales', 
  validateSalesProduct, 
  validateSalesQuantity,
  salesController.createSaleProductController,
);

module.exports = router;
