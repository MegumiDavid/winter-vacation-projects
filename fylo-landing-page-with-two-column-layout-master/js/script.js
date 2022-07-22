const btnBurger = document.querySelector("#btnBurger")
const nav = document.querySelector(".nav")
const mobileMenu = document.querySelector(".mobile-menu")

btnBurger.addEventListener('click', () => {
    nav.classList.toggle('toggle')
    mobileMenu.classList.toggle('toggle-menu')
})