/**
 * Card class
 * Represents a traditional playing card with a suit and rank.
 * Once constructed, these values can never change, therefore there are only getters available
 */
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  /**
   * Gets the Suit of the Card
   * @returns {string}
   */
  getSuit() {
    return this.suit;
  }

  /**
   * Gets the Rank of the Card
   * @returns {number}
   */
  getRank() {
    return this.rank;
  }
}

module.exports = Card;
