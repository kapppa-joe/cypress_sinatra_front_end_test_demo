// type definitions for Cypress object "cy"
/// <reference types="cypress" />
 
describe('My First Sinatra Test', function() {
    it('visit the sinatra app in localhost', function() {
    //Visit the Demo QA Website
    cy.visit("http://localhost:4567/");
    
   // Clicking on Widget Menu Item
    // cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
  
    //Verify number of items present under the Widget Tab
    cy.get('div').should('have.text', 'hello world');
    cy.get('ul > :nth-child(2)').should('have.text', 'item 2');
  })
})