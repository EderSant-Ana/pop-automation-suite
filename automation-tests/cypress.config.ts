import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false, // Desabilitado para manter a POC enxuta e sem arquivos pesados
    setupNodeEvents(on, config) {
      // implemente node event listeners aqui se necessário
    },
  },
});