const ShoppingBasket = require('./shoppingBasket')

describe(ShoppingBasket, () => {
  const candyDouble1 = { getPrice: () => 82.00 };
  const candyDouble2 = { getPrice: () => 104.00 };

  const basket = new ShoppingBasket();

  basket.addItem(candyDouble1);
  basket.addItem(candyDouble2);

  describe('getTotalPrice', () => {
    it('returns the price of all added candy', () => {
      expect(basket.getTotalPrice()).toEqual(186.00)
    });
  });
});
