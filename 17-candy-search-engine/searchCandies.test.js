const searchCandies = require('./searchCandies');

describe('searchCandies function', () => {
  it('returns Mars and Maltesers', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });

  it('returns Mars only', () => {
    expect(searchCandies('ma', 2)).toEqual([ 'Mars' ]);
  });

  it('returns Skitties, Skittles and Starburst', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('returns only Skitties and Skittles', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});