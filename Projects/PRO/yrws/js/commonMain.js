
		var mySwiper = new Swiper ('.swiper-container', {
			direction: 'horizontal',
			pagination: '.pagination',
			paginationType : 'custom'
		});
		var p=document.getElementsByClassName('tag_lis');
		var slide=document.getElementsByClassName('swiper-slide');
		var wrapper=document.getElementsByClassName('swiper-wrapper')[0];
		for(var i=0;i<p.length;i++){
			p[i].index=i;
			p[i].addEventListener('touchstart',function(e){
				mySwiper.slideTo(this.index,300,false);
			})
		}
		var body=document.getElementsByTagName('body')[0];
		var start;
		var end;
		var tt;
		for(var i=0;i<p.length;i++){
			p[i].addEventListener('touchstart',function(){
				for(var j=0;j<p.length;j++){
					p[j].classList.remove('onShow');
				}
				this.classList.add('onShow');
			})
		}
		wrapper.addEventListener('touchend',function(e){
			for(var i=0;i<p.length;i++){
				p[i].classList.remove('onShow');
			}
			var timr=setTimeout(function(){
				input=wrapper.style.transform;
				if(!input){
					input=0;
				}else{
					input=input.match(/\((\S*)/)[1];
					input=input.match(/^.*?p/);
					input=input[0].slice(0,-1);
					input=Math.abs(input);
					input=Math.round(input/window.screen.width);
				}
				p[input].classList.add('onShow');
				clearTimeout(timr);
			})
		})
		var add=document.getElementById('add');
		var chat=document.getElementById('top_chat');
		var prev=document.getElementById('prev');
		var flag=0;
		document.addEventListener('touchstart',function(e){
			if(e.target.id!='top_chat'){
				chat.style.display='none';
				flag=0;
			};
			if(e.target.id=='add'){
				if(!flag){
					chat.style.display='block';
					flag=1;
				}else{
					chat.style.display='none';
					flag=0;
				}
			};
		})
		var con_info=document.getElementsByClassName('con_info');
		var common=document.getElementById('myCommon');
		var order=document.getElementById('myOrder');
		common.addEventListener('touchend',function(){
			self.location='./issueCommon.html';
		})
		order.addEventListener('touchend',function(){
			self.location='./myCommon.html';
		})
		prev.addEventListener('touchend',function(){
			self.location='../index.html';
		})
		var yX=0;
		var oX=0;
		var yY=0;
		var oY=0;
		for(var i=0;i<con_info.length;i++){
			var f=1;
			con_info[i].addEventListener('touchend',function(e){
				oX=e.changedTouches[0].clientX;
				oY=e.changedTouches[0].clientY;
				if(!f){
					return false;
				}else{
					self.location='./commonInfo.html';
				}
			})
			con_info[i].addEventListener('touchmove',function(e){
				if(Math.abs(yX-oX)>11||Math.abs(yY-oY)>11){
					f=0;
				}else{
					f=1;
				};
			})
			con_info[i].addEventListener('touchstart',function(e){
				yX=e.changedTouches[0].clientX;
				yY=e.changedTouches[0].clientY;
				f=1;
			})

		}