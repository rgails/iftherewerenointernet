$(document).ready(function() {
    var stickyNavTop = $('.topBar').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) 
        { 
            $('.topBar').addClass('sticky');
        } else 
        {
            $('.topBar').removeClass('sticky'); 
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});