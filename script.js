const imagenes = document.querySelectorAll("img");

imagenes.forEach((imagen) => {
  imagen.addEventListener("mouseover", function() {
    this.style.transition = "transform 0.3s ease-in-out"; // Agrega una transición suave
    this.style.transform = "scale(1.1)"; // Escala la imagen al 110% en hover
    this.style.zIndex = "1"; // Ajusta el z-index para que esté por encima de las demás
  });

  imagen.addEventListener("mouseout", function() {
    this.style.transition = "transform 0.3s ease-in-out"; // Agrega una transición suave al salir del hover
    this.style.transform = "scale(1)"; // Restaura el tamaño original al salir del hover
    this.style.zIndex = "0"; // Restaura el z-index al valor predeterminado
  });
});


