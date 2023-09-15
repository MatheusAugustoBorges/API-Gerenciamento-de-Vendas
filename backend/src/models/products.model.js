const connection = require('./connection');

const findAllProductsModel = async () => {
  const [products] = await connection.execute('SELECT * FROM products ORDER BY id ASC');
  return products;
};

const findProductByIdModel = async (productId) => {
  const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

module.exports = {
  findAllProductsModel,
  findProductByIdModel,
};