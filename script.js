
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
        .to(".loader h1",{
            color: "black"
        },"a")
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
        onStart: () => {
            // Optional: You can delay the image swap to happen during the rotation
            setTimeout(() => {
                // Swap image source during the rotation
                image.src = isOriginalImage ? './assets/add.png' : './assets/close.png';
                isOriginalImage = !isOriginalImage;
            }, 500); // 500ms delay for halfway through the rotation
        }
    });
    // gsap.to(aboutDiv, { left: "70%", duration: 1 });
    // gsap.to(studiesDiv, { left: "70%", duration: 1,});
    // gsap.to(projectsDiv, { left: "50%", duration: 1, });
    // Update div positions based on the current state
    if (divState) {
        gsap.to(aboutDiv, { left: "90%", duration: 1 , opacity: 0});
        gsap.to(studiesDiv, { left: "90%", duration: 1 , opacity: 0});
        gsap.to(projectsDiv, { left: "70%", duration: 1 });
    } else {
        gsap.to(aboutDiv, { left: "50%", duration: 1 , opacity: 1});
        gsap.to(studiesDiv, { left: "70%", duration: 1 , opacity: 1});
        gsap.to(projectsDiv, { left: "30%", duration: 1 });
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
    
    document.querySelector("footer h2").addEventListener("click", ()=>{
        scroll.scrollTo(0);
    })

    
    
};



    let col1 = document.querySelector(".col1");
    let col2 = document.querySelector(".col2");
    let col3 = document.querySelector(".col3");

// page2 background change feature.
let elems = document.querySelectorAll(".elem");
let page2 = document.querySelector(".page2");

elems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        let bgimg = elem.getAttribute("data-img");
        // console.log(bgimg)
        page2.style.backgroundImage = `url(${bgimg})`;
    })
})


// Page3 Images loading 

const col1Array = [{
    imgSrc: "./assets/PAGE3/Cover.jpg",
    paraText: "CONVERSE ",
    emText: "NEXT STUDIO",
},{
    imgSrc: "./assets/PAGE3/amd-v1.5.jpg",
    paraText: "NIKE AIR MAX 21 ",
    emText: "FILM IDENTITY",
},{
    imgSrc: "./assets/PAGE3/Beyonce-Lion-King-The-Gift-Deluxe-Album-Cover_WORKS.jpg",
    paraText: "BEYONCE: ",
    emText: "THE GIFT ALBUM",
},{
    imgSrc: "./assets/PAGE3/Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS.jpg",
    paraText: "CDL ",
    emText: "CHAMPIONSHIP KIT 2021",
},{
    imgSrc: "./assets/PAGE3/Converse-Basketball-Identity-Shoe-Photography.jpg",
    paraText: "CONVERSE ",
    emText: "BASKETBALL H019",
},{
    imgSrc: "./assets/PAGE3/converse-bball-3.jpg",
    paraText: "CONVERSE ",
    emText: "BASKETBALL IDENTITY",
},{
    imgSrc: "./assets/PAGE3/Cover254639+8.jpg",
    paraText: "HERON PRESTON ",
    emText: "WEBSITE",
},{
    imgSrc: "./assets/PAGE3/dreamhaus-1.5_240320.jpg",
    paraText: "DREAMHAUS ",
    emText: "IDENTITY",
},{
    imgSrc: "./assets/PAGE3/fog-pop-v1.5.jpg",
    paraText: "FEAR OF GOD",
    emText: "POP UP",
},{
    imgSrc: "./assets/PAGE3/fog.jpg",
    paraText: "AIR FEAR OF GOD ",
    emText: "IDENTITY",
},{
    imgSrc: "./assets/PAGE3/freetoflow-v1.5.jpg",
    paraText: "CONVERSE ",
    emText: "BASKETBALL EXPLORATIONS",
},{
    imgSrc: "./assets/PAGE3/fvv-1.5.jpg",
    paraText: "FUTURE VVORLD ",
    emText: "IDENTITY & WENSITE",
},];


const col2Array = [{
    imgSrc: "./assets/PAGE3/Nike-Studio-45-Desk_WORKS.jpg",
    paraText: "NIKE ",
    emText: "STUDIO 45",
},{
    imgSrc: "./assets/PAGE3/home-image.jpg",
    paraText: "JEEN-YUHS ",
    emText: "FILM IDENTITY",
},{
    imgSrc: "./assets/PAGE3/JACKIELEEPHOTO_090717_INSTITUTE-KITHSPORT-203255_201124_023510.jpg",
    paraText: "KITH ",
    emText: "SPORT SS18",
},{
    imgSrc: "./assets/PAGE3/John-Elliot-Shows-Experiential-Photography-00_.jpg",
    paraText: "JOHN ELLIOTT ",
    emText: "SHOWS",
},{
    imgSrc: "./assets/PAGE3/john-elliott-nepal-cover.jpg",
    paraText: "JOHN ELLIOTT ",
    emText: "SCENES FROM NEPAL",
},{
    imgSrc: "./assets/PAGE3/nars-1.5.jpg",
    paraText: "NARS X SUSANNE BASTSCH ",
    emText: "ZINE",
},{
    imgSrc: "./assets/PAGE3/NEWTHUMB.jpg",
    paraText: "U.S. SCOCER ",
    emText: "CAMPAIGN IDENTITY",
},{
    imgSrc: "./assets/PAGE3/nike-nfl-cover2.jpg",
    paraText: "NIKE NFL ",
    emText: "2022 CAMPAIGN",
},{
    imgSrc: "./assets/PAGE3/peloton-tread-1.5-b.jpg",
    paraText: "PELOTON ",
    emText: "TREAD FILM",
},{
    imgSrc: "./assets/PAGE3/public-COVER.jpg",
    paraText: "PUBLIC.COM ",
    emText: "CAMPAIGN",
},{
    imgSrc: "./assets/PAGE3/Reebok-Split-From-Packaging-01_WORKS.jpg",
    paraText: "REEBOK ",
    emText: "SPLIT FROM ZINE",
},{
    imgSrc: "./assets/PAGE3/Guns-N-Roses-Pop-Up-Police-Car-01_WORKS.jpg",
    paraText: "GUNS N' ROSES ",
    emText: "POP UP",
},];

