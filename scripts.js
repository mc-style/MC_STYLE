// Menú hamburguesa
const menuToggles = document.querySelectorAll(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggles.forEach((menuToggle) => {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// Función para abrir el menú de hamburguesa en dispositivos móviles
function abrirMenu() {
  nav.classList.add("active");
}

// Función para abrir el bot de chat en dispositivos móviles
function abrirBotMovil() {
  alert("¡Hola! ¿En qué puedo ayudarte?");
}

// Botón flotante
const chatButton = document.createElement("div");
chatButton.className = "chat-button";
document.body.appendChild(chatButton);

chatButton.addEventListener("click", () => {
  if (esDispositivoMovil()) {
    abrirBotMovil();
  }
});

function esDispositivoMovil() {
  return window.innerWidth <= 768;
}
