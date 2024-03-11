'use strict';

import { gsap } from 'gsap';
import { textsContent } from '../js/slider_content.js';
import '../styles/style.scss';

const textBlock = document.querySelector('.text-block');
const mainDescription = document.querySelector('.main_description');
const counterElement = document.getElementById('counter');
const textInTextBlock = document.getElementById('text-block');
const textsArr = textsContent;

export function updateTxtSlide(currentSliderIndex) {
  gsap.to(textBlock, {
    opacity: 0,
    duration: 0.3,

    onComplete: () => {
      const textContent = textsArr[currentSliderIndex];
      const linkContent = `<a href="https://www.samsung.com/ua/" class="text-block-link">Read More...</a>`;

      textInTextBlock.innerHTML = `${textContent} ${linkContent}`;
      gsap.to(textBlock, { opacity: 1, duration: 0.3 });
    },
  });

  counterElement.textContent = `${currentSliderIndex + 1}/${textsArr.length}`;

  if (currentSliderIndex === 3) {
    gsap.to(mainDescription, {
      yPercent: -20,
      duration: 0.3,
    });
  } else {
    gsap.to(mainDescription, {
      yPercent: 20,
      duration: 0.3,
    });
  }
};
