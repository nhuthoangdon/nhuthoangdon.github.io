var vh = window.innerHeight,
    vw = window.innerWidth;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function getRandom(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
};

 // use a script tag or an external JS file - NO effect, just for experimentation
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)
 });


$(window).ready(function() {
    projectCTAHover();
});

    var menuAssembleTL = new TimelineMax();
        menuAssembleTL.to(".menu .bar1", .2, {rotation: 0, transformOrigin: "top left"})
                      .to(".menu .bar3", .2, {rotation: 0, x: 24, transformOrigin: "bottom right"})
                      .to(".menu .bar3", .2, {rotation: 0, y: 10})
                      .to(".menu .bar2", .2, {rotation: -40, transformOrigin: "top left"});

    gsap.set(".closeMenu .closeBar1", {rotation: 45, transformOrigin: "center", y: 15, x: 4});
    gsap.set(".closeMenu .closeBar2", {rotation: -45, transformOrigin: "center", y: 15, x: 4});


$( document ).ready(function() {

  TweenMax.staggerFrom("#leftEye, #rightEye, #mouth", .25, {scaleY: 0, immediateRender: false}, .3);
  TweenLite.set(whales_el, {strokeDashOffset: strokeDashOffset});
  TweenLite.set([whale_1_el, whale_2_el], {opacity: 0});
  TweenLite.set(whale_1_el, {fill: '#0E1924'});
  TweenLite.set(whale_2_el, {fill: '#172B40'});
  whales_eyes_inner.css({'fill': '#000000', 'stroke': '#22406D'});
  whales_eyes_outer.css({'fill': '#0D2440'});
  

    hamburgerHover();
    toggleMenu();
    CTAarrowHover();
    CTAbuttonHover();
    homeload();
    smileyFace();





// ------------------------------Background play pause---------------------------------------

    var firstPrjOffset = $("#prj-heineken").offset().top;
    var lastPagesOffset = $("#more-works").offset().top;
    
    $(window).scroll(function() {
      
      var currentScroll = $(window).scrollTop();
      
      if ((currentScroll < firstPrjOffset) || (currentScroll >= lastPagesOffset)) {
        $(".background").css ({
          position: 'fixed'
        });
          lionTl.play();
          whale2Tl.play();
      } else {
        $(".background").css ({
          position: 'absolute'
        });
        lionTl.pause();
        whale2Tl.pause();
      }
    });

}); //closing of document.ready




//Whales animation
//Global vars
var lionTl = anime.timeline({loop: true}),
    whale2Tl = anime.timeline({loop: true}),
    whale_1_el = document.querySelectorAll('#myWhale_1 .cls-1'),
    whale_2_el = document.querySelectorAll('#myWhale_2 .cls-1'),
    whales = document.querySelectorAll('.whales'),
    whales_el = document.querySelectorAll('.whales .cls-1'),
    whale_1 = document.querySelectorAll('.whale_1'),
    whale_2 = document.querySelectorAll('.whale_2'),
    whales_eyes_inner = $('#whale_1_eye, #whale_2_eye'),
    whales_eyes_outer = $('#whale_1_eye_outer, #whale_2_eye_outer'),
    strokeDashOffset = anime.strokeDashoffset;



