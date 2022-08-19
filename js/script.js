
// Плагины

anime({
  targets: '.arrow-down',
  translateY: 14,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
});

let swiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-btn-next',
		prevEl: '.swiper-btn-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 'auto',
	swipeToSlide: true,
	loop: true,
});

// Мои скрипты

$(function(){

	// Burger меню

	$('.burger-menu').click(function() {
		$('#menu').slideToggle();
		$('.burger-menu').toggleClass('is-open');
		$('footer').toggleClass('is-mobile');
	})

	// Плавная прокрутка страницы

	$('.link-main').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#main').offset().top }, 1000);
	  e.preventDefault();
	});
	$('.link-portfolio').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
	  e.preventDefault();
	});
	$('.link-order').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#order').offset().top }, 1000);
	  e.preventDefault();
	});
});