// Navbar
const btnHamburger = document.querySelector('#btnHamburger')
const menu = document.querySelector('.nav__menu')

btnHamburger.addEventListener('click', (e) => {
    e.preventDefault()
    btnHamburger.classList.toggle('open-btn')
    menu.classList.toggle('open-menu')
})

// Scroll animation
const services = document.querySelectorAll('.service')
const servicesWrapper = document.querySelectorAll('.service-wrapper')
const servicesImg = document.querySelectorAll('.service__img')
const cards = document.querySelectorAll('.card')
const gallery = document.querySelector('.gallery')
const footer = document.querySelector('.footer')

const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return
        entry.target.classList.remove('appear')
        observer.unobserve(entry.target)
        console.log(entry.target)
    })},
    {
        root: null,
        threshold: .01,
    }
)

observer.observe(gallery)
cards.forEach( c => {
    observer.observe(c)
})
services.forEach( s => {
    observer.observe(s)
})
servicesImg.forEach( si => {
    observer.observe(si)
})
servicesWrapper.forEach( sw => {
    observer.observe(sw)
})
observer.observe(footer)