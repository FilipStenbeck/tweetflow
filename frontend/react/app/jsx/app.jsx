/** @jsx React.DOM */
'use strict';
define(['tweetService', 'tweet'], function (tweetService, Tweet) {
	return React.createClass({
		getInitialState: function() {
			tweetService.getTweets();
		},
		render: function() {
			return (
				<div className="container">
					<Tweet />
				</div>
			);
		}
	});
});
