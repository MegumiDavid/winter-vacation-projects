// form validation
const btn = document.querySelector('.form__btn')
const email = document.querySelector('.form__input')
const message = document.querySelector('.message')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    validationEmail(email, message)
})

function validationEmail(input, message) {
    const inputValue = input.value
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    if (!inputValue){
        message.innerHTML = 'Email required'
        message.style.color = 'red'
        input.style.border = '1.5px solid red'
    } else if ( !(regexEmail.test(inputValue)) ) {
        message.innerHTML = 'Not validate email'
        message.style.color = 'red'
        input.style.border = '1.5px solid red'
    } else {
        message.innerHTML = 'Success'
        message.style.color = 'green'
        input.style.border = '1.5px solid green'
    }
}

// onScroll animation
const boxes = document.querySelectorAll('.box')
const features = document.querySelectorAll('.wrapper')
const cta = document.querySelector('.cta')
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
        threshold: .2,
    }
)


boxes.forEach( box => {
    observer.observe(box)
})
features.forEach( feature => {
    observer.observe(feature)
})

observer.observe(cta)
observer.observe(footer)

