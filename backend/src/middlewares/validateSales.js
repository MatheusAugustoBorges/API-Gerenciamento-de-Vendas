const { productsModel } = require('../models');

const validateSalesProduct = async (request, response, next) => {
    const newSale = request.body;
    console.log(newSale);
    const productIdExist = newSale.some((sale) => !sale.productId);
    if (productIdExist) {
      return response.status(400).json({ message: '"productId" is required' });
    }
    // Verificar se o productId existe no banco de 
    // dados em comparação com o productId requisição, isto é, 
    // se o produto que será vendido existe no banco de dados
    const productListDb = await productsModel.findAllProductsModel();
    const productIdExistForSale = newSale
      .every((sale) => productListDb
      .some((product) => product.id === sale.productId));
    if (!productIdExistForSale) {
      return response.status(404).json({ message: 'Product not found' });
    }
    next();
};

const validateSalesQuantity = (request, response, next) => {
    const newSale = request.body;
    const quantityLessThanZero = newSale.some((sale) => sale.quantity <= 0);
    if (quantityLessThanZero) {
      return response.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
    const quantityExist = newSale.some((sale) => !sale.quantity);
    if (quantityExist) {
      return response.status(400).json({ message: '"quantity" is required' });
    }
    next();
};

module.exports = {
    validateSalesProduct,
    validateSalesQuantity,
};