var $window = $(window);

// Resize function
$window.resize(function(event) {
    setTimeout(function() {
        SetResizeContent();
    }, 500);
    event.preventDefault();
});

// FullScreenHeight function
function fullScreenHeight() {
    var element = $(".full-screen");
    var $minheight = $window.height();
    element.css('min-height', $minheight);
}

// ScreenFixedHeight function
function ScreenFixedHeight() {
    var $headerHeight = $("header").height();
    var element = $(".screen-height");
    var $screenheight = $window.height() - $headerHeight;
    element.css('height', $screenheight);
}

// FullScreenHeight and screenHeight with resize function
function SetResizeContent() {
    fullScreenHeight();
    ScreenFixedHeight();
}

SetResizeContent();

$(document).ready(function() {

    $(".animate-redirect a[href^='#']").click(function(e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        }, 1000);
    });

    // scroll to top
    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);

        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });

    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    // inner-page-slides
    $(".inner-page-slides").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        margin: 0,
        center: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },                
            992: {
                items: 3
            },
            1200: {
                items: 4
            }                
        }
    });

    $(".animate-redirect a[href^='#']").click(function(e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        }, 1000);
    });

    // scroll to top
    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);

        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });

    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    $('.countup').counterUp({
        delay: 50,
        time: 2000
    });  

    // Current Year
    $('.current-year').text(new Date().getFullYear());


});