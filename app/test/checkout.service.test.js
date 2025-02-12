const CheckoutService = require("../../app/services/checkout.service");
const ProductRepo = require("../../app/repositories/product.repo");
const { AppError } = require("../../app/utils/errorClass");

jest.mock("../../app/repositories/product.repo");

describe("CheckoutService", () => {
  let checkoutService;
  let productRepo;

  beforeEach(() => {
    productRepo = new ProductRepo();
    checkoutService = new CheckoutService(productRepo, AppError);
  });

  it("should calculate the total price with discounts", async () => {
    productRepo.findProductsByIds.mockResolvedValue([
      {
        product_id: "001",
        unit_price: 100,
        discount: { quantity: 3, price: 200 },
      },
      {
        product_id: "002",
        unit_price: 80,
        discount: { quantity: 2, price: 120 },
      },
      { product_id: "003", unit_price: 50, discount: null },
      { product_id: "004", unit_price: 30, discount: null },
    ]);

    const idsMap = new Map([
      ["001", 6],
      ["002", 2],
      ["003", 1],
      ["004", 1],
    ]);

    const total = await checkoutService.checkoutTotal(idsMap);
    expect(total).toBe(600); // 400 + 120 + 50 + 30
  });

  it("should throw an error for invalid product IDs", async () => {
    productRepo.findProductsByIds.mockResolvedValue([
      {
        product_id: "001",
        unit_price: 100,
        discount: { quantity: 3, price: 200 },
      },
    ]);

    const idsMap = new Map([
      ["001", 1],
      ["999", 1],
    ]);

    await expect(checkoutService.checkoutTotal(idsMap)).rejects.toThrow(
      AppError
    );
  });
});
