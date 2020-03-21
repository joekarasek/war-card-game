const Card = require('./card');

test('Card Instantiates with a Suite and Rank', () => {
  const testCard = new Card('Heart', 1);
  expect(testCard.getSuit()).toBe("Heart");
  expect(testCard.getRank()).toBe(1);
});
