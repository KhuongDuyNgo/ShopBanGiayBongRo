const signUp = document.querySelectorAll('.js-sign-up')
const modal1 = document.querySelector('.signup-form')
const modal2 = document.querySelector('.signup-form')

function showSignUp() {
    modal1.classList.add('open')
}

function closeSignUp() {
    modal1.classList.remove('open')
}

signUp.addEventListener('click', showSignUp)
signUp.addEventListener('click', closeSignUp)
