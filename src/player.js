var Deck = require('./deck');

module.exports = Player = function(name, deck){
	this.name = name || '';
	this.deck = deck || new Deck();
	this.deck.empty();
}

/**
	Add a card to player's deck
*/
Player.prototype.addCard = function(card){
	this.deck.push(card);
}

/**
	Add an array of cards to player's deck
*/
Player.prototype.addCards = function(cards){
	this.deck.addCards(cards);
}

Player.prototype.deal = function() {
	return this.deck.deal();
};

Player.prototype.inspect = Player.prototype.toString = function() {
	return this.name + '('  + this.deck.cards.length+ ' cards)'
};