/** @jsx React.DOM */
'use strict';
define(['utils/appUtil'], function (AppUtil) {

	return React.createClass({

		handleClick: function (event) {
			event.preventDefault();
			this.getDOMNode().dispatchEvent(AppUtil.createQueryChangedEvent(this.state.value));			
		},

		 handleChange: function(event) {
    		this.setState({value: event.target.value});
  		},

		render: function() {
			return (
				React.DOM.div( {className:"show-menu"}, 
					React.DOM.div( {className:"hidden-menu"}, 
						React.DOM.form( {className:"form-inline"}, 
						    React.DOM.input( {type:"text", className:"form-control", id:"query", value:this.statevalue, onChange:this.handleChange, placeholder:"Enter query"}),
						  React.DOM.button(  {className:"btn btn-primary", onClick:this.handleClick}, "Search")
						)
					)
				)
			);
		}
	});
});
