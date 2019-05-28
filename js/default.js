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
    //認証状態の確認
    var config = {
      apiKey: "AIzaSyDt_lkdDdJJRfG_M3WtITYXsfKdg-BW4t0",
      authDomain: "iioffice-test.firebaseapp.com",
      databaseURL: "https://iioffice-test.firebaseio.com",
      projectId: "iioffice-test",
      storageBucket: "iioffice-test.appspot.com",
      messagingSenderId: "715721258818",
      appId: "1:715721258818:web:d996a6a5297c76fb"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);
      if (user) {
      } else {
        window.location.href = "index.html";
      }
    });
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
