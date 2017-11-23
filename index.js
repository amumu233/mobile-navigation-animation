//  open trigger
var 
    openTrigger = $('.menu-trigger'),
    openTriggerTop = openTrigger.find('.top'),
    openTriggerMiddle = openTrigger.find('.middle'),
    openTriggerBottom = openTrigger.find('.bottom');
// close trigger
var 
    closeTrigger = $('.close-trigger'),
    closeTriggerLeft = closeTrigger.find('.left'),
    closeTriggerRight = closeTrigger.find('.right');
// logo
var logo = $('.logo');
// menu
var 
    menuContainer = $('.menu-container'),
    menu = $('.menu'),
    menuTop = $('.menu-bg.top'),
    menuMiddle = $('.menu-bg.middle'),
    menuBottom = $('.menu-bg.bottom');
// time line max
var 
    tlOpen = new TimelineMax({paused: true}),
    tlClose = new TimelineMax({paused: true});

// open timeline
tlOpen.add('preOpen')
    .to(logo,0.4,{
        scale: 0.8,
        opacity: 0,
        ease: Power2.easeOut
    },'preOpen')
    .to(openTriggerTop,0.4,{
        x: '+80px',
        y: '-80px',
        delay: 0.1,
        ease: Power4.easeIn,
        onComplete: function(){
            closeTrigger.css('z-index','25')
        }
    },'preOpen')
    .to(openTriggerMiddle,0.4,{
        x: '+=80px',
        y: '-=80px',
        delay: 0.2,
        ease: Power4.easeIn,
        onComplete: function(){
            openTrigger.css('visibility','hidden')
        }
    },'preOpen')
    .to(openTriggerBottom,0.4,{
        x: '+=80px',
        y: '-=80px',
        delay: 0.2,
        ease: Power4.easeIn
    },'preOpen')
    .add('open','-=0.4')
    .to(menuTop,0.8,{
        y: '13%',
        ease: Power4.easeInOut
    },'open')
    .to(menuMiddle,0.8,{
        scaleY: 1,
        ease: Power4.easeInOut
    },'open')
    .to(menuBottom,0.8,{
        y: '-114%',
        ease: Power4.easeInOut
    },'open')
    .fromTo(menu,0.6,{
        y: 30, opacity: 0, visibility: 'hidden'
    },{
        y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeInOut
    },'-=0.2')
    .add('preClose','-=0.8')
    .to(closeTriggerLeft,0.8,{
        x: '-=100px', y: '+=100px', ease: Power4.easeOut
    },'preClose')
    .to(closeTriggerRight,0.8,{
        x: '+=100px', y: '+=100px', ease: Power4.easeOut
    },'preClose')
// close Timeline
tlClose.add('close')
    .to(menuTop,0.2,{
        backgroundColor: '#6295ca',
        ease: Power4.easeInOut,
        onComplete: function(){
            logo.css('z-index','26');
            closeTrigger.css('z-index','5');
            openTrigger.css('visibility','visible');
        }
    },'close')
    .to(menuMiddle,0.2,{
        backgroundColor: '#6295ca', ease: Power4.easeInOut
    },'close')
    .to(menuBottom,0.2,{
        backgroundColor: '#6295ca', ease: Power4.easeInOut
    },'close')
    .to(logo, 0.8, {
        scale: 1, opacity: 1, ease: Power4.easeInOut
    },'close','+=0.2')
    .to(menuTop, 0.8, {
        y: '-113%', ease: Power4.easeInOut
    },'close','+=0.2')
    .to(menuMiddle, 0.8, {
        scaleY: 0, ease: Power4.easeInOut
    },'close','+=0.2')
    .to(menuBottom, 0.8, {
        y: '23%', ease: Power4.easeInOut,
        onComplete: function () {
            menuTop.css('background-color','#FFFFFF');
            menuMiddle.css('background-color','#FFFFFF');
            menuBottom.css('background-color','#FFFFFF');
        }
    },'close','+=0.2')
    .to(closeTriggerLeft, 0.2, {
        x: '+=100px', y: '-=100px', ease: Power4.easeInOut
    },'close')
    .to(closeTriggerRight, 0.2, {
        x: '-=100px', y: '-=100px', delay: 0.1, ease: Power4.easeInOut
    },'close')
    .to(openTriggerTop, 1, {
        x: '-=80px', y: '+=80px', delay: 0.2, ease: Power4.easeOut
    },'close')
    .to(openTriggerMiddle, 1, {
        x: '-=80px', y: '+=80px', ease: Power4.easeOut
    },'close')
    .to(openTriggerBottom, 1, {
        x: '-=80px', y: '+=80px', delay: 0.1, ease: Power4.easeOut
    },'close')


// events
openTrigger.on('click',function(){
    if(tlOpen.progress()<1){
        tlOpen.play();
    }else{
        tlOpen.restart();
    }
});
closeTrigger.on('click',function () {
    if(tlClose.progress()<1){
        tlClose.play();
    }else{
        tlClose.restart();
    }
})

    