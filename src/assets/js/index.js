import '../styles/style.scss';
import { gsap } from "gsap";

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
.from('.main_description', {
  xPercent: -110,
  duration: 1,
})
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
});


const button = document.querySelector('.button');

button.addEventListener('click', function() {
  window.open('#'); 
  gsap.to('.button', {
    backgroundColor: '#dcdcdc',
    duration: 0.5,
    onComplete: function() {
      gsap.to('.button', {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        duration: 0.5
      });
    }
  });
});


const textBlock = document.querySelector('.text-block');
const counterElement = document.getElementById('counter');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentTextIndex = 0;
const texts = [
  'The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all. Read more...',
  'Text 2',
  'Text 3',
  'Text 4',
  'Text 5'
];

prevButton.addEventListener('click', function() {
  currentTextIndex = (currentTextIndex - 1 + texts.length) % texts.length;
  textBlock.textContent = texts[currentTextIndex];
  counterElement.textContent = `${currentTextIndex + 1}/${texts.length}`;
});

nextButton.addEventListener('click', function() {
  currentTextIndex = (currentTextIndex + 1) % texts.length;
  textBlock.textContent = texts[currentTextIndex];
  counterElement.textContent = `${currentTextIndex + 1}/${texts.length}`;
});