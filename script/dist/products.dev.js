"use strict";

var products = JSON.parse(localStorage.getItem('products')) || [{
  id: 1,
  name: 'Mouse HP',
  price: 10000,
  imageURL: '../img/products/mousehp.jfif',
  description: 'Adaptado a tus movimientos Su diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click. La funcionalidad al alcance de tu mano El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.'
}, {
  id: 2,
  name: 'Mouse Logitech',
  price: 10000,
  imageURL: '../img/products/mouselogitech.jpg',
  description: 'Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.'
}, {
  id: 3,
  name: 'Teclado HP',
  price: 20000,
  imageURL: '../img/products/tecladohp.jpg',
  description: 'ste teclado HP es el mejor complemento para hacer todo tipo de actividades. Es cómodo y práctico al momento de redactar documentos, navegar y hacer búsquedas por internet, ya sea en tu trabajo o en la comodidad del hogar.'
}, {
  id: 4,
  name: 'Teclado Logitech',
  price: 20000,
  imageURL: '../img/products/tecladologi.png',
  description: 'Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo..'
}, {
  id: 5,
  name: 'Teclado y Mouse hp',
  price: 30000,
  imageURL: '../img/products/mouseytecladohp.webp',
  description: 'El combo de teclado y mouse HP es perfecto para ayudarte a desarrollar tus actividades diarias. Esta combinación está adaptada para realizar distintas tareas, ya sean laborales, escolares o de cualquier índole.'
}, {
  id: 6,
  name: 'Mouse gamer Redragon',
  price: 45000,
  imageURL: '../img/products/mouseredragon.webp',
  description: 'El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.'
}, {
  id: 7,
  name: 'Mouse gamer Logitech inalambrico',
  price: 65000,
  imageURL: '../img/products/logitechmousegamer.webp',
  description: 'Solo debes colocar el receptor en un puerto USB de la computadora y ya puedes empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.'
}, // Servicios
{
  id: 11,
  name: 'Servicio Tecnico',
  price: 20000,
  imageURL: '../img/products/serviciotec.jfif',
  description: 'Descripción detallada del Producto 5.'
}, {
  id: 12,
  name: 'Servicio Domicilio',
  price: 5000,
  imageURL: '../img/products/domicilio.png',
  description: 'Descripción detallada del Producto 5.'
}]; // Guardar el carrito en local store para poder manipularlo facilmente

function guardarEnLocalStorage(cart) {
  var cartJSON = JSON.stringify(cart);
  localStorage.setItem('cart', cartJSON);
}

;
var cart = JSON.parse(localStorage.getItem('cart')) || []; // Renderizar todos los productos

function renderProducts() {
  var productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  products.forEach(function (product) {
    var productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = "\n\n        <div class=\"card product".concat(product.id, "\" style=\"width: 18rem;\">\n        <img src=\"").concat(product.imageURL, "\" alt=\"").concat(product.name, "\"  class=\"card-img-top\" style=\"height:300px; object-fit: cover;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(product.name, "</h5>\n          <div class=\"price-wrap\"> <span class=\"price h5\">$").concat(product.price, "</span> <br> <small class=\"text-success\">Free shipping</small> </div>\n          \n        </div>\n\n        <div class=\"container \"> \n                    <button onclick=\"renderModal(").concat(product.id, ", '").concat(product.name, "', '").concat(product.description, "', '").concat(product.imageURL, "', '").concat(product.price, "')\" class=\"btn btn-primary float-right m-1\">Ver Detalles <i class=\"bi bi-eye\"></i></button>\n\n                    <button onclick=\"addToCart(").concat(product.id, ")\" class=\"btn btn-primary float-right m-1\">Agregar al carrito <i class=\"bi bi-bag-plus\"></i> </button>\n                    \n                    \n                    \n                </div>\n        \n      </div>");
    productsDiv.appendChild(productDiv);
  });
  actualizarEstadoBoton();
  renderCart();
} // Anadir producto dentro del carrio


function addToCart(productId) {
  var product = products.find(function (p) {
    return p.id === productId;
  });
  cart.push(product);
  renderCart();
  updateCartTotal(); // Actualizar el total del carrito cuando se agrega un producto

  actualizarEstadoBoton();
  guardarEnLocalStorage(cart);
}

; // Renderizar el carrito de compras

function renderCart() {
  var cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  cart.forEach(function (item) {
    var cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerHTML = "\n            <span>".concat(item.name, "</span>\n            <span>$").concat(item.price, "</span>\n            <button class=\"remove-button text-bg-dark\" onclick=\"removeFromCart(").concat(item.id, ")\">Eliminar</button>\n        ");
    cartDiv.appendChild(cartItemDiv);
  });
  updateCartTotal();
  renderCountElementCart();
} // Funcion para eliminar un producto del carrito


function removeFromCart(productId) {
  var index = cart.findIndex(function (item) {
    return item.id === productId;
  });

  if (index !== -1) {
    cart.splice(index, 1); // Elimina el producto del carrito

    renderCart(); // Vuelve a renderizar el carrito para actualizar la pantalla
  }

  actualizarEstadoBoton();
  guardarEnLocalStorage(cart);
}

