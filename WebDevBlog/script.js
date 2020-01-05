$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500);
	});
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 8,
  	loop: true,
  	margin: 40,
  	autoplay: true,
  	autoplayTimeout: 2500,
  	responsive:{
  	        0:{
  	            items:2
  	        },
  	        600:{
  	            items:4
  	        },
            1000:{
                items:5
            },
            1300:{
                items:6
            },
            1600:{
                items:8
            },
  	    }
  });
});