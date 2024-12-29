// Creo listado de productos
const productos = [
    {
      id: 1,
      nombre: "Pañales Huggies Natural Care",
      descripcion: "Hecho con fibras naturales, suave como algodón, dermatológicamente comprobado y sin parabenos ni fragancia. Con canales suaves y respirables en forma de X, que distribuyen el pis de manera más uniforme a lo largo del pañal para mantener su piel seca, fresca y protegida. Presentación: 100 unidades",
      imagen: "imagen-1.jpg",
      precio: 38000,
      stock: 235,
    },
    {
      id: 2,
      nombre: "Pampers Baby Dry",
      descripcion: "Conoce los nuevos Pampers Baby-Dry! Con revolucionarios extra sec pods, mantienen a tu bebé hasta dos veces más sequito evitando que el pañal cuelgue y el pipí desaparece!. Presentación: 88 unidades",
      imagen: "imagen-2.jpg",
      precio: 21000,
      stock: 172,
    },
    {
      id: 3,
      nombre: "BabySec Premium",
      descripcion: "Absorción Prolongada, cubierta extra suave, ajuste ergonómico y flexible. Con indicador de humedad. Presentación: 40 unidades",
      imagen: "imagen-3.jpg",
      precio: 10500,
      stock: 85,
    },
    {
      id: 4,
      nombre: "Pañales Estrella Baby",
      descripcion: "Cintura elastizada. Máxima suavidad y absorción. Presentación: 30 unidades",
      imagen: "imagen-4.jpg",
      precio: 8500,
      stock: 15,
    },
    {
      id: 5,
      nombre: "Algodón Estrella Super",
      descripcion: "Elaborado con fibras cuidadosamente seleccionadas con el objetivo de ofrecer un producto de excelente calidad con gran poder de absorción. Es un algodón ideal para el cuidado de la higiene infantil y la salud de toda la familia. Presentación: 400 grs.",
      imagen: "imagen-5.jpg",
      precio: 8500,
      stock: 15,
    },
    {
        id: 6,
        nombre: "Algodón Estrella Precortado",
        descripcion: "Especialmente pensados para la higiene del bebé. Son suaves, absorbentes, muy resistentes y no pierden pelusa al ser 100% de algodon Estrella. Presentación: 50 paños 9x11cm",
        imagen: "imagen-6.jpg",
        precio: 8500,
        stock: 15,
      },
      {
        id: 7,
        nombre: "Algodón Estrella Precortado",
        descripcion: "Son los únicos pañales descartables especiales para usar en el agua. No se inflan, ni se deshacen como los pañales normales. Tendrás tranquilidad y tu bebé tendrá diversión ya que estará más cómodo y protegido. Presentación: 10 unidades",
        imagen: "imagen-7.jpg",
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
