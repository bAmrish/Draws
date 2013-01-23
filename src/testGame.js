Game = require('./game')
console.log(Game);
var game = new Game([new Player('Player 1'), new Player('Player 2')]);
game.start();

