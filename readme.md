# ChatBot Assistant
## Práctica 5.2 – Pruebas BDD con Gherkin

### 1. Descripción del proyecto

ChatBot Assistant es una aplicación web interactiva que permite al usuario comunicarse con un chatbot mediante mensajes escritos y opciones rápidas.

El proyecto utiliza HTML, CSS y JavaScript para la interfaz y la funcionalidad del chatbot.

### 2. Objetivo de las pruebas

Aplicar la metodología BDD (Behavior Driven Development) mediante escenarios escritos en Gherkin para comprobar el comportamiento esperado del chatbot.

### 3. Herramientas utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Cucumber
- Gherkin
- Playwright

### 4. Escenarios de prueba

Se definieron seis escenarios:

1. Verificar que el chatbot responda a un saludo.
2. Verificar que informe sobre los servicios disponibles.
3. Comprobar que no procese mensajes vacíos.
4. Verificar la respuesta ante preguntas desconocidas.
5. Comprobar que proporcione información de ayuda.
6. Verificar que el botón de reinicio restablezca la conversación.

### 5. Instalación

Instalar Node.js y abrir una terminal en la carpeta del proyecto.

Ejecutar:

`npm install`

### 6. Ejecución

Iniciar el servidor:

`npm start`

Ejecutar las pruebas automatizadas:

`npm run test:bdd`

Generar el informe HTML:

`npm run report`

### 7. Evidencias e informes

Los resultados de las pruebas se almacenan en la carpeta `reports/`.

- `cucumber-report.json`: resultados de las pruebas.
- `evidence/`: capturas de pantalla de los escenarios.
- `html/`: informe visual de las pruebas BDD.

### 8. Conclusión

La práctica permitió aplicar BDD utilizando Gherkin para describir el comportamiento esperado de una aplicación web. Mediante Cucumber y Playwright se automatizaron las pruebas del chatbot, facilitando la verificación de sus funcionalidades y la generación de evidencias de ejecución.