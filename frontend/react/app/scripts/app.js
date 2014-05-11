/** @jsx React.DOM */

/*
* Example url http://localhost:9000/?query=reactjs&interval=5000
*/

'use strict';
define(['tweet'], function (Tweet) {
	return React.createClass({
		
		getQueryParams: function (qs) {
	    	var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
	    	qs = qs.split("+").join(" ");

	    	while (tokens = re.exec(qs)) {
	        	params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	    	}

	    	return params;
		},

		getInitialState: function() {
		},

		componentWillMount: function() {
			//Get params from url
			var params = this.getQueryParams(document.location.search);

			this.setState({
				updateInterval : params.interval || 5000,
				query : params.query || "javascript"
			});
		},

		render: function() {
			return (
				React.DOM.div( {className:"container"}, 
					Tweet( {query:this.state.query, updateInterval:this.state.updateInterval})
				)
			);
		}
	});
});
