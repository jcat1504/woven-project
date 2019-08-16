$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.bottomMenu').fadeIn();
    } else {
        $('.bottomMenu').fadeOut();
    }

});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('.bottomMenu2').fadeIn();
    } else {
        $('.bottomMenu2').fadeOut();
    }

});