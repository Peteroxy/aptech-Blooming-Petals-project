var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
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

// var swiper = new Swiper(".slide-container", {
//   slidesPerView: 3, // Adjust the number of slides per view as needed
//   spaceBetween: 20, // Adjust the space between slides as needed
//   loop: true,
//   fade: true,
//   // cssMode: 'true',
//   grabCursor: true,
//   autoplay: {
//     disableOnInteraction: false,
//     delay: 3000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     0 : {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     }
//   },
// });

// var swiper = new Swiper('.slide-content', {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   loop: true,
//   centerSlide: 'true',
//   fade:'true',
//   grabCursor:'true',
//   transition:true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets:true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     transition:true,
//     prevEl: '.swiper-button-prev',
//   },

  // breakpoints:{
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   520: {
  //     slidesPerView: 2,
  //   },
  //   550: {
  //     slidesPerView: 3,
  //   },
  // },
// });
  
  
// var swiper = new Swiper(".slide-container", {
//   slidesPerView: "auto",
//   loop: true, // Enable loop
//   fade: true,
//   grabCursor: true,
//   cssMode: true,
//   autoplay: {
//     disableOnInteraction: false,
//     delay: 3000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//   },
// });


// var swiper = new Swiper(".slide-container", {
//   slidesPerView: "auto",
//   loop: true, // Enable loop
//   grabCursor: true,
//   autoplay: {
//     delay: 3000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// var swiper = new Swiper(".slide-container", {
//   slidesPerView: 3, 
//   spaceBetween: 20, 
//   loop: true, 
//   grabCursor: true,
//   autoplay: {
//     delay: 3000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

