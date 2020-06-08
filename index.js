'use strict';

function getAnime(anime){
	fetch(`https://hummingbirdv1.p.rapidapi.com/anime/${anime}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hummingbirdv1.p.rapidapi.com",
		"x-rapidapi-key": "79f28d6d2emshf17f9513309237ep1154d5jsnd8e0f1c90364"
	}
	})
	.then(response => response.json())
	.then(responseJson => displayResults(responseJson))
	.catch(err => {
		console.log(err);
	});
}

function displayResults(responseJson) {
	console.log(responseJson);
	$('#results-list').empty();

	$('.dogresults').removeClass('hidden');
}

