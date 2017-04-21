
jQuery(document).ready(function($) {
    $('.mobile-menu-btn').click(function() {
        $('.main-menu').find('.menu').slideToggle();
    });

    $('.main-slide').carousel({
        interval: 2000,
        pause: null
    });
});