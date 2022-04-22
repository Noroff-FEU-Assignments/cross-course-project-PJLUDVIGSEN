const button = document.querySelector(".atc");
const cartNotification = document.querySelector(".cart_notification");

button.addEventListener("click", addToCart);

const container = document.querySelector(".product1");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const key = "/?consumer_key=cs_78eadeedb58981dc929f1dfba750ea4962b0bc7b";

var options = {
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    "x-rapidapi-key": "b665035877msh195e70b6c9d4064p16ccc6jsn3c1189e52fee",
  },
};

const api = "https://ludvigsen.tech/wp-json/wc/store/products/" + id + key;

async function displayProduct() {
  const response = await fetch(api);
  const result = await response.json();
  container.innerHTML = "";
  console.log(result);
  container.innerHTML += `<img class="product product_specific" src="${result.images[0].src}" alt="Black Rainydays jacket">
                        <div class="product_price">
                          <h3>${result.name}<span class="price">${result.prices.price}$</span></h3>
                        </div>`;
}

displayProduct();

let count = 0;
function addToCart() {
  cartNotification.style.display = "block";
  count += 1;
  document.querySelector(".cart_amount").innerHTML = count;
  setTimeout(function () {
    cartNotification.style.display = "none";
  }, 3000);
}
