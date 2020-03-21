const Deck = require('./deck');

const testDeck = new Deck();

test('Deck instantiated', () => {
  expect(testDeck).toBeDefined();
});
