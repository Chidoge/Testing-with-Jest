const { googleSearch, calculator } = require('./script');

dbMock = [

	'dog.com',
	'cheesepuff.com',
	'disney.com',
	'dogpictures.com',
	'dogpictures2.com',
	'dogpictures3.com'
];

describe('Test googleSearch', () => {


	it('Test searching with undefined and null input', () => {

		expect(googleSearch(null, dbMock)).toEqual([]);
		expect(googleSearch(undefined, dbMock)).toEqual([]);
	})


	it('Test length limiting', () => {

		expect(googleSearch('dog', dbMock).length).toEqual(3);
	})	

})

describe('Test calculator', () => {


	it('Test calculator with undefined and null input', () => {

		expect(calculator(null, undefined, '+')).toEqual('Invalid operand');
		expect(calculator(undefined, 3, '+')).toEqual('Invalid operand');
	})


	it('Test normal calculations', () => {

		expect(calculator(3, 1, '+')).toEqual(4);
		expect(calculator(5, 8, '-')).toEqual(-3);
		expect(calculator(4.5, 5, '*')).toEqual(22.5);
		expect(calculator(77,7, '/')).toEqual(11);
	})	

	it('Test unexpected operator', () => {

		expect(calculator(3, 5, 'asdsa')).toEqual('Invalid operator');
	})

	it('Test divide by 0', () => {

		expect(calculator(4, 0, '/')).toEqual(Infinity);
	})

})

