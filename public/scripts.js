$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        touchDrag: false,
        mouseDrag: false,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });
});
