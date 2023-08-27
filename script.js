// Crear el botón flotante
var chatButton = document.createElement("div");
chatButton.className = "chat-button";
document.body.appendChild(chatButton);

// Función para detectar si el dispositivo es móvil
function esDispositivoMovil() {
  return window.innerWidth <= 768; // Puedes ajustar este valor según tus necesidades
}

// Función para abrir el bot en dispositivos móviles
function abrirBotMovil() {
  alert("¡Hola! ¿En qué puedo ayudarte?");
}

// Función para abrir otra ventana de chat en dispositivos de escritorio
function abrirOtraVentana() {
  // Implementa aquí tu lógica para abrir una ventana de chat en dispositivos de escritorio
  alert("¡Hola! Estamos aquí para ayudarte.");
}

// Event listener para el botón flotante
chatButton.addEventListener("click", function() {
  if (esDispositivoMovil()) {
    abrirBotMovil(); // Abre el bot en dispositivos móviles
  } else {
    abrirOtraVentana(); // Abre otra ventana de chat en dispositivos de escritorio
  }
});
