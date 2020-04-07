import War from './lib/war';

const game = new War();
const ceiling = 100;
let shuffleCount = 0;

while(!game.isGameOver()) {
  game.printDeckInfo();
  game.playRound();

  // Because the initial randomization of the decks can lead to an infinite loop of play, after a max number of rounds the decks are reshuffled
  shuffleCount++;
  if (shuffleCount >= ceiling) {
    console.log('');
    console.log('=======> Suffling the decks <=======');
    console.log('');
    game.shuffleDecks();
    shuffleCount = 0;
  }
}

game.getWinner();
