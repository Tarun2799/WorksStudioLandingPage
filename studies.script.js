

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

// Update div positions based on the current state
if (divState) {
    gsap.to(aboutDiv, { left: "90%", duration: 1  , opacity: 0 });
    gsap.to(studiesDiv, { left: "70%", duration: 1});
    gsap.to(projectsDiv, { left: "90%", duration: 1, opacity: 0 });
} else {
    gsap.to(aboutDiv, { left: "50%", duration: 1 , opacity: 1});
    gsap.to(studiesDiv, { left: "70%", duration: 1 });
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


};


let col1 = document.querySelector(".col1");
let col2 = document.querySelector(".col2");
let col3 = document.querySelector(".col3");


const col1Array = [{
    imgSrc: "./assets/studies/Thumbnail_240828_.jpg",
    paraText: "FURNITURE ",
    emText: "AS ART",
},{
    imgSrc: "./assets/studies/Works_3.jpg",
    paraText: "SIMILAR ",
    emText: "HIGH HOPES",
},{
    imgSrc: "./assets/studies/10_.jpg",
    paraText: "OBJECTIVE ",
    emText: "BEAUTY",
},{
    imgSrc: "./assets/studies/03_231001_.jpg",
    paraText: "ALWAYS ",
    emText: "START WITH ART",
},];


const col2Array = [{
    imgSrc: "./assets/studies/Thumbnail_240806_.jpg",
    paraText: "TRAINING ",
    emText: "IMAGE MODEL",
},{
    imgSrc: "./assets/studies/03_230825_.jpg",
    paraText: "INFINITY ",
    emText: "BLUE",
},{
    imgSrc: "./assets/studies/326_.jpg",
    paraText: "A YEAR ",
    emText: "OF DAILY PROJECTS",
},];


const col3Array = [{
    imgSrc: "./assets/studies/WØRKS_GrowthbyDesign_.jpg",
    paraText: "GROWTH ",
    emText: "BY DESIGN",
},{
    imgSrc: "./assets/PAGE3/versace-1.5.jpg",
    paraText: "VERSACE & ",
    emText: "IDENTITY",
},{
    imgSrc: "./assets/studies/kg-stills-thumb.jpg",
    paraText: "DREAM ",
    emText: "IT",
},];

col1Array.forEach(arr => {
    let div1 = document.createElement("div");
    div1.classList.add("image-div");

    
    let div2 = document.createElement("div");
    div2.classList.add("overlay");
    
    let para = document.createElement("p");
    para.textContent = arr.paraText;
    let emphasis = document.createElement('em');
    emphasis.textContent = arr.emText;
    para.appendChild(emphasis);
    div1.setAttribute('data-text', para.textContent);

    console.log(div1)
    
    // div2.appendChild(para);


    let img = document.createElement("img");
    img.src = arr.imgSrc;

    div1.appendChild(div2);
    div1.appendChild(img);

    col1.appendChild(div1);
 })
    



 col2Array.forEach( arr => {
    let div1 = document.createElement("div");
    div1.classList.add("image-div");

    let div2 = document.createElement("div");
    div2.classList.add("overlay");

    let para = document.createElement("p");
    para.textContent = arr.paraText;
    let emphasis = document.createElement('em');
    emphasis.textContent = arr.emText;
    para.appendChild(emphasis);
    div1.setAttribute('data-text', para.textContent);

    // div2.appendChild(para);


    let img = document.createElement("img");
    img.src = arr.imgSrc;

    div1.appendChild(div2);
    div1.appendChild(img);

    col2.appendChild(div1);
  })





col3Array.forEach( arr => { 
    let div1 = document.createElement("div");
    div1.classList.add("image-div");

    let div2 = document.createElement("div");
    div2.classList.add("overlay");

    let para = document.createElement("p");
    para.textContent = arr.paraText;
    let emphasis = document.createElement('em');
    emphasis.textContent = arr.emText;
    para.appendChild(emphasis);

    div1.setAttribute('data-text', para.textContent);



    let img = document.createElement("img");
    img.src = arr.imgSrc;

    div1.appendChild(div2);
    div1.appendChild(img);

    col3.appendChild(div1);
})




// STUDIES PAGE FEATURE
const imageDivs = document.querySelectorAll(".column>.image-div")

imageDivs.forEach( (div)=>{
    div.addEventListener("mouseover",function(){

        let text = div.getAttribute("data-text");
        let heading = document.querySelector(".center-heading")
        // console.log(heading);
        heading.textContent = text
        heading.style.opacity = "1";
        heading.style.scale = 1.1;
    })

    div.addEventListener("mouseleave",function(){
        let heading = document.querySelector(".center-heading")
        // console.log(heading);
        heading.style.opacity = "0";
        heading.style.scale = 1;

    })
})


