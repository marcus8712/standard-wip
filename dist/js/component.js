// Load

$(window).load(function () {

    // Page Info
    $('meta[name=description]').attr("content", "Design Standards is a carefully crafted design developed by Hoiio UX Team.");
    $('meta[name=keywords]').attr("content", "design, standards, hoiio, uxdesign, user interface, semantic");
    $('meta[name=author]').attr("content", "Hoiio UX Team");

    // Animate loader off screen
    $("body > .hexagon-loading").fadeOut("slow");

    //    var hash = window.location.hash;
    //    $('html,body').animate({
    //        'scrollTop': $(hash).offset().top - 70
    //    }, 'slow');
});

//Scroll
$(window).scroll(function () {

    /*------------------
        Homepage
    -------------------*/

    if ($(this).scrollTop() > 60) {
        $('#header').fadeOut();

    } else {
        $('#header').fadeIn();

    }

});

//Button Menu
var $mobileWidth = $('.mobile-toggle').css("right");
var $before = parseInt($mobileWidth);
var $after = $before + 15;
var styleAfter = {
    'right': ($after)
};
var styleBefore = {
    'right': ($before)
};

$('.mobile-toggle').click(function () {
    if ($(this).attr('aria-expanded') == "true") {
        $(this).css(styleBefore);
    } else {
        $(this).css(styleAfter);
    }

});

// Ready
$(document).ready(function () {


    /*------------------
        Menu Overlay
    -------------------*/

    $('.mobile-toggle, #menu > ul > li > a').click(function (e) {
        var $toggle = $(this);
        var $menu = $('#' + $(this).attr('aria-controls'));

        if ($menu.attr('aria-hidden') == 'true') {
            $('body').addClass('open');
            $menu.attr('aria-hidden', 'false');
            $toggle.attr('aria-expanded', 'true');
        } else if ($menu.attr('aria-hidden') == 'false') {
            $('body').removeClass('open');
            $menu.attr('aria-hidden', 'true');
            $toggle.attr('aria-expanded', 'faremove');
        }
    });


    /*------------------
        Component
    -------------------*/

    // Standard
    $('.ui.dropdown').dropdown();


    $('.ui.label').popup();

    $('.ui.rating')
        .rating();


    // Page Info
    var page = $("body").data().page;
    var link = [];
    $("#menu #mobileNavWrapper nav li").each(function () {
        var txt = $(this).data().link;
        link.push(txt);
    });

    for (var j = 0; j < link.length; j++) {
        if (link[j] == page) {
            $('#menu #mobileNavWrapper nav li[data-link="' + link[j] + '"]').addClass("active");
        }
    }

});


// Sidebar
$('.ui.sidebar').on('mousewheel DOMMouseScroll', function (e) {
    var scrollTo = null;

    if (e.type === 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    } else if (e.type === 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }

    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
});

$("#content > .block ").each(function () {
    if ($(this).children().children().is(".button")) {
        var id = $(this).attr('id');
        $("#" + id + "-sidebar").addClass('active');
        $("#" + id + "-sidebar")
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('attach events', "#" + id + " button");
    }

});

// Detect Device

if ($(window).width() < 768) {
    $('body').attr('data-device', 'mobile');
} else {
    $('body').attr('data-device', 'desktop');
}



//
//$(document).bind('scroll', function (e) {
//    $("[data-device='desktop'] > #content > .block").each(function () {
//        if (
//            $(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10
//        ) {
//            window.location.hash = $(this).attr('id');
//        }
//    });
//});

$('.active a').click(function () {
    return false;
});
