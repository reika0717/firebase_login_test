$(function() {
  var filename_ex = window.location.href.match(".+/(.+?)([?#;].*)?$")[1];
  if (filename_ex === "index.html") {
    //ニュース欄, NEW OPEN slider
    var mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true
    });

    // NEW OPEN thumbnail
    $(".swiper-button").on("click", () => {
      let active_pic_src = $(".swiper-slide-active")
        .find(".office_img")
        .attr("src");
      let active_num = active_pic_src.substr(-6, 2);
      active_num = Number(active_num);
      second_num = (active_num + 1) % 4;
      third_num = (active_num + 2) % 4;
      forth_num = (active_num + 3) % 4;
      if (second_num === 0) {
        second_num = 4;
      } else if (third_num === 0) {
        third_num = 4;
      } else if (forth_num === 0) {
        forth_num = 4;
      }

      $(".office_small_pic_second").attr(
        "src",
        "assets/shop-img-0" + second_num + ".jpg"
      );
      $(".office_small_pic_third").attr(
        "src",
        "assets/shop-img-0" + third_num + ".jpg"
      );
      $(".office_small_pic_forth").attr(
        "src",
        "assets/shop-img-0" + forth_num + ".jpg"
      );
    });
  } else if (filename_ex === "shop.html") {
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

  /* spメニュートグルOPEN */
  $("#sp_open_btn").on("click", () => {
    if (
      $("#global_nav_sp")
        .attr("class")
        .indexOf("active") === -1
    ) {
      $("#global_nav_sp").addClass("active");
    }
  });

  /* spメニュートグル CLOSE */
  $("#sp_close_btn").on("click", () => {
    console.log($("#global_nav_sp").attr("class"));
    $("#global_nav_sp").removeClass("active");
    console.log($("#global_nav_sp").attr("class"));
  });
});
