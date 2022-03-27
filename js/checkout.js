const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const postalCode = document.querySelector("#postalCode");
const address = document.querySelector("#address");
const country = document.querySelector("#country");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const form = document.querySelector("#checkoutForm");

const button = document.querySelector(".cta_checkout");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const postalCodeError = document.querySelector("#postalCodeError");
const addressError = document.querySelector("#addressError");
const countryError = document.querySelector("#countryError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");

button.onclick = function () {
  if (checkLength(firstName.value, 1) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
  if (checkLength(lastName.value, 1) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }
  if (checkLength(postalCode.value, 2) === true) {
    postalCodeError.style.display = "none";
  } else {
    postalCodeError.style.display = "block";
  }
  if (checkLength(address.value, 4) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (checkLength(country.value, 1) === true) {
    country.style.display = "none";
  } else {
    country.style.display = "block";
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
  if (
    checkLength(firstName.value, 1) &&
    checkLength(lastName.value, 1) &&
    checkLength(postalCode.value, 2) &&
    checkLength(address.value, 4) &&
    checkLength(country.value, 2) &&
    checkLength(phone.value, 6) &&
    checkEmail(email.value)
  ) {
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
