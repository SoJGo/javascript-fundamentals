const User = require('./user');

describe(User, () => {
  describe('getName', () =>{
    it('returns the user\'s name', () => {
      const user = new User('Uma');
      expect(user.getName()).toBe('Uma')
    });
  });

  describe('getIntroduction', () =>{
    it('returns the user\'s introduction', () => {
      const user = new User('Uma');
      expect(user.getIntroduction()).toBe('Hi, my name is Uma')
    });
  });
});
