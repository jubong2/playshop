// 배너 스와이프
window.onload = function () {
  var bannerSwiper = new Swiper(".bannerSwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  }); // 컨셉스와이퍼
  var swiper = new Swiper(".concept2-Swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
  // 상품 스와이퍼
  var produsceSwiper = new Swiper(".productSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".section2 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1920: { slidesPerView: 3 },
      // 1400: { slidesPerView: 2 },
      700: { slidesPerView: 2 },
    },
  });
};
// 제이쿼리
$(document).ready(function () {
  $(".noticClick").click(function () {
    $(".modal").addClass("notic");
  });
  $(".close-button").click(function () {
    $(".modal").removeClass("notic");
  });
});
