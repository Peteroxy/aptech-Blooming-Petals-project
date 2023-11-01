var swiper = new Swiper(".slide-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesOffsetAfter: 0,
  loopFillGroupBlank: false,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  cssMode: 'true',
  autoplay: {
    disableOnInteraction:false,
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    0 : {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  },
});


