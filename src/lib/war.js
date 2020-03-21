const Card = require('./card');
const Deck = require('./deck');

class War {
  constructor() {
    this.player = new Deck();
    this.player.shuffle();
    this.computer = this.player.splitDeck();
  }

  /**
   *
   * @returns {Deck}
   */
  getPlayer() {
    return this.player;
  }

  /**
   *
   * @returns {Deck}
   */
  getComputer() {
    return this.computer;
  }

  /**
   *
   */
  printDeckInfo() {
    console.log(`Player ${this.player.getCardsCount()} : Computer ${this.computer.getCardsCount()}`);
  }

  /**
   *
   */
  playRound() {
    let oneCard = this.player.deal();
    let twoCard = this.computer.deal();
    const pool = new Deck([]);

    console.log(`${oneCard.getRank()} of ${oneCard.getSuit()} vs ${twoCard.getRank()} of ${twoCard.getSuit()} `);

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

  isGameOver() {
    if (this.player.getCardsCount() === 0 || this.computer.getCardsCount() === 0) {
      return true;
    }
    return false;
  }

  getWinner() {
    if (this.player.getCardsCount()) {
      console.log("You are the winner!");
    } else {
      console.log("Computer is the winner!")
    }
  }

  shuffleDecks() {
    this.player.shuffle();
    this.computer.shuffle();
  }
}

module.exports = War;
