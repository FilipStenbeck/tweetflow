'use strict';
define([], function () {

	return { 
		getQueryParams: function (qs) {
	    	var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
	    	qs = qs.split("+").join(" ");
	    	while (tokens = re.exec(qs)) {
	        	params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	    	}
	    	return params;
		},

		createQueryChangedEvent: function (query) {
			return new CustomEvent(AppUtil.QUERY_CHANGED, { 
		    	detail: {
		      		query: query,
		    	},
		    	bubbles: true
		  	});

		},

		QUERY_CHANGED : "the-query-changed"
	}
});