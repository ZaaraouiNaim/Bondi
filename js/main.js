$(function () {
  ("use strict");
  // Adjust Landing Section Height
  const winH = $(window).height(),
    navH = $(".navbar").innerHeight();
  $(".landing-slider, .slider-item").height(winH - navH);

  $(".landing-slider").owlCarousel({
    items: 1,
    nav: true,
    dotsEach: true,
    slideTransition: "linear",
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    smartSpeed: 400,
    loop: true,
  });

  // Initialize Blog Slider
  $(".blog-slider").owlCarousel({
    items: 3,
    margin: 15,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});

// Intialize GLightBox
const glightbox = GLightbox({
  selector: ".glightbox",
});

// Our Work Section Gallery Shuffle
const shuffleBtns = document.querySelectorAll(".our-work ul li"),
  workBoxs = document.querySelectorAll(".our-work .box");

shuffleBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    shuffleBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    if (btn.dataset.name === "all") {
      workBoxs.forEach((box) => {
        box.classList.remove("inactive");
      });
    } else {
      workBoxs.forEach((box) => {
        box.classList.contains(btn.dataset.name)
          ? box.classList.remove("inactive")
          : box.classList.add("inactive");
      });
    }
  })
);
