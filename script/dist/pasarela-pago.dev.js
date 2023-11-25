"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var urlParams = new URLSearchParams(window.location.search);
  var cartData = urlParams.get('cart');

  if (cartData) {
    var cart = JSON.parse(decodeURIComponent(cartData));
    renderCartSummary(cart);
  }
});

function renderCartSummary(cart) {
  var cartSummaryContainer = document.getElementById('cart-summary');
  var totalAmount = cart.reduce(function (total, product) {
    return total + product.price;
  }, 0);
  cart.forEach(function (product) {
    var productItem = document.createElement('div');
    productItem.textContent = "".concat(product.name, " - $").concat(product.price);
    cartSummaryContainer.appendChild(productItem);
  });
  var totalAmountElement = document.createElement('div');
  totalAmountElement.textContent = "Total: $".concat(totalAmount);
  totalAmountElement.classList.add('total-cart');
  cartSummaryContainer.appendChild(totalAmountElement);
}

var backButton = document.getElementById('back-button');
backButton.addEventListener('click', function () {
  history.back();
});