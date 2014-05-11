/** @jsx React.DOM */
'use strict';

require.config({
	baseUrl: 'scripts',
	paths: {
		react: 'script/react.min'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app', 'tweet'], function (App, Tweet) {
	// use app here
	React.renderComponent(App(null ),document.getElementById('app'));	
});