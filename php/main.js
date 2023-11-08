const xhr = new XMLHttpRequest();
xhr.open("GET", "obtener_productos.php", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const datos = JSON.parse(xhr.responseText);
        console.log(datos); // Aquí puedes ver los datos obtenidos del servidor
        // Ahora puedes manipular los datos en JavaScript
        // Por ejemplo, mostrar los datos en una lista
        mostrarDatosEnLista(datos);
    }
};
xhr.send();

function mostrarDatosEnLista(datos) {
    const lista = document.getElementById("lista-datos");
    datos.forEach(dato => {
        const listItem = document.createElement("li");
        listItem.textContent = dato.nombre; // Suponiendo que hay una propiedad 'nombre' en tus datos
        lista.appendChild(listItem);
    });
}

console.log('hola')