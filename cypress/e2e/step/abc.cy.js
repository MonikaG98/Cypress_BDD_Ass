import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the STC Tourism homepage', () => {
  cy.visit('https://nichethyself.com/tourism/home.html');
});

When('I navigate to the Customized tours page', () => {
  cy.contains('Customized tours').click();
});

When('I select {string} in the preferred stay dropdown', (stayType) => {
  cy.get('select[name="preferredStay"]').select(stayType);
});

When('I check the {string} checkbox', (country) => {
  cy.get(`input[type="checkbox"][value="${country}"]`).check();
});

When('I click on the Contact Us menu', () => {
  cy.contains('Contact us').click();
});

When('I search for {string} in the Contact Us search', (searchTerm) => {
  cy.get('.search-icon-selector').click(); 
  cy.get('.search-popup input[type="text"]').type(searchTerm); 
  cy.contains('OK').click();
});

When('I close the Contact Us window', () => {
  cy.get('.close-contact-us').click(); 
});

Then('I submit the customized tour request', () => {
  cy.contains('Submit').click();
})