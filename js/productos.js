fetch('../json/productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Listado de productos como array de objetos
    mostrarProductos(data); // Llamo función para renderizar los productos
  })
  .catch(error => {
    console.error('Ocurrió un error al cargar el archivo JSON:', error);
  });

// Para obtener lo que está en el carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para mostrar los productos en la página
function mostrarProductos(productos) {
  const listadoProductos = document.querySelector(".listado-productos");

  if (!listadoProductos) {
    console.error("No se encontró el contenedor '.listado-productos'.");
    return;
  }

  listadoProductos.innerHTML = ""; 

  // Recorro cada prod para crear su HTML
  productos.forEach((producto) => {
    const html = `
        <article data-id="${producto.id}">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p>$ ${producto.precio}</p>
          <button type="button" class="agregar">Agregar al carrito</button>
        </article>
      `;
    listadoProductos.innerHTML += html;
  });
}

// Agrego evento click y detección de clase "agregar"
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("agregar")) {
    const id = event.target.closest("article").dataset.id;
    fetch('../json/productos.json') 
      .then(response => response.json())
      .then(productos => {
        const elemento = productos.find((producto) => producto.id == id);
        if (elemento) {
          const { id, nombre, precio } = elemento;
          const producto = {
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1,
          };
          carrito.push(producto);

          // Guardo en el localStorage
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
      })
      .catch(error => console.error("Error al agregar al carrito:", error));
  }
});
