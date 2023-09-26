(function ($) {
  $(document).ready(function () {
    // Smooth links
    $(document).on("click", 'a[href^="#"]', function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 120,
        },
        500
      );
    });

    $(".opinie-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      prevArrow: null,
      nextArrow: null,
    });

    $(".menu-btn").click(function () {
      $(".menu-btn").toggleClass("active");
      $(".mobile-menu").toggleClass("active");
    });

    $(".close-item").click(function () {
      $(".menu-btn").removeClass("active");
      $(".mobile-menu").removeClass("active");
    });
  });
})(jQuery);
