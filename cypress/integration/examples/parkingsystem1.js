/// <reference types="Cypress" />

/*
 * Test Suite for IconParking System
 */
describe('parkingsystem 1 - ', function()
{

    before(function(){

        cy.fixture('example.json').then(function(data){

            this.data=data

        })
    })


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            //debugger
            return false
        })

    })

    //Inject aXe plugin
    beforeEach(() => {
        cy.injectAxe()
    })

   
    //login with invalid account
    it('test invalid login credentials', function()
    {
   
        cy.viewport(1366, 900)
    
        cy.visit('https://test.iconparkingsystems.com/')
        
        cy.get('#loginPopup').click()
    
        cy.get('#floating-label-login-comp1 > .text-primary').should('contain.text', 'Sign In')

        cy.get('.checkbox > label').should('contain.text', 'Remember Me')

        cy.get('.text-right > .btn-link').should('contain.text', 'Forgot Password')

        cy.get('#floating-label-login-comp1 > :nth-child(6) > .btn').should('contain','sign in')
            
        cy.get(':nth-child(9) > .btn-link').should('contain.text','create one')

        cy.get('.modal-dialog > .panel > #floating-label-login-comp1 > .form-group:nth-child(3) > .form-control').should('be.visible').click().clear().type('trapti.saxena@outworx.com')
    
        cy.get('#floating-label-login-comp1 > :nth-child(4) > .form-control').should('be.visible').click().clear().type('Test@1234')
    
        cy.get('.row > .col-xs-6 > .checkbox > label > input').check('')
        
        cy.get('#floating-label-login-comp1 > :nth-child(6) > .btn').click()
        
        cy.get('.toast-message').should('contain.text','The user credentials were incorrect.')

        cy.get('.modal-open > .overlay-container > #toast-container > .toast-error > .toast-close-button').click()
    
        cy.get('.modal-dialog > .panel > .close > fa > .fa').click()
    
        
    })
        

    
    //login with valid credentials
    it('test with valid credentials', function() 
    {
        cy.viewport(1366, 900) 

        cy.visit('https://test.iconparkingsystems.com/')
          
        cy.get('#loginPopup').click({force: true})
          
        cy.get('.modal-dialog > .panel > #floating-label-login-comp1 > .form-group:nth-child(3) > .form-control').type('trapti.saxena@outworx.com') //type(this.data.username)
          
        cy.get('#floating-label-login-comp1 > :nth-child(4) > .form-control').type('Test@123')    //type(this.data.password)
          
        cy.get('.row > .col-xs-6 > .checkbox > label > input').check('')
     
        cy.get('#floating-label-login-comp1 > :nth-child(6) > .btn').click()
      
        cy.title().should('eq','Icon Parking')

        cy.get('.iconLogo').should('be.visible')

        cy.get('header > h2').should('contain.text','Users')

        cy.get('.active > a').should('contain.text','Users')

        cy.get('#sideNavList > :nth-child(2) > a').should('contain.text','Reservations')
        
        cy.get('#sideNavList > :nth-child(3) > a').should('contain.text','Customer Credit Amounts')

        cy.get('.iconButton').should('be.visible')
        cy.get('.iconButton').should('have.css', 'background-color').and('eq', 'rgb(53, 51, 52)')

        cy.get('header > h2').should('have.css', 'font-size', '19.5px')
        cy.get('header > h2').should('have.css', 'font-weight', '700')
        cy.get('header > h2').should('have.css', 'line-height', '23.4px')
        cy.get('header > h2').should('have.css', 'margin-bottom', '11.7px')
        cy.get('header > h2').should('have.css', 'font-family', '"Open Sans", sans-serif')
        
    });


    //Contact Us Tab
    it('contact us', function() 
    {
           
        cy.visit('https://test.iconparkingsystems.com/')

        cy.viewport(1366, 900)
  
        cy.get('.nav > :nth-child(5) > a').click({force: true})
 
        cy.get('#floating-label-contact-us > :nth-child(4) > :nth-child(1) > :nth-child(1) > .form-control').click().type('harry')
 
        cy.get('#floating-label-contact-us > :nth-child(4) > :nth-child(1) > :nth-child(2) > .form-control').type('(123) 456-7890')
 
        cy.get('#floating-label-contact-us > :nth-child(4) > :nth-child(1) > :nth-child(3) > .form-control').click().type('harry@gmail.com')
             
        cy.get('#floating-label-contact-us :nth-child(1) > .row > .col-sm-8 > .form-group > .form-control').click().type('calafornia')
 
        cy.get('#floating-label-contact-us :nth-child(1) > .row > .col-sm-4 > .form-group > .form-control').click().type('CA')
 
        cy.get('.contactPage > .container > #floating-label-contact-us > .form-group > #comments').click().type('hello world')
 
        cy.get('.contactPage > .container > #floating-label-contact-us > .form-group > .btn').click()

        cy.get('.toast-success').should('contain.text','Thanks for your enquiry. We will get in touch with you.')
  
        cy.get('body > .overlay-container > #toast-container > .toast-success > .toast-close-button').click()
 
        cy.get('.container > .row > .col-lg-6 > .well > .btn').click()

        cy.url().should('eq','https://test.iconparkingsystems.com/')

    })

     
    //Test for log out
    it('logout', function()  
    {
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        cy.url().should('include','/admin/')

        cy.get('.col-sm-9 > .memberActions > ul > li > .logoutBtn').click()

        cy.url().should('eq','https://test.iconparkingsystems.com/')
         
    });


    //Validate UI Elements
    it('check UI buttons after login as user', function() 
    {

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        cy.get('.col-sm-9 > .memberActions > ul > :nth-child(1) > .ProfileIcon > b').should('contain.text','My Account')
        cy.get('.iconLogo').should('be.visible').click()
        cy.get('.col-xs.col-sm-8 > :nth-child(1) > .text-uppercase').should('contain.text','Icon Rewards')
        cy.get('.well > .mar-top-sm > .theme-btn').should('contain.text','Read More')
        cy.get('.col-xs.col-sm-8 > :nth-child(2) > .btn').should('contain.text','add monthly account')
        cy.get('.col-xs.col-sm-8 > :nth-child(3) > .text-uppercase').should('contain.text','My coupons')
    
    })
        

    //Create User
    it('create user', function() {

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        cy.createUser({username:'cypress013',email:'cypress013@gmail.com',password:'1qaz!QAZ',confirmPassword:'1qaz!QAZ'})
        
        cy.get('.notification-dismiss').should('be.visible')

        cy.get('.notification-title').should('be.visible').should('contain.text','User Created')

    })

    //Search of user created above
    it('search user', function() {

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        cy.get('.admin-table-header > .admin-list-table-search > input').click();

        cy.get('.admin-table-header > .admin-list-table-search > input').click().clear().type('cypresscat');

        cy.get('.admin-table-header > .admin-list-table-search > .fa').click();

        cy.get('[data-label="Name"] > .tableInfo').should('contain.text','cypress')

        cy.get('[data-label="Email"] > .tableInfo').should('contain.text','cypress')

        cy.get('.admin-table-header > .admin-list-table-search > input').click().clear().type('donald trump');

        cy.get('.admin-table-header > .admin-list-table-search > .fa').click();

        cy.get('.no-results > p').should('be.visible').should('contain.text','No results for that search')
        

    })


    //Edit user created above
    it('edit user', function() {

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        cy.get('.admin-table-header > .admin-list-table-search > input').click();

        cy.get('.admin-table-header > .admin-list-table-search > input').click().clear().type('cypresscat');

        cy.get('.admin-table-header > .admin-list-table-search > .fa').click();
        
        cy.wait(20000)

        cy.get('.user-actions > a > .fa').click()

        cy.wait(20000)

        cy.get('app-header > .btn-primary').should('contain.text','Stop acting as user')

        cy.get('.mar-top-0 > .pull-right > .fa').click()

        cy.get('.row > :nth-child(3) > .form-group > .form-control').click().clear().type('auto')
        
        cy.get(':nth-child(7) > .form-group > .form-control').click().clear().type('1234567890')

        cy.get(':nth-child(9) > .form-group > .form-control').click().clear().type('181123')

        cy.get('.mar-bottom-xs > .btn').click()

        cy.get('.col-sm-4 > .well > :nth-child(2)').should('contain.text','cypresscat')
        cy.get('.well > :nth-child(4)').should('contain.text','7890')
        cy.get('.col-sm-4 > .well > .mar-top-sm').should('contain.text','181123')
        
    })

})      