// window.onload = function () {
//   //  모달
//   //배너 슬라이드 기능
//   var swiper = new Swiper(".bannerSwiper", {
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     loop: true,
//   });
// };

window.onload = function () {
  var bannerSwiper = new Swiper(".bannerSwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
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

