$(document).ready(function() {
  scheckerUserFlowDrag();
  floatingMockup();

  TweenLite.set("footer", {opacity: 0, scaleY: 0, transformOrigin: "bottom center"});

  $(window).on('scroll', function () {

      var pixs = $(document).scrollTop()
          pixs = pixs/500;

        for (i=0; i <= 1; i++) {
          $("#wishup-hero-img, section#mpf-intro, #sa-hero-img, #bardot-hero-img").css({"opacity": 1-pixs});
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

  // $(window).scroll(function(event) {
  //   $(".block, .block-in").each(function(i, el) {
  //     var el = $(el);
  //     if (el.visible(true)) {
  //       el.addClass("come-in");
  //     }
  //   });
  // });

  // Already visible modules
  // var allMods = $(".block, .block-in");
  // allMods.each(function(i, el) {
  //   var el = $(el);
  //   if (el.visible(true)) {
  //     el.addClass("already-visible");
  //   }
  // });


// scroll animation
//         schecker scroll animation



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
    scene_4 = $('#s_prototypeCTA').offset().top;




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
    .from("#s_collage", duration, { scale: 0, transformOrigin: "top right", rotation: -90 }, scene_3j)
    .from("#schecker-viewInvision, #schecker-viewInvisionCTA", duration, { x: "-=500", autoAlpha: 0 }, scene_4);




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












});





function floatingMockup() {
  var tl = new TimelineMax({repeat: -1, yoyo: true});
      tl.set('#schecker-hero img', {y: -10})
        .to('#schecker-hero img', 2, {y: 10});
}


















    // (function($) {
    //
    //   /**
    //    * Copyright 2012, Digital Fusion
    //    * Licensed under the MIT license.
    //    * http://teamdf.com/jquery-plugins/license/
    //    *
    //    * @author Sam Sehnert
    //    * @desc A small plugin that checks whether elements are within
    //    *     the user visible viewport of a web browser.
    //    *     only accounts for vertical position, not horizontal.
    //    */
    //
    //   $.fn.visible = function(partial) {
    //
    //       var $t            = $(this),
    //           $w            = $(window),
    //           viewTop       = $w.scrollTop(),
    //           viewBottom    = viewTop + $w.height(),
    //           _top          = $t.offset().top,
    //           _bottom       = _top + $t.height(),
    //           compareTop    = partial === true ? _bottom : _top,
    //           compareBottom = partial === true ? _top : _bottom;
    //
    //     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    //
    //   };
    //
    // })(jQuery);













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
