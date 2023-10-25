var swiper = new Swiper(".slide-container", {
    slidesPerView: "auto",
    // spaceBetween: 20,
    sliderPerGroup: "auto",
    slidesOffsetAfter: 0,
    loopFillGroupBlank: false,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    // observer: true,
    // observeParents: true,
    // on: {
    //   init: function () {
    //     this.update();
    //   }
    // },
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
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      0 : {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
  });
  
  
  