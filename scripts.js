// Obtener elementos necesarios
var menuToggle = document.querySelector(".menu-toggle");
var nav = document.querySelector("nav");

// Función para abrir o cerrar el menú en dispositivos móviles
function toggleMenu() {
  nav.classList.toggle("active");
}

// Event listener para el botón de hamburguesa
menuToggle.addEventListener("click", function() {
  toggleMenu(); // Abre o cierra el menú al hacer clic en el botón de hamburguesa
});

// Event listener para cerrar el menú al hacer clic en un enlace
nav.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function() {
    if (nav.classList.contains("active") && window.innerWidth <= 768) {
      toggleMenu(); // Cierra el menú al hacer clic en un enlace en dispositivos móviles
    }
  });
});
