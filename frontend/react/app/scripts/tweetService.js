define(['jquery'], function ($) {

	return {
		getTweets: function () {
			$.getJSON('http://localhost:9999/tweets/nordicjs', function( data, textStatus, jqXHR ) {
				console.log(data);
			});
		}	
	}
		
});