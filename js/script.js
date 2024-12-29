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



//listener en formulario contacto para obtener evento de envío
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

