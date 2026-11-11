
const {
    Given,
    When,
    Then,
    Before,
    After
} = require("@cucumber/cucumber");

const { chromium } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

let browser;
let page;

// Preparar el navegador antes de cada escenario
Before(async function () {
    browser = await chromium.launch({
        headless: true
    });

    page = await browser.newPage();

    await page.goto("http://127.0.0.1:5500/index.html");
});

// Cerrar el navegador después de cada escenario

After(async function ({ pickle }) {

    if (page) {

        const evidenceFolder = path.join(
            "reports",
            "evidence"
        );

        fs.mkdirSync(evidenceFolder, {
            recursive: true
        });

        const fileName = pickle.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "") + ".png";

        await page.screenshot({
            path: path.join(evidenceFolder, fileName),
            fullPage: true
        });
    }

    if (browser) {
        await browser.close();
    }
});


// ESCENARIO 1 Y 2
Given("que el usuario abre el chatbot", async function () {
    await page.locator("#chatMessages").waitFor();
});

Given("que el chatbot está activo", async function () {
    await page.locator("#chatMessages").waitFor();
});

// ESCENARIO 3
Given("que el usuario está en el chatbot", async function () {
    await page.locator("#userInput").waitFor();
});

// ESCENARIO 5
Given("que el usuario está conversando con el chatbot", async function () {
    await page.locator("#chatMessages").waitFor();
});

// ESCENARIO 6
Given("que existe una conversación activa", async function () {
    await page.locator("#chatMessages").waitFor();

    await page.locator("#userInput").fill("Hola");
    await page.locator("#chatForm").locator("button").click();
});

// ENVIAR MENSAJES
When('escribe {string}', async function (message) {
    await page.locator("#userInput").fill(message);
    await page.locator("#chatForm").locator("button").click();
});

When('el usuario pregunta {string}', async function (message) {
    await page.locator("#userInput").fill(message);
    await page.locator("#chatForm").locator("button").click();
});

When("intenta enviar un mensaje vacío", async function () {
    await page.locator("#userInput").fill("");
    await page.locator("#chatForm").locator("button").click();
});

When("el usuario escribe una pregunta desconocida", async function () {
    await page.locator("#userInput").fill(
        "¿Cuál es la capital de Marte?"
    );

    await page.locator("#chatForm").locator("button").click();
});

When('el usuario selecciona el botón {string}', async function (button) {
    if (button === "Reiniciar") {
        await page.locator("#resetButton").click();
    }
});

// COMPROBAR RESPUESTAS
Then("el chatbot responde con un mensaje de bienvenida", async function () {
    const response = await page
        .locator(".bot-message .message-content")
        .last()
        .textContent();

    assert.ok(response.includes("¡Hola!"));
});

Then("el chatbot muestra información sobre los servicios", async function () {
    const response = await page
        .locator(".bot-message .message-content")
        .last()
        .textContent();

    assert.ok(response.includes("servicios"));
});

Then("el sistema muestra una advertencia solicitando un mensaje", async function () {
    const response = await page
        .locator(".bot-message .message-content")
        .last()
        .textContent();

    assert.ok(response.includes("Por favor"));
});

Then("el chatbot informa que no comprende la consulta", async function () {
    const response = await page
        .locator(".bot-message .message-content")
        .last()
        .textContent();

    assert.ok(response.includes("no comprendo"));
});

Then("ofrece alternativas de ayuda", async function () {
    const response = await page
        .locator(".bot-message .message-content")
        .last()
        .textContent();

    assert.ok(response.includes("Ayuda"));
});

Then("el chatbot muestra las opciones disponibles", async function () {
    const response = await page
        .locator(".bot-message .message-content")
        .last()
        .textContent();

    assert.ok(response.includes("opciones"));
});

Then("el chatbot limpia el historial", async function () {
    const messages = await page.locator(".message").count();

    assert.equal(messages, 1);
});

Then("muestra nuevamente el mensaje de bienvenida", async function () {
    const response = await page
        .locator(".bot-message .message-content")
        .last()
        .textContent();

    assert.ok(response.includes("Bienvenido a ChatBot Assistant"));
});
