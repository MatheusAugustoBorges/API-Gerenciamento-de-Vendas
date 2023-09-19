const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { allProducts, 
    ProductById, 
    ProductListWithOneMore, 
    ProductListUpdated, 
    ProductListDeleted } = require('../mocks/productsFromModel');

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

    const products = await productsModel.findProductByIdModel();
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

  it('Atualizando um product', async function () {
    sinon.stub(connection, 'execute').resolves([ProductListUpdated]);

    const products = await productsModel.updateProductModel(1, 'Alicate do Superman');
    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(3);
    expect(products).to.be.deep.equal(ProductListUpdated);
  });

  it('Deletando um product', async function () {
    sinon.stub(connection, 'execute').resolves([ProductListDeleted]);

    const products = await productsModel.deleteProductModel(1);
    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(2);
    expect(products).to.be.deep.equal(ProductListDeleted);
  });

  afterEach(function () {
    sinon.restore();
  });
});
