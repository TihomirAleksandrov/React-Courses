import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let product = document.querySelector('.product');
  let price = document.querySelectorAll('p')[1].textContent;

  product.setAttribute('data-price', price)
});
