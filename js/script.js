'use strict';

// SLIDER ---- Select components
const slideImgBox = document.querySelectorAll('.slide__box--img');
const overlay = document.querySelector('.overlay');
const closeSlider = document.querySelector('.slider__btn--close');
const openSlider = document.querySelectorAll('.btn-open');
const cara_slider = document.querySelector('.popup_apt');
const sliderbtnLeft = document.querySelector('.slider__btn--1');
const sliderbtnRight = document.querySelector('.slider__btn--2');
const slide = document.querySelectorAll('.slide');
const dotsCont = document.querySelector('.dots-cont');

let curSlide = 0;
let maxSlide = slide.length - 1;
// Slider ---- Functions
const dotActive = function (slide) {
  document
    .querySelectorAll('.dots-b')
    .forEach(dot => dot.classList.remove('dots-b-active'));

  document
    .querySelector(`.dots-b[data-slide="${slide}"]`)
    .classList.add('dots-b-active');
};
const slider = function (cursl) {
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - cursl)}%)`)
  );
  dotActive(cursl);
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
  overlay.classList.remove('visible');
  slideImgBox.forEach(s => s.classList.remove('visible'));
};
const openCaraSlider = function () {
  cara_slider.classList.add('visible');
  overlay.classList.add('visible');
  slideImgBox.forEach(s => s.classList.add('visible'));
};
const createBtn = function () {
  slide.forEach(function (_, i) {
    dotsCont.insertAdjacentHTML(
      'beforeend',
      ` <button class="dots-b" data-slide="${i}"></button>`
    );
  });
};
createBtn();
slider(0);
//Slider ---- Event Listeners
sliderbtnLeft.addEventListener('click', prevSlide);
sliderbtnRight.addEventListener('click', nextSlide);
closeSlider.addEventListener('click', hideSlider);
overlay.addEventListener('click', hideSlider);
dotsCont.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots-b')) {
    const dotNum = e.target.dataset.slide;
    slider(dotNum);
  } else {
  }
});
for (let i = 0; i < openSlider.length; i++) {
  openSlider[i].addEventListener('click', openCaraSlider);
}
//
//
//
//STICKY NAV
//
//
//
//....Select Elements
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
//....Functions
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('nav__sticky');
  } else {
    nav.classList.remove('nav__sticky');
  }
};
//....Observer
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-100px`,
});
headerObserver.observe(header);
//
//
//
//SMOOTH SCROLL
//
//
//
document.querySelector('.nav__ul').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    let id = e.target.getAttribute('href');
    let sid = document.querySelector(id);
    let idcord = sid.getBoundingClientRect();
    // revealSection();
    window.scrollTo({
      left: idcord.left + window.pageXOffset,
      top: idcord.top + window.pageYOffset,
      behavior: 'smooth',
    });
  }
});
//
//
//
//REVEAL SECTION
//
//
//
const allSection = document.querySelectorAll('.section');
const revealSection = function (entries, SecObserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('sec-hidden');
  SecObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('sec-hidden');
});
///
