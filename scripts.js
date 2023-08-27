// Menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Botón flotante
const chatButton = document.createElement("div");
chatButton.className = "chat-button";
document.body.appendChild(chatButton);

function esDispositivoMovil() {
  return window.innerWidth <= 768;
}

function abrirBotMovil() {
  alert("¡Hola! ¿En qué puedo ayudarte?");
}

chatButton.addEventListener("click", function () {
  if (esDispositivoMovil()) {
    abrirBotMovil();
  }
});