//Whale 1 animation
  function whale1Play() {
      lionTl
        // 1st round
        // .add ({
        //   targets: whale_1_el,
        //     translateX: [function(el, i) {
        //       return -50 - (50 * i);
        //     }, 0],
        //     translateY: [function(el, i) {
        //       return -30 - (30 * i);
        //     }, 0],
        //     scale: [.7, .8],
        //     opacity: .5,
        //     // easing: 'easeOutElastic(2, 0.8)',
        //     easing: 'spring(20, 60, 35, 1)',
        //     duration: 9000
        // }, '-=2000')
        // .add ({
        //   targets: whale_1_el,
        //   translateX: '50%',
        //   translateY: '20%',
        //   scale: 1,
        //   opacity: 1,
        //   duration: 8000,
        //   delay: anime.stagger(10),
        //   // easing: 'spring(20, 60, 35, 1)',
        //   easing: 'easeInOutElastic(1, 1)',
        // })
        // .add ({
        //   targets: whale_1_el,
        //   rotateZ: -20,
        //   duration: 5000,
        //   delay: anime.stagger(30),
        //   easing: 'spring(20, 60, 35, 1)'
        // })
        // .add ({
        //   targets: whale_1_el,
        //   translateX: '200%',
        //   // translateY: '-70%',
        //   scale: .8,
        //   opacity: 0,
        //   duration: 14000,
        //   delay: anime.stagger(5),
        //   easing: 'easeInElastic(2, 1)'
        // })

        //Simplified animation
        .add ({ //moves to centre from left
          targets: whale_1_el,
            scale: [.5, .8],
            translateX: ['-100%', '10%'],
            translateY: '10%',
            rotateZ: -5,
            opacity: [.5, 1],
            easing: 'spring(80, 30, 50, 0)', //Mass | Stiffness | Damping | Velocity
            delay: anime.stagger(10),
        })
        .add ({ //moves offscreen to right
          targets: whale_1_el,
            scale: .7,
            translateX: '300%',
            translateY: '20%',
            rotateZ: -10,
            opacity: .3,
            duration: 12000,
            easing: 'easeInCubic',
            delay: anime.stagger(10),
        })
  };

  //whale 2 animation
   function whale2Play() {
        whale2Tl
        .add ({
          targets: whale_2_el,
            translateX: [function(el, i) {
              return 10 + (10 * i);
            }, 0],
            translateY: [function(el, i) {
              return 20 + (20 * i);
            }, 0],
            scale: [.8, 1],           
            // fill: '#e2e9ed',
            opacity: [0,1],
            easing: 'spring(50, 100, 70, 0)',
            delay: anime.stagger(30)
        }, '+=16000')
        .add ({
          targets: whale_2_el,
          rotateZ: -20,
          duration: 8000,
          delay: anime.stagger(30),
          easing: 'spring(30, 50, 30, 0)',
        })
        .add ({
          targets: whale_2_el,
          translateX: '-200%',
          translateY: '200%',
          rotateZ: -25,
          scale: 1.2,
          duration: 7000,
          delay: anime.stagger(8),
          easing: 'easeOutSine',
        })  
        .add ({
          targets: whale_2_el,
          translateX: '30%',
          translateY: '-10%',
          rotate: 90,
          scale: 1,
          duration: 10000,
          delay: anime.stagger(20),
          easing: 'easeOutElastic(1, .7)',
        }, '-=1000')
        .add ({
          targets: whale_2_el,
          translateX: '-130%',
          translateY: '-300%',
          scale: .7,
          duration: 10000,
          delay: anime.stagger(10),
          easing: 'easeInOutSine',
        })
   }




