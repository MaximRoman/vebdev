let slideIndex = 0;

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    if (n >= slides.length - 3) {
        slideIndex = 0;
        n = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 4;
        n = slides.length - 3
    }
    let offset = -slideIndex * 100 / 4;
    document.querySelector('.slide-container').style.transform = `translateX(${offset}%)`;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Initialize the first slide
showSlides(slideIndex);
