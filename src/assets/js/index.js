'use strict';

import { gsap } from 'gsap';
import { sliderContent } from '../js/slider_content.js';
import { isDesktopDevice } from './isDesktopDevice.js';
import { updateTxtSlide } from './updateTxtSlide.js';
import { updateImgSlide } from './updateImgSlide.js';
import { startButtonAnimation } from './buttonAnimation.js';
import { scaleNavigateButtons } from './scaleNavigateButtons.js';

import '../styles/style.scss';

//Loading animation sequence at the first render
const tl = gsap.timeline();

tl.fromTo(
  '.brand-logo',
  {
    x: -200,
    y: 20,
  },
  {
    x: 0,
    y: 20,
    duration: 1,
  })
  .from(
    '.additional-info',
    {
      xPercent: -110,
      duration: 1,
    },
    '<',
  )
  .to('.brand-logo', {
    y: 0,
    duration: 1,
  })
  .from('.main_description-1line', {
    xPercent: -200,
    duration: 1,
    delay: 0.2,
  })
  .from(
    '.main_description-2line',
    {
      xPercent: -200,
      duration: 1,
      delay: 0.2,
    },
    '<',
  )
  .from(
    '.main_description-3line',
    {
      xPercent: -200,
      duration: 1,
      delay: 0.4,
    },
    '<',
  )
  .call(() => {
    if (isDesktopDevice()) {
      gsap.to('.left-background', {
        width: '50%',
        duration: 1,
      });
      gsap.to('.slider-background', {
        width: '50%',
        backgroundPosition: '60% 30%',
        right: 0,
        duration: 1,
      });
    }
  })
  .to('.additional-info',{
    opacity: 0,
    duration: 0.2,
  })
  .to('.button', {
    opacity: 1,
    duration: 0.4,
  })
  .to('.small_massage-slide', {
    opacity: 1,
    duration: 0.4,
  })
  .to(
    '.slider-text',
    {
      opacity: 1,
      duration: 0.4,
    },
    '<',
  );

// Slider
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const imgArr = sliderContent;

let currentSliderIndex = 0;
let autoSlideInterval;

function changeSlide(movSide) {
  if (currentSliderIndex + movSide > imgArr.length - 1) {
    currentSliderIndex = 0;
  } else if (currentSliderIndex + movSide < 0) {
    currentSliderIndex = imgArr.length - 1;
  } else {
    currentSliderIndex = currentSliderIndex + movSide;
  };

  updateTxtSlide(currentSliderIndex);
  updateImgSlide(currentSliderIndex);
};

function startAutoSlider(action) {
  if (action) {
    autoSlideInterval = setInterval(() => {
      changeSlide(1);
    }, 4000);
  } else {
    clearInterval(autoSlideInterval);
  };
};

prevButton.addEventListener('click', () => {
  changeSlide(-1);
  scaleNavigateButtons(prevButton);
  startAutoSlider(false);
});

nextButton.addEventListener('click', () => {
  changeSlide(1);
  scaleNavigateButtons(nextButton);
  startAutoSlider(false);
});

setTimeout(() => startAutoSlider(true), 6000);

// Button animation
const shopButton = document.querySelector('#shopButton');

startButtonAnimation(true);

shopButton.addEventListener('mouseenter', () => {
  startButtonAnimation(false);
});

shopButton.addEventListener('mouseleave', () => {
  startButtonAnimation(true);
});

// Button open link
shopButton.addEventListener('click', function () {
  window.open('#');

  gsap.to(shopButton, {
    backgroundColor: '#dcdcdc',
    duration: 0.5,
    onComplete: function () {
      gsap.to(shopButton, {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        duration: 0.5,
      });
    },
  });
});
