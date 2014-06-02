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
$('body').scrollspy({target: '#scrollspy-links'})
