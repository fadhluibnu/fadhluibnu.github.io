// var dataSpyList = [].slice.call(
//   document.querySelectorAll('data-bs-spy="scroll"')
// );
// dataSpyList.forEach(function (dataSpyEl) {
//   bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
// });

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // Reset all active states
  function resetActiveStates() {
    $("#home-link").removeClass("active");
    $("#projects-link").removeClass("active");
    $("#experience-link").removeClass("active");
    $("#skills-link").removeClass("active");
    $("#contact-link").removeClass("active");
  }

  // Home section active
  if (wScroll > $("#home").offset().top - 200 && 
      ($("#projects").length ? wScroll < $("#projects").offset().top - 200 : true)) {
    resetActiveStates();
    $("#home-link").addClass("active");
  }
  
  // Projects section active
  if ($("#projects").length && 
      wScroll > $("#projects").offset().top - 200 && 
      ($("#experience").length ? wScroll < $("#experience").offset().top - 200 : 
       ($("#skills").length ? wScroll < $("#skills").offset().top - 200 : true))) {
    resetActiveStates();
    $("#projects-link").addClass("active");
  }
  
  // Experience section active
  if ($("#experience").length && 
      wScroll > $("#experience").offset().top - 200 && 
      ($("#skills").length ? wScroll < $("#skills").offset().top - 200 : true)) {
    resetActiveStates();
    $("#experience-link").addClass("active");
  }
  
  // Skills section active
  if ($("#skills").length && 
      wScroll > $("#skills").offset().top - 200 && 
      ($("#contact").length ? wScroll < $("#contact").offset().top - 200 : true)) {
    resetActiveStates();
    $("#skills-link").addClass("active");
  }
  
  // Contact section active
  if ($("#contact").length && 
      wScroll > $("#contact").offset().top - 200) {
    resetActiveStates();
    $("#contact-link").addClass("active");
  }
});
