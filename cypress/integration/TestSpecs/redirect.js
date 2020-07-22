xdescribe('test_name', function() {

    it('what_it_does', function() {
   
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            debugger
            return false
        })
        
    
       cy.visit('http://www.earnest.com/')

       //cy.wait(5000)
    
       cy.get('.refreshed-header__wrapper > .refreshed-header__navigation-wrapper > #primary-menu > #menu-item-5 > .lcms-qa').click()
    
       cy.visit('https://www.earnest.com/refinance-student-loans')
    
       cy.get('#section-container--1-1 > .content-wrapper > .v2-hero__headings > .v2-hero__buttons > .lcms-qa').click()
    
       cy.visit('https://my.earnest.com/external/check-rate')
    /*
       cy.get('.check-rate__form > .check-rate__block > .check-rate-action-row > .check-rate-action-row__left-block > .check-rate-action-row__link').click()
    
       
       cy.visit('https://www.earnest.com/login/')
       cy.window().then((win) => {
       cy.stub(win, 'open').as('windowOpen')
       })

    cy.get('#open-window').click()
   // cy.get('@windowOpen').should('be.calledWith', 'https://www.earnest.com/login/')
       
    

    cy.get('https://www.earnest.com/login/')

        

       cy.url().should('match', /login/)

       cy.title().should('eq','Client Login | Earnest')
    
       cy.get('#login-page > .login-form > .row > .group > #login-email').click()
    
       cy.get('#login-page > .login-form > .row > .group > #login-email').type('123@gmail.com')
    
       cy.get('#login-page > .login-form > .row > .group > #login-password').click()
    
       cy.get('#login-page > .login-form > .row > .group > #login-password').type('123')
       */
    
    })
   
   })
   