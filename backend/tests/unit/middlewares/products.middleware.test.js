const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { validateProduct } = require('../../../src/middlewares/validateProducts');

describe('Validando dados de produtos - MIDDLEWARE PRODUCTS:', function () {
  afterEach(sinon.restore);
  it('Verifica se todas as validações estão ok', async function () {
    const request = { body: { name: 'product' } };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateProduct(request, response, next);

    expect(next).to.have.been.calledWith();
  });
  it('Valida se não existe nome de produto', async function () {
    const request = { body: { name: '' } };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    validateProduct(request, response);

    expect(response.json).to.have.been.calledWith({ message: '"name" is required' });
  });
  it('Valida se existe nome de produto com menos de 5 caracteres', async function () {
    const request = { body: { name: 'prod' } };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    validateProduct(request, response);

    expect(response.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
  });
});