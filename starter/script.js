'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( (btn) => {
  btn.addEventListener('click', openModal)
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div')
message.classList.add('cookie-message')

const header = document.querySelector('header')

message.innerHTML = '<p>We use cookied for improved functionality and analytics.</p><button class="btn btn--close-cookie">Got it!</button>'

header.append(message)

message.addEventListener('click', () => {
  message.remove()
})

message.style.backgroundColor = "#37383d"
message.style.width = "120%"

message.style.height = 
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'

const h1 = document.querySelector('h1')

const alertH1 = (e) => {
  // console.log(e.target);
  alert('addEventListener')
}

h1.addEventListener('mouseenter', alertH1)
setTimeout( () => h1.removeEventListener('mouseenter',alertH1), 3000)

const randomInt = (min,max) => Math.floor(Math.random() * (max -min +1) + min);
const randomColor = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
// console.log(randomColor);

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab') // btn
const tabsContainer = document.querySelector('.operations__tab-container') //btn container
const tabsContent = document.querySelectorAll('.operations__content') // content container

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    removeTabs()
    tab.classList.add('operations__tab--active') 

    removetabsContent()
    document.querySelector(`.operations__content--${tab.getAttribute("data-tab")}`).classList.add('operations__content--active')
  })
})

function removeTabs() {
  tabs.forEach( (tab) => {
    tab.classList.remove('operations__tab--active')
  })
}

function removetabsContent() {
  tabsContent.forEach( (tabC) => {
    tabC.classList.remove('operations__content--active')
  })
}

// Reveal sections
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer) {
  const [entry] = entries
  // console.log(entry)

  if(!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  // observer.unoberserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})
allSections.forEach( (section) => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

// Lazy img load
const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = (entries, observer) => {
  const[entry] = entries
  console.log(entry);

  if(!entry.isIntersecting) return
  // Replace src with data-src
  // entry.target == img
  entry.target.src = entry.target.dataset.src
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img')
  })
  observer.unoberserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, 
  {
    root: null,
    threshold: 0,
    // rootMargin: '200px' 200px antes ja vai ter acontecido
  })

imgTargets.forEach( (img) => {
  imgObserver.observe(img)
})

// Slider
/* const sliderContainer = document.querySelector('.slider')
sliderContainer.style.transform = 'scale(0.4) translateX(-800px)'
sliderContainer.style.overflow = 'visible' */

const slides = document.querySelectorAll('.slide')


const btnRight = document.querySelector('.slider__btn--right')
const btnLeft = document.querySelector('.slider__btn--left')

const dotsContainer = document.querySelector('.dots')

function createDots() {
  slides.forEach( (_, idx) => {
    dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${idx}"></button>`)
  })
}

function activateDot(slide) {
  document.querySelectorAll('.dots__dot').
    forEach( (dot) => {
    dot.classList.remove('dots__dot--active')
  })
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}

let currentSlide = 0
const maxSlide = slides.length

function goToSlide(currentSlide) {
  slides.forEach( (slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`
  })
}

function nextSlide() {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  goToSlide(currentSlide)
  activateDot(currentSlide)
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1
  } else {
    currentSlide--
  }
  goToSlide(currentSlide)
  activateDot(currentSlide)
}

createDots()
activateDot(0)
goToSlide(0)

// Next slide
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowRight':
      nextSlide()
      break;
    case 'ArrowLeft':
      prevSlide()
      break;
    default:
      break;
  }
  e.key
})

dotsContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide
    goToSlide(slide)
    activateDot(currentSlide)
  }
})

// var declarations
// functions - eventListener
// init function - initialize all