const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { allProducts, ProductById, ProductListWithOneMore } = require('../mocks/productsFromModel');

describe('Realizando testes - PRODUCTS MODEL:', function () {
  it('Recuperando products com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);

    const products = await productsModel.findAllProductsModel();
    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(3);
    expect(products).to.be.deep.equal(allProducts);
  });

  it('Recuperando um product por um id', async function () {
    sinon.stub(connection, 'execute').resolves([ProductById]);

    const products = await productsModel.findAllProductsModel();
    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(1);
    expect(products).to.be.deep.equal(ProductById);
  });

  it('Criando um novo product', async function () {
    sinon.stub(connection, 'execute').resolves([ProductListWithOneMore]);

    const products = await productsModel.createProductModel();
    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(4);
    expect(products).to.be.deep.equal(ProductListWithOneMore);
  });

  afterEach(function () {
    sinon.restore();
  });
});
