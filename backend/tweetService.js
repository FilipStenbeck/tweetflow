/*****************************************
* Get tweet from twitter 
* @return tweets as a promise 
* 
* @usage
* Create a module instance by calling new TweetService(twitterConfig);
* Pass in  a config object 
*	{
*  		consumer_key: TWITTER_PUBLIC_API_KEY,
*  		consumer_secret: TWITTER_SECRET_API_KEY,
*  		application_only: true,
*  		offline: false,
*	}
*
******************************************/

var Q = require('q'), 
	Twitter = require('mtwitter'), 
	FS = require('fs'), TweetService;

TweetService = function(config) {
	var twitter, getMockTweet, getTweetFromTwitter;

	//Setup Twitter connection settings
	twitter = new Twitter({
  		consumer_key: config.consumer_key,
  		consumer_secret: config.consumer_secret,
  		application_only: config.application_only
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

	return {
		getTweet : function(query) {
			if (config.offline) {
				return getMockTweet(query);
			} else {
				return getTweetFromTwitter(query);
			}
		}
	};
};

module.exports = TweetService;