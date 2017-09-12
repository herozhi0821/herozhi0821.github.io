function getLocation(x){						/*获取X在BODY中的位置*/
	var left=0;
	var top=0;
	left=left-x.clientLeft;
	top=top-x.clientTop;
	while(x.nodeName!='BODY'){
		left=left+x.clientLeft+x.offsetLeft;
		top=top+x.clientTop+x.offsetTop;
		x=x.offsetParent;
	}
	return {l:left,t:top};
}
function _rand(n,m){							/*生成(n,m)之间的随机数*/
	switch(arguments.length){
		case 2: 
		return parseInt(Math.random()*(m-n-1)+n+1,10); 
		break; 
		default: 
		return undefined; 
		break; 
	} 
}
function _randL(n,m){							/*生成[n,m)之间的随机数*/
	switch(arguments.length){
		case 2: 
		return parseInt(Math.random()*(m-n)+n,10); 
		break; 
		default: 
		return undefined; 
		break; 
	}
}
function _randR(n,m){							/*生成(n,m]之间的随机数*/
	switch(arguments.length){
		case 2: 
		return parseInt(Math.random()*(m-n)+n+1,10); 
		break; 
		default: 
		return undefined; 
		break; 
	} 
}
function _randLR(n,m){ 							/*生成[n,m]之间的随机数*/
	switch(arguments.length){
		case 2: 
		return parseInt(Math.random()*(m-n+1)+n,10); 
		break; 
		default: 
		return undefined; 
		break; 
	} 
}
function setCookie(key,val,day){				/*添加cookie，有效期：日*/
	var now=new Date();
	now.setDate(now.getDate()+parseInt(day));
	val=escape(val);
	document.cookie=key+'='+val+'; expires='+now;
}
function setCkie(key,val,YTD,tim){				/*添加cookie，有效期：年月日时分秒*/
	var now=new Date();
	switch(arguments.length){
		case 3: 
		var arr1=YTD.split('.');
		var arr2=YTD.split(':');
		if(arr1.length>1){
			now.setYear(now.getFullYear()+parseInt(arr1[0]));
			now.setMonth(now.getMonth()+parseInt(arr1[1]));
			now.setDate(now.getDate()+parseInt(arr1[2]));
		}
		if(arr2.length>1){
			now.setHours(now.getHours()+parseInt(arr2[0]));
			now.setMinutes(now.getMinutes()+parseInt(arr2[1]));
			now.setSeconds(now.getSeconds()+parseInt(arr2[2]));
		}
		break; 
		case 4:
		if(YTD!=''){
			var arr3=YTD.split('.');
			now.setYear(now.getFullYear()+parseInt(arr3[0]));
			now.setMonth(now.getMonth()+parseInt(arr3[1]));
			now.setDate(now.getDate()+parseInt(arr3[2]));
		}
		if(tim!=''){
			var arr4=tim.split(':');
			now.setHours(now.getHours()+parseInt(arr4[0]));
			now.setMinutes(now.getMinutes()+parseInt(arr4[1]));
			now.setSeconds(now.getSeconds()+parseInt(arr4[2]));
		}
		break;
	}
	val=escape(val);
	document.cookie=key+'='+val+'; expires='+now;
}
function getCookie(key){						/*获得指定的cookie的值*/
	var arr=document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var temp=arr[i].split('=');
		if(temp[0]==key){
			return unescape(temp[1]);
		}
	}
}
function removeCookie(key){						/*删除指定的cookie*/
	setCookie(key,'val',-1);
}
function requestXHR(method,url,x,fn1,fn2){
	if (window.XMLHttpRequest) {
		var xhr=new XMLHttpRequest();
	} else{
		var xhr=new ActiveXObject('Microsoft.XMLHTTP');
	};
	if(method=='get'){
		xhr.open(method,url+x,true);
		xhr.send(null);
	}
	if(method=='post'){
		xhr.open(method,url,true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(x);
	}
	xhr.onreadystatechange=function (){
		if (xhr.readyState==4) {
			if (xhr.status==200) {
				if(typeof fn1=='function'){
					fn1(xhr.responseText);
				}
				if(typeof fn1=='object'){
					fn1.innerHTML=xhr.responseText;
					var js=document.createElement('script');
					js.innerHTML=fn1.getElementsByTagName('script')[1].innerHTML;
					var body=document.getElementsByTagName('body')[0];
					body.appendChild(js);
				}
			} else{
				if(fn2){
					fn2();
				}else{
					alert(请求失败);
				}
			};
		};
	}
}	
function getClass(classn){						/*全局获取类*/
	var tags=document.all ? document.all : document.getElementsByTagName('*');
	var arr=[];
	var reg=new RegExp('\\b'+classn+'\\b');
	for (var i = 0; i < tags.length; i++) {
		if (reg.test(tags[i].className)) {
			arr.push(tags[i]);
		}
	};
	return arr;
}
function byClass(parentID,classn){				/*局部获取类*/
	var parent=document.getElementById(parentID);
	var tags=parent.all?parent.all:parent.getElementsByTagName('*');
	var arr=[];
	var reg=new RegExp('\\b'+classn+'\\b');
	for (var i = 0; i < tags.length; i++) {
		if (reg.test(tags[i].className)) {
			arr.push(tags[i]);
		}
	};
	return arr;
}
function preNode(obj){//获取上一个兄弟节点
	if (obj.previousElementSibling) {
		return obj.previousElementSibling;		
	} else{
		return obj.previousSibling;
	};
}