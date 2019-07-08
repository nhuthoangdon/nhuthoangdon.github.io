$( document ).ready(function() {
  hiwAnimation();
  scheckerUserFlowDrag();


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


  $(window).scroll(function(event) {

    $(".block").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });

  var win = $(window);
  var allMods = $(".block");

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

});







  function hiwAnimation() {

      var tlText = new TimelineMax({repeat: -1, repeatDelay: .5, delay: 3, yoyo: true});
          tlText.to(".hiw.input span", 2, {text:{value:"itchy dry skin", oldClass:"text-field", newClass:"hiw-text-animation"}, delay: .5})
                .set(".hiw.input span", {opacity: 1}, "-=2");

      var percent = {number:0},
          percentDisplay = document.getElementById("counting"),
          tlBar = new TimelineMax({repeat: -1, repeatDelay: .5, delay: 3, yoyo: true});
          tlBar.from (".progress-bar .bar", 2, {width: 0})
               .from(".hiw.result .result-text", .5, {opacity: 0}, "-=2")
               .to(percent, 2, {number:"91", roundProps:"number", onUpdate:updateHandler, ease:Linear.easeNone}, "-=2");

         function updateHandler() {
           percentDisplay.innerHTML = percent.number;
         };

      var tlBook = new TimelineMax({repeat: -1, repeatDelay: 1, yoyo: true});
          tlBook.set("#picked-date", {autoAlpha: 0})
                .set("#checked-date", {scaleY: 0})
                .to("#picked-date", .1, {autoAlpha: 1})
                .to("#picked-date", .4, {scaleY: 0, delay: .5})
                .to("#checked-date", .4, {scaleY: 1}, "-=.4");

      var tlWatch = new TimelineMax({repeat: -1, yoyo: true});
          tlWatch.staggerFrom("#watch-graph circle", 2, {scale: .7,
                                                          transformOrigin: "center",
                                                          opacity: .5,
                                                          ease:Elastic.easeInOut.config(1.75, 0.3)},
                                                          0.15);

          return tlText;
          return tlBar;
          return tlBook;
          return tlWatch;

  };



// ------------------------------------------------- Schecker stuff ---------------------------------------------
function scheckerUserFlowDrag() {
  Draggable.create("#schecker-userFlow", {type:"x,y", edgeResistance:0.65, bounds:"#schecker-draggable-flow"});
};




// ----------------------------------- my Plastic Footprint stuff ---------------------------------

//blur bg when scrolled
$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 150;
    $("#wishup-hero-img").css({"-webkit-filter": "blur("+pixs+"px)",
                      "-moz-filter":    "blur("+pixs+"px)",
                      "-ms-filter":     "blur("+pixs+"px)",
                      "-o-filter":      "blur("+pixs+"px)",
                      "-filter":        "blur("+pixs+"px)" })
});
