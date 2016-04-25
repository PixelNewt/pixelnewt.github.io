$(document).ready(function() {
    // $('#nav-panel').hide();

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
        var position = 460;

        if(offset > position) {
            $('#nav-panel').fadeIn("slow");
            $('#nav-panel').removeClass("navbar-inverse");
            $('#nav-panel').addClass("navbar-default");
        } else if (offset == 0) {
            $('#nav-panel').fadeIn();
            $('#nav-panel').addClass("navbar-inverse");
            $('#nav-panel').removeClass("navbar-default");
        } else {
            $('#nav-panel').fadeOut();
            $('#nav-panel').addClass("navbar-inverse");
            $('#nav-panel').removeClass("navbar-default");
        }
    });
});
