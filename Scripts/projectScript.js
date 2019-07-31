$(document).ready(function() {
  hiwAnimation();
  scheckerUserFlowDrag();
  scheckerProgress();
  scheckerUserFlowZoom();

  $(window).on('scroll', function () {
      var pixs = $(document).scrollTop()
      pixs = pixs / 100;
      $("#wishup-hero-img").css({"-webkit-filter": "blur("+pixs+"px)",
                        "-moz-filter":    "blur("+pixs+"px)",
                        "-ms-filter":     "blur("+pixs+"px)",
                        "-o-filter":      "blur("+pixs+"px)",
                        "-filter":        "blur("+pixs+"px)" })
  });

  $(window).scroll(function(event) {
    $(".block, .block-in").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });

  // Already visible modules
  var allMods = $(".block, .block-in");
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });



});

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













// ------------------------------------------------- Schecker stuff ---------------------------------------------
function scheckerUserFlowDrag() {
  Draggable.create("#schecker-userFlow", {type:"x,y", edgeResistance:0.65, bounds:"#schecker-draggable-flow"});
};

function scheckerUserFlowZoom() {

  TweenLite.set("#schecker-userFlow", {scale: .4, transformOrigin: "top center"});

  var flowZoomTL = new TimelineMax();
      flowZoomTL.to("#schecker-zoom-btn", .5, {scale: .3, right: 0, top: 0, force3D:true, ease: Back.easeIn.config(4)})
                .to("#schecker-userFlow", 1.5, {scale: 1, transformOrigin: "center"}, "-=.2");
      flowZoomTL.reverse();

        $("#schecker-zoom-btn").click(function() {
          if (flowZoomTL.reversed()) {
            flowZoomTL.play();
            zoomBtn.pause();
          } else {
            flowZoomTL.reverse();
          }
        });
};





function hiwAnimation() {
      var tlText = new TimelineMax({repeat: -1, repeatDelay: .5, delay: 3, yoyo: true});
          tlText.to(".hiw.input span", 2, {text:{value:"itchy dry skin", oldClass:"text-field", newClass:"hiw-text-animation"}, delay: .5})
                .set(".hiw.input span", {opacity: 1}, "-=2");
  };


function scheckerProgress() {
    var percent = {number:0},
        percentDisplay = document.getElementById("counting"),
        tlBar = new TimelineMax({repeat: -1, repeatDelay: .5, delay: 3, yoyo: true});
        tlBar.from ("#schecker-progress-bar .bar", 2, {width: 0})
             .from(".hiw.result .result-text", .5, {opacity: 0}, "-=2")
             .to(percent, 2, {number:"91", roundProps:"number", onUpdate:updateHandler, ease:Linear.easeNone}, "-=2");

             function updateHandler() {
               $(function () {
                   percentDisplay.innerHTML = percent.number;
               });
             };
  };
