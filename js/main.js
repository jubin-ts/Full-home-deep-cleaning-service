(function ($) {
"use strict";

    // clickable menu active
    if($('#menu-full').length) {
        const slinky = $('#menu-full').slinky()
    }
    function sidebarMainmenu() {
        var menuTrigger = $('.click-menu-active'),
            endTrigger = $('button.close-icon'),
            container = $('.transparent-mainmenu');

        menuTrigger.on('click', function (e) {
            e.preventDefault();
            container.addClass('inside');
        });

        endTrigger.on('click', function () {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();






/* meanmenu */
    $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
});

/* slider-active */
$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
    navText: ['<i class="icofont icofont-long-arrow-left"></i>','<i class="icofont icofont-long-arrow-right"></i>'],
    nav:true,
	dots:true,
    responsive:{
        0:{
            items:1,
            dots: false
        },
        767:{
            items:1
        },
        992:{
            items:1,
            dots: false
        },
        1200:{
            items:1,
            dots: true
        }
    }
})

/* slider-active */
$('.slider-full-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
    navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1,
            dots: false
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})

var dot = $('.slider-active .owl-dot , .slider-full-active .owl-dot');
dot.each(function() {
	var index = $(this).index() + 1;
  if(index < 10){
  	$(this).html('0').append(index);
  }else{
     $(this).html(index);
  }
});


/* project-active */
$('.project-active').owlCarousel({
    loop:true,
    margin:30,
	items:4,
    navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
    nav:true,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

/* project-active */
$('.project-active-large').owlCarousel({
    loop:true,
    margin:30,
	items:1,
    navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
    nav:true,
	stagePadding: 440,
	dots:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        767:{
            items:1,
            stagePadding: 100
        },
        992:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1
        }
    }
})

/* project-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    margin:30,
	items:1,
    navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1,
            dots: false,
            margin: 0
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})

/* project-active */
$('.brand-active').owlCarousel({
    loop:true,
    margin:30,
	items:5,
    navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:2
        },
        566:{
            items:3
        },
        767:{
            items:4
        },
        992:{
            items:5
        }
    }
})


/* hamburgers menu option  */
$('.hamburger').on('click', function() {
	$(this).toggleClass('is-active');
	$(this).next().toggleClass('nav-menu-show')
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/* project active */
$('.project-list').imagesLoaded( function() {
	$('.portfolio-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	 var $grid = $('.project-list').isotope({
	  itemSelector: '.project-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.project-item'
	  }
	})
});


//for filter menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});









})(jQuery);