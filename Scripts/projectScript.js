
var vh = window.innerHeight,
    vw = window.innerWidth;


function getRandom(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
};

function is_touch_enabled() {
  return ( 'ontouchstart' in window ) ||
         ( navigator.maxTouchPoints > 0 ) ||
         ( navigator.msMaxTouchPoints > 0 );
};


$(window).ready(function() {

  $('.myEye').css({
    left: 4,
    top: 0
  });

//footer - Other works tiles
  var workTiles = $(".work-tile");
      workTiles.toArray();
  var tileWidth = vw/workTiles.length;
  workTiles.css("width", tileWidth);

  TweenMax.staggerFromTo('#all-works h2, #all-works div', .8, {y: 100}, {y: 0, autoAlpha: 1, immediateRender: false}, .2);

  scheckerUserFlowDrag();
  floatingMockup();
  tileHover();
  revealMe();




  TweenMax.from('.project-hero', 1.5, {autoAlpha: 0});
  TweenMax.staggerFrom('.project-intro .wrapper div', 1, {y: 100, autoAlpha: 0}, .2);

});


$(document).ready(function() {


  TweenMax.staggerFromTo(".about, .portrait-cover", .8, {y: 100}, {autoAlpha: 1, y: 0}, .2);


  hamburgerHover();
  toggleMenu();
  CTAarrowHover();
  CTAbuttonHover();


  var menuAssembleTL = new TimelineMax();
      menuAssembleTL.to(".menu .bar1", .2, {rotation: 0, transformOrigin: "top left"})
                    .to(".menu .bar3", .2, {rotation: 0, x: 24, transformOrigin: "bottom right"})
                    .to(".menu .bar3", .2, {rotation: 0, y: 10})
                    .to(".menu .bar2", .2, {rotation: -40, transformOrigin: "top left"});


  TweenLite.set(".closeMenu .closeBar1", {rotation: 45, transformOrigin: "center", y: 15, x: 4});
  TweenLite.set(".closeMenu .closeBar2", {rotation: -45, transformOrigin: "center", y: 15, x: 4});

  TweenLite.set("footer", {opacity: 0, scaleY: 0, transformOrigin: "bottom center"});


  $('.back-to-top').each(function(i, el) {
    $(this).click(function() {
        window.scrollTo(0,0);
    });
  });


  $(window).on('scroll', function () {

      var pixs = $(document).scrollTop()
          pixs = pixs/500;

        for (i=0; i <= 1; i++) {
          $("#sa-hero-img, #bardot-hero-img").css({"opacity": 1-pixs});
        }

      var scrollHeight = $(document).height(),
    	    scrollPosition = $(window).height() + $(window).scrollTop();
      var tl = new TimelineMax();

    	if ((scrollHeight - scrollPosition) <= 50) {
          tl.to("footer", .8, {opacity: 1, scaleY: 1, ease: Back.easeOut.config(1.7)});
    	} else {
          tl.to("footer", .6, {opacity: 0, scaleY: 0});
      }

  });




var triggerOffset = document.documentElement.clientHeight / 1.2,
    duration = $( window ).height() / 2,
    requestId = null,

    scene_1 = $('#schecker-intro').offset().top,
    scene_2 = $('#schecker-hiw-section').offset().top,
    scene_2a = $('#schecker-hiw-section .leading-line').offset().top,
    scene_2b = $('#schecker-features').offset().top,
    scene_3a = $('#concept-development').offset().top,
    scene_3b = $('#s_concept-flow').offset().top,
    scene_3c = $('#s_leading-line-2').offset().top,
    scene_3d = $('#s_wireframe').offset().top,
    scene_3e = $('#s_leading-line-3').offset().top,
    scene_3f = $('#schecker-draggable-flow').offset().top,
    scene_3g = $('#s_leading-line-4').offset().top,
    scene_3h = $('#s_ui').offset().top,
    scene_3i = $('#s_leading-line-5').offset().top,
    scene_3j = $('#s_collage').offset().top,
    scene_4 = $('#s_prototypeCTA').offset().top,
    scene_4a = $('#schecker-viewInvision').offset().top;




TweenLite.set('#schecker-intro .block', { autoAlpha: 0, scaleX: 0, transformOrigin: "top left" });





// SCROLL MAGIC!!!
var tl = new TimelineMax({ paused: true })
    .to(".mouse_scroll", 600, { y: "+=800", autoAlpha: 0 }, scene_1 - 100)
    .to("#schecker-hero", 300, { scale: 0, autoAlpha: 0 }, scene_1 - 100)
    .from("#schecker-intro", duration, { scale: 0, transformOrigin: "center" }, scene_1)
    .staggerTo("#schecker-intro .block", duration - 100, { autoAlpha: 1, scaleX: 1 }, 100, scene_1)
    .from("#schecker-hiw-section h3", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_2)
    .from("#schecker-hiw-section .leading-line", duration * 2, { scaleY: 0, transformOrigin: "top left" }, scene_2a)
    .staggerFrom(".ic_schecker-feature", 300, {autoAlpha: 0, scale: 0, rotation: -90}, 50, scene_2b)
    .from("#concept-development h3", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3a)
    .from("#s_leading-line-1", duration * 2, { scaleY: 0, transformOrigin: "top left" }, scene_3a + 300)
    .from("#s_concept-flow-h5", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3b)
    .from("#s_concept-flow-img", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3b)
    .from("#s_leading-line-2", duration * 2, { scaleY: 0, transformOrigin: "top left" }, scene_3c)
    .from("#s_wireframe-h5", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3d)
    .from("#s_wireframe-img", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3d)
    .from("#s_leading-line-3", duration * 2, { scaleY: 0, transformOrigin: "top left" }, scene_3e)
    .from("#schecker-draggable-flow h5", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3f)
    .from("#schecker-userFlow", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3f)
    .from("#s_leading-line-4", duration * 2, { scaleY: 0, transformOrigin: "top left" }, scene_3g + 200)
    .from("#s_ui h5", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3h)
    .from("#s_ui img", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3h)
    .from("#s_leading-line-5", duration * 2, { scaleY: 0, transformOrigin: "top left" }, scene_3i + 100)
    .from("#s_collage", duration, { scale: 0, transformOrigin: "top right", rotation: -90}, scene_3j)
    .from("#schecker-viewInvisionCTA", duration, { x: "-=500", autoAlpha: 0 }, scene_4)
    .to("#s_collage", duration, { autoAlpha: .1 }, scene_4a)
    .from("#schecker-viewInvision", duration, { x: "-=500", autoAlpha: 0 }, scene_4a);




// Only update on animation frames
window.addEventListener("scroll", function() {
  if (!requestId) {
    requestId = requestAnimationFrame(update);
  }
});

update();

// Set timeline time to scrollTop
function update() {
  tl.time(window.pageYOffset + triggerOffset);
  requestId = null;
}




$(window).scroll(function(event) {
  $(".block-in").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});








});







