const fetch = require('node-fetch');


const getPeople = (fetch) => {

	return fetch('https://swapi.co/api/people')
		.then(response => response.json())
		.then(data => {
			return {
				count : data.count,
				results : data.results
			}
		})
}

const getPeopleAsyncAwait = async (fetch) => {

	try {
		const getRequest = await fetch('https://swapi.co/api/people');
		const data = await getRequest.json();
		return {
			count : data.count,
			results : data.results
		}
	} 
	catch (error) {
		return('Error');
	}
}


module.exports = {
	getPeople,
	getPeopleAsyncAwait 
}