/// <reference types="Cypress" />


describe('accessibility testing on parkingsystem', function()
{


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
           // debugger
            return false
        })
    })


it('to detect a11y violations on load ', () => {
    // Configure aXe and test the page at initial load

    //visit login page
    cy.visit('https://test.iconparkingsystems.com/')

    //wait for 20 sec
    //cy.wait(8000)

    //inject axe tool
    cy.injectAxe()

    //check accessibility issues
    cy.checkA11y()
  })

  
  
   
})