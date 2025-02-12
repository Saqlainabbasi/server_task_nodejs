const ProductCatalogue = require("../models/product.catalogue.json");

module.exports = class ProductRepo {
  // Corrected the class name
  constructor() {
    this.Products = ProductCatalogue.products;
  }

  async findProductsByIds(ids) {
    const idSet = new Set(ids);
    return this.Products.filter((product) => idSet.has(product.product_id));
  }
};
