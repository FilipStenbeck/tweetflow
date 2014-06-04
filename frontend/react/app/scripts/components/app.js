/** @jsx React.DOM */

/*
* Example url http://localhost:9000/?query=reactjs&interval=5000
*/

'use strict';
define(['components/tweet','components/menu','utils/appUtil'], function (Tweet, Menu, AppUtil) {
	return React.createClass({
		
		setNewQuery: function (event) {
			this.setState({
				query : event.detail.query,
				force : true
			});
		},

		componentWillMount: function() {
			//Get params from url
			var params = AppUtil.getQueryParams(document.location.search);

			this.setState({
				updateInterval : params.interval || 5000,
				query : params.query || "javascript",
				force : false
			});
		},

		componentDidMount: function () {
  			this.getDOMNode().addEventListener(AppUtil.QUERY_CHANGED, this.setNewQuery);
		},

		render: function() {
			return (
				React.DOM.div( {className:"container"}, 
					Tweet( {query:this.state.query, updateInterval:this.state.updateInterval, force:this.state.force}),
					Menu(null)
				)
			);
		}
	});
});
