const button = document.querySelector(".atc");
const cartNotification = document.querySelector(".cart_notification");

button.addEventListener("click", addToCart);

let count = 0;
function addToCart() {
  cartNotification.style.display = "block";
  count += 1;
  document.querySelector(".cart_amount").innerHTML = count;
  setTimeout(function () {
    cartNotification.style.display = "none";
  }, 3000);
}
