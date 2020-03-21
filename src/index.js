import War from './lib/war';

const game = new War();
const ceiling = 100;
let shuffleCount = 0;

while(!game.isGameOver()) {
  game.printDeckInfo();
  game.playRound();
  shuffleCount++;
  if (shuffleCount >= ceiling) {
    console.log('');
    console.log('=======> Suffling the decks <=======');
    game.shuffleDecks();
    shuffleCount = 0;
  }
}

game.getWinner();
