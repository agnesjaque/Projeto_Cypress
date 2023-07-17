const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o2kfe5',
  e2e: {
    baseUrl: 'http://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
