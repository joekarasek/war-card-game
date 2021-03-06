const Card = require('./Card');
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

test('Deck can deal a card', ()=> {
  const deckBeforeDeal = JSON.stringify(testDeckDefault.getCards());
  const dealtCard = testDeckDefault.deal();
  const deckAfterDeal = JSON.stringify(testDeckDefault.getCards());

  expect(deckAfterDeal.length).not.toBe(deckBeforeDeal.length);
  expect(dealtCard.getRank()).toBeDefined();
  expect(dealtCard.getSuit()).toBeDefined();
});

test('Deck can take a card', ()=> {
  const card = new Card('Spades', 13);
  const deckBeforeTake = JSON.stringify(testDeckDefault.getCards());
  testDeckDefault.take(card);
  const deckAfterTake = JSON.stringify(testDeckDefault.getCards());

  expect(deckAfterTake.length).not.toBe(deckBeforeTake.length);
});

test('Split Deck', () => {
  const initialDeck = new Deck();
  const secondDeck = initialDeck.splitDeck();

  expect(initialDeck).not.toEqual(secondDeck);
});
