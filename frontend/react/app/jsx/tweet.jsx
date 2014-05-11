/** @jsx React.DOM */
'use strict';
define([], function () {
	return React.createClass({
		getInitialState: function() {
			return {message: 'This will be a tweet'};
		},
		goodbye: function(event) {
			this.setState({message: 'yup a tweet'});
		},
		render: function() {
			return (
				
				<div className="twitter media">
					<a className="pull-left" href="#">
    				<img className="media-object" src="http://pbs.twimg.com/profile_images/378800000494919887/9f140a35ebf9a185cd7961d118cec1f2_normal.png" alt="..."/>
  					</a>
					  <div className="media-body">
					    <h2 className="media-heading">
					    	RT @nordicjs: Say hello to @nexxylove - one of our amazing speakers at http://t.co/fniLrb4D7W &lt;3 http://t.co/A15KClTphB
					    </h2>
					    <span className="user-name">Emily Rose <span className="user-id">nexxylove</span></span> 
					  </div>
				</div>
			);
		}
	});
});
