const { expect } = require('chai');
const sinon = require('sinon');
// const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { allProducts, ProductById } = require('../mocks/productsFromModel'); 

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
    sinon.stub(productsModel, 'findAllProductsModel').resolves();

    const products = await productsService.findAllProductsService();
    expect(products).to.be.deep.equal({ message: 'Product not found' });
  });
  it('Testa retorno de array de produtos com sucesso', async function () {
    sinon.stub(productsModel, 'findAllProductsModel').resolves(allProducts);

    const products = await productsService.findAllProductsService();
    expect(products).to.be.deep.equal(allProducts);
  });
  it('Testa id de produto inexistente', async function () {
    sinon.stub(productsModel, 'findProductByIdModel').resolves([]);

    const products = await productsService.findProductByIdService(99);
    expect(products).to.be.deep.equal({ message: 'Product not found' });
  });
  it('Testa id de produto existente', async function () {
    sinon.stub(productsModel, 'findProductByIdModel').resolves(ProductById);

    const products = await productsService.findProductByIdService(1);
    expect(products).to.be.deep.equal(ProductById[0]);
  });
  it('Testa se message é enviada caso haja tentativa de cadastro de produto sem name', async function () {
    sinon.stub(productsModel, 'createProductModel').resolves({ message: '"name" is required' });

    const products = await productsService.createProductService('');
    expect(products).to.be.deep.equal({ message: '"name" is required' });
  });
  it('Testa se message é enviada para produto cadastrado com menos de 5 caracteres ', async function () {
    sinon.stub(productsModel, 'createProductModel').resolves({ message: '"name" length must be at least 5 characters long' });

    const products = await productsService.createProductService('abc');
    expect(products).to.be.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });
  afterEach(function () {
    sinon.restore();
  });
});