const googleSearch = require('./script');

dbMock = [

	'dog.com',
	'cheesepuff.com',
	'disney.com',
	'dogpictures.com',
	'dogpictures2.com',
	'dogpictures3.com'
];


it('Test length limiting', () => {

	expect(googleSearch('dog', dbMock).length).toEqual(3);
})