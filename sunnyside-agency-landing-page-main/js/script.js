// Navbar
const btnHamburger = document.querySelector('#btnHamburger')
const menu = document.querySelector('.nav__menu')

btnHamburger.addEventListener('click', (e) => {
    e.preventDefault()
    btnHamburger.classList.toggle('open-btn')
    menu.classList.toggle('open-menu')
})