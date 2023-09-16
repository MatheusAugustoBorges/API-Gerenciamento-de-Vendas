const { productsService } = require('../services');

const findAllProductsController = async (_request, response) => {
  const products = await productsService.findAllProductsService();
  if (products.message) return response.status(404).json(products);
  return response.status(200).json(products);
};

const findProductByIdController = async (request, response) => {
  const { id } = request.params;
  const product = await productsService.findProductByIdService(id);
  if (product.message) return response.status(404).json(product);
  return response.status(200).json(product);
};

const createProductController = async (request, response) => {
  const { name } = request.body;
  const product = await productsService.createProductService(name);
  return response.status(201).json({ id: product.insertId, name });
};

module.exports = {
  findAllProductsController,
  findProductByIdController,
  createProductController,
};