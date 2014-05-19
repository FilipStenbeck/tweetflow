define([], function () {
	var animations = [
		'wobble animated',
		'swing animated',
		'shake animated',
		'pulse animated',
		'tada animated',
		'flip animated',
		'rubberBand animated',
	];
	lastId = -1;
	return {
		//Get a new quote and make sure its a diffrent one than the last.  
    	getName : function () {
       		var newId = lastId;
        	while (newId === lastId ) {
          		newId = Math.floor(Math.random() * animations.length);
        	}
        	lastId = newId; 
      		return animations[lastId];
    	}	
	}
});
	
