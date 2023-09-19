const connection = require('./connection');

const findAllProductsModel = async () => {
  const [products] = await connection.execute('SELECT * FROM products ORDER BY id ASC');
  return products;
};

const findProductByIdModel = async (productId) => {
  const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

const createProductModel = async (nameProduct) => {
  const [product] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [nameProduct],
  );
  return product;
};

const updateProductModel = async (id, name) => {
  const [productUpdated] = await connection.execute(
    `UPDATE products
    SET name = ? 
    WHERE id = ?`,
    [name, id],
  );
  return productUpdated;
};

const deleteProductModel = async (id) => {
  const [productDeleted] = await connection.execute(
    `DELETE FROM products
    WHERE id = ?`,
    [id],
  );
  return productDeleted;
};

module.exports = {
  findAllProductsModel,
  findProductByIdModel,
  createProductModel,
  updateProductModel,
  deleteProductModel,
};