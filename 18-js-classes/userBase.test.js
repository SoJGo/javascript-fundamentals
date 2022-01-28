const User = require('./user');
const UserBase = require('./userBase')

describe(UserBase, () => {
  const userBase = new UserBase([new User('Uma'), new User('Josh'), new User('Ollie')]);
  
  describe('count', () => {
    it('returns the number of users', () => {
      expect(userBase.count()).toBe(3)
    });
  });

  describe('getNames', () => {
    it('returns an array of users\' names', () => {
      expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie'])
    });
  });

  describe('getIntroductions', () => {
    it('returns an array of users\' introductions', () => {
      expect(userBase.getIntroductions()).toEqual(['Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie'])
    });
  });
});