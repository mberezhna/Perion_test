import '../styles/style.scss';
import { gsap } from "gsap";
import { texts_content, slider_content} from './slider_content.js';

const tl = gsap.timeline();

tl.fromTo('.logo_samsung',
  {
    x: -200,
    y: 20,
  },
  {
    x: 0,
    y: 20,
    duration: 1,
  }
)
  .from('.second_part', {
    xPercent: -110,
    duration: 1,
  }, "<")
  .to('.logo_samsung', {
    y: 0,
    duration: 1,
  })
  .from('.main_description-1line', {
    xPercent: -110,
    duration: 1,
     delay: 0.2,
  }, "<")
  .from('.main_description-2line', {
    xPercent: -110,
    duration: 1,
    delay: 0.2,
  }, "<")
  .from('.main_description-3line', {
    xPercent: -110,
    duration: 1,
    delay: 0.4,
  }, "<")
  .to('.left_fon', {
    width: '50%',
    duration: 1,
  })
  .to('.slider', {
    width: '50%',
    backgroundPosition: '60% 30%',
    right: 0,
    duration: 1,
  }, "<")
  .to('.second_part', {
    opacity: 0,
    duration: 0.2,
  })
  .to('.main_description', {
    y: 30,
    duration: 0.3,
  })
  .to('.button', {
    opacity: 1,
    duration: 0.4,
  })
  .to('.small_massage-slide', {
    opacity: 1,
    duration: 0.4,
  })
  .to('.text_slider-container', {
    opacity: 1,
    duration: 0.4,
  }, "<");


const button = document.querySelector('.button');

button.addEventListener('click', function () {
  window.open('#');
  gsap.to('.button', {
    backgroundColor: '#dcdcdc',
    duration: 0.5,
    onComplete: function () {
      gsap.to('.button', {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        duration: 0.5
      });
    }
  });
});


const textBlock = document.querySelector('.text-block');
const counterElement = document.getElementById('counter');
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const textsArr = texts_content;
const imgArr = slider_content;

let currentSliderIndex = 0;
let autoSlideInterval;

function updateTxtSlide() {
  gsap.to(textBlock, { opacity: 0, duration: 0.3, onComplete: () => {
    textBlock.textContent = textsArr[currentSliderIndex];
    gsap.to(textBlock, { opacity: 1, duration: 0.8 });
  }});
    
  counterElement.textContent = `${currentSliderIndex + 1}/${textsArr.length}`;
}

let isSlideVisible = true;

function updateImgSlide() {
  const firstFrame = document.querySelector('.slider.first');
  const secondFrame = document.querySelector('.slider.next');
  
  const opacityFirstFrame = isSlideVisible ? 0 : 1;
  const opacitySecondFrame = isSlideVisible ? 1 : 0;

  if (getComputedStyle(firstFrame).opacity === '0') {
    slider.style.backgroundImage = `url(${imgArr[currentSliderIndex]})`;
  };

  if (getComputedStyle(secondFrame).opacity === '0') {
    secondFrame.style.backgroundImage = `url(${imgArr[currentSliderIndex]})`;
  };

  gsap.to(firstFrame, {
    opacity: opacityFirstFrame,
    duration: 0.5,
  });

  gsap.to(secondFrame, {
    opacity: opacitySecondFrame,
    duration: 0.5,
  });

  isSlideVisible = !isSlideVisible;
}


function changeSlide(movSide) {
  if (currentSliderIndex + movSide > imgArr.length - 1) {
    currentSliderIndex = 0;
  } else if (currentSliderIndex + movSide < 0) {
    currentSliderIndex = imgArr.length - 1;
  } else {
    currentSliderIndex = (currentSliderIndex + movSide);
  };

  updateTxtSlide();
  updateImgSlide();
}


prevButton.addEventListener('click', () => {
  changeSlide(-1);
  clearInterval(autoSlideInterval);
});

nextButton.addEventListener('click', () => {
  changeSlide(1);
  clearInterval(autoSlideInterval);
});

function autoChangeSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(1);
  }, 4000);
}

slider.addEventListener('mousedown', () => {
  clearInterval(autoSlideInterval);
});

slider.addEventListener('touchstart', () => {
  clearInterval(autoSlideInterval);
});

slider.addEventListener('mouseup', () => {
  clearInterval(autoSlideInterval);
  autoChangeSlide();
});

slider.addEventListener('touchend', () => {
  clearInterval(autoSlideInterval);
  autoChangeSlide();
});

setTimeout(autoChangeSlide, 6000);

