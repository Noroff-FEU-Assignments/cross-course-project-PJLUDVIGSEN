const container = document.querySelector(".products");

const key = "?consumer_key=cs_78eadeedb58981dc929f1dfba750ea4962b0bc7b";

const api = "https://ludvigsen.tech/wp-json/wc/store/products/" + key;

async function fetchProduct() {
  const response = await fetch(api);
  const json = await response.json();
  const products = json;
  console.log(products);
  for (let i = 0; i <= products.length; i++) {
    container.innerHTML += `<div class="product1 prod_hover">
                              <a class="test1" href="product.html?id=${products[i].id}">
                                <img id="blackJacket" class="product shop_product" src="${products[i].images[0].src}" alt="Black Rainydays jacket">
                                <div class="product_price">
                                <h3>${products[i].name}<span class="price">${products[i].prices.price}$</span></h3>
                                </div>
                              </a>
                            </div>`;
  }
}

fetchProduct();
