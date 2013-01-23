var Deck = require('./deck');
var Player = require('./player');

module.exports = Game = function(players){

	//Set the players for the game.
	this.players = players || [];
	
	//maintain an internal list of players still in game.
	this._playersInGame = players || [];

	this.playDeck = new Deck();

	this.playDeck.shuffle();
	this.playDeck.shuffle();
	this.playDeck.shuffle();
	this.playDeck.shuffle();

	console.log(this.playDeck);

	//create a playing area deck. 
	// this is the deck of cards that are currently in play.
	this.playAreaDeck = new Deck();

	//empty the playAreaDeck;
	this.playAreaDeck.empty();
}

Game.prototype.start = function() {

	console.info('Starting game....');

	var currentPlayer, turnCounter = 0;

	//Minimum two players required to start the game.
	if(this.players.length < 2){
		throw {message: "Cannot start a game. Minimum two players required to start the game."}
	}


	this._distributeCards();

	for(var z = 0; z < this._playersInGame.length; z++){
		console.log(this._playersInGame[z] + 'has ' + this._playersInGame[z].deck);
	}


	while(!this.isWon()){

		
		currentPlayer = this._playersInGame[turnCounter % this._playersInGame.length];
		
		console.info('Turn: ' + turnCounter + ', Player: ' + currentPlayer);



		if(this.isPlayerInGame(currentPlayer)){
			var poppedCard = currentPlayer.deal();
			console.log(currentPlayer + 'played ' + poppedCard);
			this.playAreaDeck.push(poppedCard);
			if(this.hasWonTurn()){
				console.info('\t' + currentPlayer + ' has won this turn with deck: ' + this.playAreaDeck);

				currentPlayer.addCards(this.playAreaDeck.cards);
				currentPlayer.deck.shuffle();
				this.playAreaDeck.empty();

			}else{
				turnCounter++
			}

		}
	}

	console.info(this._playersInGame[0] + ' has won!!')
	//return the winning player
	return this._playersInGame[0];
};

/**
	Check if a the turn has been won.
	A player wins a turn if the last card (the card he played) 
	matches either in value or suite to the	
	last but one (second last) card in the playing area deck,

*/
Game.prototype.hasWonTurn = function() {
	var cards = this.playAreaDeck.cards;
	if(cards.length > 1){
		var c1 = cards[cards.length - 1];
		var c2 = cards[cards.length - 2];
		console.log('comparing ' + c1.value + ' and ' + c2.value);
		console.log('comparing ' + c1 + ' and ' + c2);

		if(c1.value === c2.value){
			console.log('MATCH FOUND!!! ');
			return true;
		}else{
			console.log('MATCH NOT FOUND!!')
			return false;
		}
	}else{
		return false;
	}


	return c.length > 1 && (c[c.length - 1].value === c[c.length - 2].value)


	var cardsInPlay = this.playAreaDeck.cards;
	var totalCardsInPlay = cardsInPlay.length;
	var lastCard, lastButOneCard
	if(totalCardsInPlay > 1){
		lastCard = cardsInPlay[totalCardsInPlay - 1];
		lastButOneCard = cardsInPlay[totalCardsInPlay - 2];

		if(lastCard.value === lastButOneCard.value){
			return true;
		}
	}

	return false;
};


/**
	This function distributes cards evently among all the players.
*/
Game.prototype._distributeCards = function() {

	console.log('starting to distribute cards...')
	var totalPlayers = this.players.length,
		cards = this.playDeck.cards,
		totalCard = cards.length;

	this.playDeck.shuffle();

	for(i = 0; i < totalCard; i++){
		this.players[i % totalPlayers].deck.push(this.playDeck.pop());
	}

	console.log('distributed all my cards.');

};

/**
	Add a player to the game
*/
Game.prototype.addPlayer = function(player) {
	this.players.push(player);
	this._playersInGame.push(player);
};


Game.prototype.isWon = function() {
	if(this._playersInGame === 1){
		return true;
	}
};

/**
	Check if the player is still in game.
	A player is still in game if it has atleast one cards in his deck
*/
Game.prototype.isPlayerInGame = function(player){
	var i, totalPlayersInGame = this._playersInGame.length;

	if(player.deck.cards.length){
		return true;
	}

	for(i = 0; i < totalPlayersInGame; i++){
		if(this._playersInGame[i] === player){
			this._playersInGame.splice(i, 1)
			return false;
		}
	}
}