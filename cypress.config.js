

import { defineConfig } from "cypress";




export default defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   baseUrl: 'https://kanban-dusky-five.vercel.app', 
   //nao vai limpar o estado da tela a cada it
   testIsolation: false
  },
});