const col3Array = [{
    imgSrc: "./assets/PAGE3/Thumbnail_New.jpg",
    paraText: "ESSENTIALS ",
    emText: "FEAR OF GOD",
},{
    imgSrc: "./assets/PAGE3/versace-1.5.jpg",
    paraText: "VERSACE TRIGRECA ",
    emText: "IDENTITY",
},{
    imgSrc: "./assets/PAGE3/Reshape-Identity-Logo-Blue_WORKS.jpg",
    paraText: "RESHAPE ",
    emText: "IDENTITY",
},{
    imgSrc: "./assets/PAGE3/skky-thumb.jpg",
    paraText: "SKKY PARTNERS ",
    emText: "INDENTITY AND WEBSITE",
},{
    imgSrc: "./assets/PAGE3/Thumbnail_2.jpg",
    paraText: "THE NORTH FACE CLIMB FESTIVAL ",
    emText: "VISUAL IDENTITY",
},{
    imgSrc: "./assets/PAGE3/thumbnail_230526.jpg",
    paraText: "L.E.D. STUDIO ",
    emText: "WEBSITE",
},{
    imgSrc: "./assets/PAGE3/Thumbnail_240320_545.jpg",
    paraText: "CALVIN KLEIN ",
    emText: "RETAIL CONCEPT DESIGN",
},{
    imgSrc: "./assets/PAGE3/Thumbnail.jpg",
    paraText: "THE FROST HOUSE ",
    emText: "IDENTITY",
},{
    imgSrc: "./assets/PAGE3/WØRKS_BetweenPlaces_Cover.jpg",
    paraText: "BETWEEN PLACES ",
    emText: "VISUAL IDENTITY",
},{
    imgSrc: "./assets/PAGE3/WØRKS_DeCaraAlSol.jpg",
    paraText: "DE CARA AL SOL ",
    emText: "BOOK DESIGN",
},{
    imgSrc: "./assets/PAGE3/WorksCoD_Shoes-sRGB-02.jpg",
    paraText: "CDL",
    emText: "CHAMPIONSHIP KIT 2020 ",
},{
    imgSrc: "./assets/PAGE3/xi-1.5_.jpg",
    paraText: "THE XI ",
    emText: "BRAND DESIGN",
},];




for(let i=0; i<12; i++){
    
    let div1 = document.createElement("div");
    div1.classList.add("image-div");

    let div2 = document.createElement("div");
    div2.classList.add("overlay");

    let para = document.createElement("p");
    para.textContent = col1Array[i].paraText;
    let emphasis = document.createElement('em');
    emphasis.textContent = col1Array[i].emText;
    para.appendChild(emphasis);

    div2.appendChild(para);


    let img = document.createElement("img");
    img.src = col1Array[i].imgSrc;

    div1.appendChild(div2);
    div1.appendChild(img);

    col1.appendChild(div1);
}



for(let i=0; i<12; i++){
    let div1 = document.createElement("div");
    div1.classList.add("image-div");

    let div2 = document.createElement("div");
    div2.classList.add("overlay");

    let para = document.createElement("p");
    para.textContent = col2Array[i].paraText;
    let emphasis = document.createElement('em');
    emphasis.textContent = col2Array[i].emText;
    para.appendChild(emphasis);

    div2.appendChild(para);


    let img = document.createElement("img");
    img.src = col2Array[i].imgSrc;

    div1.appendChild(div2);
    div1.appendChild(img);

    col2.appendChild(div1);
    console.log(div1)
}


for(let i=0; i<12; i++){
    let div1 = document.createElement("div");
    div1.classList.add("image-div");

    let div2 = document.createElement("div");
    div2.classList.add("overlay");

    let para = document.createElement("p");
    para.textContent = col3Array[i].paraText;
    let emphasis = document.createElement('em');
    emphasis.textContent = col3Array[i].emText;
    para.appendChild(emphasis);

    div2.appendChild(para);


    let img = document.createElement("img");
    img.src = col3Array[i].imgSrc;

    div1.appendChild(div2);
    div1.appendChild(img);

    col3.appendChild(div1);
    console.log(div1)

}





// let div1 = document.createElement("div");
// div1.classList.add("image-div");

// let div2 = document.createElement("div");
// div2.classList.add("overlay");

// let para = document.createElement("p");
// para.textContent = col1Array[0].paraText;
// let emphasis = document.createElement('em');
// emphasis.textContent = col1Array[0].emText;
// para.appendChild(emphasis);

// div2.appendChild(para);


// let img = document.createElement("img");
// img.src = col1Array[0].imgSrc;

// div1.appendChild(div2);
// div1.appendChild(img);

// console.log(div1)