const fullName = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector("#contactForm");
const button = document.querySelector("button");
// const message = document.querySelector("#message");

const fullNameError = document.querySelector("#fullNameError");
const phoneError = document.querySelector("#phoneError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

const messageSuccess = document.querySelector("#messageSuccess");

button.onclick = function () {
  if (checkLength(fullName.value, 1) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (checkLength(phone.value, 6) === true) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "block";
  }
  if (
    checkEmail(email.value) === true &&
    checkLength(email.value, 1) === true
  ) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(message.value, 10) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (
    checkLength(fullName.value, 1) &&
    checkLength(phone.value, 6) &&
    checkEmail(email.value) &&
    checkLength(message.value, 10)
  ) {
    form.reset();
    form.style.display = "none";
    messageSuccess.style.display = "block";
  }
  event.preventDefault();
};

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const emailCheck = regEx.test(email);
  return emailCheck;
}
