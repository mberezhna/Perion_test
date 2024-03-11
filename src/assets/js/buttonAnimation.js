'use strict';

import { gsap } from 'gsap';
import '../styles/style.scss';

const shopButton = document.querySelector('#shopButton');
let intervalID;


function changeButtonSize() {
  gsap.to(shopButton, {
    scale: 1.1,
    duration: 1,
    onComplete: function () {
      gsap.to(shopButton, {
        scale: 1,
        duration: 1,
      });
    },
  });
}

export function startButtonAnimation(action) {
  if (action === true) {
    intervalID = setInterval(changeButtonSize, 2000);
  } else {
    clearInterval(intervalID);
  }
}