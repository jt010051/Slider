const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const uoButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-buttonr')
const slidesLength = slideRight.querySelectorAll('div').length



let activeSlideIndex =0


slideLeft.style.top =`-${(slidesLength-1)*100}vh`