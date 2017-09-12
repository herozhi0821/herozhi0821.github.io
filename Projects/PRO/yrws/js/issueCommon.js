
		var prev=document.getElementById('prev');
		var AA=document.getElementById('AA');
		var AABOX=document.getElementById('AABOX');
		var MY=document.getElementById('MY');
		var MYBOX=document.getElementById('MYBOX');
		var prev=document.getElementById('prev');
		var p=document.getElementById('publishBTN');
		prev.addEventListener('touchstart',function(){
			window.history.back();
		})
		AABOX.addEventListener('touchstart',function(){
			AA.className='full';
			MY.className='empty';
		})
		MYBOX.addEventListener('touchstart',function(){
			MY.className='full';
			AA.className='empty';
		})
		p.addEventListener('touchstart',function(){
			self.location='myCommon.html';
		})
		prev.addEventListener('touchstart',function(){
			self.location='commonMain.html';
		})