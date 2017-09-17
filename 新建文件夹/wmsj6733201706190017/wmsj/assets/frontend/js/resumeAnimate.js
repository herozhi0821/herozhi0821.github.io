  $(function(){


    var anite = function (obj,cs){
        $(obj).removeClass("hide");
        $(obj).addClass(cs);
        $(obj).on('animationend webkitAnimationEnd',function (){
            $(obj).removeClass(cs);
        })
    }

    function section(){
        
        $('.section1').delay(50).animate({
            opacity: '1'
        }, 100, function(){
            $(".resume").addClass("on");
            setTimeout(function(){
                $(".resume").addClass("dong") 
            },250)
        });
    }
    section();

    $('#dowebok').fullpage({
        sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent',"transparent","transparent","transparent"],
        afterLoad: function(anchorLink, index){
            if(index == 1){
                section();
                
            }
            if(index == 2){
                anite($('.section2 .fp-tableCell>div'),"animation_3d_top");
                var qxMuneLi = $(".qxMune li");
                $(".qxMune li").hover(
                  function(){
                    $(this).find(".info").animate({
                      left:"100%"
                    })
                  },
                  function(){
                    $(this).find(".info").animate({
                      left:"0"
                    })
                })


                
               
            }
            if(index == 3){
                $(".qxgd.style").animate({
                  left: '0'
                 },500,function(){
                      $(this).addClass("skew")
                 });
                 $(".wmanMenu li").each(function(i){
                   $(this).on("click",function(){
                    $(this).addClass("active");
                    $(this).siblings("li").removeClass("active");
                    $(".anCase>div").eq(i).addClass("active");
                    $(".anCase>div").eq(i).siblings("div").removeClass("active");
                   })
                 })   
            }
            if(index == 4){
                $(".section4").removeClass("hide")
                function factory(obj,str){
                    this.len = 0; 
                    this.txtDom = "";
                    this.str = "";
                    this.arrTxt = [];  
                    this.init(obj,str);
                }

                factory.prototype = {
                    constructor:factory, 
                    init:function(obj,str){ 
                        this.obj = obj;
                        this.str = str;   
                        this.txtDom = this.str.replace(/\s+/g,"");
                        obj.innerHTML = "";
                        this.len = this.txtDom.length;
                        this.addDom(obj);
                       
                    }, 
                     addDom:function(obj){

                        for(var i=0;i<this.len;i++){
                            var spanDom = "";
                            spanDom = document.createElement("span");
                            spanDom.innerHTML = this.txtDom.substring(i,i+1);
                            this.obj.appendChild(spanDom);
                            this.arrTxt.push(spanDom);
                        };
                        for(var j=0;j<this.len;j++){
                            this.arrTxt[j].style.position = "relative";
                        };
                        this.start();
                    },
                    start:function(){
                        for(var i=0;i<this.len;i++){
                            this.arrTxt[i].onmouseover = function(){

                                this.stop = 0;
                                this.speed = -1;
                                var $this = this;
                                this.timer = setInterval(function(){

                                    $this.stop += $this.speed;//0  += -1
                                    if($this.stop <= -20){
                                        $this.speed = 1;
                                    }

                                    $this.style.top = $this.stop + "px";

                                    if($this.stop >= 0){
                                        clearInterval($this.timer)
                                        $this.style.top = 0 + "px";
                                    };

                                },15);
                            };
                        }
                    }
                }
                var str1 = '据有关数据统计从2015年至2020年，全球全息电视市场 估计复合年增长率(CAGR)为27.34%。而在全息行业应用上，美国领先全球市场... ....'; 
                var str2 = '据外媒报道，美国总统大选落下帷幕后，欧洲今年也将迎 来总统换届。为了登上总统宝，法国的政客们也是无所不用其极... ...';
                var str3 = '微梦团队助力“火天下.火锅传奇大观园”打造全球首家3D全息®火锅 火天下·火锅传奇大观园项目于2016年6月启动建设，总投资5000多万元进行倾力打造，致力于打造未来十年重庆美食新地标... ...';
                var str4 = '如今为了纪念邓丽君逝世22周年，日本节目《金SMA》利 用全息投影技术“复活”了一代歌后!投影再现了她1986年在《日本作曲大赏》演唱《我只在乎你》日文版... ...';
                var str5 = '无论你在不在杭州西湖湖畔，相信你一定被G20峰会文艺 演出《最忆是杭州》的绝美盛况刷频了，奇幻而又真实的场景图片迅速刷爆朋友圈... ...';

                new factory($(".leftInfor .lInfor").eq(0).find("div")[0],str1);
                new factory($(".leftInfor .lInfor").eq(1).find("div")[0],str2);
                new factory($(".rightInfor .lInfor").eq(0).find("div")[0],str3);
                new factory($(".rightInfor .lInfor").eq(1).find("div")[0],str4);
                new factory($(".rightInfor .lInfor").eq(2).find("div")[0],str5);                 

                if($(window).height()<660){
                     $(".qxxw .leftInfor").animate({
                      left:"-27%"
                    },400);
                    $(".qxxw .rightInfor").animate({
                      right:"-36%"
                    },400);
                }  else{
                   $(".qxxw .leftInfor").animate({
                    left:"1%"
                  },400);
                  $(".qxxw .rightInfor").animate({
                    right:"-5%"
                  },400);
                }


             $(".rDate").hover(function(){
              $(this).closest(".clearfix").find(".lInfor .title").css({color:"#027afd"})
             },function(){
              $(this).closest(".clearfix").find(".lInfor .title").css({color:"#fff"})
             })   

            }
            if(index == 5){
                var time = 400;
                var a = 0;
                var $entryLi = $('.gywmMenu li');
                function dg(){
                     
                     $entryLi.eq(a).animate({
                         left :''+a*$entryLi.outerWidth(true)+'px'
                     },time,function(){
                          a++;
                          if(a == $entryLi.size()){
                             return;        
                          }
                          dg();
                     })
                }
                dg();
            }
            if(index == 6){
       
            }
        },
        onLeave: function(index, direction){
            if(index == 1){
              
            }
            if(index == 2){
              setTimeout(function(){
                 $('.section2 .fp-tableCell>div').addClass("hide")
             },100)
            }
            if(index == 3){
               setTimeout(function(){
                    $(".qxgd.style").css({left:"-250%"}).removeClass("skew")
                },300)

            }
            if(index == 4){
                var $qxxwl = $(".qxxw .leftInfor");
                var $qxxwr = $(".qxxw .rightInfor");
                $qxxwl.animate({
                  left:"-50%"
                },400);
                $qxxwr.animate({
                  right:"-55%"
                },400);
            }
            if(index == 5){
                var time = 50;
                var a = 0;
                var $entryLi = $('.gywmMenu li');
                function dg(){
                     $entryLi.eq(a).animate({
                         left :'-100%'
                     },time,function(){
                          a++;
                          if(a == $entryLi.size()){
                             return;        
                          }
                          dg();
                     })
                }
                setTimeout(function(){
                  dg();
                },100)
            }
            if(index == 6){
       
            }
        },
        navigation: true
//      continuousVertical: true
    });
});