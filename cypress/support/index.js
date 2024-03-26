import './commands';
require('cypress-xpath');
require('@4tw/cypress-drag-drop')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});