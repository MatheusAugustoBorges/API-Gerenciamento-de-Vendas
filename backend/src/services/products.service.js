const { productsModel } = require('../models');

const findAllProductsService = async () => {
  const products = await productsModel.findAllProductsModel();
  if (!products) return { message: 'Product not found' };
  return products;
};

const findProductByIdService = async (productId) => {
  const [product] = await productsModel.findProductByIdModel(productId);
  if (!product) return { message: 'Product not found' };
  return product;
};

module.exports = {
  findAllProductsService,
  findProductByIdService,
};