
		var prev=document.getElementById('prev');
		var btn=document.getElementsByClassName('subBtn')[0];
		prev.addEventListener('touchstart',function(){
			window.history.back();
		})
		btn.addEventListener('touchstart',function(){
			self.location='./myCommon.html'
		})