// スティッキーヘッダー
$(function(){
  var $win = $(window),
      $fv = $('.fv'),
      $header = $('.header'),
      fvHeight = $fv.outerHeight(),
      fixedClass = 'fixed';

    $win.on('load scroll',function(){
      var value = $(this).scrollTop();
      if($win.width() > 768)
        if(value > fvHeight){
          $header.addClass(fixedClass);
          }else{
          $header.removeClass(fixedClass);
        }
    });
});

// スライダー
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  fade: true,
  cssEase: 'linear'
});

// ハンバーガーメニューがクリックされるたびにopenというクラスを付け外しする
$(function(){
  $('.burger-btn').on('click', function(){
    $('.header-nav').fadeToggle(300);
    $('.bar_top, .bar_mid, .bar_bottom').toggleClass('open');
    $('body').toggleClass('noscroll');
  })
});

// ハンバーガーメニューがクリックされたあと、各メニューをクリックしたときにメニュー画面を消して、該当のセクションに飛ぶようにする
$('.header-nav .nav-list li a').on('click', function(){
  if (window.innerWidth <= 767) {
  $('.burger-btn').click();
  }
  });
