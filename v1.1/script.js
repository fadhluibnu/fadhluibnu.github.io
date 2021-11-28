$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
  
    console.log(wScroll);
    if (wScroll > 2030 && wScroll < 3582) {
      console.log(wScroll);
      $('.navbar').removeClass('bg-seccon');
      $('.navbar').removeClass('navbar-light');
      $('.navbar').removeClass('border-top');
      $('.navbar').addClass('bg-respon');
      $('.navbar').addClass('navbar-dark');
    }
    else if(wScroll > 3582) {
        $('.navbar').addClass('bg-seccon');
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('bg-respon');
        $('.navbar').removeClass('navbar-dark');
    }else{
        $('.navbar').addClass('bg-seccon');
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('bg-respon');
        $('.navbar').removeClass('navbar-dark');

    }
  });