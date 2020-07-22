/// <reference types="Cypress" />

describe('Earnest', function() {

    it('fill rate check form', function() {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            //debugger
            return false
        })
   
       cy.viewport(1368, 900)
    
        //Open earnest .com
       cy.visit('https://www.earnest.com/')
       // verify title
       cy.title().should('eq', 'Low-Interest Loans Designed For You | Earnest')
       

       //verify button text
       cy.get('.v2-product-cards-item:nth-child(1) .v2-product-cards-item__button').should('have.text', '2 Min: Get My Rate')
       //Click on Get my rate
       cy.get('.v2-product-cards-item:nth-child(1) .v2-product-cards-item__button').click()
        //Redirect
       cy.visit('https://my.earnest.com/external/check-rate');

        //verify url
       cy.url().should('contain','external/check-rate')

       //education button is disabled
       cy.get('.check-rate-action-row__button').should('not.be.enabled')

       //Enter name
        cy.get('.-right-spacing .text-input').click();
        cy.get('.-right-spacing .text-input').clear().type('harry');
      
        //Enter last name
        cy.get('.-left-spacing .text-input').click();      
        cy.get('.-left-spacing .text-input').clear().type('potter');

        //Enter email
        cy.get('.-full .text-input').click();
        cy.get('.-full .text-input').clear().type('harry@potter.com');

        //verify text
        cy.get('.checkbox-input-block__label').should('have.text', 'I am a U.S. citizen or Permanent Resident.')

        //Verify button
        cy.get('.check-rate-action-row__button').should('have.text', 'Education: 2 of 5')

        //select check box
       cy.get('.checkbox-input-block__input').click();
       //click on education
       cy.get('.check-rate-action-row__button').click();
       cy.get('.check-rate__form').submit();

       //set college
        cy.get('.select-input').select('Bachelors');


       //Set month
        cy.get('.-short').type('09');
        //click on year
        cy.get('.multi-part-input__number:nth-child(3)').click();
        //Set year
        cy.get('.multi-part-input__number:nth-child(3)').type('2019');

        //Click on college
        cy.get('.text-input').click();
        //type college name
        cy.get('.text-input').type('Westbrook College');
        //Select college
        cy.get('.money-input__input').click();
        //set loan balance amount
        cy.get('.money-input__input').type('7890');
        //Click on Finance button
        cy.get('.check-rate-action-row__button').click();


        //cy.visit('https://my.earnest.com/external/check-rate');
        //enter anual income
        cy.get('.check-rate__block:nth-child(1) .money-input__input').click();
        cy.get('.check-rate__block:nth-child(1) .money-input__input').type('55987');

        //Enter cash ret incentive
        cy.get('.check-rate__block:nth-child(2) .money-input__input').click();
        cy.get('.check-rate__block:nth-child(2) .money-input__input').type('20987');

        //Enter rent
        cy.get('.check-rate__block:nth-child(3) .money-input__input').click();
        cy.get('.check-rate__block:nth-child(3) .money-input__input').type('1234');

        //click on residence
        cy.get('.check-rate-action-row__button').click();
        cy.get('.check-rate__form').submit();

        //enter street address
        cy.get('.auto-complete-input > .text-input').click();
        cy.get('.auto-complete-input > .text-input').type('street 123');

        //enter addressline 2
        cy.get('.check-rate__block:nth-child(2) .text-input').type('newyork');

        //enter city
        cy.get('.check-rate__block:nth-child(3) .text-input').type('new jersy');
        //enter stste
        cy.get('.select-input').type('GA');
        //enter zip
        cy.get('.-left-spacing .text-input').type('65676');
        
    })
   
   })
   