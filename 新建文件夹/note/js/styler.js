$(document).ready(function(){

		//STYLER
		jQuery('#styler-button').click(function(){						
			if(parseInt(jQuery('#styler').css('left')) != '0'){
				jQuery('#styler').animate({
					left: '0'
				},500);
			}else{
				jQuery('#styler').animate({
					left: '-187'
				},500);
			}
			
			return false;
		});
		
		jQuery('#styler-texture-1').click(function(){
			jQuery('#styler-texture-1').parent().attr('id','');
			jQuery('#styler-texture-2').parent().attr('id','');
			jQuery('#styler-texture-3').parent().attr('id','');
			jQuery(this).parent().attr('id','selected');
			
			jQuery('#sidebar-texture').css('background-image','none');			
			return false;
		});
		jQuery('#styler-texture-2').click(function(){
			jQuery('#styler-texture-1').parent().attr('id','');
			jQuery('#styler-texture-2').parent().attr('id','');
			jQuery('#styler-texture-3').parent().attr('id','');
			jQuery(this).parent().attr('id','selected');
			
			jQuery('#sidebar-texture').css('background-image','url(images/sidebar-texture-leather.png)');		
			return false;
		});
		jQuery('#styler-texture-3').click(function(){
			jQuery('#styler-texture-1').parent().attr('id','');
			jQuery('#styler-texture-2').parent().attr('id','');
			jQuery('#styler-texture-3').parent().attr('id','');
			jQuery(this).parent().attr('id','selected');
			
			jQuery('#sidebar-texture').css('background-image','url(images/sidebar-texture-carbon.png)');		
			return false;
		});
		
		jQuery('#styler-colorpicker').farbtastic(function(color){
			jQuery('#sidebar-color').css('background-color',color);
		});

});