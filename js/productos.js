// Creo listado de productos
const productos = [
    {
      id: 1,
      nombre: "Pañales Huggies Natural Care",
      descripcion: "La línea Supreme Care es la línea premium de Huggies, que nos brinda el máximo confort, la seguridad y la suavidad que queremos para nuestro bebé",
      imagen: "Huggies supreme care x 96.webp",
      precio: 38000,
      stock: 235,
    },
    {
      id: 2,
      nombre: "Pampers Baby Dry",
      descripcion: "Conoce los nuevos Pampers Baby-Dry! Con revolucionarios extra sec pods, mantienen a tu bebé hasta dos veces más sequito evitando que el pañal cuelgue y el pipí desaparece!",
      imagen: "imagen-2.jpg",
      precio: 54000,
      stock: 172,
    },
    {
      id: 3,
      nombre: "BabySec Premium",
      descripcion: "Absorción Prolongada, cubierta extra suave, ajuste ergonómico y flexible. Con indicador de humedad",
      imagen: "Babysec premium.webp",
      precio: 24000,
      stock: 85,
    },
    {
      id: 4,
      nombre: "Pañales Estrella Baby",
      descripcion: "Superpack ahorro. Todos los talles",
      imagen: "Estrella baby.webp",
      precio: 15000,
      stock: 15,
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
  
  // Escucho todos los eventos click el documento
 // document.addEventListener("click", (event) => {
    // Si el elemento donde se hizo click contiene la clase 'agregar'
   // if (event.target.classList.contains("agregar")) {
      // Busco el contenedor mas cercano que se un 'article'
      // Obtengo el id del atributo data-id
     // const id = event.target.closest("article").dataset.id;
      // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
      //const elemento = productos.find((producto) => producto.id == id);
      //console.log(elemento);
      // Uso destructuring para creo las constante con los valores del Objeto
      //const { nombre, precio } = elemento;
      // Creo el objeto producto para insertar en el carrito
      //const producto = {
       // id: id,
        //nombre: nombre,
        //precio: precio,
        //cantidad: 1,
      //};//
      //carrito.push(producto);
      // Guardo en el localStorage el array carrito en formato JSON
      //localStorage.setItem("carrito", JSON.stringify(carrito));
    //}
  //});
