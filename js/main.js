$(document).ready(function() {
	const mMenuBtn = $('.m-menu-button'),
		mMenu = $('.m-menu'),
		tab = $('.tab');

 //initialize swiper when document ready
  const mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    slidesPerView: 4,
	    spaceBetween: 25,
	     breakpoints: {
	    992: {
	      slidesPerView: 4,
	    },
	    768: {
	      slidesPerView: 2,
	    },
	    320: {
	      slidesPerView: 1,
	      navigation:{
	      	nextEl: '.button-next'
	      }
	    }
	}
});

// Открытие/закрытие мобильного меню
mMenuBtn.on('click', function(){
		mMenu.toggleClass('active');
		$('body').toggleClass('no-scroll');
	})

// Смена табов
tab.on('click', function() {
	const activeTabContent = $(this).attr('data-target');
	console.log(activeTabContent);

	tab.removeClass('active');
	$(this).toggleClass('active');

	$('.tabs-content').removeClass('visible');
	$(activeTabContent).toggleClass('visible');
});






});