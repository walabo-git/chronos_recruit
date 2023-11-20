// ロード時のフェード
$(window).on('load', function(){
  // ページ読み込み後、フェード表示
  var fadeSpeed = 2000;
  $('.pl_load').each(function(i) {
    $(this).delay(i * 100).animate({
      'opacity': 1
    }, fadeSpeed);
  });
});

// スクロール時のパララックス
$(window).on('load scroll', function(){
  $('.pl_true').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    // コンテンツをフェード表示
    if (scroll > elemPos - windowHeight + 160){
      $(this).addClass('scrollin');
    }
  });
});
