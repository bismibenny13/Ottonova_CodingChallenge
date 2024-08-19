// cypress/support/pages/CalculatorPage.js
class CalculatorPage {
    selectEmployment(status) {
      cy.contains('span', status, { timeout: 10000 }).click();
    }
  
    enterIncome(income) {
      cy.get('input[data-cy="income-input"]').type(income);
    }
  
    continueEmployment() {
      cy.get('button[data-cy="employment-status-continue"]').click();
    }
    selectInsuranceProduct(Vollversicherung) {
        cy.contains('span', Vollversicherung,{ timeout: 10000 }).click()
    }
  
           selectIngressDate(startDateValue) {
            cy.get('select[data-cy="ingress-date"]').select(startDateValue).should('have.value', startDateValue);
    }
        
    continueInsuranceProduct() {
      cy.get('button[data-cy="insurance-product-continue"]').click();
    }
  
    enterBirthdate(day, month, year) {
      cy.get('input[data-cy="day"]').type(day);
      cy.get('input[data-cy="month"]').type(month);
      cy.get('input[data-cy="year"]').type(year);
    }
  
    continueBirthday() {
      cy.get('button[data-cy="birthday-continue"]').click();
    }
  
    assertValidationMessage(message) {
      cy.contains(message).should('be.visible');
      
    
    }
  
    assertContinueButtonDisabled() {
      cy.get('button[data-cy="birthday-continue"]').should('be.disabled');
    }
  }
  
  export default CalculatorPage;
  