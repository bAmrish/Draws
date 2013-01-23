module.exports = Card = function(suite, value){
	this.suite = suite;
	this.value = value;
}

Card.suites = {
	SPADE: 'SPADE',
	HEART: 'HEART',
	CLUB: 'CLUB',
	DIAMOND: 'DIAMOND'
}

Card.prototype.inspect = Card.prototype.toString = function(){
	var symbol;

	switch (this.suite){

		case 'SPADE':
			symbol = '\u2660'
			break;
		case 'HEART':
			symbol = '\u2665'
			break;
		case 'DIAMOND':
			symbol = '\u2666'
			break;
		case 'CLUB':
			symbol = '\u2663'
			break;
		default:
			console.log('unable to find symbol for suite: ' + this.suite);

	}

	return symbol + this.value.toString();
}