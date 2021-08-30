$(document).ready(function () {
    $('.header-menu-btn').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('header-height-show');
    });
    $('.reservation-btn').click(function (e) {
        e.preventDefault();
        $('.reservation').toggleClass('reservation-height-show');
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
