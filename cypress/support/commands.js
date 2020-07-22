// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//for icon parking login

Cypress.Commands.add('login', (user) => {

        cy.clearLocalStorage()
        cy.visit('https://test.iconparkingsystems.com/')
        //cy.get('app-root > #content-Wrapper > #main > app-home > .intro-wrapper').click()
        cy.get('#loginPopup').click({force: true})
        cy.get('.modal-dialog > .panel > #floating-label-login-comp1 > .form-group:nth-child(3) > .form-control').click()
        cy.get('.modal-dialog > .panel > #floating-label-login-comp1 > .form-group:nth-child(3) > .form-control').type(user.email)
        cy.get('#floating-label-login-comp1 > :nth-child(4) > .form-control').type(user.password)
        cy.get('.row > .col-xs-6 > .checkbox > label > input').check('')
        cy.get('#floating-label-login-comp1 > :nth-child(6) > .btn').click({force:true})
    
});

//logout
Cypress.Commands.add('logout', (logoutuser) => {

    cy.get('li > .text-primary').click();

});


//for icon parking
Cypress.Commands.add('createUser', (createUser) => {
    
    //CLICK ADD NEW 
    cy.get('.button-copy').click();
    //cy.wait(5000)
   // cy.get('.button-copy').click();

    //Enter username
    cy.get('.user-form > .form-group:nth-child(2) > .form-control').type(createUser.username);
    //cy.wait(4000)
    cy.get('.user-form > .form-group:nth-child(3) > .form-control').type(createUser.email);
    //cy.wait(4000)
    cy.get('.user-form > .form-group:nth-child(4) > .form-control').type(createUser.password);
    //cy.wait(4000)
    cy.get('.user-form > .form-group:nth-child(5) > .form-control').type(createUser.confirmPassword);
    //cy.wait(4000)
    //submit
    cy.get('.iconButton').click();
    //cy.wait(3000)

});




