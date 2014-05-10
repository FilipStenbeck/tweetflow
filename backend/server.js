var express = require('express');
var app = express();
var TweetService = require('./TweetService');
var tweetService = new TweetService(true);

/*********************************
* Configure, allow cross domain 
**********************************/ 

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

/************************
* REST endpoints
*************************/


//Test resource
app.get('/test', function (req, res) {
    tweetService.getTweet().then(function (text) {
            res.send(text);
        }, function (error) {
            console.error(error);
    });
});

//get bus departures
app.get('/tweets/:hashtag', function (request, response) {
    var query = request.params.hashtag;

    tweetService.getTweet(query).then(function (text) {
        response.send(text);
    }, function (error) {
        console.error(error);
    });
});


app.listen(9000);

console.log("");
console.log("**********************************************");
console.log('The server is listening on port 9000');
console.log("**********************************************");