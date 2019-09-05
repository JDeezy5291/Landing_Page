var controller = new ScrollMagic.Controller();

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const menu = document.querySelector('.menu');
const headline = document.querySelector('.headline');

// first section
const tl = new TimelineMax()
    .fromTo(hero, 1, {
        height: '0%'
    }, {
            height: '80%',
            ease: Power2.easeInOut
        })
    .fromTo(hero, 1.2, {
        width: '100%'
    }, {
            width: '80%',
            ease: Power2.easeInOut
        })
    .fromTo(slider, 1.2, {
        x: '-100%'
    }, {
            x: '0%',
            ease: Power2.easeInOut
        }, '-=2.2')
    .fromTo(logo, 0.5, {
        opacity: 0,
        x: -30
    }, {
        opacity: 1,
        x: 0
    }, '-=.2')
    .fromTo(menu, 0.5, {
        opacity: 0,
        x: 30
    }, {
        opacity: 1,
        x: 0
    }, '-=.2')



    

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".section_1",
})
    // .setPin(".section")
    .setTween(tl)
    .addTo(controller);



const grid = new TimelineMax()
//     .set('.grid', {
//         display: 'grid'
//     })
//     .to('.slider-2', 2, {
//         y: -400,
//         scale: 1.1,
//         ease: Expo.easeInOut
//     })
//     .to('.imgs', 2, {
//         height: '100%',
//         ease: Expo.easeInOut
//     }, '-=2')
//     .to('.imgs-2', 2, {
//         height: '100%',
//         ease: Expo.easeInOut
//     }, '-=1.8')
//     .to('.imgs-3', 2, {
//         height: '100%',
//         ease: Expo.easeInOut
//     }, '-=1.6')
//     .to('.imgs-4', 2, {
//         height: '100%',
//         ease: Expo.easeInOut
//     }, '-=1.4')
//     .to('.destination', 3, {
//         autoAlpha: 1,
//         y: -20,
//         ease: Expo.easeOut
//     }, '-=2');

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".section_2",
    triggerHook: .3
})
    .setClassToggle(".grid", "show")
    .reverse(false)
    .setTween(grid)
    // .addIndicators()
    .addTo(controller);







// var scene3 = new ScrollMagic.Scene({
//     triggerElement: ".section-logo_3",
// })
//     .setClassToggle(".section-logo_3, .section_3 nav", "show")
//     .addTo(controller);




// navbar
function init() {
    const burger = document.getElementById('burger')
    const burgerLines = document.querySelectorAll('.menu line');
    const navOpen = document.querySelectorAll('.nav-open');
    const contact = document.querySelectorAll('.contact');
    const social = document.querySelectorAll('.social');

    const navTl = new TimelineMax({ paused: true, reversed: true });

    navTl
        .to(navOpen, 0.5, {
            y: 0
        })
        .fromTo(contact, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, '-=0.1')
        .fromTo(social, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, '-=0.5')
        .fromTo(logo, 0.2, {
            color: 'white'
        }, {
            color: 'black'
        }, '-=1')
        .fromTo(burgerLines, 0.2, {
            stroke: 'white'
        }, {
            stroke: 'black'
        }, '-=1');

    burger.addEventListener('click', () => {
        navTl.reversed() ? navTl.play() : navTl.reverse();
    });
}
init();