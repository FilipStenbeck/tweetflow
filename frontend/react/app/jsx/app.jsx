/** @jsx React.DOM */
'use strict';
define(['tweet'], function (Tweet) {
	return React.createClass({
		getInitialState: function() {
			
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
