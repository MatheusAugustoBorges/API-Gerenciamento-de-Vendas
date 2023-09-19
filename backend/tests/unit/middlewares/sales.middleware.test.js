const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { validateSalesProduct, validateSalesQuantity } = require('../../../src/middlewares/validateSales');
const { inputForCreateProductModel } = require('../mocks/salesFromModel');

// -------------------------------------------------
// Validações de produtos

describe('Validando dados de vendas - MIDDLEWARE SALES:', function () {
  afterEach(sinon.restore);
//   it('Verifica se todas as validações estão ok', async function () {
//     const request = { body: inputForCreateProductModel };
//     const response = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     const next = sinon.stub().returns();

//     validateSalesProduct(request, response, next);

//     expect(next).to.have.been.calledWith();
//   });

  it('Valida se o produto é preenchido na requisição', async function () {
    const request = { body: [
        {
          quantity: 1,
        },
      ] };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    validateSalesProduct(request, response);

    expect(response.status).to.have.been.calledWith(400);
    expect(response.json).to.have.been.calledWith({ message: '"productId" is required' });
  });

//   it.todo('Verifica se o produto que será vendido existe no banco de dados');

// -------------------------------------------------
// Validações de quantidade de produtos

  it('Verifica se todas as validações estão ok', async function () {
    const request = { body: inputForCreateProductModel };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateSalesQuantity(request, response, next);

    expect(next).to.have.been.calledWith();
  });

  it('Valida se a quantidade do produto é >= 1', async function () {
    const request = { body: [
        {
          productId: 1,
          quantity: -1,
        },
      ] };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    validateSalesQuantity(request, response);

    expect(response.status).to.have.been.calledWith(422);
    expect(response.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
  it('Valida se a quantidade do produto é existente', async function () {
    const request = { body: [
        {
          productId: 1,
        },
      ] };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    validateSalesQuantity(request, response);

    expect(response.status).to.have.been.calledWith(400);
    expect(response.json).to.have.been.calledWith({ message: '"quantity" is required' });
  });
});