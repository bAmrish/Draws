Player = function(name, deck){
	this.name = name || '';
	this.deck = deck || [];
}

/**
	Add a card to player's deck
*/
Player.prototype.addCard = function(card){
	this.deck.addCard(card);
}

/**
	Add an array of cards to player's deck
*/
Player.prototype.addCards = function(cards){
	this.deck.addCard(cards);
}

Player.prototype.deal = function() {
	return this.deck.deal();
};