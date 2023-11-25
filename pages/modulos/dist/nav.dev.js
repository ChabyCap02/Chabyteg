"use strict";

var contentNav = "<!-- Nav -->\n<!-- Nav -->\n<!-- Nav -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light text-center p-1\" id=\"navbar-home\" style=\"z-index: 100;\">\n    <a class=\"navbar-brand\" href=\"index.html\"><i class=\"bi bi-house-fill\"></i> Home</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n\n          \n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                  <i class=\"bi bi-caret-down-fill\"></i>Informacion Sistemas\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a class=\"dropdown-item\" href=\"timelise.html\">Pensum Academico</a></li>\n                <li><a class=\"dropdown-item\" href=\"institucion.html\">Institucion</a></li>\n                <li><hr class=\"dropdown-divider\"></li>\n                <li><a class=\"dropdown-item\" href=\"proyects.html\">Proyecto</a></li>\n              </ul>\n            </li>\n           \n\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"productos.html\"><i class=\"bi bi-bag-plus\"></i> Productos <span class=\"sr-only\">(current)</span></a>\n          </li>\n\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"contacto.html\"><i class=\"bi bi-person-lines-fill\"></i> Contacto <span class=\"sr-only\">(current)</span></a>\n          </li>\n\n\n          \n          <li class=\"nav-item active float-right\">\n              <button id=\"modo-oscuro-btn\" class=\"btn\"><i id=\"iconsun\" class=\"bi bi-moon \"></i></button>\n          </li>\n          <style>\n              body {\n                      transition: background-color 0.5s ease;\n                  }\n\n                  .modo-oscuro {\n                      background-color: #1a1a1a;\n                      color: #ffffff;\n                  }\n\n                  .container {\n                      max-width: 800px;\n                      margin: 0 auto;\n                      padding: 20px;\n                  }\n                  #navbar-home{\n                    color: white;\n                  }\n          </style>\n          <script>\n            \n          </script>\n          <!-- Cambiar modo oscuro -->\n          <!-- Cambiar modo oscuro -->\n          <!-- Cambiar modo oscuro -->\n\n      </ul>\n      \n    </div>\n</nav>\n<!-- Nav -->\n<!-- Nav -->\n<!-- Nav -->";
var contenedorDivNav = document.getElementById('nav');
contenedorDivNav.innerHTML = contentNav; // Modo Oscuro

document.addEventListener('DOMContentLoaded', function () {
  var modoOscuroBtn = document.getElementById('modo-oscuro-btn');
  var body = document.body;
  var nav = document.getElementById('navbar-home');
  var icon = document.getElementById('iconsun'); // Recuperar el estado del modo oscuro desde localStorage

  var modoOscuroActivado = localStorage.getItem('modoOscuro') === 'true'; // Aplicar el modo oscuro si estaba activado

  if (modoOscuroActivado) {
    body.classList.add('modo-oscuro');
    nav.classList.add('bg-dark', 'navbar-dark');
    modoOscuroBtn.classList.add('btn-dark');
    document.getElementById('descriptions').classList.add('bg-dark');
    document.getElementById('descriptions2').classList.add('bg-dark');
    icon.classList.add('bi-moon', 'modo-oscuro');
    icon.style.background = 'none';
  }

  modoOscuroBtn.addEventListener('click', function () {
    // Toggle entre los estilos de modo oscuro
    var modoOscuroActual = body.classList.contains('modo-oscuro');
    body.classList.toggle('modo-oscuro');
    nav.classList.toggle('bg-dark');
    nav.classList.toggle('navbar-dark');
    modoOscuroBtn.classList.toggle('btn-dark');
    document.getElementById('descriptions').classList.toggle('bg-dark');
    document.getElementById('descriptions2').classList.toggle('bg-dark');
    icon.classList.toggle('bi-moon');
    icon.classList.toggle('bi-brightness-high-fill');
    icon.classList.toggle('modo-oscuro');
    icon.style.background = 'none'; // Guardar el estado del modo oscuro en localStorage

    localStorage.setItem('modoOscuro', !modoOscuroActual);
  });
});