function hamburgerHover() {
  $('.menu').each(function (i, el) {
    var hamburgerTL = new TimelineMax();
    $(this).hover (
      function() {
        hamburgerTL
                  .to($(".bar1", this), .08, {rotation: -90, backgroundColor: "#F3425E", transformOrigin: "top left"})
                   .to($(".bar3", this), 0.08, {rotation: 90})
                   .to($(".bar3", this), 0.08, {x: 0, backgroundColor: "#F3425E"})
                   .to($(".bar2", this), .08, {rotation: -90, x: 0, yPercent: 40, backgroundColor: "#F3425E"});
      },
      function() {
        hamburgerTL
                   .to($(".bar2", this), 0.3, {rotation: -40, x: 0, yPercent: 0, backgroundColor: "#0e83ea"})
                   .to($(".bar1", this), 0.2, {rotation: 0, backgroundColor: "#0e83ea"}, "-=.2")
                   .to($(".bar3", this), 0.1, {y: 10, x: 24, rotation: 0, backgroundColor: "#0e83ea"});
      }
    );
  });
};




function toggleMenu() {
  var hamburgerState = new TimelineMax();
      hamburgerState.from(".closeMenu", .6, {height: 0})
                    .from(".closeBar1, .closeBar2", .3, {width: 0, rotation: 0})
                    .to(".closeBar1", .2, {rotation: 45})
                    .to(".closeBar2", .2, {rotation: -45}, "-=.2");
      hamburgerState.reverse();

  var openOverlay = new TimelineMax();
      openOverlay
                 .to($('.overlay'), .5, {scaleY: 1, autoAlpha: .98, transformOrigin: "bottom center",
                                         ease: Power4.easeOut})
                 .to('.overlay', .7, {borderRadius: 0}, "-=.3")
                 .staggerFromTo(".overlay .menu-items ul li", .5, {scaleY: 0, y: 50, autoAlpha: 0,
                                                                   },
                                                                  {scaleY: 1, y: 0, autoAlpha: 1, rotation: 0,
                                                                   ease: Power4.easeOut}, 0.1, "-=.2");
      openOverlay.reverse();

  const menus = [$(".menu"), $(".closeMenu")];
   $.each(menus, function(i, el) {
    $(this).click(function() {
      if (openOverlay.reversed() ) {
          openOverlay.play();
          hamburgerState.play();
      } else {
        openOverlay.reverse();
        hamburgerState.reverse();
      }
    });
  });



  $(".overlay .menu-items ul li a").each(function(i, el) {
    $(this).click(function() {
      openOverlay.reverse();
    });
  });
};






