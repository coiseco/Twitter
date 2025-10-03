import verifyEmail from './verifyEmail.js';

let pass;
let secPass;
let email;
let passState = false;
let emailState = false;

function handleInputChange(event) {
  if (event.target.value.length === 0) {
    event.target.classList.add('focus');
    event.target.labels[0].style.display = 'block';
  } else {
    event.target.classList.remove('focus');
    event.target.labels[0].style.display = 'none';
  }
  if (event.target.classList.contains('email')) {
    if (!verifyEmail(event.target.value) && event.target.value.length !== 0) {
      event.target.classList.add('focus');
      event.target.labels[0].style.display = 'none';
      event.target.labels[1].style.display = 'block';
    } else if (event.target.value.length !== 0) {
      email = event.target.value;
      emailState = true;
      event.target.classList.remove('focus');
      event.target.labels[1].style.display = 'none';
    }
  } else if (event.target.id === 'regPass') {
    if (event.target.value.length !== 0) {
      pass = event.target.value;
    }
  } else if (event.target.id === 'authPassword') {
    if (event.target.value.length !== 0) {
      pass = event.target.value;
      passState = true;
    } else {
      passState = false;
    }
  } else if (event.target.classList.contains('secPassword')) {
    secPass = event.target.value;
    if (pass !== secPass) {
      event.target.classList.add('focus');
      event.target.labels[1].style.display = 'block';
      passState = false;
    } else if (event.target.value.length !== 0) {
      passState = true;
      event.target.classList.remove('focus');
      event.target.labels[1].style.display = 'none';
    }
  }
}

function handleFormButtonClick(event) {
  event.preventDefault();
  if (passState && emailState) {
    console.log('email', email);
    console.log('password', pass);
    document.querySelector('.registration').style.display = 'none';
    document.querySelector('.authorization').style.display = 'none';
    document.querySelector('.blackout').style.display = 'none';
  } else {
    console.log('Данные введены не верно');
  }
}

const formInputsList = document.querySelectorAll('.form-input');
formInputsList.forEach((elem) => {
  elem.onclick = handleInputChange;
  elem.onchange = handleInputChange;
});

const formsButtonList = document.querySelectorAll('.form-button');
formsButtonList.forEach((elem) => {
  elem.onclick = handleFormButtonClick;
});

const blurLayout = document.querySelector('.blackout');
blurLayout.addEventListener('click', (event) => {
  document.querySelectorAll('.aside').forEach((el) => el.style.display = 'none');
  event.target.style.display = 'none';
});

const regButton = document.querySelectorAll('.sign-in-button');
regButton.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.registration').style.display = 'block';
    document.querySelector('.blackout').style.display = 'block';
  });
});

const authButton = document.querySelectorAll('.log-in-button');
authButton.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.authorization').style.display = 'block';
    document.querySelector('.blackout').style.display = 'block';
  });
});