function updateCartTotal() {
  var totalAmountDiv = document.getElementById('totalAmount');
  var totalAmount = cart.reduce(function (total, item) {
    return total + item.price;
  }, 0);
  totalAmountDiv.textContent = "Total: \n$".concat(totalAmount);
  actualizarEstadoBoton();
}

window.onload = function () {
  renderProducts();
}; // Modal Producto Detalles
// Modal Producto Detalles
// Modal Producto Detalles


function renderModal(id, name, description, imageURL, price) {
  // Selecciona el modal existente o crea uno dinámicamente
  var modal = document.getElementById('productModal') || createModal(); // Limpia el contenido actual del modal

  modal.querySelector('.modal-title').innerText = '';
  modal.querySelector('.modal-body').innerHTML = ''; // Actualiza el contenido del modal con la información del producto

  modal.querySelector('.modal-title').innerText = name;
  modal.querySelector('.modal-body').innerHTML = "\n        <img src=\"".concat(imageURL, "\" alt=\"").concat(name, "\" class=\"img-fluid mb-3\">\n        <p>").concat(description, "</p>\n        <p class='bg-success btn text-light'>Precio: $").concat(price, "</p>\n    "); // Agrega el botón "Agregar al Carrito"

  var addToCartButton = document.createElement('button');
  addToCartButton.textContent = 'Agregar al Carrito ';
  addToCartButton.classList.add('btn', 'btn-success', 'btn-add-to-cart', 'bg-success', 'text-light');
  addToCartButton.addEventListener('click', function () {
    return addToCart(id);
  }); // Muestra el modal

  $('#productModal').modal('show');
}

function createModal(id) {
  // Crea un nuevo modal y lo agrega al cuerpo del documento
  var modal = document.createElement('div');
  modal.innerHTML = "\n    <div class=\"modal fade\" id=\"productModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Producto Detalles</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" onclick=\"$('#productModal').modal('hide');\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body text-dark\">\n                <!-- Contenido del cuerpo del modal -->\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" onclick=\"$('#productModal').modal('hide');\">Cerrar</button>\n                <button onclick=\"addToCart(".concat(id, ")\" class=\"btn btn-primary float-right\">Agregar al carrito <i class=\"bi bi-bag-plus\"></i> </button>\n            </div>\n        </div>\n    </div>\n</div>\n"); // Agrega el modal al final del cuerpo del documento

  document.body.appendChild(modal); // Devuelve una referencia al modal

  return modal;
} // Modal Producto Detalles
// Modal Producto Detalles
// Modal Producto Detalles
// Modal Producto Detalles
// Modal Carrito 
// Modal Carrito 
// Modal Carrito 


function getCartItemCount() {
  // Puedes obtener la cantidad de elementos en el carrito desde tu array 'cart'
  return cart.length;
}

function openModal() {
  var cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'block';
  renderCartModal();
  renderCountElementCart();
}

;

function renderCountElementCart() {
  var cartItemCount = document.getElementById('cartItemCount');
  cartItemCount.textContent = getCartItemCount();
} // Open el modal


var openCartButton = document.getElementById('openCartButton');
openCartButton.addEventListener('click', function () {
  openModal();
  guardarEnLocalStorage(cart);
}); // Cierra el modal

function closeModal() {
  var cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'none';
} // render modal 


function renderCartModal() {
  var cartListModal = document.getElementById('cartItemsModal');
  cartListModal.innerHTML = '';
  cart.forEach(function (item) {
    var cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = "\n            <span>".concat(item.name, "</span>\n            <span>$").concat(item.price, "</span>\n            <button class=\"remove-button\" onclick=\"removeFromCartModal(").concat(item.id, ")\">Eliminar<i class=\"px-2 bi bi-trash\"></i></button>\n        ");
    cartListModal.appendChild(cartItem);
  });
  updateCartTotalModal();
} // Modal Carrito 
// Modal Carrito 
// Modal Carrito 
// Desabilitalr boton 


function actualizarEstadoBoton() {
  if (cart.length > 0) {
    checkoutButton.removeAttribute('disabled');
    checkoutButton.style.background = '#4CAF50';
  } else {
    checkoutButton.setAttribute('disabled', true);
    checkoutButton.style.background = '#ccc';
  }
} // 
//     LOCAL STORE
// 
// Obtener el contenido actual del carrito


var cartModalContent = document.getElementById('cartItemsModal').innerHTML; // Almacenar el contenido del carrito modal en localStorage

localStorage.setItem('cartModalContent', cartModalContent); // 
// Recuperar el contenido del carrito modal desde localStorage

var storedCartModalContent = localStorage.getItem('cartModalContent'); // Verificar si hay contenido almacenado en localStorage

if (storedCartModalContent) {
  // Restaurar el contenido del carrito modal en el elemento #cartItemsModal
  document.getElementById('cartItemsModal').innerHTML = storedCartModalContent;
} // Boton para pasar a la pasarela de pago


