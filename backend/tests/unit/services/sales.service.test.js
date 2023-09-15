const { expect } = require('chai');
const sinon = require('sinon');
// const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');

// describe('Realizando testes - PRODUCTS SERVICE:', function () {
//   it('Testa array de produtos vazio', async function () {
//     sinon.stub(connection, 'execute').resolves([]);

//     const products = await productsService.findAllProductsService();
//     expect(products).to.be.deep.equal({ message: 'Product not found' });
//   });
//   it('Testa id de produto inexistente', async function () {
//     sinon.stub(connection, 'execute').resolves([[]]);

//     const products = await productsService.findProductByIdService(99);
//     expect(products).to.be.deep.equal({ message: 'Product not found' });
//   });
//   afterEach(function () {
//     sinon.restore();
//   });
// });

// -------------------------------------------------------

describe('Realizando testes - PRODUCTS SERVICE:', function () {
  it('Testa array de produtos vazio', async function () {
    sinon.stub(salesModel, 'findAllSalesModel').resolves();

    const products = await salesService.findAllSalesService();
    expect(products).to.be.deep.equal({ message: 'Sale not found' });
  });
  it('Testa id de produto inexistente', async function () {
    sinon.stub(salesModel, 'findSaleByIdModel').resolves([]);

    const products = await salesService.findSaleByIdService(99);
    expect(products).to.be.deep.equal({ message: 'Sale not found' });
  });
  afterEach(function () {
    sinon.restore();
  });
});