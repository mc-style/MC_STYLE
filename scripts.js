// Menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// Función para abrir el menú de hamburguesa en dispositivos móviles
function abrirMenu() {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
}

// Cerrar el menú al hacer clic en un enlace
nav.addEventListener("click", () => {
  if (esDispositivoMovil()) {
    abrirMenu();
  }
});

// ... otros códigos ...
