const formBtn = document.querySelector('.form__submit')
const formInput = document.querySelector('.form__input')
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputEmail = document.querySelector('.form__input').value
    const inputValid = validateEmail(inputEmail)
    
    if (!inputEmail) {
        formInput.style.border = '3px solid orange'
    }
    else if (!inputValid) {
        console.log('invalid input');
        formInput.style.border = '3px solid red'
    } else {
        console.log('sending data to api');
    }

})

function validateEmail(email) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return regex.test(email)
}

// megumidavid@gmail.com