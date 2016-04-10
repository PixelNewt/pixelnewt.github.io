$(document).ready(function() {
    $('#nav-panel').hide();

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

    $(window).on('scroll', function() {
        var offset = window.pageYOffset;
        var position = 64;

        if(offset > position) {
            $('#nav-panel').fadeIn();
            // $('#nav-panel').addClass("navbar-fixed-top");
            // $('#nav-panel').removeClass("navbar-static-top");
        } else {
            $('#nav-panel').fadeOut();
            // $('#nav-panel').addClass("navbar-static-top");
            // $('#nav-panel').removeClass("navbar-fixed-top");
        }
    });
});
