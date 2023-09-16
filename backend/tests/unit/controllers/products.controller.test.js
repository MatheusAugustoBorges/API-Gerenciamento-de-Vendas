// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

// const { expect } = chai;
// chai.use(sinonChai);

// const { productsService } = require('../../../src/services');
// const { productsController } = require('../../../src/controllers');
// const { insertionProductResponse } = require('../mocks/productsFromController');

// describe('Realizando testes - PRODUCT CONTROLLER:', function () {
//   it('Inserindo product com sucesso - status 201', async function () {
//     sinon.stub(productsService, 'createProductService').resolves(insertionProductResponse);
//     // const request = {
//     //   body: { name: 'Couraça da Justiça' },
//     // };
//     // const response = {
//     //   status: sinon.stub().returnsThis(),
//     //   json: sinon.stub(),
//     // };
    
//     const response = await productsController.createProductController();
//     expect(response.status).to.have.been.calledWith(201);
//     expect(response.json).to.have.been.calledWith(insertionProductResponse);
//   });

//   afterEach(function () {
//     sinon.restore();
//   });
// });