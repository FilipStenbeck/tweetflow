/** @jsx React.DOM */
'use strict';
define(['tweetService'], function (tweetService) {

	return React.createClass({

		tweets : null,

		getInitialState: function() {
			return {}
		},

		componentWillMount: function() {
			var tweet;
			tweetService.getTweets('javascript', function(data, textStatus, jqXHR ) {
				this.tweets = data;
				tweet = this.tweets[0];
				this.setState({
					text: tweet.text,
					display_name : tweet.display_name,
					name : tweet.name,
					avatar_url: tweet.avatar_url
				});
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
