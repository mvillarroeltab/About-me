setTimeout(function showCarousel(){
    var imGrid = document.getElementById("top");
    imGrid.classList.replace("top", "top-hide");
    var carousel = document.getElementById("image-carousel");
    carousel.classList.replace("im-carousel", "carousel-show");
    carousel.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}, 3000);




