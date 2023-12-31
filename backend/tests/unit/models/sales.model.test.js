const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { allSales, SaleById1, SaleById2, newSaleFromDb, newSaleProductFromDb, inputForCreateProductModel } = require('../mocks/salesFromModel');

describe('Realizando testes - SALES MODEL:', function () {
  it('Recuperando sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allSales]);

    const sales = await salesModel.findAllSalesModel();
    expect(sales).to.be.an('array');
    expect(sales).to.have.lengthOf(3);
    expect(sales).to.be.deep.equal(allSales);
  });

  it('Recuperando um sale por um id', async function () {
    sinon.stub(connection, 'execute').resolves([SaleById2]);

    const sale = await salesModel.findSaleByIdModel(2);
    expect(sale).to.be.an('array');
    expect(sale).to.have.lengthOf(1);
    expect(sale).to.be.deep.equal(SaleById2);
  });

  it('Recuperando um sale por um id que contenha mais de uma item no array', async function () {
    sinon.stub(connection, 'execute').resolves([SaleById1]);

    const sale = await salesModel.findSaleByIdModel(1);
    expect(sale).to.be.an('array');
    expect(sale).to.have.lengthOf(2);
    expect(sale).to.be.deep.equal(SaleById1);
  });

  it('Inserindo um novo sale no banco de dados para acessar o novo ID', async function () {
    sinon.stub(connection, 'execute').resolves([newSaleFromDb]);

    const newSaleProductFromDbTest = await salesModel.createSaleModel();
    expect(newSaleProductFromDbTest).to.be.an('object');
    expect(newSaleProductFromDbTest).to.be.deep.equal(newSaleFromDb);
  });

  it('Inserindo um novo sale no banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([newSaleFromDb]);

    const newSaleProductFromDbTest = await salesModel.createSalesProductModel(inputForCreateProductModel);
    expect(newSaleProductFromDbTest).to.be.an('object');
    expect(newSaleProductFromDbTest).to.be.deep.equal(newSaleProductFromDb);
  });

  afterEach(function () {
    sinon.restore();
  });
});
