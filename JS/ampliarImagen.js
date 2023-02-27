// Obtiene el modal y la img ampleada
var modal = document.getElementById("modal");
var imgAmpliada = document.getElementById("imgAmpliada");

// Obtiene todas las imagenes de la galeria
var imagenes = document.querySelectorAll(".galeria img");

// Agregar el evento click a las imagenes
imagenes.forEach(function(imagen) {
  imagen.addEventListener("click", function() {
    // Mostrar el modal
    modal.style.display = "block";
    // Establecer la imagen ampliada como la imagen clickeada
    imgAmpliada.src = this.src;
  });
});

// Obtener el botón cerrar y agregar un evento click
var botonCerrar = document.getElementsByClassName("close")[0];
botonCerrar.addEventListener("click", function() {
  // Cerrar el modal
  modal.style.display = "none";
});
