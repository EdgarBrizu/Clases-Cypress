const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hotwr1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://pushing-front.vercel.app/',
    watchForFileChanges: false, 
    //true: por defecto vuelve a ejecutar cuando hago cambios en el código
    //False: no ejecuta al modificar código y hay que hacerlo manualmente
    defaultCommandTimeout: 15000, //tiempo en milisegundos en espera si no encuentra algún elemento
  },
});
