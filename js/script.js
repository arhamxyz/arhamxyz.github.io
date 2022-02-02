$(document).ready(function () {
    $('.active-partner-carusel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: false
            }
        }
    })
    $('.active-lisensi-carusel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
    })
    $('.active-dokumentasi-carusel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        // autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 2,
                nav: false,
                loop: false
            }
        }
    })
});
//auto hide sidebar
$(document).click(function (e) {
    if ($(e.target).closest("#top-navigation-menu").attr("id") != "top-navigation-menu") {
        if ($('.top-navigation').hasClass('responsive')) {
            top_navigation()
        }
    }
});
function top_navigation() {
    var top_navigation_menu = document.getElementById("top-navigation-menu");
    if (top_navigation_menu.className === "top-navigation") {
        top_navigation_menu.className += " responsive";
    } else {
        top_navigation_menu.className = "top-navigation";
    }
}