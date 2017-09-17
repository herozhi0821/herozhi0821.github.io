jQuery(document).ready(function(){
			
			//DROPDOWN MENU
			jQuery('#menu li').hover(
				function(){
					jQuery(this).has('ul').find('ul').stop(true,true).delay(200).slideDown('slow');
				},
				function(){
					jQuery(this).has('ul').find('ul').stop(true,true).slideUp('slow');
				}
			);
			
			
			//START BACKGROUND SLIDER
			jQuery('#bg_slider').bgSlider({
				'speed' : '500',	//transition speed
				'pause' : '4000',	//pause before next item
				'delay'	: '3000'		//delay on start
			});
			
			
			
			//IMAGE PRELOADERS
			if(!jQuery.browser.msie || jQuery.browser.version > 8){
				jQuery(function(){
					jQuery('.portfolio-3c,.portfolio-2c,.portfolio-1c,.galleries,.blog-small-image,.blog-medium-image').preloader();
				});
			}
			
			
			//IMAGE HOVERS
			if(jQuery.browser.msie){
				if(jQuery.browser.version > '8.0'){				
					jQuery(".imghover_gallery, .imghover_3c_pfolio, .imghover_2c_pfolio, .imghover_1c_pfolio, .imghover_small, .imghover_medium, .imghover_large, .imghover_small_blog, .imghover_medium_blog").hover(
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
				jQuery(".imghover_gallery, .imghover_3c_pfolio, .imghover_2c_pfolio, .imghover_1c_pfolio, .imghover_small, .imghover_medium, .imghover_large, .imghover_small_blog, .imghover_medium_blog").hover(
					function(){
						//hide the rest						
						jQuery(this).css('display','none').css('background-image','url(images/image_overlay.png)').fadeTo('fast',1.0);
					},
					function(){
						jQuery(this).fadeTo('fast',0.0);
					}
				);
			}
			
			
			
			
			//FANCYBOX FOR PORTFOLIO
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
			
			var vid_id = jQuery('.fancybox_flv').attr('href');
			jQuery('.fancybox_flv').fancybox(
				{				
				'href'	:	'swf/player_flv_maxi.swf',
				'autoScale'     	: true,
				'type'				: 'swf',
				'swf'			: {
				'FlashVars'		: 'showvolume=1&amp;buttonovercolor=d3aa66&amp;sliderovercolor=d3aa66&amp;loadingcolor=ffffff&amp;autoplay=1&amp;flv='+vid_id
				}
			}
			);
			
			
			//IMAGE HOVERS
			jQuery('.image_content, .embed_content').hover(
				function(){
					jQuery('.image_overlay',this).css('visibility','visible');					
				},
				function(){
					jQuery('.image_overlay',this).css('visibility','hidden');
				}
			);	
			
			
			//TWITTER FEED
			if(jQuery('#twitter').length != 0){
				jQuery('#twitter').getTwitter({
				userName: 'ipad3review',
				numTweets: '3',
				loaderText: 'Loading...'
				});
			}
			
			
			//TABS
			if(jQuery('#tabs').length != 0){
				jQuery('#tabs').tabs({
					fx: [{opacity:'toggle', duration:'normal'},
                        {opacity:'toggle', duration:'fast'}]
				})
			}
			
			
			//TOGGLES
			//Hide (Collapse) the toggle containers on load
			jQuery('.toggle_box').hide(); 
			//Slide up and down on hover
			jQuery('.toggle').click(function(){
				jQuery(this).next('.toggle_box').slideToggle('slow');
				return false;
			});
			
			
			//CAROUSEL - HORIZONTAL
			if(jQuery('#carousel').length != 0){
				jQuery('#carousel').tinycarousel({start: 2});
			}
			
			
			
});	