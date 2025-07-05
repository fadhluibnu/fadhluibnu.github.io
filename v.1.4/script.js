// var dataSpyList = [].slice.call(
//   document.querySelectorAll('data-bs-spy="scroll"')
// );
// dataSpyList.forEach(function (dataSpyEl) {
//   bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
// });

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll > $("#home").offset().top - 200) {
    $("#home-link").addClass("active");
    $("#projects-link").removeClass("active");
    $("#skills-link").removeClass("active");
    $("#contact-link").removeClass("active");
  }
  if (
    wScroll > $("#projects").offset().top - 200 &&
    wScroll < $("#skills").offset().top
  ) {
    $("#home-link").removeClass("active");
    $("#projects-link").addClass("active");
    $("#skills-link").removeClass("active");
    $("#contact-link").removeClass("active");
  }
  if (wScroll > $("#skills").offset().top - 200) {
    $("#home-link").removeClass("active");
    $("#projects-link").removeClass("active");
    $("#skills-link").addClass("active");
    $("#contact-link").removeClass("active");
  }
  if (wScroll > $("#contact").offset().top - 200) {
    $("#home-link").removeClass("active");
    $("#projects-link").removeClass("active");
    $("#skills-link").removeClass("active");
    $("#contact-link").addClass("active");
  }
});
