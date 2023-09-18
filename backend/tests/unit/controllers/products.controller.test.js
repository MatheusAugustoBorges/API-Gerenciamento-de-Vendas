const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { allProducts, ProductById } = require('../mocks/productsFromModel');

describe('Realizando testes - PRODUCT CONTROLLER:', function () {
  afterEach(sinon.restore);
  const message = 'Product not found';
  it('Não listar os produtos quando forem inexistentes', async function () {
    const request = {};
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    sinon.stub(productsService, 'findAllProductsService').resolves({ message });

    await productsController.findAllProductsController(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith({ message });
  });

  it('Listar todos os produtos', async function () {
    const request = {};
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    sinon.stub(productsService, 'findAllProductsService').resolves(allProducts);

    await productsController.findAllProductsController(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(allProducts);
  });

  it('Não listar o produto buscado por ID quando for inexistente', async function () {
    const request = { params: { id: 99 } };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    sinon.stub(productsService, 'findAllProductsService').resolves({ message });

    await productsController.findAllProductsController(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith({ message });
  });

  it('Listar o produto buscado por ID quando for existente', async function () {
    const request = {};
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    sinon.stub(productsService, 'findAllProductsService').resolves(ProductById);

    await productsController.findAllProductsController(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(ProductById);
  });

  it('Verifica se o produto é criado', async function () {
    const request = { 
      body: { name: 'Couraça da Justiça' },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    sinon.stub(productsService, 'createProductService').resolves({
        fieldCount: 0,
        affectedRows: 1,
        insertId: 4,
        info: '',
        serverStatus: 2,
        warningStatus: 0,
      });

    await productsController.createProductController(request, response);

    expect(response.status).to.have.been.calledWith(201);
    expect(response.json).to.have.been.calledWithExactly({ id: 4, name: 'Couraça da Justiça' });
  });
});