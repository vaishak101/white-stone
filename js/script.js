'use strict';

//SLIDER
const closeSlider = document.querySelector('.slider__btn--close');
const openSlider = document.querySelectorAll('.btn-open');
const cara_slider = document.querySelector('.popup_apt');
const sliderbtnLeft = document.querySelector('.slider__btn--1');
const sliderbtnRight = document.querySelector('.slider__btn--2');
const slide = document.querySelectorAll('.slide');
let curSlide = 0;
let maxSlide = slide.length - 1;

const slider = function (cursl) {
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - cursl)}%)`)
  );
};
const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slider(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slider(curSlide);
};
const hideSlider = function () {
  cara_slider.classList.remove('visible');
};
const openCaraSlider = function () {
  cara_slider.classList.add('visible');
};
slider(0);

sliderbtnLeft.addEventListener('click', prevSlide);
sliderbtnRight.addEventListener('click', nextSlide);
closeSlider.addEventListener('click', hideSlider);
for (let i = 0; i < openSlider.length; i++) {
  openSlider[i].addEventListener('click', openCaraSlider);
}
//sticky navigation
const nav = document.querySelector('.nav');

const header = document.querySelector('.header');
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('nav__sticky');
  } else {
    nav.classList.remove('nav__sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-100px`,
});
headerObserver.observe(header);
//
//
//smooth scroll
document.querySelector('.nav__ul').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    let id = e.target.getAttribute('href');
    let sid = document.querySelector(id);
    let idcord = sid.getBoundingClientRect();
    window.scrollTo({
      left: idcord.left + window.pageXOffset,
      top: idcord.top + window.pageYOffset,
      behavior: 'smooth',
    });
  }
});
