
// setTimeout(showCarousel, 10000);

function showCarousel(){
    var imGrid = document.getElementById("top");
    imGrid.classList.replace("top", "top-hide");
    var carousel = document.getElementById("image-carousel");
    carousel.classList.replace("carousel-no-show", "carousel-show");
    carousel.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

// {
// // Determine a variable that gets all the slides in the webpage

// const slides = document.querySelectorAll(".carousel-slide");
// const interval = 2800;
// const slideDuration = 800;

// for (let i=0; i<slides.length; ++i){
//     const slides = slides[i];
//     const dots = slides.queryselector(".list-dot-container");
//     const slideImages = slides.querySelectorAll(".carousel-slide");

//     let currentImage = 0;
//     let previousImage = slideImages.length -1;
//     let time;
//     let timeout;

//     // Creates the dots inside the dot container and adds listeners to them
//     for (let i=0; i<slideImages.length, i++){
//         const dot = createElement("li");
//         dot.classList.add("dot");
//         dots.appendChild(dot);
//         dot.addEventListener("click", dotClick.bind(null, i), false);
//     }
//     const allDots = dots.querySelectorAll("dots");
// }

// }

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".carousel-slide");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

let feature = document.getElementById("feature");
feature.addEventListener("click", showCarousel);

