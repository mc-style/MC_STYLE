// Menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// Función para abrir el menú de hamburguesa en dispositivos móviles
function abrirMenu() {
  menuToggle.classList.add("active");
  nav.classList.add("active");
}

// Función para cerrar el menú de hamburguesa en dispositivos móviles
function cerrarMenu() {
  menuToggle.classList.remove("active");
  nav.classList.remove("active");
}

// Cerrar el menú al hacer clic en un enlace
nav.addEventListener("click", () => {
  if (esDispositivoMovil()) {
    cerrarMenu();
  }
});
