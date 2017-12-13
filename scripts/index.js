$(window).on('scroll', function () {
   if ($(this).scrollTop() >= 50) {
        $('.fixed').addClass('fix');
    }

    else {
       $('.fixed').removeClass('fix');
   }
});

$('.fixed-toggle').on('click', function () {
    $('.fixed-list').toggleClass('active');
});