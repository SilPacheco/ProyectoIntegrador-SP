// Obtener carrito del localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Seleccionar el contenedor donde se mostrarán los productos
const items = document.querySelector(".items");
items.innerHTML = "";

// Inicializar las variables para el total de productos y el total de la compra
let totalProductos = 0;
let totalCompra = 0;

// Recorrer cada producto del carrito
carrito.forEach((item) => {
  // Actualizar el total de productos y total de la compra
  totalProductos += item.cantidad;  // Sumar la cantidad de cada producto
  totalCompra += item.precio * item.cantidad;  // Sumar el precio total de cada producto

  // Crear el HTML para cada producto en el carrito
  const html = `
    <tr data-id="${item.id}">
        <td>${item.nombre}</td>
        <td>
            <button class="editar-cantidad" data-id="${item.id}">-</button>
            ${item.cantidad}
            <button class="editar-cantidad" data-id="${item.id}">+</button>
        </td>
        <td>$ ${item.precio}</td>
        <td><button class="eliminar-producto" data-id="${item.id}">Eliminar</button></td>
    </tr>
  `;
  items.innerHTML += html;
});

// Mostrar el total de productos y el total de la compra
const totalElement = document.createElement("div");

totalElement.innerHTML = `
  <p>Total de productos: ${totalProductos}
  <p>Total de la compra: $ ${totalCompra}</p>
`;

document.querySelector("main").appendChild(totalElement);

// Funcionalidad para editar la cantidad de productos
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("editar-cantidad")) {
    const id = event.target.dataset.id;
    const producto = carrito.find((item) => item.id == id);
    
    if (event.target.textContent === "+") {
      producto.cantidad += 1;
    } else if (event.target.textContent === "-" && producto.cantidad > 1) {
      producto.cantidad -= 1;
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Recargar la página para actualizar la vista del carrito
    location.reload();
  }
});

// Funcionalidad para eliminar productos
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("eliminar-producto")) {
    const id = event.target.dataset.id;
    const index = carrito.findIndex((item) => item.id == id);

    if (index !== -1) {
      carrito.splice(index, 1);  // Eliminar el producto del carrito
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Recargar la página para actualizar la vista del carrito
    location.reload();
  }
});
