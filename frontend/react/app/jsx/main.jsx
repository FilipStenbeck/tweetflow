/** @jsx React.DOM */
'use strict';

require.config({
	baseUrl: 'scripts',
	paths: {
		react: 'script/react.min',
		jquery: '../bower_components/jquery/dist/jquery.min'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app'], function (App) {
	// use app here
	React.renderComponent(
		<App />,
		document.getElementById('app')
	);
});