describe('Player', function(){
	var firstPlayer;

	beforeEach(function(){
		firstPlayer = new Player('Player 1');
	});

	it('should have a name', function(){
		expect(firstPlayer.name).toBeDefined();
		expect(firstPlayer.name).toBe('Player 1');
	});

	it('should have a deck of cards', function(){
		expect(firstPlayer.deck).toBeDefined();
	});
});