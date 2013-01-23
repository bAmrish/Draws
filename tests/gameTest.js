describe('DrawsGame', function(){
	var game;

	beforeEach(function(){
		game = new Game();
	});

	it('should have been defined', function(){
		expect(Game).toBeDefined();
	});

	it('should not start without atleast two players', function(){
		expect(game.start).toThrow();
	});

	it('should be able to add players to the game.', function(){
		expect(game.addPlayer).toBeDefined
		expect(game.players.length).toBe(0);
		game.addPlayer(new Player('Player 1'));
		expect(game.players.length).toBe(1);
	});

});