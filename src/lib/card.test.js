const Card = require('./card');

const testCard = new Card('Heart', 1);

test('Card Instantiates', () => {
  expect(testCard).toBeDefined();
});

test('Card has a suit of Hearts', () => {
  expect(testCard.getSuit()).toBe('Heart');
});

test('Card has a rank of 1', () => {
  expect(testCard.getRank()).toBe(1);
});
