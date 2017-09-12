
		var mySwiper = new Swiper ('.swiper-container', {
			direction: 'horizontal',
			pagination: '.pagination',
			paginationType : 'custom',
		});
		var p=document.getElementsByClassName('myPagination');
		var slide=document.getElementsByClassName('swiper-slide');
		var wrapper=document.getElementsByClassName('swiper-wrapper')[0];
		for(var i=0;i<p.length;i++){
			p[i].index=i;
			p[i].addEventListener('touchstart',function(e){
				mySwiper.slideTo(this.index,300,false);
				if(this.index==0){
					p[0].classList.add('onShow');
					p[1].classList.remove('onShow');
				}else{
					p[0].classList.remove('onShow');
					p[1].classList.add('onShow');
				}
			})
		}
		var body=document.getElementsByTagName('body')[0];
		var start;
		var end;
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
		var prev=document.getElementById('prev');
		prev.addEventListener('touchstart',function(){
			self.location='./commonMain.html';
		})
		var myCommon=document.getElementsByClassName('myCommon');
		var myOrder=document.getElementsByClassName('myOrder');
		var yX=0;
		var oX=0;
		var yY=0;
		var oY=0;
		var f=0;
		for(var i=0;i<myCommon.length;i++){
			myCommon[i].addEventListener('touchend',function(e){
				oX=e.changedTouches[0].clientX;
				oY=e.changedTouches[0].clientY;
				if(!f){
					return false;
				}else{
					console.log(e.target.className);
					if(e.target.className=='manage'){
						self.location='./signManage.html';
					}else{
						self.location='./commonInfo.html';
					}
				}
			})
			myCommon[i].addEventListener('touchmove',function(e){
				yX=e.changedTouches[0].clientX;
				yY=e.changedTouches[0].clientY;
				if(Math.abs(yX-oX)>11||Math.abs(yY-oY)>11){
					f=0;
				}else{
					f=1;
				};
			})
			myCommon[i].addEventListener('touchstart',function(e){
				f=1;
			})
		}
		for(var i=0;i<myOrder.length;i++){
			myOrder[i].addEventListener('touchend',function(e){
				oX=e.changedTouches[0].clientX;
				oY=e.changedTouches[0].clientY;
				if(!f){
					return false;
				}else{
					console.log(e.target.className);
					if(e.target.className=='manage'){
						self.location='./signManage.html';
					}else{
						self.location='./commonInfo.html';
					}
				}
			})
			myOrder[i].addEventListener('touchmove',function(e){
				yX=e.changedTouches[0].clientX;
				yY=e.changedTouches[0].clientY;
				if(Math.abs(yX-oX)>11||Math.abs(yY-oY)>11){
					f=0;
				}else{
					f=1;
				};
			})
			myOrder[i].addEventListener('touchstart',function(e){
				f=1;
			})
		}
