(function($){

    "use strict";

    // Smooth Scrolling
    smoothScroll.init({
        speed: 800, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: false,
        offset: 80
    });

    // scrolling for nav menu
    var sc_state = 0;
    $(window).scroll( function() {
        var sc_limit = 390;
        var sc = $(window).scrollTop();
        if(sc >= sc_limit && sc_state == 0) {
            $("body").addClass("scrolled");
            sc_state = 1;
        } else if(sc < sc_limit && sc_state == 1) {
            $("body").removeClass("scrolled");
            sc_state = 0;
        }
    });
})(jQuery);