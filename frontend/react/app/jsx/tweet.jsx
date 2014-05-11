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
				<button className="btn btn-primary" onClick={this.goodbye}>{this.state.message}</button>
			);
		}
	});
});
