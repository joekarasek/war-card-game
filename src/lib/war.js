const Card = require('./card');
const Deck = require('./deck');

class War {
  constructor() {
    this.player = new Deck();
    this.player.shuffle();
    this.computer = this.player.splitDeck();
  }

  /**
   * Returns the players deck
   * @returns {Deck}
   */
  getPlayer() {
    return this.player;
  }

  /**
   * Returns the computer's deck
   * @returns {Deck}
   */
  getComputer() {
    return this.computer;
  }

  /**
   * Prints out the current number of cards in both the player's and computer's deck
   */
  printDeckInfo() {
    console.log(`Player ${this.player.getCardsCount()} : Computer ${this.computer.getCardsCount()}`);
  }

  /**
   * Plays a round of the game, including printing out the exciting action
   */
  playRound() {
    let oneCard = this.player.deal();
    let twoCard = this.computer.deal();
    const pool = new Deck([]);

    console.log(`${oneCard.getRank()} of ${oneCard.getSuit()} vs ${twoCard.getRank()} of ${twoCard.getSuit()} `);

    /**
     * WAR loop!
     * If the ranks match, both player and computer add a card to a prize pool
     * then play a new round of cards. If the new ranks still match, this continues
     * until either player or computer has a card with higher rank
     */
    while (oneCard.getRank() === twoCard.getRank()) {
      console.log('');
      console.log('!!!War!!! Each player adds a card to the pool');
      pool.take(this.player.deal());
      pool.take(this.computer.deal());
      oneCard = this.player.deal();
      twoCard = this.computer.deal();
      console.log(`${oneCard.getRank()} of ${oneCard.getSuit()} vs ${twoCard.getRank()} of ${twoCard.getSuit()} `);
    }

    if (oneCard.getRank() > twoCard.getRank()) {
      console.log('Player wins this hand');
      this.player.take(oneCard);
      this.player.take(twoCard);
      while (pool.getCardsCount() > 0) {
        this.player.take(pool.deal());
      }
    } else {
      console.log('Computer wins this hand');
      this.computer.take(oneCard);
      this.computer.take(twoCard);
      while (pool.getCardsCount() > 0) {
        this.player.take(pool.deal());
      }
    }
  }

  /**
   * Determines if the game is over
   * @returns {boolean}
   */
  isGameOver() {
    if (this.player.getCardsCount() === 0 || this.computer.getCardsCount() === 0) {
      return true;
    }
    return false;
  }

  /**
   * Gets the winner of the game
   */
  getWinner() {
    if (!this.isGameOver()) {
      console.log("The game is not over");
    } else if (this.player.getCardsCount()) {
      console.log("You are the winner!");
    } else {
      console.log("Computer is the winner!")
    }
  }

  /**
   * Both player and computer shuffle their decks
   */
  shuffleDecks() {
    this.player.shuffle();
    this.computer.shuffle();
  }
}

module.exports = War;
