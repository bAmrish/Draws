module.exports = Util = {
	/**
		This function returns a random whole number
		between the min and max (both inclusive).
	**/    
	getRandomWholeNumber: function(min, max){
		return Math.round(min + Math.random() * (max - min));
	}
	
}

