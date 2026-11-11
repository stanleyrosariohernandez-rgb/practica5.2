
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const resetButton = document.getElementById("resetButton");

const welcomeMessage =
    "¡Hola! Bienvenido a ChatBot Assistant. Estoy aquí para ayudarte. ¿Qué necesitas saber?";

// Agregar mensajes a la conversación
function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender + "-message");

    const avatar = document.createElement("div");
    avatar.classList.add("message-avatar");
    avatar.textContent = sender === "bot" ? "🤖" : "👤";

    const content = document.createElement("div");
    content.classList.add("message-content");
    content.textContent = text;

    message.appendChild(avatar);
    message.appendChild(content);

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Obtener respuesta del chatbot
function getBotResponse(message) {
    const question = message.toLowerCase().trim();

    if (
        question.includes("hola") ||
        question.includes("buenos días") ||
        question.includes("buenas tardes")
    ) {
        return "¡Hola! Es un placer ayudarte. ¿Qué necesitas saber?";
    }

    if (
        question.includes("servicios") ||
        question.includes("ofrecen")
    ) {
        return "Nuestros servicios incluyen atención al usuario, información general y asistencia mediante nuestro chatbot.";
    }

    if (
        question.includes("ayuda") ||
        question.includes("opciones")
    ) {
        return "Estas son mis opciones:\n1. Saludar: escribe Hola.\n2. Consultar servicios: escribe ¿Qué servicios ofrecen?\n3. Consultar información general.\n4. Reiniciar: utiliza el botón superior.";
    }

    if (question.includes("gracias")) {
        return "¡De nada! Estoy aquí para ayudarte.";
    }

    if (question.includes("adiós") || question.includes("adios")) {
        return "¡Hasta pronto! Gracias por utilizar ChatBot Assistant.";
    }

    return "Lo siento, no comprendo tu consulta. Puedes escribir 'Ayuda' para conocer las opciones disponibles.";
}

// Enviar mensaje
function sendMessage(message) {
    const text = message.trim();

    if (text === "") {
        addMessage(
            "Por favor, escribe un mensaje antes de enviarlo.",
            "bot"
        );
        return;
    }

    addMessage(text, "user");

    const response = getBotResponse(text);

    addMessage(response, "bot");

    userInput.value = "";
    userInput.focus();
}

// Evento del formulario
chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendMessage(userInput.value);
});

// Botones de respuestas rápidas
document.querySelectorAll(".quick-button").forEach(button => {
    button.addEventListener("click", function() {
        sendMessage(this.dataset.message);
    });
});

// Reiniciar conversación
resetButton.addEventListener("click", function() {
    chatMessages.innerHTML = "";

    addMessage(welcomeMessage, "bot");

    userInput.value = "";
});
