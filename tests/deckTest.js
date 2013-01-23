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

	it('should have a pop method which removes and returns the top card from the deck.', function(){
		var topCard = newDeck.cards[0];
		var returnCard;

		expect(newDeck.pop).toBeDefined();
		expect(newDeck.cards.length).toBe(52);
		returnCard = newDeck.pop();
		expect(returnCard).toEqual(topCard);
		expect(newDeck.cards.length).toBe(51);

	});

	it('should have a pop method which removes and returns the top card from the deck.', function(){
		
		var topCard = newDeck.cards[0];
		var dealtCard;

		expect(newDeck.pop).toBeDefined();
		expect(newDeck.cards.length).toBe(52);
		dealtCard = newDeck.pop();
		expect(dealtCard).toEqual(topCard);
		expect(newDeck.cards.length).toBe(51);

	});

})
















