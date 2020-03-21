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
    const pool = [];

    console.log(`${oneCard.getRank()} of ${oneCard.getSuit()} vs ${twoCard.getRank()} of ${twoCard.getSuit()} `);

    if (oneCard.getRank() === twoCard.getRank()) {
      console.log('!!!War!!!');
    }
    while (oneCard.getRank() === twoCard.getRank()) {
      pool.push(this.player.deal());
      pool.push(this.player.deal());
      oneCard = this.player.deal();
      twoCard = this.player.deal();
      console.log(`Each player adds a card to the pool`);
      console.log(`${oneCard.getRank()} of ${oneCard.getSuit()} vs ${twoCard.getRank()} of ${twoCard.getSuit()} `);
    }

    if (oneCard.getRank() > twoCard.getRank()) {
      console.log('Player wins this hand');
      this.player.take(oneCard);
      this.player.take(twoCard);
      while (pool.length) {
        this.player.take(pool.pop());
      }
    } else {
      console.log('Computer wins this hand');
      this.computer.take(oneCard);
      this.computer.take(twoCard);
      while (pool.length) {
        this.computer.take(pool.pop());
      }
    }
  }

  isGameOver() {
    if (this.player.length === 0 || this.computer.length === 0) {
      return true;
    }
    return false;
  }

  getWinner() {
    if (this.player.length) {
      console.log("You are the winner!");
    } else {
      console.log("Computer is the winner!")
    }
  }
}

module.exports = War;
