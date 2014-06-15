define([], function () {
	var animations = [
		'wobble animated',
		'swing animated',
		'shake animated',
		'pulse animated',
		'tada animated',
		'flip animated', 		
		'rubberBand animated',
		'bounceIn animated',
		'bounceInUp animated',
		'bounceInDown animated',
		'rotateIn animated',
		'lightSpeedIn animated'
	];
	lastId = -1;
	
	return {
		//Get a new animation css and make sure its a diffrent one than the last
    	getCssName : function () {
       		var newId = Math.floor(Math.random() * animations.length);
        	while (newId === lastId ) {
      			newId = Math.floor(Math.random() * animations.length);
        	}
          	lastId = newId; 
        	return animations[newId];
    	}	
	}
});
	