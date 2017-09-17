/**
 * Created by WHB on 2016/7/14.
 */

(function($,doc,win,unde){
	var menu = $(".menu>li");
	menu.hover(
        function(){
            $(this).find(".child").slideDown();

        },
        function(){
            $(this).find(".child").slideUp();
        })
    $(".slides-box").height($("body").height()-90);
})(jQuery,document,window,undefined)

