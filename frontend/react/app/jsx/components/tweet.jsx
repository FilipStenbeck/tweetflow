/** @jsx React.DOM */
'use strict';
define(['utils/tweetService', 'utils/animation', 'utils/appUtil'], function (tweetService, animation, appUtil) {

	return React.createClass({
		//cached tweets
		tweets : [],

		getInitialState: function() {
			return {}
		},

		updateTweet: function() {
			var tweet;
			//If force query update empty the tweet list 
			if (this.props.force === true) {
				this.tweets = [];
				this.props.force = false;
			}

			//if we have cached tweets render the next one
			if (this.tweets.length) {
				//get next tweet from cache
				tweet = this.tweets.pop();

				//Set new state
				this.setState({
					text: appUtil.formatText(tweet.text),
					display_name : tweet.display_name,
					name : '@' + tweet.name,
					avatar_url: tweet.avatar_url,
					animate : 'twitter media ' + animation.getCssName()
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
				<div className={this.state.animate} onClick={this.updateTweet} >
					<span className="pull-left">
    				<img className="media-object" src={this.state.avatar_url}/>
  					</span>
					  <div className="media-body">
					    <h1 className="media-heading">
					    	<div  dangerouslySetInnerHTML={{__html: this.state.text}}/>
					    </h1>
					    <span className="user-name">{this.state.display_name}
					    	<span className="user-id ">{this.state.name}</span>
					    </span> 
					  </div>
				</div>
			);
		}
	});
});
