$(document).ready(function(){
	//QUICKSAND
	
		// get the action filter option item on page load
		  var $filterType = jQuery('.pf_categories li.active a').attr('class');
			
		  // get and assign the portfolio-3c element to the
			// $holder varible for use later
		  var $holder = jQuery('ul.portfolio-3c,ul.portfolio-2c,ul.portfolio-1c');

		  // clone all items within the pre-assigned $holder element
		  var $data = $holder.clone();

		  // attempt to call Quicksand when a filter option
			// item is clicked
			jQuery('.pf_categories li a').click(function(e) {
				// reset the active class on all the buttons
				jQuery('.pf_categories li').removeClass('active');
				
				// assign the class of the clicked filter option
				// element to our $filterType variable
				var $filterType = jQuery(this).attr('class');
				jQuery(this).parent().addClass('active');
				
				if ($filterType == 'all') {
					// assign all li items to the $filteredData var when
					// the 'All' filter option is clicked
					var $filteredData = $data.find('li');
				} 
				else {
					// find all li elements that have our required $filterType
					// values for the data-type element
					var $filteredData = $data.find('li[data-type~=' + $filterType + ']');
				}
				
				// call quicksand and assign transition parameters
				$holder.quicksand($filteredData, {
					duration: 800,
					easing: 'easeInOutQuad'
				}, function(){
					//REINIT ALL JQUERY STUFF!
				
					//PRELOADER HANDLE					
					jQuery('.portfolio-3c li img,.portfolio-2c li img,.portfolio-1c li img').each(function(){
						jQuery(this).css({'opacity':'1','visibility':'visible'});
					});					
					
					
					//IMAGE HOVERS
					if(jQuery.browser.msie){
						if(jQuery.browser.version > '8.0'){				
							jQuery(".imghover_gallery, .imghover_3c_pfolio, .imghover_2c_pfolio, .imghover_1c_pfolio, a .imghover_small, a .imghover_medium, a .imghover_large, a .imghover_small_blog, a .imghover_medium_blog").hover(
								function(){
									//hide the rest						
									jQuery(this).css('display','none').css('background-image','url(images/image_overlay.png)').fadeTo('fast',1.0);
								},
								function(){
									jQuery(this).fadeTo('fast',0.0);
								}
							);
						}
					}else{
						jQuery(".imghover_gallery, .imghover_3c_pfolio, .imghover_2c_pfolio, .imghover_1c_pfolio, a .imghover_small, a .imghover_medium, a .imghover_large, a .imghover_small_blog, a .imghover_medium_blog").hover(
							function(){
								//hide the rest						
								jQuery(this).css('display','none').css('background-image','url(images/image_overlay.png)').fadeTo('fast',1.0);
							},
							function(){
								jQuery(this).fadeTo('fast',0.0);
							}
						);
					}
					
					
					//FANCYBOX				
					jQuery('.fancybox').fancybox();
					jQuery('.fancybox_iframe').fancybox(
						{
							'width'				: '75%',
							'height'			: '75%',
							'autoScale'     	: false,
							'type'				: 'iframe'
						}
					);
					
					jQuery('.fancybox_embed').fancybox(
						{
							'hideOnContentClick': true
						}
					);
					
					
					var $vid_id = '';
					jQuery('.fancybox_flv').click(function(){
						var $vid_id = jQuery(this).attr('href');
						jQuery.fancybox(
						{						
							'href'	:	'swf/player_flv_maxi.swf',
							'autoScale'     	: true,
							'type'				: 'swf',						
							'swf'			: {
							'FlashVars'		: 'showvolume=1&amp;buttonovercolor=d3aa66&amp;sliderovercolor=d3aa66&amp;loadingcolor=ffffff&amp;autoplay=1&amp;flv='+$vid_id
							}
						});
						return false;
					});
					
					
								
				});
				return false;
			});	
	
});