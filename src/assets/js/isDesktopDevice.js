'use strict';

function isMobileDevice() {
  return window.innerWidth < 768;
};

export function isDesktopDevice() {
  return !isMobileDevice();
};