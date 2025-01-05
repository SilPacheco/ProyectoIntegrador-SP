document.addEventListener("DOMContentLoaded", function () {
    // listener en formulario contacto para obtener evento de envío
    const formulario = document.querySelector("form");
    if (formulario) { // Verificar que el formulario exista antes de añadir el listener
        formulario.addEventListener("submit", function (event) {
            if (!verificarFormularioContacto()) {
                event.preventDefault(); // No enviar formulario con campos vacíos
            }
        });
    } else {
        console.error("No se encontró ningún formulario en el DOM.");
    }

    // Función para verificar que se completen los campos
    function verificarFormularioContacto() {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const consulta = document.getElementById("textarea").value.trim();

        if (!nombre || !apellido || !email || !consulta) {
            console.error("Completar los campos del formulario.");
            alert("Campos incompletos. Por favor, completar antes de enviar.");
            return false; // La validación falló. No se puede enviar
        } else {    
            console.log("Formulario validado correctamente. Listo para enviar.");
            return true; // La validación está ok
        }
    }
});


