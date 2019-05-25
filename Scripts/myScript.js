$( document ).ready(function() {
    TweenLite.set(".menu .bar2", {rotation: -40, transformOrigin: "top right"});
    TweenLite.set(".menu .bar3", {x: 24, y: 10});

    toggleMenu();
    hamburgerHover();
    emailBtnHover();
    shrinkNav();
    CTAarrowHover();
    CTAbuttonHover();
    preloadingAnimation();
    setTimeout(function() {
        homeload();
     }, 5000);

    TweenMax.set(".st0, .st1", {autoAlpha: 0});
    if (window.matchMedia("(max-width: 874px)").matches || window.matchMedia("(max-height: 630px)").matches) {
        TweenMax.set(".st0, .st1", {autoAlpha: 1});
    };

});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};




// Initial Home Animation
function homeload() {
  var homeTimeline = new TimelineMax({onStart: preloadingOut});
  var navTween = TweenMax.from('#navBar', 1, {x:-30, autoAlpha: 0, delay: 1, immediateRender: false});
  TweenMax.from('#emailMe', 1, {xPercent: 30, autoAlpha: 0, delay: .5});
      homeTimeline.from('#intro_text h1', 0.7, {yPercent: -50, autoAlpha: 0})
                  .from('#intro_text h5', 0.7, {yPercent: -50, autoAlpha: 0}, "-=.3")
                  .from('#intro_text p', 0.7, {yPercent: -50, autoAlpha: 0}, "-=.5")
                  .from('a.arrow-down', 0.7, {yPercent: -50, autoAlpha: 0}, "-=.8")
                  .from('#hamburger', 1, {className: "+=hamburgerState"});

      if (window.matchMedia("(max-width: 874px)").matches || window.matchMedia("(max-height: 630px)").matches) {
          navTween.updateTo({x: 0, y: -100}, false);
          TweenMax.killTweensOf('#hamburger');
      }
};
            function bulletsSlideIn() {
              TweenLite.to('#sections-bullets', 1.5, {x: 0, delay: 5.5});
            };


        // Preloading animation fadeout
        function preloadingOut() {
          var preloadOutTL = new TimelineMax();
              preloadOutTL.to('.loading-wrapper', .7, {yPercent: -100, autoAlpha: 0})
              return preloadingOut;
        };





//CTA arrow Animation
function CTAarrowHover() {
  $('.CTAarrow, a.cta-w-label').hover(
    function() {
      TweenMax.to('svg.svg-circle', .8, {strokeDashoffset: 0, rotation: 180});
    },
    function() {
      TweenMax.to('svg.svg-circle', 1, {strokeDashoffset: 158, rotation: 0});
    }
  );
};





//CTA buttons Animation
function CTAbuttonHover() {
  $('.CTA-button').hover (
    function() {
      TweenMax.to('.CTA-button svg', .5, {strokeDashoffset: 0, strokeDasharray: 480});
      TweenMax.to('.CTA-button h6.CTA-label', .2, {color: '#C2F14F', delay: .4});
      TweenMax.to('#cta-btn-stroke', .7, {stroke: "#C2F14F"});
    },
    function() {
      TweenMax.to('.CTA-button svg', .4, {strokeDashoffset: 95, strokeDasharray: '50 200'});
      TweenMax.to('.CTA-button h6.CTA-label', .2, {color: '#F3425E'});
      TweenMax.to('#cta-btn-stroke', .4, {stroke: "#F3425E"});
    }
  )
};





// Shrink Navbar on smaller screens Function
function shrinkNav() {
  $(window).on("load scroll", function() {
    if ($(document).scrollTop() > 50) {
      TweenLite.to($('.sidenav'), 0.8, {className:"+=shrink"});
    } else {
      TweenLite.to($('.sidenav'), 0.5, {className:"-=shrink"});
    }
  });
};



// Hamburger menu
function hamburgerHover() {
  $('.menu').hover (
    function() {
      TweenLite.to($(this), 0.2, {rotation: -90, transformOrigin: "center"});
      TweenLite.to(".menu .bar2", 0.2, {height: 30, rotation: 0, x: 12, transformOrigin: "center center"});
      TweenLite.to(".menu .bar3", 0.2, {y: 0});
      TweenLite.to(".menu .bar1, .menu .bar2, .menu .bar3", 0.05, {backgroundColor: "#C2F14F"});
    },
    function() {
      TweenLite.to($(this), 0.1, {rotation: 0});
      TweenLite.to(".menu .bar2", 0.1, {height: 37, rotation: -40, x: 0, transformOrigin: "top right"});
      TweenLite.to(".menu .bar3", 0.1, {y: 10});
      TweenLite.to(".menu .bar1, .menu .bar2, .menu .bar3", 0.05, {backgroundColor: "#8C9BAF"});
    }
  );
};






