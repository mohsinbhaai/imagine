

// Sticky navbar
// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});


jQuery(document).ready(function($) {
    $("#owl-demo").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 500,
        items: 1,
        singleItem: true,
        autoPlay : 4000
    });
});

$('body').on('mouseenter mouseleave','.dropdown',function(e){
    var _d=$(e.target).closest('.dropdown');
    _d.addClass('show');
    setTimeout(function(){
        _d[_d.is(':hover')?'addClass':'removeClass']('show');
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
    },300);
});
