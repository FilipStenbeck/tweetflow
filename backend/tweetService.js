/*****************************************
* Get tweet from twitter 
* @return tweets as a promise 
* 
* @usage
* Create a singelton by calling new TweetService(twitterConfig);
* 1st argument a config object with consumer_key and consumer_secret
* 2nd argument set to true for offline/mockdata (optional)
*
******************************************/

var Q = require('q'), 
	Twitter = require('mtwitter'), 
	FS = require('fs'), TweetService;

TweetService = function(config, offline) {
	var twitter, getMockTweet, getTweetFromTwitter;

	//Private stuff
	twitter = new Twitter({
  		consumer_key: config.consumer_key,
  		consumer_secret: config.consumer_secret,
  		application_only: true
	});

	getMockTweet = function (query) {
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

	getTweetFromTwitter = function (query) {
		var deferred = Q.defer();

		twitter.get('search/tweets', {q: query}, function(error, item) {
      		if (error) {
		        deferred.reject(new Error(error));
		    } else {
		        deferred.resolve(item);
		    }
		});
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