function closeMenu() {
  var tl = new TimelineMax();
      tl.to($('#hamburger'), 0.4, {className:"-=open"})
      tl.staggerTo(".overlay .menu-items ul li", .5, {scaleY: 0, y: 100, ease: Back.easeIn.config(3), autoAlpha: 0,
                                                      cycle: { rotation:[-30, 0], transformOrigin: ["bottom left", "bottom right"] },
                                                      stagger: 0.1})
      tl.to($('.overlay'), 0.4, {scaleY: 0, autoAlpha: 0, transformOrigin: "bottom left"}, "-=.1");
};


function toggleMenu() {
  $( "#hamburger" ).click(function() {
    $(".menu").toggleClass("open");
    if ($( ".menu" ).hasClass("open")) {
      var tl = new TimelineMax();
          tl.to($('.overlay'), .5, {scaleY: 1, autoAlpha: .96, transformOrigin: "top left", ease: Power4.easeOut})
          tl.staggerFromTo(".overlay .menu-items ul li", .7, {scaleY: 0, y: 50, autoAlpha: 0, cycle:
                                                                                      {rotation:[30, -30],
                                                                                       transformOrigin: ["bottom left", "bottom right"]}},
                                                             {scaleY: 1, y: 0, autoAlpha: 1, rotation: 0, ease: Back.easeOut.config(2)}, 0.2, "-=.3");

      if ($('.sidenav').hasClass("shrink")) {
        TweenLite.to($('.sidenav'), 0.2, {className:"-=shrink"});
      }
    } else {
      closeMenu();
    }
  });
};






// Email-me button hover effect
function emailBtnHover() {
  $('#emailIcon').hover (
    function() {
      TweenLite.to($(this), 1, {scale: 1.4, rotation: 42, ease: Elastic.easeOut});
    },
    function() {
      TweenLite.to($(this), 0.1, {scale: 1, rotation: 0});
    }
  );
};







