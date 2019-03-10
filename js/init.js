(function ($) {
  $(function () {

    //slider jquery
    $('.slider').slider({
      "indicators": false,
      "interval": 2000
    });

    $('.page-scroll').on('click', function (e) {
      e.preventDefault();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {

          $('html, body').animate({
            scrollTop: target.offset().top - 70
          }, 1500);
        }

      }

      $('body').toggleClass('body-push-toleft');
      $('#navb').toggleClass('menu-open');

    });


  }); // end of document ready

})(jQuery); // end of jQuery name space

//slider via javascript dom
// const slider = document.querySelectorAll('.slider');
// M.Slider.init(slider, {
//   indicators: false
// });

//sidenav
$(document).ready(function () {
  $('.sidenav').sidenav();
});

//paralax
$(document).ready(function () {
  $('.parallax').parallax({
    "responsiveThreshold": 100
  });
});
//carousel
$(document).ready(function () {
  $('.carousel.carousel-slider').carousel({
    "indicators": true,
    "fullWeight": true

  });
});
//material-box
$(document).ready(function () {
  $('.materialboxed').materialbox();
});