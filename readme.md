# War, the card game

A vanilla js implementation of the card game war, with unit tests.

## Requirements

- NodeJs v12

## How to Install and Build

`npm install && npm run build`

## How to Play

`npm run play`

## Tests

`npm run test`

### __Note__

Because this is a deterministic game (there are no choices, and it is thus not truely a game), there are scenarios in
 which game play can continue indefinitely. To prevent this, the player and computer shuffle decks every 100th round
  of the game.
