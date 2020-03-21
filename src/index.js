import War from './lib/war';

const game = new War();

while(!game.isGameOver()) {
  game.printDeckInfo();
  console.log('');
  game.playRound();
  console.log('');
}
