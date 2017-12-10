$(window).on('scroll', function () {
   if ($(this).scrollTop() >= 50) {
        $('.fixed').addClass('fixed-top');
    }

    else {
       $('.fixed').removeClass('fixed-top');
   }
});