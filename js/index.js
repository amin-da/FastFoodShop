// چاپتر سوم
// ایجاد کد برای بخش اسلایدر ابتدای صفحه
// کد پایین باعث میشود صفحه لود بشه و اسلایدر فراخوانی بشه
$(document).ready(function() {
    $('.rslides').responsiveSlides({
        speed: 500

    });
});

// چاپتر دوازدهم
$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        autoPlay: true
    });

});

// چاپتر پانزدهم

$(document).ready(function() {
    $(".inline").colorbox({
        inline: true,
        width: "450"
    });

});


// چاپتر شانزدهم

$(document).ready(function() {
    $("#scroll").mCustomScrollbar({
        scrollButtons: {
            enable: true,
        },
        // تم های مختلف در سایت کتابخانه موجود است
        theme: "dark-2",

    })

});


// چاپتر هیجدهم
// ثایت کردن منو سایت با کمک کتابخانه استیکی

$(document).ready(function() {
    $(".sticky-menu").sticky({ topSpacing: 0 });
});


// چاپتر بیست و یکم
// ایجاد دکمه منو برای نویگیشن منو در حالت رسپانسیو
$(document).ready(function() {
    $('.nav-bar').click(function() {
        $('.responsive-nav ul').toggle(200);

    })
});