// Loading animation
function preloadingAnimation() {
  var $el1 = document.getElementById('ic-component-1'),
      $el2 = document.getElementById('ic-component-2'),
      $el3 = document.getElementById('ic-component-3'),
      $el4 = document.getElementById('ic-component-4'),
      $el5 = document.getElementById('ic-component-5'),
      $el6 = document.getElementById('ic-component-6'),
      $el7 = document.getElementById('ic-component-7'),

      loadingTL = anime.timeline({
        direction: 'reverse', easing: 'easeInOutSine', duration: 700,
        update: function(scale) {
          anime({
            targets: '#animated-icon svg',
            scale: .4,
            delay: 1300,
            duration: 3500,
          })
        },
        complete: function(morph) {
                    anime({
                      targets: $el1,
                      keyframes: [
                        {points: '1041 277 1077 277 1077 305 1041 305', duration: 400},
                        {points: '1057.61274 289 1069 299 1054 299 964 299', delay: 1100}
                          ],
                      easing: 'easeOutQuad',
                    })
                    anime({
                      targets: $el3,
                      keyframes: [
                        {points: '1083 277 1119 277 1119 347 1083 347', duration: 400},
                        {points: '1083 277 1119 277 1119 305 1083 305'},
                        {points: '1062 287 1095 255 1126 287 1095 319', delay: 1000}
                      ],
                      easing: 'easeOutQuad',
                   })
                    anime({
                      targets: $el2,
                      keyframes: [
                        {points: '1041 311 1119 311 1119 347 1041 347', duration: 400, delay: 400},
                        {points: '1099 322 1129 291 1233 447 1195 401', delay: 700}
                      ],
                      easing: 'easeOutQuad',
                  })
                    anime({
                      targets: $el4,
                      keyframes: [
                        {points: '1041 353 1063 353 1063 371 1041 371', duration: 400},
                        {points: '1227 267 1241 171 1236 277 1148 312', delay: 1000}
                      ],
                      easing: 'easeOutQuad',
                  })
                    anime({
                      targets: $el6,
                      keyframes: [
                        {points: '1069 353 1091 353 1091 371 1069 371', duration: 400},
                        {points: '1244 134 1223 263 1145 310 1204 258', delay: 1000}
                      ],
                      easing: 'easeOutQuad',
                  })
                    anime({
                      targets: $el7,
                      keyframes: [
                        {points: '1097 353 1119 353 1119 371 1097 371', duration: 400},
                        {points: '1255 93 1200 254 1144 305 1133 288', delay: 1000}
                      ],
                      easing: 'easeOutQuad',
                  })
                    anime({
                      targets: $el5,
                      keyframes: [
                        {points: '1041 377 1119 377 1119 399 1041 399', duration: 400},
                        {points: '1207 450 1195 408 1228 450 1222 507', delay: 1000}
                      ],
                      easing: 'easeOutQuad',
                  })
        }
    });

      loadingTL.add ({
                  targets: $el6,
                  translateY: 40,
                  opacity: 0,
                })
                .add ({
                  targets: $el7,
                  translateX: 40,
                  opacity: 0,
                }, '-=700')
                .add ({
                  targets: $el5,
                  translateX: -40,
                  opacity: 0,
                }, '-=700')
                .add ({
                  targets: $el4,
                  translateY: 40,
                  opacity: 0,
                }, '-=400')
                .add ({
                  targets: $el3,
                  translateX: 50,
                  opacity: 0,
                }, '-=400')
                .add ({
                  targets: $el2,
                  translateX: -50,
                  opacity: 0,
                }, '-=700')
                .add ({
                  targets: $el1,
                  translateY: 80,
                  opacity: 0,
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


$(window).scroll(function(event) {
  if (window.matchMedia("(max-width: 874px)").matches || window.matchMedia("(max-height: 630px)").matches) {
    $(".ease-in, .ease-in-w, .ease-in-a, .my-portrait svg").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  }
});




var sideProjIn = (function(){
  var tl = new TimelineMax();
  var executed = false;
  return function() {
    if (!executed) {
      if ($('.ease-in').visible(true)) {
           tl.fromTo(".device-wrapper", 1, {x: -50}, {x: 0, autoAlpha: 1})
           tl.staggerFrom(".content-column .ease-in", .6, {y: 100, autoAlpha: 0, immediateRender: false}, 0.1, "-=0.7");
           executed = true;
         }
    }
  };
})();

var worksIn = (function(){
  var tl = new TimelineMax();
  var executed = false;
  return function() {
    if (!executed) {
      if ($('.ease-in-w').visible(true)) {
           tl.staggerFrom(".ease-in-w", .7, {y: 100, autoAlpha: 0, immediateRender: false}, 0.1);
           executed = true;
         }
    }
  };
})();

var aboutIn = (function(){
  var tl = new TimelineMax();
  var executed = false;
  return function() {
    if (!executed) {
      if ($('.ease-in-a, .st1, .st0').visible(true)) {
           tl.staggerFrom(".content-column .ease-in-a", .6, {y: 100, autoAlpha: 0, immediateRender: false}, 0.1)
           tl.add(myPic(), "-=.6");
           fancyEyes();
           executed = true;
         }
    }
  };
})();

      function myPic() {
        var tl = new TimelineMax();
            tl.staggerFromTo(".st1, .st0", .3 ,{y: "-=200", autoAlpha: 0, scale: 8, immediateRender: false},
                                               {y: "+=200", scale: 1, autoAlpha: 1, stagger: 0.02});
            return tl.timeScale(4);
      };


function fancyEyes() {
  $('.menu').hover (
    function() {
      TweenLite.to("#leftEye", .4, {x: -7, y: -2, rotation: -30, transformOrigin: "center"});
      TweenLite.to("#rightEye", .4, {x: -4, y: -1, rotation: -30, transformOrigin: "center"});
    },
    function() {
      TweenLite.to("#leftEye, #rightEye", .2, {x: 0, y: 0, rotation: 0});
    }
  );
  $('#about h5').hover (
    function() {
      TweenLite.to("#leftEye", .2, {x: -5, y: -1, rotation: -10, transformOrigin: "center"});
      TweenLite.to("#rightEye", .2, {x: -3, rotation: -10, transformOrigin: "center"});
    },
    function() {
      TweenLite.to("#leftEye, #rightEye", .1, {x: 0, y: 0, rotation: 0});
    }
  );
  $('#about p').hover (
    function() {
      TweenLite.to("#leftEye, #rightEye", .2, {x: -5, transformOrigin: "center"});
    },
    function() {
      TweenLite.to("#leftEye, #rightEye", .1, {x: 0});
    }
  );
  $('#sections-bullets').hover (
    function() {
      TweenLite.to("#leftEye, #rightEye", .2, {x: -6, transformOrigin: "center"});
    },
    function() {
      TweenLite.to("#leftEye, #rightEye", .1, {x: 0});
    }
  );
  $('#about p a').hover (
    function() {
      TweenLite.to("#leftEye", .2, {x: -6, y: 2, rotation: -15, transformOrigin: "center"});
      TweenLite.to("#rightEye", .2, {x: -6, y: 1, rotation: -5, transformOrigin: "center"});
    },
    function() {
      TweenLite.to("#leftEye, #rightEye", .1, {x: 0, y: 0, rotation: 0});
    }
  );
  $('#emailMe').hover (
    function() {
      TweenLite.to("#leftEye", .2, {x: 5, y: 2, rotation: 15, transformOrigin: "center"});
      TweenLite.to("#rightEye", .2, {x: 6, y: -1, rotation: 10, transformOrigin: "center"});
    },
    function() {
      TweenLite.to("#leftEye, #rightEye", .1, {x: 0, y: 0, rotation: 0});
    }
  );
  $('.social_icons').hover (
    function() {
      var tl = new TimelineMax();
          tl.to("#leftEye, #rightEye", .7, {y: -3, rotation: 20})
          tl.to("#leftEye", .1, {y: 2, x: -6, rotation: -20})
          tl.to("#rightEye", .1, {y: -1, x: -5, rotation: -10}, "-=.1");
    },
    function() {
      TweenMax.to("#leftEye, #rightEye", .1, {x: 0, y: 0, rotation: 0});
    }
  );
};







// ------------------------------- Malihu's PageScrolltoId Full page scroll sniplet -------------------------------------




(function($){
        $(window).on("load",function(){
          if (window.matchMedia("(min-width: 874px)").matches || window.matchMedia("(min-height: 630px)").matches) {
            $("a[rel='m_PageScroll2id']").mPageScroll2id({
              liveSelector:"a[rel='m_PageScroll2id']",
              onComplete: function () {
                sideProjIn();
                worksIn();
                aboutIn();
                }
            });
          };
        });
    })(jQuery);


    (function($){
      $(window).on("load",function(){

        if(!$(document).data("mPS2id")){
          console.log("Error: 'Page scroll to id' plugin not present or activated. Please run the code after plugin is loaded.");
          return;
        }

        $(document).data("mPS2idExtend",{
          selector:"#menu-links ._mPS2id-h",
          currentSelector:function(){
            return this.index($(".mPS2id-highlight-first").length ? $(".mPS2id-highlight-first") : $(".mPS2id-highlight"));
          },
          input:{y:null,x:null},
          i:null,
          time:null
        }).on("scrollSection",function(e,dlt,i){
          var d=$(this).data("mPS2idExtend"),
            sel=$(d.selector);
          if(!$("html,body").is(":animated")){
            if(!i) i=d.currentSelector.call(sel);
            if(!(i===0 && dlt>0) && !(i===sel.length-1 && dlt<0)) sel.eq(i-dlt).trigger("click.mPS2id");
          }
        }).on("mousewheel DOMMouseScroll",function(e){ //mousewheel
          if(window.matchMedia("(max-width: 874px), (max-height: 630px)").matches) return; //disable on mobile
          if($($(this).data("mPS2idExtend").selector).length) e.preventDefault();
          $(this).trigger("scrollSection",((e.originalEvent.detail<0 || e.originalEvent.wheelDelta>0) ? 1 : -1));
        }).on("keydown",function(e){ //keyboard
          var code=e.keyCode ? e.keyCode : e.which,
            keys=$(this).data("mPS2id").layout==="horizontal" ? [37,39] : [38,40];
          if(code===keys[0] || code===keys[1]){
            if($($(this).data("mPS2idExtend").selector).length) e.preventDefault();
            $(this).trigger("scrollSection",(code===keys[0] ? 1 : -1));
          }
        }).on("pointerdown touchstart",function(e){ //touch (optional)
      var o=e.originalEvent,
        d=$(this).data("mPS2idExtend");
      if(o.pointerType==="touch" || e.type==="touchstart"){
        var y=o.screenY || o.changedTouches[0].screenY;
        d.input.y=y;
        if($(this).data("mPS2id").layout==="horizontal"){
          var x=o.screenX || o.changedTouches[0].screenX;
          d.input.x=x;
        }
        d.time=o.timeStamp;
        d.i=d.currentSelector.call($(d.selector));
      }
    }).on("touchmove",function(e){
      if($("html,body").is(":animated")) e.preventDefault();
    }).on("pointerup touchend",function(e){
      var o=e.originalEvent;
      if(o.pointerType==="touch" || e.type==="touchend"){
        var y=o.screenY || o.changedTouches[0].screenY,
          d=$(this).data("mPS2idExtend"),
          diff=d.input.y-y,
          time=o.timeStamp-d.time,
          i=d.currentSelector.call($(d.selector));
        if($(this).data("mPS2id").layout==="horizontal"){
          var x=o.screenX || o.changedTouches[0].screenX,
            diff=d.input.x-x;
        }
        if(Math.abs(diff)<2) return;
        var _switch=function(){
            return time<200 && i===d.i;
          };
        $(this).trigger("scrollSection",[(diff>0 && _switch() ? -1 : diff<0 && _switch() ? 1 : 0),(_switch() ? d.i : i)]);
      }
    });

    $("body").append("<div id='sections-bullets' />").find($(document).data("mPS2idExtend").selector).each(function(){
 $("#sections-bullets").append("<a href='"+$(this).attr("href")+"' class='section-bullet' rel='m_PageScroll2id'></a>");
bulletsSlideIn();
});

  });
})(jQuery);
