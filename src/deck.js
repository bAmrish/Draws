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