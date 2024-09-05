

function loadingAnimation(){
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
    // .to(".loader h1",{
    //     color: "black"
    // },"a")
    .to("nav",{
        padding: "2vw 4.5vw",  
    })
}


const image = document.querySelector(".icon");
const projectsDiv = document.querySelectorAll(".link1");
const aboutDiv = document.querySelectorAll(".link2");
const studiesDiv = document.querySelectorAll(".link3");

let isOriginalImage = true;
let divState = true;
let rotateDirection = 360; // Initial rotation direction (clockwise)

image.addEventListener('click', () => {
gsap.to(image, {
    rotation: `+=${rotateDirection}`,
    duration: 1,
    opacity: 0.8,
    onStart: () => {
        // Optional: You can delay the image swap to happen during the rotation
        setTimeout(() => {
            // Swap image source during the rotation
            image.src = isOriginalImage ? './assets/add_white.png' : './assets/close_white.png';
            isOriginalImage = !isOriginalImage;
        }, 500); // 500ms delay for halfway through the rotation
    }
});
// gsap.to(aboutDiv, { left: "70%", duration: 1 });
// gsap.to(studiesDiv, { left: "70%", duration: 1,});
// gsap.to(projectsDiv, { left: "50%", duration: 1, });
// Update div positions based on the current state
if (divState) {
    gsap.to(aboutDiv, { left: "70%", duration: 1 });
    gsap.to(studiesDiv, { left: "90%", duration: 1 , opacity: 0});
    gsap.to(projectsDiv, { left: "90%", duration: 1, opacity: 0 });
} else {
    gsap.to(aboutDiv, { left: "50%", duration: 1 });
    gsap.to(studiesDiv, { left: "70%", duration: 1 , opacity: 1});
    gsap.to(projectsDiv, { left: "30%", duration: 1 , opacity: 1});
}

// Toggle the div state for the next click
divState = !divState;

// Toggle the rotation direction for the next click
rotateDirection = -rotateDirection;
});

window.onload = function() {

loadingAnimation()

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
});

document.querySelector("section .arrowUp").addEventListener("click", ()=>{
    // console.log("click")
    scroll.scrollTo(".page2");
})

document.querySelector("section .arrowDown").addEventListener("click", ()=>{
    // console.log("click")
    scroll.scrollTo(".page3");
})

document.querySelector("footer h2").addEventListener("click", ()=>{
    scroll.scrollTo(0);
})



};
