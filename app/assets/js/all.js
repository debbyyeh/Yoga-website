$(document).ready(function () {
    $('.header-menu-btn').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('header-height-show');
    });
    $('.reservation-btn').click(function (e) {
        e.preventDefault();
        $('.reservation').toggleClass('reservation-height-show');
    });
    $('.level-btn-1').click(function (e) {
        e.preventDefault();
        $('.reservation').toggleClass('level-height-show-1');
    });
    $('.level-btn-2').click(function (e) {
        e.preventDefault();
        $('.reservation').toggleClass('level-height-show-2');
    });
    $('.level-btn-3').click(function (e) {
        e.preventDefault();
        $('.reservation').toggleClass('level-height-show-3');
    });
    $('.courses_level').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('.active');
    });
    $('.order-btn').click(function (e) {
        e.preventDefault();
        $('.reserveFinish').toggleClass('order-height-show');
    });
});
