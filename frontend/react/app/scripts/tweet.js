/** @jsx React.DOM */
'use strict';
define(['tweetService'], function (tweetService) {
	return React.createClass({
		getInitialState: function() {
			return {message: 'This will be a tweet'};
		},
		goodbye: function(event) {
			this.setState({message: 'yup a tweet'});
		},
		render: function() {
			return (
				
				React.DOM.div( {className:"twitter media"}, 
					React.DOM.a( {className:"pull-left", href:"#"}, 
    				React.DOM.img( {className:"media-object", src:"http://pbs.twimg.com/profile_images/378800000494919887/9f140a35ebf9a185cd7961d118cec1f2_normal.png", alt:"..."})
  					),
					  React.DOM.div( {className:"media-body"}, 
					    React.DOM.h2( {className:"media-heading"}, 
					    	" RT @nordicjs: Say hello to @nexxylove - one of our amazing speakers at http://t.co/fniLrb4D7W <3 http://t.co/A15KClTphB "
					    ),
					    React.DOM.span( {className:"user-name"}, "Emily Rose ", React.DOM.span( {className:"user-id"}, "nexxylove")) 
					  )
				)
			);
		}
	});
});
