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
        return "Conóceme";
      case "Soy":
        return "Descúbreme";
      case "Luc Pesce":
        return "Contactemos";       
      default: break;
    }
}
