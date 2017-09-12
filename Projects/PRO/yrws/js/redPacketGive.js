//获取图片路劲的方法，兼容多种浏览器，通过createObjectURL实现
var aaa = document.getElementsByClassName("rrr"); //获取显示图片的div元素
var input = document.getElementsByClassName("file_input");
var count=0;
$( "#picture" ).on( "click", ".file_input", function() {
	if (count<9) {
		var flag=true;
	 	for (var v = 0; v < input.length; v++) {
	 		if (input[v]==this) {
			 // 获取选择图片的input元素
		      // 这边是判断本浏览器是否支持这个API。
				if(typeof FileReader==='undefined'){ 
				    aaa[v].innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
				    input[v].setAttribute('disabled','disabled'); 
				}else{ 
					var bbb = v;
				    input[v].addEventListener('change',readFile,false); 
				    //如果支持就监听改变事件，一旦改变了就运行readFile函数。
				} 
				function readFile(){ 
				    var file = this.files[0]; //获取file对象
				    //判断file的类型是不是图片类型。
				    if(!/image\/\w+/.test(file.type)){ 
				        alert("文件必须为图片！"); 
				        return false; 
				    } 
				    if (bbb==input.length-1) {
					    if (count<8) {
						    if (flag) {
						   		$(this).parent().after('<div class="add"><input type="file" class="file_input" capture="photo"><div class="rrr"></div></div>');
						   		count++;
						   		flag=false;
					   		};
					   	};
				   	};
				    var reader = new FileReader(); //声明一个FileReader实例
				    reader.readAsDataURL(file); //调用readAsDataURL方法来读取选中的图像文件
				    //最后在onload事件中，获取到成功读取的文件内容，并以插入一个img节点的方式显示选中的图片
				    reader.onload = function(e){ 
				        aaa[bbb].innerHTML = '<img src="'+this.result+'" alt=""/>' ;
					}
				}			
			}
		}
	}
})
