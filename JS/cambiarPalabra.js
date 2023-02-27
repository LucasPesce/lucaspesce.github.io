function cambiarPalabra(event) {
    if (event.target.tagName === "A") {
      event.target.textContent = getPalabraReemplazo(event.target.textContent);
    }
}
  
function volverPalabra(event) {
    if (event.target.tagName === "A") {
      event.target.textContent = event.target.dataset.original;
    }}
  
function getPalabraReemplazo(palabraOriginal) {
    switch (palabraOriginal) {
      case "Hola.":
        return "Sobre Mí";
      case "Soy":
        return "Trabajos";
      case "Luc Pesce":
        return "Contacto";       
      default: break;
    }
}