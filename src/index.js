import Card from './lib/card';
import Deck from './lib/deck';

const firstCard = new Card('Hearts', 1);
const firstDeck = new Deck();

console.log(firstDeck.shuffle().getCards());
