document.addEventListener('DOMContentLoaded', function () {
    const width = window.innerWidth;
    if (width < 768) {
        const windowInnerWidth = document.documentElement.scrollWidth;
        const slideWidth = 240;
        const spaceBetween = 16;
        const slidesPerView = (windowInnerWidth + spaceBetween) / (slideWidth + spaceBetween);

        const swiper = new Swiper(".swiper", {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,

            }
        });
    }
});


