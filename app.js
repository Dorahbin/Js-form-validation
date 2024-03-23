'use strict';
// declaring variable
const form = document.querySelector('.form');
const img = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const btn = document.querySelector('.btn');
const inputPassword = document.querySelector('.input-password');
const confirmPassword = document.querySelector('.confirm-password');
const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const eyeOpen = './assets/visibile.svg';
const eyeClose = './assets/not-visible.svg';
const userError = document.querySelector('.username-error-message');
const emailError = document.querySelector('.email-error-message');
const passwordError = document.querySelector('.password-error-message');
const confirmPasswordError = document.querySelector(
  '.confirm-password-error-message'
);

// function to reveal password
// password
function revealPassword() {
  if (inputPassword.type === 'password') {
    inputPassword.setAttribute('type', 'text');
    img.setAttribute('src', eyeOpen);
  } else {
    inputPassword.setAttribute('type', 'password');
    img.setAttribute('src', eyeClose);
  }

  if (confirmPassword.type === 'password') {
    confirmPassword.setAttribute('type', 'text');
    img.setAttribute('src', eyeOpen);
  } else {
    confirmPassword.setAttribute('type', 'password');
    img.setAttribute('src', eyeClose);
  }
}
img.addEventListener('click', revealPassword);

//function for the form
function validateForm(e) {
  const emailCheck = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  e.preventDefault();
  if (!inputName.value) {
    userError.textContent = 'input a username!';
  } else {
    userError.textContent = '';
  }

  if (!inputEmail.value.match(emailCheck)) {
    emailError.textContent = 'input a valid email!';
  } else {
    emailError.textContent = '';
  }

  if (inputPassword.value.length <= 9) {
    passwordError.textContent = 'password must be 8 or more character!';
  } else {
    passwordError.textContent = '';
  }

  if (confirmPassword.value !== inputPassword.value) {
    confirmPasswordError.textContent = 'password is not match';
  } else {
    confirmPasswordError.textContent = '';
  }
}
btn.addEventListener('click', validateForm);
