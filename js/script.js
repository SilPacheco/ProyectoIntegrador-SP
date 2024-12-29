/*para que aparezcan los iconos fontawesome*/
function loadFontAwesome() {
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/ea8f01ccaa.js";
    script.crossOrigin = "anonymous";

    script.onload = () => {
        console.log("Font Awesome cargado correctamente");
    };
    document.body.appendChild(script);
}
loadFontAwesome();



//listener en formulario para obtener evento de envío
document.querySelector("form").addEventListener("submit", function (event) {
    if (!verificarFormularioContacto()) {
        event.preventDefault(); // No enviar formulario con campos vacíos
    }
});

// Función para verificar que se completen los campos
function verificarFormularioContacto() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const consulta = document.getElementById("textarea").value.trim();

    if (!nombre || !apellido || !email || !consulta) {
        console.error("Completar los campos del formulario.");
        alert("Campos incompletos. Por favor, completar antes de enviar.");
        return false; // la validación falló. No se puede enviar
    } else {    
        console.log("Formulario validado correctamente. Listo para enviar.");
        return true; // la validación está ok
    }
}
// Creo listado de productos
const productos = [
    {
      id: 1,
      nombre: "Pañales Huggies Natural Care",
      descripcion: "La línea Supreme Care es la línea premium de Huggies, que nos brinda el máximo confort, la seguridad y la suavidad que queremos para nuestro bebé",
      imagen: "Huggies supreme care x 96.webp",
      precio: 38.000,
      stock: 235,
    },
    {
      id: 2,
      nombre: "Producto 2",
      descripcion: "Descripción Producto 2",
      imagen: "imagen-2.jpg",
      precio: 20,
      stock: 10,
    },
    {
      id: 3,
      nombre: "Producto 3",
      descripcion: "Descripción Producto 3",
      imagen: "imagen-3.jpg",
      precio: 30,
      stock: 80,
    },
    {
      id: 4,
      nombre: "Producto 4",
      descripcion: "Descripción Producto 4",
      imagen: "imagen-4.jpg",
      precio: 50,
      stock: 10,
    },
  ];
  // Para obtener lo que está en el carrito
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  