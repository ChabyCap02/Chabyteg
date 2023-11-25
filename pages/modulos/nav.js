const contentNav =`<!-- Nav -->
<!-- Nav -->
<!-- Nav -->
<nav class="navbar navbar-expand-lg navbar-light bg-light text-center p-1" id="navbar-home" style="z-index: 100;">
    <a class="navbar-brand" href="index.html"><i class="bi bi-house-fill"></i> Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

          
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-caret-down-fill"></i>Informacion Sistemas
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="timelise.html">Pensum Academico</a></li>
                <li><a class="dropdown-item" href="institucion.html">Institucion</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="proyects.html">Proyecto</a></li>
              </ul>
            </li>
           

          <li class="nav-item active">
              <a class="nav-link" href="productos.html"><i class="bi bi-bag-plus"></i> Productos <span class="sr-only">(current)</span></a>
          </li>

          <li class="nav-item active">
              <a class="nav-link" href="contacto.html"><i class="bi bi-person-lines-fill"></i> Contacto <span class="sr-only">(current)</span></a>
          </li>


          
          <li class="nav-item active float-right">
              <button id="modo-oscuro-btn" class="btn"><i id="iconsun" class="bi bi-moon "></i></button>
          </li>
          <style>
              body {
                      transition: background-color 0.5s ease;
                  }

                  .modo-oscuro {
                      background-color: #1a1a1a;
                      color: #ffffff;
                  }

                  .container {
                      max-width: 800px;
                      margin: 0 auto;
                      padding: 20px;
                  }
                  #navbar-home{
                    color: white;
                  }
          </style>
          <script>
            
          </script>
          <!-- Cambiar modo oscuro -->
          <!-- Cambiar modo oscuro -->
          <!-- Cambiar modo oscuro -->

      </ul>
      
    </div>
</nav>
<!-- Nav -->
<!-- Nav -->
<!-- Nav -->`;

let contenedorDivNav= document.getElementById('nav');
contenedorDivNav.innerHTML = contentNav

// Modo Oscuro
document.addEventListener('DOMContentLoaded', function() {
  const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
  const body = document.body;
  const nav = document.getElementById('navbar-home');
  const icon = document.getElementById('iconsun');

  // Recuperar el estado del modo oscuro desde localStorage
  const modoOscuroActivado = localStorage.getItem('modoOscuro') === 'true';

  // Aplicar el modo oscuro si estaba activado
  if (modoOscuroActivado) {
    body.classList.add('modo-oscuro');
    nav.classList.add('bg-dark', 'navbar-dark');
    modoOscuroBtn.classList.add('btn-dark');
    document.getElementById('descriptions').classList.add('bg-dark');
    document.getElementById('descriptions2').classList.add('bg-dark');
    icon.classList.add('bi-moon', 'modo-oscuro');
    icon.style.background = 'none';
  }

  modoOscuroBtn.addEventListener('click', function() {
    // Toggle entre los estilos de modo oscuro
    const modoOscuroActual = body.classList.contains('modo-oscuro');
    body.classList.toggle('modo-oscuro');
    nav.classList.toggle('bg-dark');
    nav.classList.toggle('navbar-dark');
    modoOscuroBtn.classList.toggle('btn-dark');
    document.getElementById('descriptions').classList.toggle('bg-dark');
    document.getElementById('descriptions2').classList.toggle('bg-dark');
    icon.classList.toggle('bi-moon');
    icon.classList.toggle('bi-brightness-high-fill');
    icon.classList.toggle('modo-oscuro');
    icon.style.background = 'none';

    // Guardar el estado del modo oscuro en localStorage
    localStorage.setItem('modoOscuro', !modoOscuroActual);
  });
});