window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".header-sticky").classList.add("sticky");
    } else {
        document.querySelector(".header-sticky").classList.remove("sticky");
    }
});