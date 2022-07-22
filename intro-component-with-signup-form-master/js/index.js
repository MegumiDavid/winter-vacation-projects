const btn = document.querySelector('.btn--submit')
const fName = document.querySelector('#fName')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    validationFname()
    validationLname()
    validationEmail()
    validationPwd()
})

function valitadeInput(input, icon, message) {
    input.style.borderColor = 'hsl(154, 59%, 51%)'
    if (icon.classList.contains('fa-circle-exclamation')) {
        icon.classList.remove('fa-circle-exclamation')
    }
    icon.classList.add('fa-circle-check')
    icon.style.color = 'hsl(154, 59%, 51%)'
    message.innerHTML = ''
    message.style.marginBottom = '0px'
}

function notValidateInput(input, icon, message, messageText) {
    input.style.borderColor = 'hsl(0, 100%, 74%)'
    message.innerHTML = messageText
    message.style.marginBottom = '1rem'
    icon.classList.add('fa-circle-exclamation')
}

function validationFname() {
    const input = document.querySelector('#fName')
    const message = document.querySelector('#fNameMsg')
    const icon = document.querySelector('#fNameIcon')
    const messageText = 'Input required'

    if (!input.value) {
        notValidateInput(input, icon, message, messageText)
    } else {
        valitadeInput(input, icon, message)
    }
}

function validationLname() {
    const input = document.querySelector('#lName')
    const message = document.querySelector('#lNameMsg')
    const icon = document.querySelector('#lNameIcon')
    const messageText = 'Input required'

    if (!input.value) {
        notValidateInput(input, icon, message, messageText)
    } else {
        valitadeInput(input, icon, message)
    }
}

function validationEmail() {
    const input = document.querySelector('#email')
    const message = document.querySelector('#emailMsg')
    const icon = document.querySelector('#emailIcon')

    if (!input.value) {
        notValidateInput(input, icon, message, 'Input required')
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) 
        valitadeInput(input, icon, message)
        else notValidateInput(input, icon, message, 'Not valide email')       
    }
}

function validationPwd() {
    const input = document.querySelector('#password')
    const message = document.querySelector('#passwordMsg')
    const icon = document.querySelector('#passwordIcon')

    if (!input.value) {
        notValidateInput(input, icon, message, 'Input required')
    } else {
        if(input.value.length < 8) notValidateInput(input, icon, message, 'Your password should have at least 8 characters')
        else valitadeInput(input, icon, message)
    }
}


