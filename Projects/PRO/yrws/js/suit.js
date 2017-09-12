var deviceWidth=window.screen.width;
var html=document.getElementsByTagName('html')[0];
html.style.fontSize=deviceWidth/750*100+"px";
window.onresize=function(){
	var deviceWidth=window.screen.width;
	html.style.fontSize=deviceWidth/750*100+"px";
}