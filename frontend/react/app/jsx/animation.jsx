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
		//Get a new animation css and make sure its a diffrent one than the last.  
    	getCssName : function () {
       		var newId = Math.floor(Math.random() * animations.length);
        	if (newId !== lastId ) {
          		lastId = newId; 
      			return animations[lastId];
        	}
        	else {
        		this.getCssName();
        	}
    	}	
	}
});
	