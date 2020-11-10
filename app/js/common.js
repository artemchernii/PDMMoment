document.querySelector(".empresas_content__btn-1").onclick = function () {
	window.location.href = '#pdmfc';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-1-2").onclick = function () {
	window.location.href = '#pdmfc';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-2").onclick = function () {
	window.location.href = '#myfarm';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-2-2").onclick = function () {
	window.location.href = '#myfarm';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-3").onclick = function () {
	window.location.href = '#scopeinvest';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-3-2").onclick = function () {
	window.location.href = '#scopeinvest';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-4").onclick = function () {
	window.location.href = '#Go4M';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-4-2").onclick = function () {
	window.location.href = '#Go4M';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-5").onclick = function () {
	window.location.href = '#ZPX';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-5-2").onclick = function () {
	window.location.href = '#ZPX';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-6").onclick = function () {
	window.location.href = '#azza';
	console.log("YES");
}
document.querySelector(".empresas_content__btn-6-2").onclick = function () {
	window.location.href = '#azza';
	console.log("YES");
}
document.querySelector(".nrf").onclick = function () {
	window.location.href = '#nrf';
	console.log("YES");
}
document.querySelector(".go4mobility-mwc").onclick = function () {
	window.location.href = '#go4mobility-mwc';
	console.log("YES");
}
document.querySelector(".sxsw").onclick = function () {
	window.location.href = '#sxsw';
	console.log("YES");
}
// document.querySelector(".global_azure").onclick = function () {
// 	window.location.href = '#globalzaurebootcamp';
// 	console.log("YES");
// }
$(function () {
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(400).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});
	$("#owl-one").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText: ['<img src="img/next.png" class="prev">', '<img src="img/back.png" class="next">'],
		items: 2,
		smartSpeed: 700,
		// autoplay: true,
		// autoplayTimeout: 1000,
		// autoplaySpeed: 700,
		// autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1199: {
				items: 2
			}
		}
	});
	$('#owl-two').owlCarousel({
		loop: true,
		margin: 10,
		autoplay: false,
		nav: false,
		dots: true,
		// navText: ['<i class="fas fa-angle-right next"></i>', '<i class="fas fa-angle-left prev"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
	$('#third-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		dots: false,
		center: true,
		margin: 10,
		URLhashListener: true,
		startPosition: 'URLHash',
		// afterMove: slideChanged,
		// startDragging: pauseOnDragging,
		touchDrag: false,
		mouseDrag: false,
		navText: ['<img src="img/next.png" class="next2">', '<img src="img/back.png" class="prev2">'],
		responsive: {
			0: {
				items: 1,
				touchDrag: true,
				mouseDrag: true
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
	$('#fourth-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		dots: false,
		center: true,
		margin: 10,
		URLhashListener: true,
		startPosition: 'URLHash',
		// afterMove: slideChanged,
		// startDragging: pauseOnDragging,
		touchDrag: false,
		mouseDrag: false,
		navText: ['<img src="img/next.png" class="next2">', '<img src="img/back.png" class="prev2">'],
		responsive: {
			0: {
				items: 1,
				touchDrag: true,
				mouseDrag: true
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
	new WOW().init();
	$("a[href*='#']").mPageScroll2id();
	$("#backtotop").click(function () {
		$("html, body").animate({
				scrollTop: 0
			},
			800
		);
		return false;
	});
	$(".empresas_content__btn-1").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: true,
		showCloseBtn: false
	})
	$(".empresas_content__btn-2").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: true,
		showCloseBtn: false
	})
	$(".empresas_content__btn-3").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: true,
		showCloseBtn: false
	})
	$(".empresas_content__btn-4").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: true,
		showCloseBtn: false
	})
	$(".empresas_content__btn-5").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: true,
		showCloseBtn: false
	})
	$(".empresas_content__btn-6").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: true,
		showCloseBtn: false
	})
	$("#agenda_card-1").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: false,
		showCloseBtn: false
	})
	$("#agenda_card-2").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: false,
		showCloseBtn: false

	})
	$("#agenda_card-3").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: false,
		showCloseBtn: false

	})
	$("#agenda_card-4").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: false,
		showCloseBtn: false

	})
	$('.agenda_close').click(function () {
		$.magnificPopup.close();
	});
	$('.retreat_close').click(function () {
		$.magnificPopup.close();
	});
	$('.empresas_hidden__close').click(function () {
		$.magnificPopup.close();
	});
	$(".retreat_block__btn").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: true,
		showCloseBtn: false
	})
	$(".up").magnificPopup({
		type: "inline",
		midclick: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		fixedContentPos: true,
		showCloseBtn: false
	})
	$('.next_empresas').click(function () {
		$("#third-carousel").trigger('next.owl.carousel', [400]);
	})
	// Go to the previous item
	$('.prev_empresas').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		$("#third-carousel").trigger('prev.owl.carousel', [400]);
	})
	$('.next_agenda').click(function () {
		$("#fourth-carousel").trigger('next.owl.carousel', [400]);
	})
	// Go to the previous item
	$('.prev_agenda').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		$("#fourth-carousel").trigger('prev.owl.carousel', [400]);
	})
	$(document.documentElement).keyup(function (event) {
		if (event.keyCode == 37) {
			/*left key*/
			$("#fourth-carousel").trigger('prev.owl.carousel', [700]);
		} else if (event.keyCode == 39) {
			/*right key*/
			$("#fourth-carousel").trigger('next.owl.carousel', [700]);
		}
	});
	$('.item').on('click', function () {
		$.magnificPopup.close();
	}).children().on('click', function (event) {
		event.stopPropagation();
		//you can also use `return false;` which is the same as `event.preventDefault()` and `event.stopPropagation()` all in one (in a jQuery event handler)
	});
	$(document.documentElement).keyup(function (event) {
		if (event.keyCode == 37) {
			/*left key*/
			$("#third-carousel").trigger('prev.owl.carousel', [700]);
		} else if (event.keyCode == 39) {
			/*right key*/
			$("#third-carousel").trigger('next.owl.carousel', [700]);
		}
	});
	jQuery('.footer_btnbox__btn').click(function () {
		jQuery('html, body').animate({
			scrollTop: 0
		}, 1400);
		return false;
	});

});