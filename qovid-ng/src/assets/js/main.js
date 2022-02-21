(function($){
	"use strict";

	// Search Popup JS
	$(".others-option .search-btn").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});

	// Navbar Menu JS
	$('.onepage-navbar.navbar .navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 1500);
		e.preventDefault();
	});
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});
	$('.onepage-navbar.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
		$('.burger-menu').removeClass('active');
	});
	
	// Burger Menu
	$('.burger-menu').on('click', function() {
		$(this).toggleClass('active');
	});

	// Live Data Btn
	$('.live-data-btn').on('click', function() {
		$('.live-data-sidebar').toggleClass('active');
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.onepage-navbar, .navbar-area').addClass("is-sticky");
		}
		else{
			$('.onepage-navbar, .navbar-area').removeClass("is-sticky");
		}
	});

	// Home Slides
	$('.home-slides, .home-slides-two').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
	});
	$(".home-slides, .home-slides-two").on("translate.owl.carousel", function(){
		$(".main-banner-content .sub-title").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner-content .btn-box").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner-image img").removeClass("animated fadeInUp").css("opacity", "0");
	});
	$(".home-slides, .home-slides-two").on("translated.owl.carousel", function(){
		$(".main-banner-content .sub-title").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner-content .btn-box").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner-image img").addClass("animated fadeInUp").css("opacity", "1");
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// How To Protect Hover Image Change
	$(".how-to-protect-content .content:nth-child(2)").hover(function(){
		$('.how-to-protect-image .main-image2').addClass("active");
	}, function(){
		$('.how-to-protect-image .main-image2').removeClass("active");
	});
	$(".how-to-protect-content .content:nth-child(3)").hover(function(){
		$('.how-to-protect-image .main-image3').addClass("active");
	}, function(){
		$('.how-to-protect-image .main-image3').removeClass("active");
	});
	$(".how-to-protect-content .content:nth-child(4)").hover(function(){
		$('.how-to-protect-image .main-image4').addClass("active");
	}, function(){
		$('.how-to-protect-image .main-image4').removeClass("active");
	});
	$(".how-to-protect-content .content:nth-child(5)").hover(function(){
		$('.how-to-protect-image .main-image5').addClass("active");
	}, function(){
		$('.how-to-protect-image .main-image5').removeClass("active");
	});
	$(".how-to-protect-content .content:nth-child(6)").hover(function(){
		$('.how-to-protect-image .main-image6').addClass("active");
	}, function(){
		$('.how-to-protect-image .main-image6').removeClass("active");
	});

	// Nice Select JS
	$('select').niceSelect();

	// MixItUp Shorting
	$(function(){
		$('.shorting').mixItUp();
	});

	// Tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
			tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// Count Time 
	function makeTimer() {
		var endTime = new Date("September 20, 2020 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 0);

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Datatable JS
	$('#outbreakTable').DataTable({});

	// Products Details Image Slides
	$('.products-details-image-slides').slick({
		dots: true,
		speed: 500,
		fade: false,
		slide: 'li',
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: false,
		nextArrow: false,
		responsive: [{
			breakpoint: 800,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '40px',
				variableWidth: false,
				slidesToShow: 1,
				dots: true
			},
			breakpoint: 1200,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: '40px',
				variableWidth: false,
				slidesToShow: 1,
				dots: true
			}
		}],
		customPaging: function (slider, i) {
			return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
		}
	});

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});
	
	// WoW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });
	
}(jQuery));