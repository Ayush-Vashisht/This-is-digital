gsap.from("#img1",{
    opacity:0,
    delay:0.4,
    y:50,
    duration:1,
})
gsap.from("#img2",{
    opacity:0,
    delay:0.4,
    x:50,
    duration:1,
})
gsap.from("#img3",{
    opacity:0,
    delay:0.4,
    y:-50,
    duration:1,
})
gsap.from("#main h1",{
    opacity:0,
    delay:0.4,
    duration:1,
})
gsap.from("#page2 h5,#page2 h1,#page2 #aboutus",{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 h5",
        scroller:"body",
        start:"top 60%",
    }
})