function floatingMockup() {
  var tl = new TimelineMax({repeat: -1, yoyo: true});
      tl.set('#schecker-hero img', {y: -10})
        .to('#schecker-hero img', 2, {y: 10});
}


function CTAarrowHover() {
  $('.CTAarrow, a.cta-w-label').hover(
    function() {
      TweenMax.to('svg.svg-circle', .8, {strokeDashoffset: 0, rotation: 180});
      TweenMax.to('.CTA-label', .3, {color: '#F3425E'});
    },
    function() {
      TweenMax.to('svg.svg-circle', 1, {strokeDashoffset: 158, rotation: 0});
      TweenMax.to('.CTA-label', .5, {color: '#0e83ea'});
    }
  );
};



//CTA buttons Animation
function CTAbuttonHover() {
  $('.CTA-button').each(function (i, el) {
    $(this).hover (
      function() {
        TweenMax.to($(".button-outline", this), .5, {strokeDashoffset: 0, strokeDasharray: 480});
        TweenMax.to($("h6.CTA-label", this), .2, {color: '#f90760', delay: .4});
        TweenMax.to($(".cta-btn-stroke", this), .7, {stroke: "#f90760"});
      },
      function() {
        TweenMax.to($(".button-outline", this), .4, {strokeDashoffset: 95, strokeDasharray: '50 200'});
        TweenMax.to($("h6.CTA-label", this), .2, {color: '#0e83ea'});
        TweenMax.to($(".cta-btn-stroke", this), .4, {stroke: "#0e83ea"});
      }
    );
  })
};



function tileHover() {
  $('.work-tile'). each(function(i, el) {
    $(this).hover (
     function() {
       TweenMax.fromTo($('.tile-CTA', this), .5, {scale: 0}, {scale: 1, autoAlpha: 1, ease: "back.out(1.7)"});
       TweenMax.to($('> div', this), .3, {scale: 1.05});
    },
     function() {
       TweenMax.to($('.tile-CTA', this), .3, {scale: 0, autoAlpha: 0});
       TweenMax.to($('> div', this), .2, {scale: 1, ease: "none"});
      }
    );
  })
};



function revealMe() {
  $('#reveal-me-btn').on("click", function() {
    var tl = new TimelineMax();
        tl.to('#reveal-me-btn', .3, {autoAlpha: 0})
          .to('.portrait-cover', .4, {scaleY: 0, autoAlpha: 0, transformOrigin: 'top'})
          .set('.portrait-cover', {display: 'none'})
          .add(myPic)
          .add(myFancyEyes())
          .add(meBlink());
    return tl;
  });
};




function myPic() {
      var tl = new TimelineMax();
          tl.set('#svg-portrait', {autoAlpha: 1})
          tl.staggerFromTo("#svg-portrait .st0", .3 ,{ autoAlpha: 0, scale: 8},
                                       {scale: 1, autoAlpha: 1, stagger: 0.007});
          return tl.timeScale(2);
    };





function myFancyEyes() {
  $("#about-me").mousemove(function(event) {
    var eye = $(".myEye");
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;

      eye.css({
        left: event.pageX / (x * 1/4),
        top: event.pageY / (y * 2),
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)',
      });
  });
};


function meBlink() {
  var meBlinkTL = new TimelineMax(),
      delay = getRandom(0.5, 4);
      meBlinkTL.from('.eyeLid', .15, {scaleY: 0, transformOrigin: "top", yoyo: true, delay: delay, onComplete: meBlink});
};










// ------------------------------------------------- Schecker stuff ---------------------------------------------
function scheckerUserFlowDrag() {
  Draggable.create("#schecker-userFlow", {type:"x,y", edgeResistance:0.65, bounds:"#schecker-draggable-flow"});
};

// function scheckerUserFlowZoom() {
//
//   TweenLite.set("#schecker-userFlow", {scale: .4, transformOrigin: "top center"});
//
//   var flowZoomTL = new TimelineMax();
//       flowZoomTL.to("#schecker-zoom-btn", .5, {scale: .3, right: 0, top: 0, force3D:true, ease: Back.easeIn.config(4)})
//                 .to("#schecker-userFlow", 1.5, {scale: 1, transformOrigin: "center"}, "-=.2");
//       flowZoomTL.reverse();
//
//         $("#schecker-zoom-btn").click(function() {
//           if (flowZoomTL.reversed()) {
//             flowZoomTL.play();
//             zoomBtn.pause();
//           } else {
//             flowZoomTL.reverse();
//           }
//         });
// };







(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);


var win = $(window);
var allMods = $(".block-in");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});
