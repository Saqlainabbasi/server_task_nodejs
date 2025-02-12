module.exports = class CheckoutService {
  constructor(productRepo, AppError) {
    this.productRepo = productRepo;
    this.AppError = AppError;
  }

  async checkoutTotal(idsMap) {
    const ids = Array.from(idsMap.keys());
    const products = await this.productRepo.findProductsByIds(ids);
    if (products.length !== ids.length) {
      throw new this.AppError("Invalid product id", 400);
    }

    return products.reduce((total, product) => {
      const quantity = idsMap.get(product.product_id);
      let productTotal = product.unit_price * quantity;

      if (product.discount) {
        const discountQuantity = product.discount.quantity;
        const discountPrice = product.discount.price;

        const discountedSets = Math.floor(quantity / discountQuantity);
        const remainingItems = quantity % discountQuantity;

        productTotal =
          discountedSets * discountPrice + remainingItems * product.unit_price;
      }

      return total + productTotal;
    }, 0);
  }
};
