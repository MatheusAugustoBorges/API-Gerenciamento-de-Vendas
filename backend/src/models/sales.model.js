const connection = require('./connection');

const findAllSalesModel = async () => {
  const [sales] = await connection.execute(`SELECT 
  s.id AS saleId, 
  s.date AS date,
  sp.product_id AS productId,
  sp.quantity AS quantity
FROM
  StoreManager.sales AS s
  INNER JOIN
  StoreManager.sales_products AS sp ON s.id = sp.sale_id
ORDER BY sp.sale_id ASC, sp.product_id ASC;`);
  return sales;
};

const findSaleByIdModel = async (saleId) => {
  const [sale] = await connection.execute(`SELECT 
  s.date AS date,
  sp.product_id AS productId,
  sp.quantity AS quantity
FROM
  StoreManager.sales AS s
  INNER JOIN
  StoreManager.sales_products AS sp ON s.id = sp.sale_id
WHERE s.id = ?
ORDER BY sp.sale_id ASC, sp.product_id ASC;`, [saleId]);
  return sale;
};

const createSaleModel = async () => {
  const [newDateSale] = await connection.execute(
    'INSERT INTO sales (date) VALUES (now())',
  );
  // Recupera o id da venda criada => newDateSale.insertId
  return newDateSale;
};

const createSalesProductModel = async (dataSale) => {
  const { insertId } = await createSaleModel();
  dataSale.map(async (sale) => {
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
        [insertId, sale.productId, sale.quantity],
    );
  });
  return { id: insertId, itemsSold: dataSale };
};

module.exports = {
  findAllSalesModel,
  findSaleByIdModel,
  createSaleModel,
  createSalesProductModel,
};