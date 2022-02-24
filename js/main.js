$(document).ready(function () {
  $(".nav-item a").click(function () {
    //removing the previous selected menu state
    $(".nav-item").find(".active").removeClass("active");
    //adding the state for this parent menu
    $(this).addClass("active");
  });
});

// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();

//   if (scroll >= 200) {
//     $(".navbar").addClass("moveup");
//   } else {
//     $(".navbar").removeClass("moveup");
//   }
// });
