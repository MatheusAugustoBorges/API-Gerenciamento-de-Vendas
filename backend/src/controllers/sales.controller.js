const { salesService } = require('../services');

const findAllSalesController = async (_request, response) => {
  const sales = await salesService.findAllSalesService();
  if (sales.message) return response.status(404).json(sales);
  return response.status(200).json(sales);
};

const findSalesByIdController = async (request, response) => {
  const { id } = request.params;
  const sale = await salesService.findSaleByIdService(id);
  if (sale.message) return response.status(404).json(sale);
  return response.status(200).json(sale);
};

const createSaleProductController = async (request, response) => {
  const { body } = request;
  const newSaleProduct = await salesService.createSaleProductService(body);
  return response.status(201).json(newSaleProduct);
};

module.exports = {
  findAllSalesController,
  findSalesByIdController,
  createSaleProductController,
};