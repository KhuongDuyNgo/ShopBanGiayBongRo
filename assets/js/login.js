const signIn = document.querySelectorAll('.js-sign-in')
const modal = document.querySelector('.js-login')
const modalClose = document.querySelector('.login-form')

function showSignInModal() {
    modal.classList.add('open')
}

function closeSignInModal() {
    modal.classList.remove('open')
}

// Lắng nghe click
signIn.addEventListener('click', showSignInModal)
signIn.addEventListener('click', closeSignInModal)
modal.addEventListener('click', closeSignInModal)
