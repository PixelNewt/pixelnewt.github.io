$(document).ready(function() {

    // smooth scrolling
    $(function() {
        $('.scroll-to-section').bind('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href');
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 1500);
        });
    });

// twitter bootstrap scrollspy
// $('body').scrollspy({target: '#scrollspy-links'})


    // // fix menu when passed
    // $('.masthead').visibility({
    //   once: false,
    //   onBottomPassed: function() {
    //     $('.fixed.menu').transition('fade in');
    //   },
    //   onBottomPassedReverse: function() {
    //     $('.fixed.menu').transition('fade out');
    //   }
    // })
    // ;

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
});