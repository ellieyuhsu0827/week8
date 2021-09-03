$(function () {
  console.log('Hello Bootstrap5');
});

//Swiper
var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      slidesPerColumn: 1,
    },
  },
});


// 

var mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  slidesPerColumnFill: 'row',
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 1,
    },
  },
});
