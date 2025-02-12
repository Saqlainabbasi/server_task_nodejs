const { AppError } = require("../utils/errorClass");
const ProductRepo = require("../repositories/product.repo");
const CheckoutService = require("../services/checkout.service");

const productRepo = new ProductRepo();
const checkoutService = new CheckoutService(productRepo, AppError);

const checkout = async (req, res, next) => {
  try {
    const { productIds } = req.body;
    // Validate the request body
    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
      throw new Error("Invalid request body");
    }
    let productMap = new Map();
    productIds.forEach((id) => {
      productMap.set(id, (productMap.get(id) || 0) + 1);
    });
    const productsTotal = await checkoutService.checkoutTotal(productMap);
    res.json({ price: productsTotal });
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

module.exports = { checkout };
