const googleDatabase = [
	
	'cats.com',
	'souprecipes.com',
	'flowers.com',
	'animals.com',
	'catpictures.com',
	'myfavouritecats.com',
	'catpictures2.com',
];

const googleSearch = (searchInput, db) => {

	const matches = db.filter(website => {
		return website.includes(searchInput);
	})

	return matches.length > 3 ? matches.slice(0, 3) : matches;

} 


const calculator = (a, b, op) => {

	if (a == 0 || b == 0) {

	}
	else if (!a || !b) {
		return 'Invalid operand';
	}
	
	switch(op) {
		case '+' :
			return a + b;
		case '-' : 
			return a - b;
		case '*' : 
			return a * b;
		case '/' :
			return a / b;
		default :
			return 'Invalid operator';
	}
}
module.exports = {
	googleSearch : googleSearch,
	calculator : calculator
};