const thumbSwiper = new Swiper(".thumb-swiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
});

const mainSwiper = new Swiper(".main-swiper", {
    spaceBetween: 10,
    thumbs: {
        swiper: thumbSwiper,
    },
});

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.related-products-splider', {
        arrows: false,
        drag: false,
        perPage: 4,
        pagination: true,
        gap:24,
        breakpoints: {
            1200: {
                perPage: 3,
                drag: true
            },
            767: {
                perPage: 2,
                drag: true
            }
        }
    });

    splide.mount();
});

