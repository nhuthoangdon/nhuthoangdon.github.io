$(document).ready(function() {


  TweenMax.set('#R', {strokeDashoffset: 8, strokeDasharray: 26});
  TweenMax.set('#e', {strokeDashoffset: 0, strokeDasharray: 40});
  TweenMax.set('#s', {strokeDashoffset: 80, strokeDasharray: 38});
  TweenMax.set('#u', {strokeDashoffset: 30, strokeDasharray: 50});
  TweenMax.set('#m', {strokeDashoffset: 10, strokeDasharray: 50});
  TweenMax.set('#e-2', {strokeDashoffset: 40, strokeDasharray: 40});




  var initialTL = new TimelineMax({delay: .3, onComplete: resume}),
      letters = $('#R, #e, #s, #u, #m, #e-2');
      initialTL
               .staggerFrom(letters, .3, {autoAlpha: 0, y: 100, strokeDashoffset: 0}, .05)
               .staggerTo(letters, 1.5, {strokeDashoffset: 50}, .03, "-=.3")
               .staggerFrom('.cv-intro h5, #cv-arrow-down', .5, {autoAlpha: 0, y: 100}, .02, "-=1")
               .staggerTo(letters, 2, {strokeDashoffset: 0, strokeDasharray: 280}, .05)

  function resume() {
    var resumeTL = new TimelineMax({yoyo: true, repeat: -1, repeatDelay: 1.5, delay: 1});
        resumeTL.staggerTo(letters, 1.5, {strokeDasharray: 200, strokeDashoffset: 100}, .1)
                .staggerTo(letters, 1.5, {strokeDashoffset: 200, strokeDasharray: 100}, .1)
                .staggerTo(letters, 1.5, {strokeDasharray: 40, strokeDashoffset: 0}, .1)
                .staggerTo(letters, 1.5, {strokeDashoffset: 50, strokeDasharray: 20}, .1)
                .staggerTo(letters, 1.5, {strokeDasharray: 2, strokeDashoffset: 100}, .1, "+=.5")

    return resumeTL;
  };





});
