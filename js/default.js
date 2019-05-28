$(function() {
  if (window.location.href.split("/").pop() === "index.html") {
    //ニュース蘭slider
    var mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  } else if (window.location.href.split("/").pop() === "shop.html") {
    $("#sort_by").on("click", () => {
      if ($("#sort_by").hasClass("hidden")) {
        $("#sort_by").removeClass("hidden");
        $("#region_list").removeClass("hidden");
      } else {
        $("#sort_by").addClass("hidden");
        $("#region_list").addClass("hidden");
      }
    });
  }

  $("#down_scroll").on("click", () => {
    let vh = $(window).height() + 149;
    $("html, body").animate(
      {
        scrollTop: vh
      },
      {
        duration: 800,
        easing: "swing"
      }
    );
  });

  $("#scroll_to_top").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      {
        duration: 800,
        easing: "swing"
      }
    );
  });
});
