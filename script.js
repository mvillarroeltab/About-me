
// This function would show the carousel automatically after 10 seconds have passed in the web for the user. Chose not to use since it might 
// have usability problems.

// setTimeout(showCarousel, 10000);

// The function 'showCarousel' gets the grid element and replace the class for one with 'display:none'; at the same time gets the carousel element and replaces the class 
// which makes it non visible to a visible one. Then I use the 'scrollIntoView' method to take the user to the section.

function showCarousel(){
    var imGrid = document.getElementById("top");
    imGrid.classList.replace("top", "top-hide");
    var carousel = document.getElementById("image-carousel");
    carousel.classList.replace("carousel-no-show", "carousel-show");
    carousel.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}



let slideIndex = 1;
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


showSlides(slideIndex);


function updateCurrentSlide(n){
    slideIndex = n;
    showSlides(slideIndex);
};

// set interval for slides to move

// Next/previous controls

function plusSlides(n) {
    showSlides(slideIndex += n);
}

setInterval(function() {
    plusSlides(1)
  }, 2000);

let feature = document.getElementById("feature");
feature.addEventListener("click", showCarousel);



const infoMarina = {


}

