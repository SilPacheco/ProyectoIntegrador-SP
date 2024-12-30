// Creo listado de productos
const productos = [
    {
      id: 1,
      nombre: "Pañales Huggies Natural Care",
      descripcion: "Presentación: 60 unidades",
      imagen: "../img/huggies-natural-care.jpg",
      precio: 38000,
      stock: 235,
    },
    {
      id: 2,
      nombre: "Pampers Baby Dry",
      descripcion: "Presentación: 54 unidades",
      imagen: "../img/pampers baby dry.jpg",
      precio: 21000,
      stock: 172,
    },
    {
      id: 3,
      nombre: "BabySec Premium",
      descripcion: "Presentación: 44 unidades",
      imagen: "../img/Babysec premium.jpg",
      precio: 10500,
      stock: 85,
    },
    {
      id: 4,
      nombre: "Pañales Estrella Baby",
      descripcion: "Presentación: 52 unidades",
      imagen: "../img/estrella baby.jpg.jpg",
      precio: 8500,
      stock: 15,
    },
    {
      id: 5,
      nombre: "Algodón Estrella Super",
      descripcion: "Presentación: 400 grs.",
      imagen: "../img/algodon estrella400.jpg",
      precio: 8500,
      stock: 15,
    },
    {
        id: 6,
        nombre: "Algodón Estrella Precortado",
        descripcion: "Presentación: 50 paños 9x11cm",
        imagen: "../img/algodon precortado.jpg",
        precio: 8500,
        stock: 15,
      },
      {
        id: 7,
        nombre: "Pañales Huggies para el agua",
        descripcion: "Presentación: 10 unidades",
        imagen: "../img/huggies agua.jpg",
        precio: 12000,
        stock: 58,
    },
  ];

  
   // Para obtener lo que está en el carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Para capturar  la lista de prod
const listadoProductos = document.querySelector(".listado-productos");
  
listadoProductos.innerHTML = "<h2>Productos</h2>";
  
// Recorrer cada producto
productos.forEach((producto) => {
    const html = `
        <article data-id="${producto.id}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>$ ${producto.precio}</p>
        <button type="button"class="agregar">Agregar</button>
        </article>
      `;
    listadoProductos.innerHTML += html;
});
  
// Agrego evento click y detección clase "agregar"
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("agregar")) {
    const id = event.target.closest("article").dataset.id;
    const elemento = productos.find((producto) => producto.id == id);
      //Obtengo los datos que me interesan del elemento
    const { nombre, precio } = elemento;
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
  });