// Loading animation
function preloadingAnimation() {
  var $el1 = document.getElementById('ic-component-1'),
      $el2 = document.getElementById('ic-component-2'),
      $el3 = document.getElementById('ic-component-3'),
      $el4 = document.getElementById('ic-component-4'),
      $el5 = document.getElementById('ic-component-5'),
      $el6 = document.getElementById('ic-component-6'),
      $el7 = document.getElementById('ic-component-7'),

      loadingTL = anime.timeline ({
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




// Initial Home Animation
function homeload() {
    var homeTimeline = new TimelineMax({onComplete: function() {
      whale1Play();
      whale2Play();
    }})
        homeTimeline
        // .add(preloadingAnimation())
                  .call(preloadingAnimation())
                  .to('.loading-wrapper', .3, {scaleY: 0, autoAlpha: 0, transformOrigin: 'top', delay: 5.8})
                  .set('.loading-wrapper', {display: 'none'})
                  .staggerFrom("#intro_text, #intro_sub_text, #home-CTAarrow, #bullets", .8,
                              {y: 100, autoAlpha: 0}, .3)
                  // .call(animatedBg());
      
      $('#skip_loadingAnimation').click(() => {
        const skipPoint = 6.1;
        homeTimeline.seek(skipPoint);
      });

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


   function projectCTAHover() {
     $('.project').each(function (i, el) {
       let $prjCTA = $(this).find('.prj-CTA'),
           $prjHero = $(this).find('.prj-hero_img');
        $.merge($prjCTA, $prjHero).hover (
         function() {
           TweenMax.fromTo($prjHero, {backgroundSize: "100%"}, {backgroundSize: "110%", duration: 1, ease: Back.easeOut.config(1.7)});
         },
         function() {
           TweenMax.to($prjHero, .5, {backgroundSize: "100%"});
         }
       )
     })
   };





function smileyFace() {
  var smileyTL = new TimelineMax({repeat: -1, repeatDelay: .2});
      smileyTL.add(smileySmile())
              .add(smileyBlink(), "-=2")
              .add(smileyWink(), "+=1");

    function smileyWink() {
      var winkTL = new TimelineMax();
          winkTL.to("#rightEye", .1, {scaleY: .2, y: 6})
                .to("#mouth", .2, {rotation: -14, y: -3, x: 8, scaleX: .8}, "-=.1")
                .to("#rightEye", .2, {scaleY: 1, y: 0}, "+=.3")
                .to("#mouth", .3, {rotation: 0, y: 0, x: 0, scaleX: 1}, "-=.1")
      return winkTL;
    }
    function smileyBlink() {
      var blinkTL = new TimelineMax({repeat: 1, repeatDelay: 2});
          blinkTL.to("#rightEye, #leftEye", .05, {scaleY: .1, y: 6})
                 .to("#rightEye, #leftEye", .05, {scaleY: 1, y: 0});
      return blinkTL;
    }
    function smileySmile() {
      var smileTL = new TimelineMax({repeat: 2, yoyo: true});
          smileTL.to("#mouth", 1.5, {scaleX: .8, transformOrigin: "center"});
      return smileTL;
    }
}






// Hamburger menu
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
                   .to($(".bar2", this), 0.3, {rotation: -40, x: 0, yPercent: 0, backgroundColor: "#8C9BAF"})
                   .to($(".bar1", this), 0.2, {rotation: 0, backgroundColor: "#8C9BAF"}, "-=.2")
                   .to($(".bar3", this), 0.1, {y: 10, x: 24, rotation: 0, backgroundColor: "#8C9BAF"});
      }
    );
  });
};




