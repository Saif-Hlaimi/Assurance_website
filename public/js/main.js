(function ($) {
  "use strict";

  $(document).ready(function () {

    // Spinner
    if ($('#spinner').length > 0) {
      setTimeout(function () {
        $('#spinner').removeClass('show');
      }, 1);
    }

    // Initiate WOW.js
    if (typeof WOW === 'function') {
      new WOW().init();
    }

    let lastScrollTop = 0;

    // Sticky Navbar and Back to Top button
    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();

      // Check scroll direction
      if (scrollTop > lastScrollTop) {
        // Scroll Down: Hide the navbar
        $('.navbar').addClass('hidden');
      } else {
        // Scroll Up: Show the navbar
        $('.navbar').removeClass('hidden');
      }
      lastScrollTop = scrollTop;

      // Back to Top button
      if (scrollTop > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    // Back to Top button click
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });

    // Facts counter
    if ($.fn.counterUp) {
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
      });
    }

    // Testimonials carousel
    if ($.fn.owlCarousel) {
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]
      });
    }
  });

})(jQuery);
