/** @jsx React.DOM */
'use strict';
define(['tweetService'], function (tweetService) {

	return React.createClass({
		//cached tweets
		tweets : [],

		getInitialState: function() {
			return {}
		},

		updateTweet: function() {
			var tweet;
			//if we have cached tweets render the next
			if (this.tweets.length) {
				tweet = this.tweets.pop();
				this.setState({
					text: tweet.text,
					display_name : tweet.display_name,
					name : tweet.name,
					avatar_url: tweet.avatar_url
				});
			//else get more tweets
			} else {
				tweetService.getTweets('javascript', function(data, textStatus, jqXHR ) {
					this.tweets = data;
				}.bind(this));	
			}
		},

		componentWillMount: function() {
			var tweet;
			//Get tweets
			tweetService.getTweets('javascript', function(data, textStatus, jqXHR ) {
				this.tweets = data;
				tweet = this.tweets[0];
				this.setState({
					text: tweet.text,
					display_name : tweet.display_name,
					name : tweet.name,
					avatar_url: tweet.avatar_url
				});
				//Setup heartbeat
				setInterval(this.updateTweet, this.props.updateInterval);
			}.bind(this));
		},

		render: function() {
			return (	
				React.DOM.div( {className:"twitter media"}, 
					React.DOM.a( {className:"pull-left", href:"#"}, 
    				React.DOM.img( {className:"media-object", src:this.state.avatar_url, alt:this.state.name})
  					),
					  React.DOM.div( {className:"media-body"}, 
					    React.DOM.h2( {className:"media-heading"}, 
					    	this.state.text
					    ),
					    React.DOM.span( {className:"user-name"}, this.state.display_name,React.DOM.span( {className:"user-id"}, this.state.name)) 
					  )
				)
			);
		}
	});
});