function toggleMenu() {
  var hamburgerState = new TimelineMax({reverse: true, paused: true});
      hamburgerState.fromTo(".closeMenu", .4, {height: 0}, {height: 32, delay: .5})
                    .fromTo(".closeBar1", .2, {width: 0}, {width: 24})
                    .fromTo(".closeBar1", .2, {rotation: 0}, {rotation: 45})
                    .fromTo(".closeBar2", .2, {width: 0}, {width: 24}, '-=.4')
                    .fromTo(".closeBar2", .2, {rotation: 0}, {rotation: -45}, '-=.2')

  var openOverlay = new TimelineMax({reverse: true, paused: true});
      openOverlay
                 .to($('.overlay'), .5, {scaleY: 1, opacity: 1, transformOrigin: "bottom center",
                                         ease: Power4.easeOut})
                 .to('.overlay', .7, {borderRadius: 0}, "-=.3")
                 .staggerFromTo(".overlay .menu-items ul li", .5, {scaleY: 0, y: 50, autoAlpha: 0,
                                                                   },
                                                                  {scaleY: 1, y: 0, autoAlpha: 1, rotation: 0,
                                                                   ease: Power4.easeOut}, 0.1, "-=.2");
      openOverlay.reverse();

  let menus = [$(".menu"), $(".closeMenu")];
   $.each(menus, function(i, el) {
    $(this).click(function() {
      if (openOverlay.reversed() ) {
          openOverlay.play();
          hamburgerState.play();
          lionTl.pause();
          whale2Tl.pause();
      } else {
        openOverlay.reverse();
        lionTl.play();
        whale2Tl.play();
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



function ElIn() {
  $('section').each(function (i, el) {
    var $inOut = $(this).find('.in-out-el');
    var tl = new TimelineMax();
          tl.staggerFromTo($inOut, .4, {y: 100, autoAlpha: 0, immediateRender:false}, {autoAlpha: 1, y: 0}, .1);
        return tl;
  })
}

function ElOut() {
  $('section').each(function (i, el) {
    var $inOut = $(this).find('.in-out-el');
    var tl = new TimelineMax();
        tl.staggerTo($inOut, .1, {y: -100, autoAlpha: 0}, .1)
   return tl;
 })
}



// ------------------------------- Malihu's PageScrolltoId Full page scroll sniplet -------------------------------------

  (function($){
        $(window).on("load",function(){
            $("a[rel='m_PageScroll2id']").mPageScroll2id({
                highlightSelector: "#bullets a",
                keepHighlightUntilNext: true,
                appendHash: true,
                scrollEasing:"easeInOutQuint",
                scrollSpeed:1000,
                onStart: function() {
                  const largerThan480px = window.matchMedia('(min-width: 480px)').matches;
                  if (largerThan480px) {
                    ElOut();
                   //  $('section').each(function (i, el) {
                   //  if ($(this).visible(true)) {
                   //    ElIn();
                   //    // ElOut();
                   //   }
                   // })
                 }      
                },
                onComplete: function() {
                  const largerThan480px = window.matchMedia('(min-width: 480px)').matches;
                  if (largerThan480px) {
                    ElIn();
                    // $('section').each(function (i, el) {                      
                    // if ($(this).visible(true)) {
                    //   ElIn();
                    //  };
                    // })
                  } 
                }
            });
        });
    })(jQuery);



// ------------------- scroll with mousewheel -----------------------

  (function($){
    $(window).on("load",function(){

      var doc=$(document),
        mPS2idData=doc.data("mPS2id"),
        mPS2idExt;

      if(!mPS2idData){
        console.log("Error: 'Page scroll to id' plugin not present or activated. Please run the code after plugin is loaded.");
        return;
      }

      if(!$("._mPS2id-t").length) return;

      doc.data("mPS2idExtend",{
        selector: "._mPS2id-h",
        currentSelector: function(){
          return this.index($(".mPS2id-highlight-first").length ? $(".mPS2id-highlight-first") : $(".mPS2id-highlight").length ? $(".mPS2id-highlight") : $(".mPS2id-wheel-init"));
        },
        target: function(){
          var curr=$(".mPS2id-target-first").length ? $(".mPS2id-target-first") : $(".mPS2id-target").length ? $(".mPS2id-target") : $(".mPS2id-clicked").length ? $("#"+$(".mPS2id-clicked").attr("href").split("#")[1]) : false;
          if(!curr.length){
            //if no current target exists, get the next and previous closest sections
            var max=999999999,
              min=-999999999;
            $("._mPS2id-t").each(function(){
              var pos=mPS2idData.layout==="horizontal" ? this.getBoundingClientRect().left : this.getBoundingClientRect().top;
              if(pos < 0 && pos > min){
                min=pos;
                curr=$("._mPS2id-t[data-psid-wheel-section='"+($(this).data("psid-wheel-section")+1)+"']");
              }else if(pos > 0 && pos < max){
                max=pos;
                curr=$("._mPS2id-t[data-psid-wheel-section='"+($(this).data("psid-wheel-section")-1)+"']");
              }
            });
            $("._mPS2id-h[data-psid-wheel-link='"+curr.data("psid-wheel-section")+"']").addClass("mPS2id-wheel-init");
          }
          return [
            $("._mPS2id-t[data-psid-wheel-section='"+(curr.data("psid-wheel-section")-1)+"']"), //previous target
            curr, //current target
            $("._mPS2id-t[data-psid-wheel-section='"+(curr.data("psid-wheel-section")+1)+"']"), //next target
          ];
        },
        needScroll: function(dir){
          if($("html,body").is(":animated")) return;
          if(dir > 0){ //scrolled fw
            var el=mPS2idExt.target.call()[2][0]; //next adjacent target
            if(mPS2idData.layout==="horizontal"){
              return el ? el.getBoundingClientRect().left > (window.innerWidth || document.documentElement.clientWidth) : true; //next target is after viewport
            }else{
              return el ? el.getBoundingClientRect().top > (window.innerHeight || document.documentElement.clientHeight) : true; //next target is below viewport
            }
          }else if(dir < 0){ //scrolled bw
            var el=mPS2idExt.target.call()[0][0]; //previous adjacent target
            if(mPS2idData.layout==="horizontal"){
              return el ? el.getBoundingClientRect().right < 0 : true; //previous target is before viewport
            }else{
              return el ? el.getBoundingClientRect().bottom < 0 : true; //previous target is above viewport
            }
          }
        },
        input:{
          y: null,
          x: null},
        i: null,
        time: null,
        support:{
          wheel: false
        }
      }).on("ps2id-scrollSection",function(e,dlt,i){
        var sel=$(mPS2idExt.selector);
        if(!$("html,body").is(":animated")){
          if(!i) i=mPS2idExt.currentSelector.call(sel);
          if(!(i===0 && dlt>0) && !(i===sel.length-1 && dlt<0)) sel.eq(i-dlt).trigger("click.mPS2id");
        }
      }).on("keydown",function(e){ //keyboard
        var code=e.keyCode ? e.keyCode : e.which,
          keys=$(this).data("mPS2id").layout==="horizontal" ? [37,39] : [38,40];
        if(code===keys[0] || code===keys[1]){
          if(!mPS2idExt.needScroll((code > 38 ? 1 : -1))){ //check if normal scrolling is needed to reach adjacent targets
            if($(mPS2idExt.selector).length) e.preventDefault();
            $(this).trigger("ps2id-scrollSection",(code===keys[0] ? 1 : -1));
          }
        }
      })
      //touch events (remove the following code if you don't want to apply the touch functionality)
      .on("pointerdown touchstart",function(e){ //touch (optional)
        var o=e.originalEvent;
        if(o.pointerType==="touch" || e.type==="touchstart"){
          var y=o.screenY || o.changedTouches[0].screenY;
          mPS2idExt.input.y=y;
          if($(this).data("mPS2id").layout==="horizontal"){
            var x=o.screenX || o.changedTouches[0].screenX;
            mPS2idExt.input.x=x;
          }
          mPS2idExt.time=o.timeStamp;
          mPS2idExt.i=mPS2idExt.currentSelector.call($(mPS2idExt.selector));
        }
      }).on("pointerup touchend",function(e){
        var o=e.originalEvent;
        if(o.pointerType==="touch" || e.type==="touchend"){
          var y=o.screenY || o.changedTouches[0].screenY,
            diff=mPS2idExt.input.y-y,
            time=o.timeStamp-mPS2idExt.time,
            i=mPS2idExt.currentSelector.call($(mPS2idExt.selector));
          if($(this).data("mPS2id").layout==="horizontal"){
            var x=o.screenX || o.changedTouches[0].screenX,
              diff=mPS2idExt.input.x-x;
          }
          if(Math.abs(diff)<2) return;
          var _switch=function(){
            return time<200 && i===mPS2idExt.i;
          };
          var dir=diff > 0 ? 1 : -1;
          if(time < 500 && Math.abs(diff) > 50) $(this).trigger("ps2id-scrollSection",[(diff>0 && _switch() ? -1 : diff<0 && _switch() ? 1 : 0),(_switch() ? mPS2idExt.i : i)]);
        }
      })
      // -----
      .on("ps2id-wheel-init",function(){
        //script initialization
        mPS2idExt=$(this).data("mPS2idExtend");
        $("._mPS2id-t").each(function(index){
          $(this).attr("data-psid-wheel-section",index);
        });
        $("._mPS2id-h").each(function(index){
          $(this).attr("data-psid-wheel-link",index);
        });
        //vanilla js mousewheel event (https://github.com/jquery/jquery/issues/2871)
        document.addEventListener('wheel', wheel, {passive: false}, false);
        document.addEventListener('mousewheel', wheel, {passive: false}, false);
        document.addEventListener('DOMMouseScroll', wheel, {passive: false}, false);
        function wheel(e){
          if(e.type == "wheel"){
            mPS2idExt.support.wheel = true;
          }else if(mPS2idExt.support.wheel){
            return;
          }
          if(!mPS2idExt.needScroll((mPS2idData.layout==="horizontal" ? e.deltaX : e.deltaY))){ //check if normal scrolling is needed to reach adjacent targets
            if($(mPS2idExt.selector).length) e.preventDefault();
            doc.trigger("ps2id-scrollSection",((e.detail<0 || e.wheelDelta>0 || e.deltaY < 0 || e.deltaX < 0) ? 1 : -1));
          }
        };
      }).trigger("ps2id-wheel-init");
    });

  })(jQuery);
