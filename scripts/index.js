$(document).ready( function () {

});

$(window).on('scroll', function () {
    var self = $(this);
    var listMenu = $('.fixed-item');
    var curIndex = -1;

    $('section').each(function (index) {
        if (self.scrollTop() - ($(this).outerHeight()/2) >
            $(this).offset().top) {
            curIndex = index;
        }
    });

    if (curIndex === -1) {
        listMenu.removeClass('active');
    }
    else {
        var curItemMenu = listMenu.eq(curIndex);

        if (!curItemMenu.hasClass('active')) {
            curItemMenu.addClass('active');
            curItemMenu.siblings().removeClass('active');
        }
    }

    if ($(this).scrollTop() >= 50) {
        $('.fixed').addClass('fix');
    }

    else {
        $('.fixed').removeClass('fix');
    }
});

$('.fixed-toggle').on('click', function () {
    $('.fixed-list').toggleClass('active');
    $('.fixed-toggle').toggleClass('active');
});



