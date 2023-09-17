const { expect } = require('chai');
const sinon = require('sinon');
// const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales, SaleById2, inputForCreateProductModel, newSaleProductFromDb } = require('../mocks/salesFromModel');

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

describe('Realizando testes - SALES SERVICE:', function () {
  it('Testa array de sale vazio', async function () {
    sinon.stub(salesModel, 'findAllSalesModel').resolves();

    const products = await salesService.findAllSalesService();
    expect(products).to.be.deep.equal({ message: 'Sale not found' });
  });
  it('Testa array de sale retornados com sucesso', async function () {
    sinon.stub(salesModel, 'findAllSalesModel').resolves(allSales);

    const products = await salesService.findAllSalesService();
    expect(products).to.be.deep.equal(allSales);
  });
  it('Testa id de sale inexistente', async function () {
    sinon.stub(salesModel, 'findSaleByIdModel').resolves([]);

    const products = await salesService.findSaleByIdService(99);
    expect(products).to.be.deep.equal({ message: 'Sale not found' });
  });
  it('Testa id de sale existente', async function () {
    sinon.stub(salesModel, 'findSaleByIdModel').resolves(SaleById2);

    const products = await salesService.findSaleByIdService(2);
    expect(products).to.be.deep.equal(SaleById2);
  });
  // it('Testa se encaminha req.body corretamente para função de criação de sale', async function () {
  //   sinon.stub(salesModel, 'createSaleProductService').resolves(newSaleProductFromDb);

  //   const products = await salesService.createSaleProductService(inputForCreateProductModel);
  //   expect(products).to.be.deep.equal(newSaleProductFromDb);
  // });
  afterEach(function () {
    sinon.restore();
  });
});