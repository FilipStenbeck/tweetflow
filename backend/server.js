var express = require('express'),
    Q = require('q'),
    _ = require('lodash'),
    app = express(),
    TweetService = require('./tweetService'),
    twitterConfig = require('./twitterConfig'),
    tweetService = new TweetService(twitterConfig),
    createResponse;


/************************
* Server configuration
*************************/

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);


//Clean the response to get only the values we want
createResponse = function (tweets) {
    var tweetList = tweets.statuses;
    if (!tweetList || tweetList.length === 0) {
        return [];
    }
    return _.map(tweetList, function(tweet) {
        return  {
            text : tweet.text,
            name: tweet.user.screen_name,
            display_name : tweet.user.name,
            avatar_url : tweet.user.profile_image_url
        };
    });
}

/************************
* REST endpoints
*************************/

//search tweets by hashtag
app.get('/tweets/:hashtag', function (request, response) {
    var query = request.params.hashtag;

    tweetService.getTweet(query).then(function (tweets) {
        //response.send(tweets);
        response.send(createResponse(tweets));
    }, function (error) {
        console.error(error);
    });
});

app.listen(9999);

console.log("");
console.log("**********************************************");
console.log('The server is listening on port 9999');
console.log("**********************************************");