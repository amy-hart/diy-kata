const { fizzBuzz } = require('../src');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
  	expect(fizzBuzz(12)).toBe('Fizz');
  });

  it('returns Buzz when passed a multiple of 5', () => {
	expect(fizzBuzz(25)).toBe('Buzz');
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
	expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
	expect(28).toBe(28);
  });
});
