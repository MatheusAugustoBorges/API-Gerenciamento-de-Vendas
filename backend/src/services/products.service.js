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

const createProductService = async (nameProduct) => {
  const product = await productsModel.createProductModel(nameProduct);
  return product;
};

const updateProductService = async (id, name) => {
  const productUpdated = await productsModel.updateProductModel(id, name);
  const productsList = await productsModel.findAllProductsModel();
  const idExists = productsList.some((product) => product.id === Number(id));
  if (!idExists) return { message: 'Product not found' };
  return productUpdated;
};

module.exports = {
  findAllProductsService,
  findProductByIdService,
  createProductService,
  updateProductService,
};