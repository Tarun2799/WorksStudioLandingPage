let tl = gsap.timeline();

tl
.to(".yellow",{
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
})
.to("video",{
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
},"a")
.to(".loader",{
    top: "-100%",
    delay: 0.5,
    duration: 0.55,
    ease: "expo.out",
},"a")
.to(".loader h1",{
    color: "black"
},"a")