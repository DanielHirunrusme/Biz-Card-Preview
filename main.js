$(document).ready(function(){


	$('.flip').bind('click', flip);
	
	$('.flip').draggable({
		containment: "parent",
    	start: function(event, ui) {
        	$(this).addClass('noclick');
    	}
	});

	function flip(){
		if($(this).hasClass('noclick')) { 
			$(this).removeClass('noclick');
		} 
		else {
			/* remove dropshadow while flipping */
			var card = $(this);
			$(this).removeClass('addShadow').addClass('removeShadow');
			setTimeout(function(){
				console.log('test')
				card.removeClass('removeShadow').addClass('addShadow');
			}, 500);
			
			$(this).find('.card').hasClass( "flipped" ) ? $(this).find('.card.flipped').removeClass('flipped') : $(this).find('.card').addClass('flipped');
		}
		
	}

});


