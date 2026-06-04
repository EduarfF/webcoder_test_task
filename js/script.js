$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".nav-menu").toggleClass("is-active");
    $(".menu-list").slideToggle(300);
  });

  function checkScroll() {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("header-scrolled");
    } else {
      $(".header").removeClass("header-scrolled");
    }
  }

  checkScroll();

  $(window).on("scroll", checkScroll);
});

$("#play-button").on("click", function (e) {
  e.preventDefault();

  var $video = $("#main-video");

  $("#video-img, #play-button").fadeOut(300, function () {
    $video.show();
    $video[0].play();
  });
});
