$(document).ready(function() {
	$(".drawer").drawer();
});

// page-link
$(function(){
   $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(function(){
	$("#telpopup-frame").css("display", "none");
	$(".telpopup-open").click(function(){
		$("#telpopup-frame").show();
	});
	$(".telpopup-close").click(function(){
		$("#telpopup-frame").hide();
	});	
});

// pagetop
$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('bottom', '-100px');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '0px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200); 
            }
        }
    });

	topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// fadein
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 170){
                $(this).addClass('scrollin');
            }
        });
    });
});

// sideways
   window.onscroll = function () {
        var check = window.pageYOffset ;       //現在のスクロール地点 
        var docHeight = $(document).height();   //ドキュメントの高さ
        var dispHeight = $(window).height();    //表示領域の高さ
 
        if (check > docHeight-dispHeight - 265){   //判別式　500はフッターからの距離です
            $('.sideways').fadeOut(1000);	//1000 はフェードアウトの速度です。調整可
        }else{
            $('.sideways').fadeIn(1000);	//1000 はフェードインの速度です。調整可
        }
    };

