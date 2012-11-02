Card = function(suite, value){
	this.suite = suite;
	this.value = value;
}

Card.suites = {
	SPADE: 'SPADE',
	HEART: 'HEART',
	CLUB: 'CLUB',
	DIAMOND: 'DIAMOND'
}

Card.prototype.toString = function(){
	return this.value + ' of ' + this.suite;
}