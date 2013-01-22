describe('Card', function(){
	it('should be defined', function(){
		expect(Card).toBeDefined();
		expect(Card.suites).toBeDefined();
		expect(Card.suites.SPADE).toBeDefined();
		expect(Card.suites.HEART).toBeDefined();
		expect(Card.suites.CLUB).toBeDefined();
		expect(Card.suites.DIAMOND).toBeDefined();
	})

	it('should have suite and value properties', function(){
		var newCard = new Card('CLUB', 4);
		expect(newCard.suite).toBeDefined();
		expect(newCard.value).toBeDefined();
		expect(newCard.suite).toBe('CLUB');
		expect(newCard.value).toBe(4);
	})
})