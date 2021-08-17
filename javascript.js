const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
});


new WOW().init();

jQuery ('.drawer-icon').on('click', function(e) {
  e.preventDefault ();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {

  let header = jQuery(".header").innerHeight();
  // 移動速度を指定（ミリ秒）
  let speed = 500;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top - header;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
  },
    speed
  );
  return false;
});

// スクロール検知
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (200 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }
});

jQuery('.header__inner ul li a').click(function() {
  jQuery('.header__inner ul li a').removeClass( 'is-active' );
  jQuery(this).addClass( 'is-active' );
  return false;
});

jQuery('.qa-box__q').click(function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box__icon').toggleClass('is-open')
})

jQuery('.js-close-button').click(function(e){
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).hide();
});

jQuery('.js-open-button').click(function(e){
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).show();
});
