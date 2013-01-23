Game = function(players){

	//Set the players for the game.
	this.players = players || [];
	
	//maintain an internal list of players still in game.
	this._playersInGame = players || [];

	//create a playing area deck. 
	// this is the deck of cards that are currently in play.
	this.playAreaDeck = new Deck();

}

Game.prototype.start = function() {
	//Minimum two players required to start the game.
	if(this.players.length < 2){
		return throw {message: "Cannot start a game. Minimum two players required to start the game."}
	}

	while(!this.isWon()){

	}

	//return the winning player
	return this._playersInGame[0];
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
Game.protype.isPlayerInGame = function(player){
	var i, totalPlayersInGame = this._playersInGame.length;

	if(player.deck.cards.length){
		return true;
	}

	for(i = 0; i < totalPlayersInGame; i++){
		if(this._playersInGame[i] === player){
			this._playersInGame.splice(i, 1)
		}
	}

	return false;
}

/**
	Check if a the turn has been won.
	A player wins a turn if the last card (the card he played) 
	matches either in value or suite to the	
	last but one (second last) card in the playing area deck,

*/
Game.prototype.hasWonTurn = function() {
	var cardsInPlay = this.playAreaDeck.cards;
	var totalCardsInPlay = cardsInPlay.length;
	var lastCard, lastButOneCard
	if(totalCardsInPlay > 1){
		lastCard = cardsInPlay[totalCardsInPlay - 1];
		lastButOneCard = cardsInPlay[totalCardsInPlay - 2];

		if(lastCard.suite === lastButOneCard.suite || lastCard.value === lastButOneCard.value){
			return true;
		}
	}

	return false;
};

