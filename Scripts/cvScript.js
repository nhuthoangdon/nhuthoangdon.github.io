$(document).ready(function() {


  var initialTL = new TimelineMax({delay: .3});
      initialTL.staggerTo('#Rectangle-1, #Rectangle-2, #cv-Oval-1, #cv-Oval-2, #Line-1, #Line-2, #Line-3, #Line-4',
                           .4, {strokeDashoffset: 0}, 0.1)
               .fromTo("#wc-text_1", .3, {scaleY: 0, y: "+=40"}, {scaleY: 1, y: 0, autoAlpha: 1, transformOrigin: "bottom left"}, "-=.6")
               .fromTo('#CTA-play', .3, {y: "+=10"}, {autoAlpha: 1, y: 0}, "-=.2")
               .from('#CTA-btn-stroke', .5, {strokeDashoffset: 0, strokeDasharray: 0, ease: Back.easeOut.config(4)});



  var cvTL = new TimelineMax({paused: true});
      cvTL.to(".story", 2, {text:{value:"I <b>graduated</b> in <b>2014</b> with a Bachelor Degree in <b>Multimedia Design</b>"}}, 'label-start')
          .to(".story", .2, {text:{value:""}, delay: 2})
          .to(".story", 1.5, {text:{value:"where I gained <b>multidisciplinary skills</b>"}, delay: .3})
          .to(".story", .2, {text:{value:""}, delay: 1.4})
          .to(".story", .7, {text:{value:"such as"}, delay: .3})
          .to(".story", 1, {letterSpacing: '3rem', autoAlpha: 0, delay: .6})
          .set('.story', {display: 'none', text:{value:""}})
          .set('.title, #graphic', {display: 'inherit'}, '-=2')
          .set('.title', {text: "Graphic/Visual Design"})
          .staggerFrom('.title, #graphic', .5, {y: "+=30", autoAlpha: 0}, .1)
          .to('.title', .3, {y: '+=10', autoAlpha: 0, delay: 1})
          .set('.title', {text: "Interaction Design/Motion Graphic"})
          .set('#interaction', {display: 'inherit', autoAlpha: 0})
          .from('#interaction', .5, {y: "+=30", autoAlpha: 0})
          .to('.title', .5, {autoAlpha: 1, y: 0}, '-=.3')
          .to('.title', .3, {y: '+=10', autoAlpha: 0, delay: 1})
          .set('.title', {text: "3D Modeling & Animation"})
          .set('#3d', {display: 'inherit', autoAlpha: 0})
          .from('#3d', .5, {y: "+=30", autoAlpha: 0})
          .to('.title', .5, {autoAlpha: 1, y: 0}, '-=.3')
          .to('.title', .3, {y: '+=10', autoAlpha: 0, delay: 1})
          .set('.title', {text: "Video Editing & other types of Animation"})
          .set('#stopMotion', {display: 'inherit', autoAlpha: 0})
          .from('#stopMotion', .5, {y: "+=30", autoAlpha: 0})
          .to('.title', .5, {autoAlpha: 1, y: 0}, '-=.3')
          .to('.title', .3, {y: '+=10', autoAlpha: 0, delay: 1})
          .to('.uniSkills-wrapper', 1.5, {y: '-=20'})
          .staggerTo('.uniSkill', .4, {y: '+=50', autoAlpha: 0, delay: 1, ease: Back.easeIn.config(2)}, .1)
          .set('.uniSkills-wrapper', {display: 'none'})
          .set('.story', {letterSpacing: ".05rem", display: 'block', autoAlpha: 1})
          .to(".story", 1, {text:{value:"After graduating, I got an internship at <b>S60</b>"}, delay: 1})
          .to(".story", .2, {text:{value:""}, delay: 2.3})
          .to('.story', 2, {text:{value: "where I established my career as a <b>UX/UI Designer</b>"}})
          .to(".story", .2, {text:{value:""}, delay: 2})
          .to('.story', 2, {text:{value: "and gained significant <b>experience</b>"}})
          .to(".story", .2, {text:{value:""}, delay: 1})
          .to('.story', 1.2, {text:{value: "working on"}})
          .to(".story", 1, {letterSpacing: '1.8rem', autoAlpha: 0, delay: .6})
          .set('.story', {display: 'none', text:{value:""}})
          .set('.title', {text: "Wireframes", y: "+=30"})
          .set('.wireframes', {display: 'block', y: "+=30", autoAlpha: 0})
          .staggerTo('.wireframes, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.title, .wireframes', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.wireframes, .wireframes', {display: 'none'})
          .set('.mockup', {display: 'block', autoAlpha: 0, y: "+=30"})
          .set('.title', {text: "Mockups", autoAlpha: 0})
          .staggerTo('.mockup, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.mockup, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.mockup', {display: 'none'})
          .set('.title', {text: 'Prototypes'})
          .set('.proto', {display: 'block', autoAlpha: 0, y: "+=30"})
          .staggerTo('.proto, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.proto, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.proto', {display: 'none'})
          .set('.story', {letterSpacing: ".05rem", display: 'block', autoAlpha: 1})
          .to(".story", 1, {text:{value:"My works involved"}, delay: 1})
          .to(".story", 1, {letterSpacing: '1.8rem', autoAlpha: 0, delay: .6})
          .set('.story', {display: 'none', text:{value:""}})
          .set('.title', {text: "Multiple Devices & Platforms"})
          .set('.multiple-devices', {display: 'block', y: "+=30", autoAlpha: 0})
          .staggerTo('.multiple-devices, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.multiple-devices, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.multiple-devices', {display: 'none'})
          .set('.title', {text: 'Testing assisting'})
          .set('.ab-testing', {display: 'block', autoAlpha: 0, y: "+=30"})
          .staggerTo('.ab-testing, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.ab-testing, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.ab-testing', {display: 'none'})
          .set('.title', {text: "UX/UI updates as per feedback"})
          .set('.design-amends', {display: 'block', autoAlpha: 0, y: "+=30"})
          .staggerTo('.design-amends, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.design-amends, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.design-amends', {display: 'none'})
          .set('.title', {text: "UI Specs/Guidelines"})
          .set('.styleguide', {display: 'block', autoAlpha: 0, y: "+=30"})
          .staggerTo('.styleguide, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.styleguide, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.styleguide', {display: 'none'})
          .set('.title', {text: "Liaisons with a cross-functional team"})
          .set('.liaison', {display: 'block', autoAlpha: 0, y: "+=30"})
          .staggerTo('.liaison, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.liaison, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.liaison', {display: 'none'})
          .set('.title', {text: "Teamwork & team members mentoring"})
          .set('.mentor', {display: 'block', autoAlpha: 0, y: "+=30"})
          .staggerTo('.mentor, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.mentor, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.mentor', {display: 'none'})
          .set('.story', {letterSpacing: ".05rem", display: 'block', autoAlpha: 1})
          .to(".story", .6, {text:{value:"Last year"}, delay: 1})
          .to(".story", .2, {text:{value:""}, delay: 1})
          .to('.story', 1.2, {text:{value: "I decided to quit my former job"}})
          .to(".story", .2, {text:{value:""}, delay: .8})
          .to('.story', 1.6, {text:{value: "to focus on learning <b>HTML/CSS/JS</b>"}})
          .to(".story", .2, {text:{value:""}, delay: 1.5})
          .to('.story', 1.2, {text:{value: "and develop my <b>side projects</b>"}})
          .to(".story", .2, {text:{value:""}, delay: 1.2})
          .to('.story', 1.2, {text:{value: "as I find myself doing best at"}})
          .to(".story", .2, {text:{value:""}, delay: 1.2})
          .to('.story', 2.8, {text:{value: "conceptualising and brainstorming <b>ideas</b>"}})
          .to(".story", .2, {text:{value:""}, delay: 1.8})
          .to('.story', 1, {text:{value: "About the <b>tools</b>"}, delay: 1})
          .to(".story", .2, {text:{value:""}, delay: 1})
          .to('.story', 1, {text:{value: "I am <b>proficient</b> in"}})
          .to(".story", 1, {letterSpacing: '1.8rem', autoAlpha: 0, delay: 1})
          .set('.story', {display: 'none', text:{value:""}})
          .set('.title', {text: "Industry standard tools"})
          .set('.tools', {display: 'flex'})
          .set('.tool', {display: 'inherit', y: "+=30", autoAlpha: 0})
          .staggerTo('.tool, .title', .3, {y: 0, autoAlpha: 1}, .08)
          .staggerTo('.tool, .title', .2, {y: '+=30', autoAlpha: 0, delay: 2.5}, .05)
          .set('.tool, .tools', {display: 'none'})
          .set('.story', {letterSpacing: ".05rem", display: 'block', autoAlpha: 1})
          .to(".story", 1, {text:{value:"and have <b>understandings</b> of"}, delay: .5})
          .to(".story", 1, {letterSpacing: '1.2rem', autoAlpha: 0, delay: 1.3})
          .set('.story', {display: 'none', text:{value:""}})
          .set('.title', {text: "HTML/CSS/JS"})
          .set('.frontend', {display: 'block', y: "+=30", autoAlpha: 0})
          .staggerTo('.frontend, .title', .5, {y: 0, autoAlpha: 1}, .1)
          .staggerTo('.frontend, .title', .3, {y: '+=30', autoAlpha: 0, delay: 1.8}, .1)
          .set('.frontend', {display: 'none'})
          .set('.story', {letterSpacing: ".05rem", display: 'block', autoAlpha: 1})
          .to(".story", 1, {text:{value:"I have basic knowledge of"}, delay: 1})
          .to(".story", .2, {text:{value:""}, delay: .6})
          .to('.story', 1, {text:{value: "<b>User Research Methodologies</b>"}})
          .to(".story", .2, {text:{value:""}, delay: 1})
          .to('.story', 1.6, {text:{value: "but I am eager to learn more"}})
          .to(".story", .2, {text:{value:""}, delay: 1.5})
          .to('.story', 1, {text:{value: "I am seeking an opportunity"}, delay: 1.6})
          .to(".story", .2, {text:{value:""}, delay: 1})
          .to('.story', 1.5, {text:{value: "to thrive and expand my expertise"}})
          .to(".story", .2, {text:{value:""}, delay: 1.5})
          .to('.story', 2.3, {text:{value: "as I have always loved to shape <b>innovative products</b>"}})
          .to(".story", .2, {text:{value:""}, delay: 1.6})
          .to('.story', 1.8, {text:{value: "that not only satisfy <b>user needs</b>"}})
          .to(".story", .2, {text:{value:""}, delay: 1.6})
          .to('.story', 2, {text:{value: "but more importantly"}})
          .to(".story", .2, {text:{value:""}, delay: 1.6})
          .to('.story', 3.5, {text:{value: "also serve a good purpose to the world."}})
          .to(".story", 1, {letterSpacing: '1.2rem', autoAlpha: 0, delay: 1.7})
          .set('.story', {display: 'none', text:{value:""}})
          .set('.cv-navigating, #wc-stuff', {display: "none"})
          .set('.ending h3, .ending p, .timeline', {display: "block", autoAlpha: 0, y: "+=30"})
          .staggerTo('.ending h3, .ending p, .timeline', .8, {autoAlpha: 1, y: 0, delay: .5}, .2, 'label-cvEnds');













function initialPlayInit() {
  $('#CTA-play').click(function() {
    var tl = new TimelineMax();
        tl.add(initialTL.reverse().timeScale(3))
          .to('.playback-control', 1, {autoAlpha: 1})
          .set('#wc-stuff', {display: 'none'})
          .add(cvTL.play(), 'label-cvStart');

          $('.pause').click(function() {
            tl.paused(!tl.paused());
                if (tl.paused()) {
                  TweenMax.to(".pause", .2, {text: "RESUME"})
                } else {
                  TweenMax.to(".pause", .2, {text: "PAUSE"})
                }
          });

          $('.replay').click(function() {
            tl.play('label-cvStart');
            TweenLite.to('#skip', .5, {autoAlpha: 1});
          });

          $('#skip').click(function() {
            tl.seek(-1.7);
          });

  });
};

initialPlayInit();

CTAplayHover();

});


function CTAplayHover() {
  $('#CTA-play').hover(
    function() {
      TweenMax.to('#CTA-btn-stroke', .8, {strokeDashoffset: 0, strokeDasharray: 250});
    },
    function() {
      TweenMax.to('#CTA-btn-stroke', 1, {strokeDashoffset: 98, strokeDasharray: 55});
    }
  );
};
