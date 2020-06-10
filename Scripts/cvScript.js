$(document).ready(function() {


  var initialTL = new TimelineMax({delay: .3});
      initialTL.staggerTo('#Rectangle-1, #Rectangle-2, #cv-Oval-1, #cv-Oval-2, #Line-1, #Line-2, #Line-3, #Line-4',
                           .4, {strokeDashoffset: 0}, 0.1)
               .staggerFrom('#wc-text_1, .cv-intro h5, #cv-arrow-down', .5, {autoAlpha: 0, y: 100}, .1);






});
