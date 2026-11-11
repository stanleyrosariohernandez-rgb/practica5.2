
import fs from "node:fs";
import { generate } from "multiple-cucumber-html-reporter";

const jsonFile = "./reports/cucumber-report.json";

if (!fs.existsSync(jsonFile)) {
  console.error("No se encontró cucumber-report.json.");
  console.error("Ejecuta primero: npm run test:bdd");
  process.exit(1);
}

generate({
  jsonDir: "./reports",
  reportPath: "./reports/html",
  pageTitle: "Pruebas BDD - ChatBot Assistant",
  reportName: "Informe de pruebas BDD",
  displayDuration: true,
  language: "es",
  useCucumberMessages: false,

  metadata: {
    browser: {
      name: "Chromium",
      version: "Playwright"
    },
    device: "Computadora",
    executionPlatform: "local",
    platform: {
      name: "Windows",
      version: "11"
    }
  }
});

console.log("Informe HTML generado correctamente.");
console.log("Ubicación: reports/html/index.html");
