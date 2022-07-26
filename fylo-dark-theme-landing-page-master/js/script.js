const formBtn = document.querySelector('.form__submit')
const formInput = document.querySelector('.form__input')
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputEmail = document.querySelector('.form__input').value
    const inputValid = validateEmail(inputEmail)
    
    if (!inputEmail) {
        formInput.style.border = '1.5px solid red'
    }
    else if (!inputValid) {
        formInput.style.border = '1.5px solid red'
    } else {
        formInput.style.border = '2px solid green'
    }

})

function validateEmail(email) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return regex.test(email)
}

// megumidavid@gmail.com

// onScroll animation
// const header = document.querySelector('.header__content') 
const features = document.querySelectorAll('.feature') 
const productiveImg = document.querySelector('.productive__img') 
const productiveContent = document.querySelector('.productive__content') 
const stories = document.querySelectorAll('.story__box') 

const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return
        entry.target.classList.remove('appear')
        observer.unobserve(entry.target)
        console.log(entry.target)
    })},
    {
        root: null,
        threshold: .1,
    }
)

// observer.observe(header)
observer.observe(productiveImg)
observer.observe(productiveContent)
features.forEach( f => {
    observer.observe(f)
})
stories.forEach( s => {
    observer.observe(s)
})
