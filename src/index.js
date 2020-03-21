import War from './lib/war';

const game = new War();
const ceiling = 100;
let shuffleCount = 0;

// while(!game.isGameOver()) {
while(!game.isGameOver()) {
  game.printDeckInfo();
  console.log('');
  game.playRound();
  console.log('');
  shuffleCount++;
  if (shuffleCount >= ceiling) {
    console.log('=======> Suffling the decks <=======');
    game.shuffleDecks();
    shuffleCount = 0;
  }
}

game.getWinner();
