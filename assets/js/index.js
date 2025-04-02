window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".header-sticky").classList.add("sticky");
    } else {
        document.querySelector(".header-sticky").classList.remove("sticky");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.banner-splide', {
        type: 'loop',
        perMove: 1,
        pagination: false,
        arrows: false,
        autoplay: true,
        perPage: 1,
        pauseOnHover: false,
        speed: 750,
    });

    splide.mount();
});

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.testimonials-splide', {
        type: 'loop',
        perMove: 1,
        arrows: false,
        autoplay: true,
        perPage: 1,
        pauseOnHover: false,
        speed: 750,
        pagination: false
    });

    splide.mount();
});

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.trusted-partners-splide', {
        type: 'loop',
        drag: false,
        focus: 'center',
        arrows: false,
        perPage: 5,
        pagination: false,
        autoScroll: {
            pauseOnHover: false,
            speed: 0.5,
        },
        breakpoints: {
            1200: {
                perPage: 4,
            },
            991: {
                perPage: 3,
            },
            767: {
                perPage: 2.5,
            },
            500: {
                perPage: 2,
            }
        }
    });

    splide.mount(window.splide.Extensions);
});