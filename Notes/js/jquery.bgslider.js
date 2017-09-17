/*

Background Slider v1.1

Copyright (C) ThemePrince.com - All rights reserved!

*/

jQuery.fn.bgSlider = function() {	
	//get arguments	
	var args = arguments[0] || {};    
	var fade_speed = args.speed;
	var pause = args.pause;
	var delay_on_start = args.delay;
	
	var i = 0; //curr index
	var actr = 0;
	
	if(!fade_speed){fade_speed = 1200;}
	if(!pause){pause = 5000;}
	
	var this_div = jQuery(this);
	
	//get images
	
	var imgs = new Array();
	jQuery('img',this).each(function(){		
		imgs[actr] = jQuery(this).attr('src');		
		
		jQuery(this).remove();
		this_div.append('<div id="bg_slider-'+actr+'" class="bg_slider-img"></div>');
				
		if(actr == 0){
			jQuery('#bg_slider-'+actr).css({'background-image':'url('+imgs[actr]+')'});
		}else{
			jQuery('#bg_slider-'+actr).css({'opacity':'0','background-image':'url('+imgs[actr]+')'});
		}
		
		
		actr++;
	});
	
			
	
	
	//START ROTATING
	
	var change = function(){	
		var j = i + 1;
		
		if(imgs.length == j){
			j = 0;
		}
	
		//fade in next slide
		jQuery('#bg_slider-'+j).animate({'opacity':'1'},{ queue: false, duration: fade_speed });
		
		//fade out current slide
		jQuery('#bg_slider-'+i).animate({'opacity':'0'},{ queue: false, duration: fade_speed });		
		
		//change current index
		i = j;
		
		//start over
		setTimeout(change,pause);
	};
	
	
	if(delay_on_start){
		var x=setTimeout(function(){
			if(imgs.length > 1){
				var t=setTimeout(change,pause);	
			}
		},delay_on_start);
	}else{
		if(imgs.length > 1){
			var t=setTimeout(change,pause);	
		}
	}
	
	
		
	
};