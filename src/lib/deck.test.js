const Deck = require('./deck');

const testDeckDefault = new Deck();

test('Deck instantiated', () => {
  expect(testDeckDefault).toBeDefined();
});

test('Deck default instantiated with four suits', () => {
  expect(testDeckDefault.getNumberOfSuits()).toBe(4);
});

test('Deck default four suits are Hearts, Diamonds, Spades, Clubs', () => {
  const suits = testDeckDefault.getSuits();

  expect(suits).toContain('Hearts');
  expect(suits).toContain('Diamonds');
  expect(suits).toContain('Spades');
  expect(suits).toContain('Clubs');
});

test('Deck default instantiated with twelve ranks', () => {
  expect(testDeckDefault.getNumberOfRanks()).toBe(13);
});

test('Deck default has an array of 52 cards', () => {
  expect(testDeckDefault.getCards().length).toBe(52);
});

test('Deck can be shuffled', ()=> {
  const deckCardsBeforeShuffle = JSON.stringify(testDeckDefault.getCards());
  testDeckDefault.shuffle();
  const deckCardsAfterSuffle = JSON.stringify(testDeckDefault.getCards());

  expect(deckCardsAfterSuffle).not.toBe(deckCardsBeforeShuffle);
});
