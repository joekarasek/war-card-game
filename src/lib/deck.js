const Card = require('./card');

class Deck {
  constructor(numberOfSuits = 4, numberOfRanks = 13) {
    this.numberOfSuits = numberOfSuits;
    this.suits = [
        "Hearts",
        "Diamonds",
        "Spades",
        "Clubs",
        "Circles",
        "Skulls",
        "Bits",
        "Shovels"
    ].slice(0, numberOfSuits);
    this.numberOfRanks = numberOfRanks;

    this.cards = [];
    this.suits.forEach(suit => {
      for(let i=1; i <= numberOfRanks; i ++) {
        this.cards.push(new Card(suit, i));
      }
    });
  }

  /**
   * Gets the number of suits
   * @returns {number}
   */
  getNumberOfSuits() {
    return this.numberOfSuits;
  }

  /**
   * Gets the number of ranks
   * @returns {number}
   */
  getNumberOfRanks() {
    return this.numberOfRanks;
  }

  /**
   * Returns an array of the suits in the deck
   * @returns {string[]}
   */
  getSuits() {
    return this.suits;
  }

  /**
   * Returns an array of the cards in the deck
   * @returns {[]}
   */
  getCards() {
    return this.cards;
  }

  /**
   * Suffles the deck
   * This randomizes the deck of cards using the Durstenfeld shuffle.
   * It has runtime of 0(n) based on the size of the deck of cards
   */
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[x];
      this.cards[x] = temp;
    }
  }

  /**
   * Deals a card from the front of the deck
   * @returns card {Object}
   */
  deal() {
    return this.cards.shift();
  }

  /**
   * Adds a card to the back of the deck
   * @param card
   * @returns {number}
   */
  take(card) {
    return this.cards.push(card);
  }
}

module.exports = Deck;
