document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cartData = urlParams.get('cart');

    if (cartData) {
        const cart = JSON.parse(decodeURIComponent(cartData));
        renderCartSummary(cart);
    }
});

function renderCartSummary(cart) {
    const cartSummaryContainer = document.getElementById('cart-summary');
    const totalAmount = cart.reduce((total, product) => total + product.price, 0);

    cart.forEach(product => {
        const productItem = document.createElement('div');
        productItem.textContent = `${product.name} - $${product.price}`;
        cartSummaryContainer.appendChild(productItem);
    });

    const totalAmountElement = document.createElement('div');
    totalAmountElement.textContent = `Total: $${totalAmount}`;
    totalAmountElement.classList.add('total-cart')
    cartSummaryContainer.appendChild(totalAmountElement);
}

const backButton = document.getElementById('back-button');

backButton.addEventListener('click', function() {
    history.back();
});

