const { salesModel } = require('../models');

const findAllSalesService = async () => {
  const sales = await salesModel.findAllSalesModel();
  if (!sales) return { message: 'Sale not found' };
  return sales;
};

const findSaleByIdService = async (saleId) => {
  const sale = await salesModel.findSaleByIdModel(saleId);
  if (!sale || sale.length === 0) return { message: 'Sale not found' };
  return sale;
};

const createSaleProductService = async (dataSale) => {
  const newSaleProduct = await salesModel.createSalesProductModel(dataSale);
  return newSaleProduct;
};

module.exports = {
  findAllSalesService,
  findSaleByIdService,
  createSaleProductService,
};