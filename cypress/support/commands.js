// cypress/support/commands.js
Cypress.Commands.add('acceptCookies', () => {
    cy.get('body').then(($body) => {
      if ($body.find('button[data-testid="uc-accept-all-button"]').length > 0) {
        cy.get('button[data-testid="uc-accept-all-button"]').click();
        cy.log('Cookie acceptance button clicked.');
      } else {
        cy.log('Cookie acceptance button not found.');
      }
    });
  });
  
  