/** @jsx React.DOM */
'use strict';
define(['tweet'], function (Tweet) {
	return React.createClass({
		getInitialState: function() {
		},
		render: function() {
			return (
				React.DOM.div( {className:"container"}, 
					Tweet( {updateInterval:"5000"})
				)
			);
		}
	});
});
