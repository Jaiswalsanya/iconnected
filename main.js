// $(document).ready(function (){
// $(".nav-link").click(function(){
//     // $(this).hide();
//     $("[href]").css("background-color","tranparent")
// });
// });
// $(document).ready(function(){
//     $(".image-x").click(function(){
//         $(".image-x").hide();
//     });
// });
// $(document).ready(function(){
//     $(".nav").css("color", "red");
// })
// $(document).ready(function(){
//     $(".nav-link").hover(function(){
//         $(this).css("background-color" , "yellow");
//     },
//     function(){
//      $(this).css("background-color" , "red");

//     })
// })

// function toggleWrapper(){
//   document.getElementsByClassName('menubar').item(0).style.left="250px";
// }

// function toggleWrapperopen(){
//   document.getElementsByClassName('menubar').item(0).style.left="-250px";

// }

$(document).ready(function () {
  $(".nav-toggle").click(function () {
    $(".collapse-toggle").toggle("slow");
    $("body").toggleClass("toggle-effect");
  });

  let navItem = ".nav-item>a";
  let active = "active";
  $(navItem).on("click", function () {
    $(navItem).removeClass(active);
    $(this).addClass(active);
  });

  let boxItem = ".box";
  $(boxItem).on("click", function () {
    let active = "active";
    $(boxItem).removeClass(active);
    $(this).addClass(active);
  });
  $(".box").hover(
    function () {
      $(this).css("box-shadow", "inset 0px -2px 0px 0px #f14e9b");
    },
    function () {
      $(this).css("box-shadow", "inset 0px -2px 0px 0px #ffffff");
    }
  );

  $(".nav-item>a").click(function () {
    $(".nav-toggle").trigger("click");
  });

  $(window).on("scroll", function () {
    console.log("window", window.scrollY);
    if (window.scrollY > 750) {
      $(".header").addClass("fix_header");
    } else {
      $(".header").removeClass("fix_header");
    }
  });
});

//slider

$("._trending_sider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
