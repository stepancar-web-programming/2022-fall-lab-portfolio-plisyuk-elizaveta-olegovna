let dots = document.getElementsByClassName('dots-item')
let dotsArea = document.getElementsByClassName('dots-block')[0]
let slides = document.getElementsByClassName('slides-items')
let prevB = document.getElementById('left-button')
let nextB = document.getElementById('right-button')
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function curSlide(n) {
    showSlides(slideIndex = n);
}

prevB.onclick = function () {
    plusSlides(-1);
}

nextB.onclick = function () {
    plusSlides(1);
}

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
            curSlide(i);
        }
    }
}










