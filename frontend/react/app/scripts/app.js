/** @jsx React.DOM */
'use strict';
define(['tweetService', 'tweet'], function (tweetService, Tweet) {
	return React.createClass({
		getInitialState: function() {
			tweetService.getTweets();
		},
		render: function() {
			return (
				React.DOM.div( {className:"container"}, 
					Tweet(null )
				)
			);
		}
	});
});
