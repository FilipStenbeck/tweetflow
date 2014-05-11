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
				<div className="twitter media">
					<a className="pull-left" href="#">
    				<img className="media-object" src={this.state.avatar_url} alt={this.state.name}/>
  					</a>
					  <div className="media-body">
					    <h2 className="media-heading">
					    	{this.state.text}
					    </h2>
					    <span className="user-name">{this.state.display_name}<span className="user-id">{this.state.name}</span></span> 
					  </div>
				</div>
			);
		}
	});
});
