
Feature: ChatBot Assistant
  Como usuario del asistente virtual
  Quiero interactuar mediante mensajes
  Para obtener información y ayuda

  Scenario: El usuario saluda al chatbot
    Given que el usuario abre el chatbot
    When escribe "Hola"
    Then el chatbot responde con un mensaje de bienvenida

  Scenario: Consultar los servicios disponibles
    Given que el chatbot está activo
    When el usuario pregunta "¿Qué servicios ofrecen?"
    Then el chatbot muestra información sobre los servicios

  Scenario: Enviar un mensaje vacío
    Given que el usuario está en el chatbot
    When intenta enviar un mensaje vacío
    Then el sistema muestra una advertencia solicitando un mensaje

  Scenario: El chatbot recibe una pregunta desconocida
    Given que el chatbot está activo
    When el usuario escribe una pregunta desconocida
    Then el chatbot informa que no comprende la consulta
    And ofrece alternativas de ayuda

  Scenario: El usuario solicita ayuda
    Given que el usuario está conversando con el chatbot
    When escribe "Ayuda"
    Then el chatbot muestra las opciones disponibles

  Scenario: Reiniciar la conversación
    Given que existe una conversación activa
    When el usuario selecciona el botón "Reiniciar"
    Then el chatbot limpia el historial
    And muestra nuevamente el mensaje de bienvenida
