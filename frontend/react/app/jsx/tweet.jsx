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
			console.log("heartbeat")
			//if we have cached tweets render the next one
			if (this.tweets.length) {
				tweet = this.tweets.pop();
				this.setState({
					text: tweet.text,
					display_name : tweet.display_name,
					name : '@' + tweet.name,
					avatar_url: tweet.avatar_url
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
				<div className="twitter media">
					<span className="pull-left">
    				<img className="media-object" src={this.state.avatar_url}/>
  					</span>
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
