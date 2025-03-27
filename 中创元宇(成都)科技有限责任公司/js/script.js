;
(function($) {
    "use strict";
    var navbar = $('.main_menu_area');
    var nav_offset_top = $('.main_menu_area').offset().top + 67;	
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/
    navbar.affix({
        offset: {
            top: nav_offset_top,
        }
    });
    navbar.on('affix.bs.affix', function() {
        if (!navbar.hasClass('affix')) {
            navbar.addClass('animated slideInDown');
        }
    });
    navbar.on('affixed-top.bs.affix', function() {
        navbar.removeClass('animated slideInDown');
    });			
	  // Menu elevator animation
  $(".navbar-default a[href*=\\#]:not([href=\\#])").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
  
      if (target.length) {      
        
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 150
          },
          1000
        );
        return false;
      }
    }
  });
	
	
	
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider() {
        var $revSliderDiv = $('#main_slider');
        if ($revSliderDiv.length && $.fn.revolution) {
            $revSliderDiv.revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 6000,
                disableProgressBar: "on",
                navigation: {
                    onHoverStop: 'off',
                    touch: {
                        touchenabled: "on"
                    },
                    arrows: {
						style: "Gyges",
						enable: true,
						hide_onmobile: true,
						hide_onleave: true,
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 80,
							v_offset: 0
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 80,
							v_offset: 0
						}
					},
                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        style: "normal",
                        hide_onleave: false,
                        //direction: "vertical",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 100,
                        space: 10,
                        tmp: '<span class="tp-bullet-inner"></span>'
                    }
                },
                //responsiveLevels: [4096, 1199, 992, 767, 480],
                //gridwidth: [1140, 970, 750, 700, 300],
               // gridheight: [600, 600, 600, 300, 300],
				gridwidth: [1920],
                gridheight: [700],
                lazyType: "smart",
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    }
    main_slider();
    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function feature_slider() {
        var $featureSliderDiv = $('.feature_slider_inner');
        if ($featureSliderDiv.length && $.fn.owlCarousel) {
            $featureSliderDiv.owlCarousel({
                loop: true,
                margin: 0,
                items: 4,
                nav: true,
                autoplay: true,
                smartSpeed: 1500,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    600: {
                        items: 2,
                    },
                    992: {
                        items: 4,
                    }
                }
            });
        }
    }
    feature_slider();
    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider() {
        var $testSliderDiv = $('.testimonials_slider');
        if ($testSliderDiv.length && $.fn.owlCarousel) {
            $testSliderDiv.owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
                dots: true,
                navContainer: ".testimonials_inner",
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                //                responsive: {
                //                    0: {
                //                        items: 1,
                //                    },
                //                    480: {
                //                        items: 2,
                //                    },
                //                    600: {
                //                        items: 4,
                //                    },
                //                    800: {
                //                        items: 6,
                //                    }
                //                }
            });
        }
    }
    testimonials_slider();
	
	   
	
	    function feature_slider_home() {
        var $featureSliderDiv = $('.owl-demoB');
        if ($featureSliderDiv.length && $.fn.owlCarousel) {
            $featureSliderDiv.owlCarousel({
				animateOut: 'fadeOutUp ',
				animateIn: 'fadeInUp',
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                autoplay: true,
				autoplayTimeout:6000,
				autoplayHoverPause:false,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    992: {
                        items: 1,
                    }
                }
            });
        }
    }
    feature_slider_home();
	
	function product_slider2() {
        var $teamSliderDiv = $('.product_thumb');
        if ($teamSliderDiv.length && $.fn.owlCarousel) {
            $teamSliderDiv.owlCarousel({
                loop: false,
                margin: 10,
                items: 4,
                nav: true,
                autoplay: false,
				autoplayTimeout:8000,
                smartSpeed: 1500,
				autoplayHoverPause:true,
                dots: true,
				//navContainer: ".testimonials_inner",
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 1,
                    },
                    600: {
                        items: 4,
                    }
                }
            });
        }
    }
    product_slider2();
	
	function feature_slider_yj() {
        var $featureSliderDiv = $('.news_list');
        if ($featureSliderDiv.length && $.fn.owlCarousel) {
            $featureSliderDiv.owlCarousel({
                loop: true,
                margin: 20,
                items: 3,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
				lazyLoad: true,
				//autoplayHoverPause:true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
				onDrag: callback,
				onTranslated:callback,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }
            });
        }
    }
    feature_slider_yj();
	
		function case_slider() {
        var $featureSliderDiv = $('#case_list');
        if ($featureSliderDiv.length && $.fn.owlCarousel) {
            $featureSliderDiv.owlCarousel({
                loop: true,
				stagePadding: 10,
                margin: 40,
                items: 3,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
				lazyLoad: true,
				//autoplayHoverPause:true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
				onDrag: callback,
				onTranslated:callback,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }
            });
        }
    }
	
	function callback(event) {
	$('body,html').animate({
			scrollTop: $(window).scrollTop() + 1
			}, 0);
			$('body,html').animate({
			scrollTop: $(window).scrollTop() - 1
			}, 0);
	}
	
    case_slider();
	
			function product_slider() {
        var $featureSliderDiv = $('.product_list');
        if ($featureSliderDiv.length && $.fn.owlCarousel) {
            $featureSliderDiv.owlCarousel({
                loop: true,
				stagePadding: 10,
                margin: 40,
                items: 4,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
				lazyLoad: true,
				autoplayHoverPause:true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    992: {
                        items: 4,
                    }
                }
            });
        }
    }
    
    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function client_slider() {
        var $clientSliderDiv = $('.client_slider');
        if ($clientSliderDiv.length && $.fn.owlCarousel) {
            $clientSliderDiv.owlCarousel({
                loop: true,
                margin: 20,
				stagePadding:20,
                items: 5,
                nav: true,               
                autoplay: false,
				autoplayTimeout:6000,
				autoplayHoverPause:false,
                dots: false,
                //                navContainer:".testimonials_inner",
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                    992: {
                        items: 5,
                    }
                }
            });
        }
    }
    client_slider();
    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function team_slider() {
        var $teamSliderDiv = $('.our_team_slider');
        if ($teamSliderDiv.length && $.fn.owlCarousel) {
            $teamSliderDiv.owlCarousel({
                loop: true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    }
                }
            });
        }
    }
    team_slider();
	
	
	function main_pic_news() {
        var $featureSliderDiv = $('.picnews_list');
        if ($featureSliderDiv.length && $.fn.owlCarousel) {
            $featureSliderDiv.owlCarousel({
				animateOut: 'fadeOut',
				animateIn: 'pulse',
                loop: true,
                margin: 0,
                items: 1,
                nav: true,
                autoplay: true,
				autoplayTimeout:5000,
				autoplayHoverPause:false,
                smartSpeed: 450,
                dots: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    992: {
                        items: 1,
                    }
                }
            });
        }
    }
    main_pic_news();
	function all_pic_news() {
        var $featureSliderDiv = $('.allpic');
        if ($featureSliderDiv.length && $.fn.owlCarousel) {
            $featureSliderDiv.owlCarousel({	
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
                loop: true,
				stagePadding:50,
                margin: 50,
                items: 1,
                nav: true,
				autoHeight:true,
                autoplay: true,
				autoplayTimeout:5000,
				autoplayHoverPause:true,
                smartSpeed: 1000,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
                
            });
        }
    }
    all_pic_news();
	
	
	
    /*----------------------------------------------------*/
    /*  Magnific Popup
    /*----------------------------------------------------*/
    var $zoomGalleryDiv = $('.zoom-gallery');
    if ($zoomGalleryDiv.length && $.fn.magnificPopup) {
        $zoomGalleryDiv.magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
        });
    }
	
	   //置顶图标显示
	$('#top-back').hide()	
	$(window).scroll(function(){
		 if($(this).scrollTop() > 500){
			$("#top-back").fadeIn();
		 }
		 else{
			$("#top-back").fadeOut();
		 }
	  })	
	
	var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		});
		wow.init();

	
})(jQuery);