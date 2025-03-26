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
        speed: 750
    });

    splide.mount();
});

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.testimonials-splide', {
        type: 'loop',
        perMove: 1,
        pagination: false,
        arrows: false,
        autoplay: true,
        perPage: 1,
        pauseOnHover: false,
        speed: 750,
        pagination: true
    });

    splide.mount();
});

// document.addEventListener("DOMContentLoaded", function () {
//     const hoverElement = document.querySelector(".best-selling"); // Select your image element
//     const imageElement = document.querySelector(".product-1"); // Select your image element
//     const hoverImg = document.querySelector(".product-1-hoverimg"); // Select your image element
//     // const originalSrc = imageElement.src; // Store original image source
//     // const hoverSrc = "new-image.jpg"; // Replace with the new image URL

//     hoverElement.addEventListener("mouseover", function () {
//         imageElement.classList.add("fade-out");
//         hoverImg.classList.add("fade-in");
//     });
    
//     hoverElement.addEventListener("mouseout", function () {
//         imageElement.classList.remove("fade-out");
//         hoverImg.classList.remove("fade-in");
//     });
// });