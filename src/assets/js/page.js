$(document).on("ready", function () {
  // initialization of carousel
  $.HSCore.components.HSCarousel.init(".js-carousel");

  // initialization of go to section
  $.HSCore.components.HSGoTo.init(".js-go-to");

  // initialization of header
  $.HSCore.components.HSHeader.init($("#js-header"));
  $.HSCore.helpers.HSHamburgers.init(".hamburger");
});

$(window).on("load", function () {
  // initialization of HSScrollNav
  $.HSCore.components.HSScrollNav.init($("#js-scroll-nav"), {
    duration: 700,
  });
});
