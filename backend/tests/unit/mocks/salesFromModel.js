const date = '2023-09-15T21:39:59.000Z';

const allSales = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];
  
const SaleById1 = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
];

const SaleById2 = [
  {
    date,
    productId: 3,
    quantity: 15,
  },
];
  
  module.exports = {
    allSales,
    SaleById1,
    SaleById2,
  };