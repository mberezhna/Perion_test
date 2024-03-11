'use strict';

import { gsap } from 'gsap';
import { sliderContent } from '../js/slider_content.js';
import '../styles/style.scss';

const slider = document.querySelector('.slider-background');
const imgArr = sliderContent;

let isSlideVisible = true;

export function updateImgSlide(currentSliderIndex) {
  const firstFrame = document.querySelector('.slider-background.first');
  const secondFrame = document.querySelector('.slider-background.next');

  const opacityFirstFrame = isSlideVisible ? 0 : 1;
  const opacitySecondFrame = isSlideVisible ? 1 : 0;

  if (getComputedStyle(firstFrame).opacity === '0') {
    slider.style.backgroundImage = `url(${imgArr[currentSliderIndex]})`;
  }

  if (getComputedStyle(secondFrame).opacity === '0') {
    secondFrame.style.backgroundImage = `url(${imgArr[currentSliderIndex]})`;
  }

  gsap.to(firstFrame, {
    opacity: opacityFirstFrame,
    backgroundPositionY: '90%',
    duration: 0.5,
  });

  gsap.to(secondFrame, {
    opacity: opacitySecondFrame,
    backgroundPositionY: '90%',
    duration: 0.5,
  });

  isSlideVisible = !isSlideVisible;
};
