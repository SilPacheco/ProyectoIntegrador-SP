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



