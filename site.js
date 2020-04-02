function onButtonClick(event) {
    const activeButton = document.querySelector('.slider.first .slider-dot.active');
    const clickedButton = event.target;
    activeButton.classList.remove('active');
    clickedButton.classList.add('active');

    const activeSlide = document.querySelector('.slider.first .slider-block.active');
    activeSlide.classList.remove('active');

    const slideDots = document.querySelectorAll('.slider.first .slider-dot');
    const slides = document.querySelectorAll('.slider.first .slider-block');

    for (let i = 0; i < slideDots.length; i++) {
        if (clickedButton === slideDots[i]) {
            slides[i].classList.add('active');
        }
    }
}

function onButtonClick2(event) {
    const activeButton = document.querySelector('.slider.second .slider-dot.active');
    const clickedButton = event.target;
    activeButton.classList.remove('active');
    clickedButton.classList.add('active');
    // activeButton = clickedButton;

    const slideDots = document.querySelectorAll('.slider.second .slider-dot');
    const carouselSlidesElem = document.querySelector('.slider.second .carusel-slides');

    for (let i = 0; i < slideDots.length; i++) {
        if (clickedButton === slideDots[i]) {
            carouselSlidesElem.style.transform = `translateX(-${i * 100}%)`;
        }
    }
}