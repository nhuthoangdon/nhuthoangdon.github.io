
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
  let tileMql1 = window.matchMedia('(max-width: 1124px)');
  let tileMql2 = window.matchMedia('(max-width: 750px)');
  if (workTiles.length > 3) {
    tileWidth = vw / 3;
  };
  if (tileMql1.matches) {
    tileWidth = vw / 2;
  }
  if (tileMql2.matches) {
    tileWidth = vw;
  }
  workTiles.css("width", tileWidth);


  TweenMax.staggerFromTo('#all-works .work-tile', .8, {y: 100}, {y: 0, autoAlpha: 1, immediateRender: false}, .2);

  scheckerUserFlowDrag();
  floatingMockup();
  revealMe();
  toggleVideo();




  TweenMax.from('.project-hero', 1.5, {autoAlpha: 0});
  TweenMax.staggerTo('.project-hero, .project-intro .wrapper div', 1, {y: 0, autoAlpha: 1}, .2);
  TweenMax.set('#schecker-hero-section, #schecker-hero', {y: 0, autoAlpha: 1});

});


$(document).ready(function() {

  TweenMax.set('.project-hero, .project-intro .wrapper div', {y: 100, autoAlpha: 0});
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
      var footerTL = new TimelineMax();

    	if ((scrollHeight - scrollPosition) <= 50) {
          footerTL.to("footer", .8, {opacity: 1, scaleY: 1, ease: Back.easeOut.config(1.7)});
    	} else {
          footerTL.to("footer", .6, {opacity: 0, scaleY: 0});
      }
  });


//Schecker scroll animation
var triggerOffset = document.documentElement.clientHeight,
    duration = $( window ).height() / 2,
    requestId = null,

    scene_0 = $('#schecker-hero').offset().top,
    scene_1 = $('#schecker-intro').offset().top,
    scene_1a = $('#schecker-explain').offset().top,
    scene_2 = $('#schecker-leading-line_1').offset().top,
    scene_2a = $('#schecker-hiw-section').offset().top,
    scene_3 = $('#schecker-leading-line_2').offset().top,
    scene_3a = $('#concept-development').offset().top,
    scene_3b = $('#s_concept-flow').offset().top,
    scene_3d = $('#s_wireframe').offset().top,
    scene_3f = $('#schecker-draggable-flow').offset().top,
    scene_3h = $('#s_ui').offset().top,
    scene_3i = $('#s_leading-line-5').offset().top,
    scene_3j = $('#s_collage').offset().top,
    scene_4 = $('#s_prototypeCTA').offset().top,
    scene_4a = $('#schecker-viewInvision').offset().top;


TweenLite.set('#schecker-intro .block', { autoAlpha: 0, scaleX: 0, transformOrigin: "top left" });


// SCROLL MAGIC!!!
var scheckerTL = new TimelineMax({ paused: true })
    .to("#schecker-hero", 500, { scale: 1, autoAlpha: 1, y: 0 }, scene_0)
    .to(".mouse_scroll", 600, { y: "+=800", autoAlpha: 0 }, scene_0 + vh)
    .to("#schecker-hero", 500, { scale: 0, autoAlpha: 0, y: "+=500" }, scene_0 + vh)
    .from("#schecker-intro", duration, { scale: 0, transformOrigin: "center", y: -vh/2 }, scene_1)
    .staggerTo("#schecker-intro .block", duration - 100, { autoAlpha: 1, scaleX: 1 }, 200, scene_1 + 100)
    .from('#schecker-explain h4', duration, {y: "-=300", scaleY: 0, autoAlpha: 0}, scene_1a)
    .from('#schecker-explain .block', duration, {y: vh/2,scaleX: 0, autoAlpha: 0}, scene_1a + 200)
    .from("#schecker-leading-line_1", duration*2, { scaleY: 0, y: -3/4*vh }, scene_2)
    .staggerFrom("#schecker-hiw-section h3, .ic_schecker-feature", duration, {autoAlpha: 0, scale: 0, rotation: -90}, 50, scene_2a)
    .from("#schecker-leading-line_2", duration*2, { scaleY: 0, y: -3/4*vh }, scene_3)
    .from("#concept-development h3", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3a)
    .from("#s_leading-line-1", duration * 2, { scaleY: 0, transformOrigin: "top left" }, scene_3a + 300)
    .from("#s_concept-flow-h5", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3b)
    .from("#s_concept-flow-img", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3b)
    .from("#s_wireframe-h5", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3d)
    .from("#s_wireframe-img", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3d)
    .from("#schecker-draggable-flow h5", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3f)
    .from("#schecker-userFlow", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3f)
    .from("#s_ui h5", duration, { rotation: 90, scaleX: 0, autoAlpha: 0 }, scene_3h)
    .from("#s_ui img", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3h)
    .from("#s_leading-line-5", duration * 2, { scaleY: 0, y: -3/4*vh }, scene_3i)
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
  scheckerTL.time(window.pageYOffset + triggerOffset);
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
      tl.set('#schecker-hero img', {y: -8})
        .to('#schecker-hero img', 2, {y: 8, ease: Power0.easeNone});
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






function revealMe() {
  $('#reveal-me-btn').on("click", function() {
    var tl = new TimelineMax();
        tl.to('#reveal-me-btn', .3, {autoAlpha: 0})
          .to('.portrait-cover', .4, {scaleY: 0, autoAlpha: 0, transformOrigin: 'top'})
          .set('.portrait-cover', {display: 'none'})
          .add(myPic())
          .add(myFancyEyes())
          .add(meBlink());
    return tl;
  });
};



TweenMax.set('#svg-portrait .st0', {autoAlpha: 0, scale: 8});
function myPic() {
      var tl = new TimelineMax();
          tl.set('#svg-portrait', {autoAlpha: 1})
          tl.staggerTo("#svg-portrait .st0", .3, {scale: 1, autoAlpha: 1, stagger: 0.007});
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



// ------------------------------------------------- Other works ---------------------------------------------


function toggleVideo() {

  $('.work-tile').each(function(i, el) {
    var video = $(this).find(".tile-video");
    $(this).click(function() {
      var videoPlayTl = new TimelineMax({onComplete: function() {video.play()}});
          videoPlayTl.to($(".video-tile-CTA, .tile-desc", this), .3, {autoAlpha: 0})
                     .set($(".video-lightbox", this), {display: "inline-flex", autoAlpha: 0})
                     .to($(".video-lightbox", this), .5, {autoAlpha: 1});

    });

    $('.close-video').click(function() {
      var tl = new TimelineMax({onStart: function() {video.pause()}});
      tl.to($(this).parent(), .5, {autoAlpha: 0})
        .set($(this).parent(), {display: "none"})
        .to($(this).parent().siblings(), .3, {autoAlpha: 1});
    });
  });
};














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
