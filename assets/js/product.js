const thumbSwiper = new Swiper(".thumb-swiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
});

const mainSwiper = new Swiper(".main-swiper", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    thumbs: {
        swiper: thumbSwiper,
    },
});

const ratingBox = document.getElementById('rating-box');

const rater = raterJs({
    element: ratingBox,
    max: 5,
    starSize: 24,
    step: 1,
    rating: 0,
    showToolTip:false,
    rateCallback: function (rating, done) {
        this.setRating(rating);
        console.log('rating: ', rating)
        done();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.related-products-splider', {
        arrows: false,
        drag: false,
        perPage: 4,
        pagination: true,
        gap: 24,
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

