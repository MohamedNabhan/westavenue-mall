
/*global $, document,window*/
$(document).ready(function () {
    "use strict";

    /*---- New ----*/

    /* Start Change Navbar when Scrolling */

    var navbar = $('nav'),
        topNavbar = $('.nav-top'),
        scrollButton = $("#scroll-top");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() <= topNavbar.height()) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
    if ($(window).scrollTop() <= topNavbar.height()) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    if ($(window).scrollTop() >= navbar.height()) {
        navbar.addClass('navbar-scroll');
    }

    /*--- Hide Navbar On click ----*/


    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    $(window).on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });
    // Add smooth scrolling on all links inside the navbar
    $("nav a, .scroll-btn a , footer .links a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            //event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    // Scroll Top
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show(500);
        } else {
            scrollButton.hide(500);
        }
    });
    scrollButton.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });

    $('.shop-slider, #events-slider').owlCarousel({
        items: 4,
        autoplay: 2500,
        autoplayHoverPause: true,
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    
    $('.owl-carousel').owlCarousel({
        items: 3,
        autoplay: 3500,
        autoplayHoverPause: true,
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    //Project Filter
    $("#our-work-gallary").cubeportfolio({
        layoutMode: 'grid',
        filters: '#project-filter',
        defaultFilter: '*',
        animationType: "quicksand",
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }]
    });

    /*--- Form Disaple/Enable Submit Button ----*/
    $('[name="my_checkbox"]').on("change", function () {
        if ($(this).is(':checked')) {
            $('#contact-submit').removeAttr('disabled');
        } else if (!$(this).is(':checked')) {
            $('#contact-submit').attr('disabled', "disabled");
        }
    });



    $("html").niceScroll({
        cursorcolor: '#B5307B',
        cursorwidth: '9px',
        cursorborder: 'none',
        cursorborderradius: '0',
        zindex: '2999'
    });


});