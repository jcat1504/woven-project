$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.bottomMenu').fadeIn();
    } else {
        $('.bottomMenu').fadeOut();
    }

});