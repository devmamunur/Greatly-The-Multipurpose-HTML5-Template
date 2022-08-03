$(function ($) {
  "use strict";
  

  // banner slider
  var $mainSlider = $('.silder');

  $mainSlider.owlCarousel({
  loop: true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  nav: true,
  dots:false,
  autoplay: true,
  autoplayTimeout: 5000,
  animateOut: 'slideOutDown',
  animateIn: 'fadeIn',
  smartSpeed: 450,
  responsive: {
      0: {
          items: 1,
          nav:false
      },
      768: {
          items: 1,
          nav:false,
      },
      960: {
          items: 1
      },
      1200: {
          items: 1
      },
      1920: {
          items: 1
      }
  }
});


});