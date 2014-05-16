/** @jsx React.DOM */
'use strict';
define(['tweetService'], function (tweetService) {

	return React.createClass({
		//cached tweets
		tweets : [],

		//Animation css
		animations : [
			'shake animated',
			'flip animated',
			'tada animated',
			'wobble animated',
			'rubberBand animated',
			'flip animated',
			'wobble animated',
			'rubberBand animated',
			'tada animated',
			'swing animated',
			'flip animated',
			'shake animated',
			'pulse animated',
			'tada animated',
			'flip animated',
			'rubberBand animated',
		],

		getInitialState: function() {
			return {}
		},

		updateTweet: function() {
			var tweet;

			//if we have cached tweets render the next one
			if (this.tweets.length) {
	
				//get next tweet from cache
				tweet = this.tweets.pop();

				//Set new state
				this.setState({
					text: tweet.text,
					display_name : tweet.display_name,
					name : '@' + tweet.name,
					avatar_url: tweet.avatar_url,
					animate : 'twitter media ' + this.animations[this.tweets.length]
				});

			//else get more tweets
			} else {
				tweetService.getTweets(this.props.query, function(data, textStatus, jqXHR ) {
					this.tweets = data;
				}.bind(this));	
			}
		},

		componentWillMount: function() {
			var tweet;
			//Get tweets
			tweetService.getTweets(this.props.query, function(data) {
				//Setup cache
				this.tweets = data;
				
				//Update state
				this.updateTweet();
				
				//Setup heartbeat
				setInterval(this.updateTweet, this.props.updateInterval);

			}.bind(this));
		},

		render: function() {
			return (	
				React.DOM.div( {className:this.state.animate} , 
					React.DOM.span( {className:"pull-left"}, 
    				React.DOM.img( {className:"media-object", src:this.state.avatar_url})
  					),
					  React.DOM.div( {className:"media-body"}, 
					    React.DOM.h1( {className:"media-heading"}, 
					    	this.state.text
					    ),
					    React.DOM.span( {className:"user-name"}, this.state.display_name,
					    	React.DOM.span( {className:"user-id " }, this.state.name)
					    ) 
					  )
				)
			);
		}
	});
});