var checkoutButton = document.createElement('button');
checkoutButton.textContent = 'Pagar';
checkoutButton.className = 'checkout-button';
checkoutButton.style.background = '#ccc'; // evento para que el boton obtenga los datos dentro del carrito

checkoutButton.addEventListener('click', function () {
  var cartData = JSON.stringify(cart);
  window.location.href = "pasarela-pago.html?cart=".concat(encodeURIComponent(cartData));
  guardarEnLocalStorage(cart);
});
var modalContent = document.querySelector('.modal-content');
modalContent.appendChild(checkoutButton); // Funcion para remover desde el modal

function removeFromCartModal(productId) {
  var index = cart.findIndex(function (item) {
    return item.id === productId;
  });

  if (index !== -1) {
    cart.splice(index, 1); // Elimina el producto del carrito

    renderCartModal(); // Vuelve a renderizar el modal del carrito para actualizar la pantalla
  }

  actualizarEstadoBoton();
  renderCart();
}

function updateCartTotalModal() {
  var totalAmountDivModal = document.getElementById('totalAmountModal');
  var totalAmountModal = cart.reduce(function (total, item) {
    return total + item.price;
  }, 0);
  totalAmountDivModal.textContent = "Total: $".concat(totalAmountModal);
  actualizarEstadoBoton();
} // CARRITO
// Anadir productos al array Products
// Anadir productos al array Products
// Anadir productos al array Products


function toggleForm() {
  var form = document.getElementById('productForm');
  var button = document.getElementById('button-add-product');
  button.textContent = button.textContent === 'Cerrar Formulario' ? 'Abrir Formulario' : 'Cerrar Formulario';
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addProduct() {
  var name = document.getElementById('productName').value;
  var price = parseFloat(document.getElementById('productPrice').value);
  var imageInput = document.getElementById('productImage');
  var description = document.getElementById('productDescription').value;

  if (name && !isNaN(price) && imageInput.files.length > 0 && description) {
    var imageFile = imageInput.files[0];
    var imageURL = URL.createObjectURL(imageFile);
    var newProduct = {
      id: products.length + 1,
      name: name,
      price: price,
      imageURL: imageURL,
      description: description
    };
    products.push(newProduct);
    console.log("Nuevo producto agregado:", newProduct); // Aquí puedes realizar otras acciones, como actualizar la interfaz de usuario, etc.
    // Actualizar localStorage con la nueva lista de productos

    localStorage.setItem('products', JSON.stringify(products));
    renderProducts(); // Limpiar el formulario después de agregar el producto

    clearForm(); // Opcional: cerrar el formulario después de agregar el producto

    toggleForm();
  } else {
    alert("Por favor, complete todos los campos correctamente.");
  }

  clearForm();
}

function clearForm() {
  document.getElementById('productName').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productImage').value = ''; // Limpiar el campo de archivo

  document.getElementById('productDescription').value = '';
  toggleForm();
} // Anadir productos al array Products
// Anadir productos al array Products
// Anadir productos al array Products
// Delete productos al array Products
// Delete productos al array Products
// Delete productos al array Products


function deleteProduct() {
  var productIdToDelete = parseInt(document.getElementById('productIdToDelete').value); // Buscar el índice del producto en la lista

  var indexToDelete = products.findIndex(function (product) {
    return product.id === productIdToDelete;
  });

  if (indexToDelete !== -1) {
    // Obtener el producto a eliminar
    var productToDelete = products[indexToDelete]; // Eliminar el producto de la lista

    products.splice(indexToDelete, 1); // Actualizar localStorage con la nueva lista de productos

    localStorage.setItem('products', JSON.stringify(products)); // Renderizar la lista actualizada
    // Limpiar el formulario después de eliminar el producto

    document.getElementById('productIdToDelete').value = ''; // Limpiar la información del producto a eliminar

    clearProductToDeleteInfo();
    displayProductToDeleteInfo(product);
  } else {
    alert("No se encontró un producto con el ID especificado.");
  }

  renderProducts();
}

function toggleDeleteForm() {
  var deleteForm = document.getElementById('deleteForm');
  deleteForm.style.display = deleteForm.style.display === 'none' ? 'block' : 'none';
}

function clearProductToDeleteInfo() {
  // Limpiar la información del producto a eliminar
  document.getElementById('productIdToDelete').innerHTML = '';
}

function displayProductToDeleteInfo(product) {
  // Mostrar información del producto a eliminar
  var productInfoList = document.getElementById('productIdToDelete');
  productInfoList.innerHTML = "\n        <li class=\"list-group-item\">ID: ".concat(product.id, "</li>\n        <li class=\"list-group-item\">Nombre: ").concat(product.name, "</li>\n        <li class=\"list-group-item\">Imagen: <img src=\"").concat(product.imageURL, "\" alt=\"").concat(product.name, "\" style=\"max-width: 100px;\"></li>\n    ");
} // Delete productos al array Products
// Delete productos al array Products
// Delete productos al array Products