var Q = require('q');
var FS = require('fs');


/*****************************************
* Get tweet from twitter 
* @return tweets as apromise 
* 
* Pass in true to constructor to use mock data
******************************************/

var TweetService = function(offline) {
	
	//Private stuff
	var getMockTweet = function (query) {
		var deferred = Q.defer();
		FS.readFile("mockData.json", "utf-8", function (error, text) {
		    if (error) {
		        deferred.reject(new Error(error));
		    } else {
		        deferred.resolve(text);
		    }
		});
		return deferred.promise;
	};

	var getTweetFromTwitter = function (query) {
		var deferred = Q.defer();
		return deferred.promise; 
	};

	//Public API
	return {
		getTweet : function(query) {
			if (offline) {
				return getMockTweet(query);
			} else {
				return getTweetFromTwitter(query);
			}
		}
	};
};


module.exports = TweetService;