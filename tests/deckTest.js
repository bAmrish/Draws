describe('Deck', function(){
	var newDeck;

	beforeEach(function(){
		newDeck = new Deck();
	});

	it('should be defined', function(){
		expect(Deck).toBeDefined();
	});

	it('should have 52 cards', function(){
		expect(newDeck.cards).toBeDefined();
		expect(newDeck.cards.length).toBe(52);
	});

	it('should have a shuffle method and it should work', function(){
		var i, l;

		expect(newDeck.shuffle).toBeDefined();

		expect(newDeck.cards.length).toBe(52);
		newDeck.shuffle();
		expect(newDeck.cards.length).toBe(52);
	});

	it('should have a deal function and it should work', function(){
		
		var dealtCard

		expect(newDeck.deal).toBeDefined();
		expect(newDeck.cards.length).toBe(52);
		var dealtCards = newDeck.deal();
		expect(dealtCards.length).toBe(1);
		expect(dealtCards[0] instanceof Card).toBe(true);
		expect(newDeck.cards.length).toBe(51);

	});

	it('should have an empty function that would remove all the cards from the deck.', function(){
		expect(newDeck.empty).toBeDefined();
		expect(newDeck.cards.length).toBe(52);
		newDeck.empty();
		expect(newDeck.cards.length).toBe(0);
	});


	it('should have an add card method and it should be able to add a card to the deck.', function(){
		var card = new Card(Card.DIAMOND, 1);
		expect(newDeck.addCard).toBeDefined();
		newDeck.empty();
		expect(newDeck.cards.length).toBe(0);
		newDeck.addCard(card);
		expect(newDeck.cards.length).toBe(1);		
		expect(newDeck.cards[0]).toEqual(card);
	});
})