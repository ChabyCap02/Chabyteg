const products = [
    { id: 1, name: 'Mouse HP', price: 10000,imageURL: '/img/products/mousehp.jfif', description: 'Descripción detallada del Producto 1.'},
    { id: 2, name: 'Mouse Logitech', price: 10000,imageURL: '/img/products/mouselogitech.jpg' , description: 'Descripción detallada del Producto 2.'},
    { id: 3, name: 'Teclado HP', price: 20000,imageURL: '/img/products/tecladohp.jpg', description: 'Descripción detallada del Producto 3.' },
    { id: 4, name: 'Teclado Logitech', price: 20000,imageURL: '/img/products/tecladologi.png' , description: 'Descripción detallada del Producto 4.'},
    { id: 5, name: 'Teclado y Mouse hp', price: 30000,imageURL: '/img/products/mouseytecladohp.webp' , description: 'Mouse y teclado inalambricos marca hp buen material menos latencia transmicion de senal'},
    { id: 6, name: 'Mouse gamer Redragon', price: 45000,imageURL: '/img/products/mouseredragon.webp' , description: 'El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.'},
    { id: 7, name: 'Mouse gamer Logitech inalambrico', price: 65000,imageURL: '/img/products/logitechmousegamer.webp' , description: 'Solo debes colocar el receptor en un puerto USB de la computadora y ya puedes empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.'},

    // Servicios
    { id:11, name: 'Servicio Tecnico', price: 20000,imageURL: '/img/products/serviciotec.jfif', description: 'Descripción detallada del Producto 5.' },
    { id: 12, name: 'Servicio Domicilio', price: 5000,imageURL: '/img/products/domicilio.png' , description: 'Descripción detallada del Producto 5.'}

];







// Guardar el carrito en local store para poder manipularlo facilmente
function guardarEnLocalStorage(cart) {
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
};


let cart = JSON.parse(localStorage.getItem('cart')) || [];


function renderProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.imageURL}" alt="${product.name}" class="product-image">
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})" class="product-button">Agregar al carrito</button>
            <div class="product-description"><b>Nombre : ${product.name}.</b>\n${product.description}</div>
        `;
        productsDiv.appendChild(productDiv);
    });
    actualizarEstadoBoton()
    renderCart()
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
    updateCartTotal(); // Actualizar el total del carrito cuando se agrega un producto
    actualizarEstadoBoton()
    guardarEnLocalStorage(cart)
};



function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button class="remove-button" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
    updateCartTotal();
    
}

// Funcion para eliminar un producto del carrito
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1); // Elimina el producto del carrito
        renderCart(); // Vuelve a renderizar el carrito para actualizar la pantalla
    }
    actualizarEstadoBoton()
    guardarEnLocalStorage(cart)

}


function updateCartTotal() {
    const totalAmountDiv = document.getElementById('totalAmount');
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);
    totalAmountDiv.textContent = `Total: \n$${totalAmount}`;
    actualizarEstadoBoton()
}



window.onload = function () {
    renderProducts();
};


// Buscar elementos dentro de la pagina
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    renderFilteredProducts(filteredProducts);
}
// Filtrar los productos encontrados
function renderFilteredProducts(filteredProducts) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.imageURL}" alt="${product.name}" class="product-image">
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})" class="product-button">Agregar al carrito</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}
// Modal Carrito 
function openModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';
    renderCartModal();
};

// Open el modal
const openCartButton = document.getElementById('openCartButton');

openCartButton.addEventListener('click', function() {
    openModal();
    guardarEnLocalStorage(cart)
});


// Cierra el modal
function closeModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
}
// render modal 
function renderCartModal() {
    const cartListModal = document.getElementById('cartItemsModal');
    cartListModal.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button class="remove-button" onclick="removeFromCartModal(${item.id})">Eliminar</button>
        `;
        cartListModal.appendChild(cartItem);
    });

    

    updateCartTotalModal();
}

// Desabilitalr boton 
function actualizarEstadoBoton() {
    if (cart.length > 0) {
        checkoutButton.removeAttribute('disabled');
        checkoutButton.style.background = '#4CAF50'
    } else {
        checkoutButton.setAttribute('disabled', true);
        checkoutButton.style.background = '#ccc'
        

    }
}

// 
//     LOCAL STORE
// 
// Obtener el contenido actual del carrito
const cartModalContent = document.getElementById('cartItemsModal').innerHTML;
// Almacenar el contenido del carrito modal en localStorage
localStorage.setItem('cartModalContent', cartModalContent);
// 

// Recuperar el contenido del carrito modal desde localStorage
const storedCartModalContent = localStorage.getItem('cartModalContent');

// Verificar si hay contenido almacenado en localStorage
if (storedCartModalContent) {
    // Restaurar el contenido del carrito modal en el elemento #cartItemsModal
    document.getElementById('cartItemsModal').innerHTML = storedCartModalContent;
}


// Boton para pasar a la pasarela de pago
const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Pagar';
    checkoutButton.className = 'checkout-button';
    checkoutButton.style.background = '#ccc'
    // evento para que el boton obtenga los datos dentro del carrito

    checkoutButton.addEventListener('click', function() {
        const cartData = JSON.stringify(cart);
        window.location.href = `pasarela-pago.html?cart=${encodeURIComponent(cartData)}`;
        guardarEnLocalStorage(cart)

    });

    const modalContent = document.querySelector('.modal-content');
    modalContent.appendChild(checkoutButton);


// Funcion para remover desde el modal
function removeFromCartModal(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1); // Elimina el producto del carrito
        renderCartModal(); // Vuelve a renderizar el modal del carrito para actualizar la pantalla
    }
    actualizarEstadoBoton()
    renderCart()
}

function updateCartTotalModal() {
    const totalAmountDivModal = document.getElementById('totalAmountModal');
    const totalAmountModal = cart.reduce((total, item) => total + item.price, 0);
    totalAmountDivModal.textContent = `Total: $${totalAmountModal}`;
    actualizarEstadoBoton()
}