define(['jquery'], function ($) {

	return {
		getTweets: function (query, callback) {
			//$.getJSON('http://localhost:9999/tweets/' + query, callback);
			$.getJSON('http://tweetflow-filip.rhcloud.com/tweets/' + query, callback);
		}	
	}
		
});