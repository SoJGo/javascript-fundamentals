const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
  it('returns Fizz for 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it('returns Buzz for 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it('returns Fizz for 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });

  it('returns the number otherwise', () => {
    expect(fizzBuzz(7)).toBe(7)
  });
});