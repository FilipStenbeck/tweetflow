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
			return new CustomEvent(this.QUERY_CHANGED, { 
		    	detail: {
		      		query: query,
		    	},
		    	bubbles: true
		  	});

		},

		formatText: function (text) {
			text = text.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?)/g,function(match) {
				return '<a href="' + match + '" target="top">' + match + '</a>'; 
			});
			return text;
		},

		QUERY_CHANGED : "the-query-changed"
	}
});