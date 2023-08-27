// Crear el botón flotante
var chatButton = document.createElement("div");
chatButton.className = "chat-button";
document.body.appendChild(chatButton);

// Función para abrir el bot
function abrirBot() {
  // Aquí podrías agregar la lógica para mostrar el bot o abrir una ventana de chat
  alert("¡Hola! ¿En qué puedo ayudarte?");
}

// Agregar un evento de clic al botón flotante
chatButton.addEventListener("click", abrirBot);
