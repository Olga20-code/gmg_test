'use strict';

$(document).ready(function() {

  // якір
  $(".go-to").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href");

    if ($(anchor).length) {
      var run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
  });

  //slider
  // $('.slider').slick({
  //   arrows: false,
  //   autoplay: 1000,
  // });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.text-slider',
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  //мобільне меню
  // var timelineOpen = new mojs.Timeline({ speed: 1.5 });
  // var timelineClose = new mojs.Timeline({ speed: 2 });
  //
  // var _strokeWidth;
  // var RADIUS = 15;
  // var hamburger = document.querySelector("#hamburger-open");
  //
  // var spans = document.getElementsByClassName("spans");
  // var spanOne = document.querySelector("#spanOne");
  // var spanTwo = document.querySelector("#spanTwo");
  // var spanThree = document.querySelector("#spanThree");
  //
  // var modalMenu = document.querySelector(".modal-menu");
  //
  // var burst1 = new mojs.Burst({
  //   parent: hamburger,
  //   x: "50%",
  //   y: "50%",
  //   angle: { 0: 90 },
  //   radius: { 30: 45 },
  //   count: 3,
  //   children: {
  //     shape: "circle",
  //     radius: RADIUS,
  //     scale: { 1: 0 },
  //     fill: ["#ff4338", "#00b3e3", "#3cd52e"],
  //     duration: 2000,
  //     easing: "quad.out"
  //   }
  // });
  //
  // var burst2 = new mojs.Burst({
  //   parent: hamburger,
  //   x: "50%",
  //   y: "50%",
  //   angle: { 0: 90 },
  //   radius: { 30: 45 },
  //   count: 3,
  //   children: {
  //     shape: "circle",
  //     radius: RADIUS,
  //     scale: { 0: 1 },
  //     strokeWidth: { 1: 3 },
  //     opacity: { 1: 0 },
  //     fill: "transparent",
  //     stroke: ["#ff4338", "#00b3e3", "#3cd52e"],
  //     duration: 2000,
  //     easing: "quad.out"
  //   }
  // });

// OPEN
//   var openBackground = new mojs.Shape({
//     fill: "#111820",
//     scale: { 0: 8.5 },
//     radius: 200,
//     delay: 1000,
//     easing: "cubic.out",
//     backwardEasing: "ease.out",
//     duration: 2000
//   });
//
//   burst1.el.style.zIndex = 2;

// check if the hamburger's been crossed
//  var cross = spanOne.classList.contains("red");

//timeline with burst and background open
//  timelineOpen.add(burst1, burst2, openBackground);
//timeline with background close
//  timelineClose.add(openBackground);

//click on the hamburger
//   hamburger.addEventListener("click", function(e) {
//     // check if the menu is a cross
//     var cross = spanOne.classList.contains("red");
//
//     modalMenu.classList.toggle("show");
//
//     if (cross) {
//       timelineClose.playBackward();
//       for (var i = 0; i < spans.length; i++) {
//         spans[i].classList.remove("red");
//       }
//       spanOne.classList.remove("spanOneRotate");
//       spanTwo.classList.remove("spanTwoRotate");
//       spanThree.classList.remove("spanThreeHide");
//     } else {
//       timelineOpen.play();
//
//       for (var i = 0; i < spans.length; i++) {
//         spans[i].classList.add("red");
//       }
//
//       spanOne.classList.add("spanOneRotate");
//       spanTwo.classList.add("spanTwoRotate");
//       spanThree.classList.add("spanThreeHide");
//     }
//   });

//  фільтрація портфоліо

  $('.choose a').click(function(e) {
    e.preventDefault();
    $('.choose li').removeClass('selected');
    $(this).parent('li').addClass('selected');

    let imgWidth = '52px';
    let thisItem = $(this).attr('rel');

    if (thisItem !== "all") {

      $('.item li[rel=' + thisItem + ']').stop().animate({
        'width': imgWidth,
        'opacity': 1,
        'marginRight': '.5em',
        'marginLeft': '.5em'
      });

      $('.item li[rel!=' + thisItem + ']').stop().animate({
        'width': 0,
        'opacity': 0,
        'marginRight': 0,
        'marginLeft': 0
      });
    } else {

      $('.item li').stop().animate({
        'opacity': 1,
        'width': imgWidth,
        'marginRight': '.5em',
        'marginLeft': '.5em'
      });
    }
  });

  $('.item li img').animate({'opacity' : 0.5}).hover(function() {
    $(this).animate({'opacity' : 1});
  }, function() {
    $(this).animate({'opacity' : 0.5});
  });

});
