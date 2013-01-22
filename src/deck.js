Deck = function(){
	this.init();
}

/**
	Initialize the deck;
*/
Deck.prototype.init = function(){
	var suite, i;

	this.cards = [];

	for(suite in Card.suites){
		for(i = 1; i <=13; i++ ){
			this.cards.push(new Card(Card.suites[suite], i));
		}
	}
}

/**
	Shuffle the cards.
*/
Deck.prototype.shuffle = function(){
	var cards = this.cards, shuffledCards = [], randomCard;
		while(cards.length){
			randomCard = cards.splice(Util.getRandomWholeNumber(0, cards.length - 1), 1);
			shuffledCards.push(randomCard);
		}

	this.cards = shuffledCards;

	return this;
}

/**
	Deal a card. Deal function deals first card from the deck of cards.
*/
Deck.prototype.deal = function() {
	if(this.cards.length){
		return this.cards.splice(0, 1)
	}
};

/**
	Empty all the cards in the deck.
*/
Deck.prototype.empty = function() {
	this.cards = [];
};


/**
	Adds a single card to the deck.
*/
Deck.prototype.addCard = function(card) {
	this.cards.push(card);
};

/**
	Adds an array of card to the deck.
*/
Deck.prototype.addCards = function(cards) {
	var i, totalCards = cards && cards.length || 0;

	for(i = 0; i < totalCards; i++){
		this.addCard(cards[i]);
	}
};
