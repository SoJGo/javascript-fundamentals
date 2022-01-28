const Candy = require('./candy')

describe(Candy, () => {
  const candy = new Candy('Mars', 4.99);

  describe('getName', () => {
    it('returns the candy name', () =>{
      expect(candy.getName()).toBe('Mars');    
    });
  });

  describe('getPrice', () => {
    it('returns the candy price', () =>{
      expect(candy.getPrice()).toBe(4.99);
    });
  });
});