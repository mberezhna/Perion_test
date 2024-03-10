'use strict';

import { gsap } from 'gsap';
import '../styles/style.scss';

export function scaleNavigateButtons(navButton) {
  gsap.to(navButton, {
    scale: 0.8,
    duration: 0.3,
    onComplete: function () {
      gsap.to(navButton, {
        scale: 1,
        duration: 0.3,
      });
    },
  });
};
