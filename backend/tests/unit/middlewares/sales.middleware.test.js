const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { validateSalesProduct } = require('../../../src/middlewares/validateSales');
const { inputForCreateProductModel } = require('../mocks/salesFromModel');

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

    expect(response.json).to.have.been.calledWith({ message: '"productId" is required' });
  });
//   it('Valida se existe nome de produto com menos de 5 caracteres', async function () {
//     const request = { body: { name: 'prod' } };
//     const response = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };

//     validateProduct(request, response);

//     expect(response.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
//   });
});