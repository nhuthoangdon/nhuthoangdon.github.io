$(document).ready(function() {


  var initialTL = new TimelineMax({delay: .3});
      initialTL.staggerTo('#Rectangle-1, #Rectangle-2, #cv-Oval-1, #cv-Oval-2, #Line-1, #Line-2, #Line-3, #Line-4',
                           .4, {strokeDashoffset: 0}, 0.1)
               .fromTo("#wc-text_1", .3, {scaleY: 0, y: "+=40"}, {scaleY: 1, y: 0, autoAlpha: 1, transformOrigin: "bottom left"}, "-=.6")
               .fromTo('#CTA-play', .3, {y: "+=10"}, {autoAlpha: 1, y: 0}, "-=.2")
               .from('#CTA-btn-stroke', .5, {strokeDashoffset: 0, strokeDasharray: 0, ease: Back.easeOut.config(4)});




initialPlayInit();



});


function hands() {
  var tl = new TimelineMax({repeat: -1});
      tl.set('#hand-waving', {transformOrigin: "bottom center", rotation: -30, display: "inline"})
        .set('#hand-pointing', {display: "none"})
        .set('#hand-ok', {display: "none", transformOrigin: "bottom center"})
        .to('#hand-waving', .1, {rotation: 30, ease: Expo.easeInOut, repeat: 6, yoyo: true})
        .set('#hand-waving', {display: "none"})
        .to('#hand-pointing', .2, {x: "+=10", ease: Expo.easeInOut, yoyo: true, repeat: 5, display: "inline"})
        .set('#hand-pointing', {display: "none"})
        .to('#hand-ok', 3, {display: "inline", rotation: 20, ease: Elastic.easeOut.config(1, 0.1)})
        .set('#hand-ok', {display: "none"});
return hands;
};
