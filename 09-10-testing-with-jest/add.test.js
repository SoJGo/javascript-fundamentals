const add = require('./add')

describe('add', () => {
  // test cases
  it('adds 2 and 2', () => {
    //TODO: wtire test
    expect(add(2, 2)).toBe(4)
  });

  it('adds 5 and 4', () => {
    expect(add(5, 4)).toBe(9)
  });
});
