describe('Deck', function(){
	var newDeck;

	beforeEach(function(){
		newDeck = new Deck();
	})

	it('should be defined', function(){
		expect(Deck).toBeDefined();
	})

	it('should have 52 cards', function(){
		expect(newDeck.cards).toBeDefined();
		expect(newDeck.cards.length).toBe(52);
	})

	it('should have a shuffle method and it should work', function(){
		var i, l;

		expect(newDeck.shuffle).toBeDefined();

		expect(newDeck.cards.length).toBe(52);
		newDeck.shuffle();
		for(i = 0, l = newDeck.cards.length; i < l; i++){
			console.log(newDeck.cards[i] );
		}
		expect(newDeck.cards.length).toBe(52);


	})
})