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
				<div className="show-menu">
					<div className="hidden-menu">
						<form className="form-inline">
						    <input type="text" className="form-control" id="query" value={this.statevalue} onChange={this.handleChange} placeholder="Enter query"/>
						  <button  className="btn btn-primary" onClick={this.handleClick}>Search</button>
						</form>
					</div>
				</div>
			);
		}
	});
});
