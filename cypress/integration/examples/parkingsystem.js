import Brand from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/brandPartner.js'
import Promo from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/myPromoCode.js'
import Iconrewards from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/iconRewards.js'
import Mycoupons from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/myCoupons.js'
import CustomerCreditModel from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/customerCreditModel.js'
import Reservations from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/reservations.js'
import MyParking from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/myMonthlyParking.js'
import EvCharging from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/evCharging.js'
import B2bsolutions from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/b2bsolutions.js'
import Neighborhoods from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/neighborhoods.js'
import VehicleRequest from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/vehicleRequest.js'
import SearchHomePage from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/searchHomePage.js'
import MonthlyParkingBooking from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/monthlyParkingBooking.js'
import Faq from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/faq.js'
import NewsTips from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/newsTips.js'
import AboutUs from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/aboutUs.js'
import Careers from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/careers.js'

/// <reference types="Cypress" />

/*
 * Test Suite for IconParking System
 */
describe('parkingsystem - ', function()
{
    const brand = new Brand
    const promo = new Promo
    const iconrewards = new Iconrewards
    const mycoupons = new Mycoupons
    const customerCreditModel = new CustomerCreditModel
    const reservations = new Reservations
    const myParking = new MyParking
    const evCharging = new EvCharging
    const b2bsolutions = new B2bsolutions
    const neighborhoods = new Neighborhoods
    const vehicleRequest = new VehicleRequest
    const searchHomePage = new SearchHomePage
    const monthlyParkingBooking = new MonthlyParkingBooking
    const faq = new Faq
    const newsTips = new NewsTips
    const aboutUs = new AboutUs
    const careers = new Careers

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
     
        cy.get('.modal-dialog > .panel > #floating-label-login-comp1 > .form-group:nth-child(3) > .form-control').click()
     
        cy.get('.modal-dialog > .panel > #floating-label-login-comp1 > .form-group:nth-child(3) > .form-control').type(this.data.username)
          
        cy.get('#floating-label-login-comp1 > :nth-child(4) > .form-control').type(this.data.password)
          
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

        cy.url().should('eq','https://staging3.iconparkingsystems.com/')
         
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
    it.skip('create user', function() {

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

    //Brand Partnewship tab
    it('Brand Partnerships', function() {

        cy.viewport(1366, 900)

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        brand.myAccountLink().click()

        brand.brandPartnerTab().click()

        brand.partnerMenu1().click()

        brand.textPartnerMenu1().should('contain.text', 'FlyCleaners')

        brand.closePartner1Menu().click()

    })
    


    //My Promo Code Tab
    it.skip('MY Promo Code', function() 
    {
        
       cy.viewport(1366, 900)

       cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        promo.myAccountLink().click()

        promo.myPromoCode().click()
        
        promo.savePromoCode().click()
        
        promo.errorMsgTxt().should('contain.text','Promo Code')
        
        promo.promoCodeTxtBox().click().type('ICON12345')
        
        promo.savePromoCode().click()
    
        promo.toastMessageText().should('contain.html', 'Errors')

        promo.tostMsgClose().click()
    
    })
   

    //Icon Rewars Tab
    it.skip('iconRewards', function() 
    {

        cy.viewport(1366, 900)

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        iconrewards.myAccountLink().click()

        iconrewards.iconRewardTab().click()

        iconrewards.rewardPopUp().should('be.visible')
    
        iconrewards.rewardPopUpText().should('contain.text', 'You have Rewards Member Status')
     
        iconrewards.closeRewardPopUp().should('contain.text','Close')

        iconrewards.closeRewardPopUp().click()

        iconrewards.rewardsHeader().should('contain.text','Icon Rewards')

        iconrewards.viewBenifits().should('be.visible')
    
        iconrewards.viewBenifits().should('have.css', 'color','rgb(237, 130, 34)')
    
        iconrewards.viewBenifits().should('have.css', 'font-size','10px')
    
        iconrewards.viewBenifits().should('have.css', 'cursor','pointer')

        iconrewards.iconRewardText().should('have.css','color', 'rgb(237, 130, 34)')

        iconrewards.rewardMemberText().should('have.css','color', 'rgb(0, 0, 0)')

        iconrewards.rewardMemberText().should('have.css','font-size','25px')

        iconrewards.viewBenifits().click()

        cy.url().should('eq','https://test.iconparkingsystems.com/rewards')

        cy.title().should('eq','NYC Parking - Save up to 60% | IconParkingSystems.com')

        iconrewards.membershipTable().should('be.visible')
    })


    //My COupons tab
    it('My Coupons', function() 
    {

        cy.viewport(1366, 900)

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        mycoupons.myAccountLink().click()
    
        mycoupons.myCouponsTab().should('be.visible').click()
 
        mycoupons.myCouponHeader().should('be.visible')
        
        mycoupons.myCouponHeader().should('contain.text','My coupons')
        
        mycoupons.findCouponButton().trigger('mouseover')

        mycoupons.findCouponButton().should('have.css', 'border-bottom-color', 'rgb(237, 130, 34)')
 
    })
    

    //customer credit model
    it('customer credit model', function() {

        cy.viewport(1366, 900)

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        customerCreditModel.customerCreditAmountTab().click()

        cy.wait(8000)
        
        customerCreditModel.customerCreditAmountTab().click()

        customerCreditModel.customerCreditAmountHeader().should('contain.text','Customer Credit Amounts')

        customerCreditModel.customerSearchBox().should('be.visible')

        customerCreditModel.customerSearchButton().should('be.visible')

        customerCreditModel.customerSearchBox().type('admin@iconparkingsystems.com')

        customerCreditModel.customerSearchButton().click()

        cy.wait(10000)

        customerCreditModel.customerName().should('contain.text', 'admin@iconparkingsystems.com')

        customerCreditModel.customerAmount().should('contain.text', '0.00')

        customerCreditModel.actionButton().should('be.visible').click()

        customerCreditModel.addCustomerCreditAmountHeadder().should('contain.text', 'Add Customer Credit Amount')
    
        customerCreditModel.customerNameDetails().should('contain.text','admin@iconparkingsystems.com (admin@iconparkingsystems.com)')
    
        customerCreditModel.creditAmountLabel().should('contain.text','Credit Amount')
    
        customerCreditModel.creditAmountvalue().should('be.visible')
    
        customerCreditModel.creditReasonLabel().should('contain.text','Credit reason')
    
        customerCreditModel.creditReasonValue().should('be.visible')

        customerCreditModel.createdBy().should('contain.text','')
    
        customerCreditModel.creditType().should('contain.text','')
    
        customerCreditModel.amountCredited().should('contain.text','')
    
        customerCreditModel.creditReason().should('contain.text','')

        customerCreditModel.creditAmountvalue().type('10')

        customerCreditModel.creditReasonValue().type('reason1')

        customerCreditModel.submitButton().click()

        customerCreditModel.notificationMsg().should('be.visible')

        customerCreditModel.createdBy().should('contain.text','trapti')
    
        customerCreditModel.creditType().should('contain.text', 'CREDIT')
    
        customerCreditModel.amountCredited().should('contain.text','10')
    
        customerCreditModel.creditReason().should('contain.text','reason1')

        customerCreditModel.customerCreditAmountTab().click()

        customerCreditModel.customerSearchBox().type('admin@iconparkingsystems.com')

        customerCreditModel.customerSearchButton().click()
    
        cy.wait(5000)
        
        customerCreditModel.customerName().should('contain.text', 'admin@iconparkingsystems.com')

        customerCreditModel.customerAmount().should('contain.text', '10')
    
        customerCreditModel.actionButton().should('be.visible').click()

        customerCreditModel.deleteButton().should('be.visible').click()

        customerCreditModel.notificationMsg().should('be.visible')
    
        customerCreditModel.customerCreditAmountTab().click()

        customerCreditModel.customerSearchBox().type('admin@iconparkingsystems.com')

        customerCreditModel.customerSearchButton().click()

        customerCreditModel.customerName().should('contain.text', 'admin@iconparkingsystems.com')

        customerCreditModel.customerAmount().should('contain.text', '0.00')

    })



    //Reservations
    it('reservations', function() 
    {

        cy.viewport(1366, 900)

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        reservations.reservationsTab().click()

        cy.wait(5000)

        reservations.reservationsTab().click()

        cy.url().should('eq','https://admin-test.iconparkingsystems.com/admin/reservations')

        reservations.reservationsHeader().should('contain.text','Reservations')

        reservations.reservationSearch().should('be.visible')
        
        reservations.reservationSearchButton().should('be.visible')

        reservations.reservationSearch().type('nishant.kamboj')

        reservations.reservationSearchButton().click()

        cy.wait(10000)

        reservations.userselect().should('contain.text','Nishant')

        reservations.userselect().click()

    })
    
   

    //My Monthly parking
    it.only('My monthly Parking', function() 
    {

        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})
    
        myParking.myAccountLink().click()
        
        myParking.mymonthlyparkingTab().click()

        myParking.pageHeaderText().should('contain.text','My Monthly Parking')

        myParking.errorMessage().should('contain.text','Sorry! Monthly Parking Account Not Found, Try Adding First')

        myParking.addMonthlyAccountButton().should('be.visible').should('contain.text','Add Monthly Account')

        myParking.addMonthlyAccountButton().should('have.css','background-color','rgba(0, 0, 0, 0)')

        myParking.addMonthlyAccountButton().focus()

        cy.wait(5000)
         
        myParking.addMonthlyAccountButton().should('have.css','background-color','rgb(237, 130, 34)')
         
        myParking.addMonthlyAccountButton().click()

        myParking.registerParkingHeaderText().should('be.visible').should('contain.html','REGISTER MONTHLY PARKING')
        
        myParking.iconParkingAccountText().should('contain.html','Icon Parking Account Number').should('have.css','color','rgb(0, 0, 0)')
        
        myParking.iconParkingAccountMsg().should('contain.text','7 or 8 digits AFTER the dash as found on your invoice. Please DO NOT enter any spaces.')
        
        myParking.accountNumberBox().should('be.visible')
        
        myParking.accountNumberHelp().should('be.visible')
        
        myParking.zipCodeBox().should('be.visible')
        
        myParking.zipCodeHelp().should('be.visible')
        
        myParking.addAccountButton().should('be.visible')
        
        myParking.webAccountBenifits().should('be.visible')
        
        myParking.needHelp().should('be.visible')

        myParking.addAccountButton().click()

        myParking.errorMessageAccount().should('be.visible').should('contain.text','Account Number is required')

        myParking.errorMessageZipCode().should('be.visible').should('contain.text','Billing Zip Code is required')

        myParking.accountNumberBox().type('99999999')

        myParking.zipCodeBox().type('11001')

        myParking.addAccountButton().click()

        myParking.toastMessage().should('be.visible').should('contain.text','Sorry!')

    })     

    
    //EV Charging
    it('EV Charging - Daily', function() 
    {

        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        evCharging.myAccountLink().click()
        
        evCharging.menuButton().click()

        evCharging.searchBox().should('be.enabled')

        evCharging.evChargingLink().should('contain.text', 'EV Charging').click()

        evCharging.findYourSpotButton().should('contain.text','Find your spot').click()

        evCharging.parkingAddressHeader().should('contain.text', 'Chelsea')

        evCharging.parkingSpotAddress().should('be.visible').click()

        cy.wait(5000)

        evCharging.monthlyButton().should('be.visible')

        evCharging.dailyTab().should('be.visible').click()

        evCharging.closeBadge().click()

        cy.get('#parkDetail').scrollTo('bottomLeft')

        cy.wait(3000)

        evCharging.requestInfoButton().click({force : true})

        evCharging.fullName().type('harry potter')

        evCharging.phoneNumber().click({force: true}).type('7894556673')

        evCharging.emailAddress().type('hpotter@gmail.com',{force : true})

        evCharging.phoneChkBox().check({force: true})

        evCharging.promoCode().click({force: true}).type('ICON')

        evCharging.vehickeMake().type('BMW',{force: true})

        evCharging.vehickeModel().click({force:true}).type('X5')

        evCharging.monthlyCustomer().check({force: true})

        evCharging.submitButton().click()
    
    });

    
    //EV Charging
    it('EV Charging - email Coupon', function() 
    {   
    

        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        evCharging.myAccountLink().click()

        evCharging.menuButton().click()

        evCharging.searchBox().should('be.enabled')

        evCharging.evChargingLink().should('contain.text', 'EV Charging').click()

        evCharging.findYourSpotButton().should('contain.text','Find your spot').click()

        evCharging.parkingAddressHeader().should('contain.text', 'Chelsea')

        evCharging.parkingSpotAddress().should('be.visible').click()

        evCharging.monthlyButton().should('be.visible')

        evCharging.dailyTab().should('be.visible').click()
        
        evCharging.closeBadge().click()

        evCharging.getCouponButton().should('contain.text','GET COUPON Space not guaranteed').click()

        evCharging.selectCoupon().click()

        evCharging.saveCouponButton().should('contain.text','Save')

        evCharging.emailButton().should('contain.text','Email')

        evCharging.printButton().should('contain.text','Print')

        evCharging.emailButton().click({force: true})

        evCharging.emailAddressField().type('hpotter@gmail.com',{force: true})

        evCharging.emailCouponButton().click({force:true})

        evCharging.thankYouMessage().should('contain.text','Thank you for sending a coupon.')

    
    });



    it('EV Charging - Save Coupon', function() 
    {

        cy.viewport(1366, 900)

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        evCharging.myAccountLink().click()

        evCharging.menuButton().click()

        evCharging.searchBox().should('be.enabled')

        evCharging.evChargingLink().should('contain.text', 'EV Charging').click()

        evCharging.findYourSpotButton().should('contain.text','Find your spot').click()

        evCharging.parkingAddressHeader().should('contain.text', 'Chelsea')

        evCharging.parkingSpotAddress().should('be.visible').click()

        evCharging.monthlyButton().should('be.visible')
        
        evCharging.dailyTab().should('be.visible').click()

        evCharging.closeBadge().click()

        evCharging.getCouponButton().should('contain.text','GET COUPON Space not guaranteed').click()

        evCharging.selectCoupon().click({force: true})

        evCharging.saveCouponButton().click({force: true})

        evCharging.saveCouponMessage().should('contain.text','Thank you for saving a coupon.')

        evCharging.myAccountButton().click()

        evCharging.deleteCouponButton().click()

        cy.clearLocalStorage()

    });

    //Business 2 Business solutions
    it('business 2 business solution', function() 
    {   
    
        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        b2bsolutions.myAccountLink().click()

        b2bsolutions.menuButton().click()

        b2bsolutions.b2bSaleslink().should('contain.text', 'Business to Business Sales').click()

        cy.url().should('eq','https://test.iconparkingsystems.com/b2bsolutions')

        b2bsolutions.b2bHeader().should('contain.text', 'Icon business to business solutions.').and('have.css','text-transform','uppercase').and('have.css','font-size','45px')

        b2bsolutions.b2bBenifits().should('contain.text','All the benefits of Icon now available to your corporation.').should('have.css','font-size','25px')

        b2bsolutions.b2bEmailHyperLink().should('be.visible')

        b2bsolutions.b2bEmailHyperLink().should('have.attr','href','mailto:B2Bsolutions@iconparking.com')


    })
        

    //Neighborhoods
    it('neighborhoods', function() 
    {   
    
        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        neighborhoods.myAccountLink().click()

        neighborhoods.menuButton().click()

        neighborhoods.neighborhoodsLink().should('contain.text','Neighborhoods').click()

        neighborhoods.neighborhoodsURL().should('contain','/neighborhoods/central-park')

        neighborhoods.neighborhoodMaps().should('be.visible')

        neighborhoods.timesSquare().click()

        neighborhoods.neighborhoodsURL().should('contain','times')

        neighborhoods.murrayHill().click()

        neighborhoods.neighborhoodsURL().should('contain','murray')

        neighborhoods.lowerEastSide().click({force: true})

        neighborhoods.neighborhoodsURL().should('contain','lower')

    })


    //Vehicle Request
    it('vehicle request', function() 
    {   
    
        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        vehicleRequest.myAccountLink().click()

        vehicleRequest.vehicleRequestTab().should('contain','Vehicle Request').click()

        vehicleRequest.allGaragerButton().should('be.visible').should('have.text','See All Garages').should('have.css','background-color','rgba(0, 0, 0, 0)')
        
        vehicleRequest.allRequestButton().should('be.visible').should('contain','Vehicle Request')

        vehicleRequest.garageList().should('be.visible')
        
        const getIframeDocument = () => {
        return cy.get('#iframePage').its('0.contentDocument').should('exist')
        }

        const getIframeBody = () => {
        // get the document
        return getIframeDocument()
        // automatically retries until body is loaded
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
        }

        //new approach
        cy.get('#iframePage')
        .then(($iframe) => {
          const $body = $iframe.contents().find('body')

        //cy.wrap($body).find('.col-sm-6 ng-binding')
        //cy.get('.col-sm-6 ng-binding').click()
       
})

        //getIframeBody().find('col-sm-6 ng-binding').should('be.visible')

    })

    //Search for parking
    it('search for parking', function() 
    {   
    
        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        searchHomePage.myAccountLink().click()

       // cy.wait(5000)

        searchHomePage.searchBox().clear().type('west',{ delay: 100 })

        searchHomePage.selectAddress().click({force: true})

        searchHomePage.addressPopUp().should('be.visible')
        
        searchHomePage.fullAddress().should('contain.text','165 W. 66th Street')

        searchHomePage.parkigImage().should('be.visible').should('have.attr','alt','165 West 66th Street')

        cy.get('#parkDetail').scrollTo('bottomLeft')

        searchHomePage.amenitiesList1().should('be.visible').should('contain','Motorcycle Parking')
        searchHomePage.amenitiesList2().should('be.visible').should('contain','Open 24 Hours')
        searchHomePage.amenitiesList3().should('be.visible').should('contain','Indoor Parking')
        searchHomePage.amenitiesList4().should('be.visible').should('contain','Oversized Vehicles')
        searchHomePage.amenitiesList5().should('be.visible').should('contain','Monthly Parking')

    })


    //filter parking search
    it('filter parking search', function() 
    {   
    
        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        searchHomePage.myAccountLink().click()

        searchHomePage.searchBox().clear().type('west',{ delay: 100 })

        searchHomePage.selectEvent().click({force: true})

        searchHomePage.filterButton().should('be.visible').should('contain.text','Filters')

        searchHomePage.parkingPlaceMap().should('be.visible')

        searchHomePage.filterButton().click()

        searchHomePage.teslaChargerFIlter().click()

        searchHomePage.motorcycleParking().click()

        searchHomePage.closeFIlterButton().click()

        searchHomePage.parkingPlaceMap().should('not.be.visible')

        searchHomePage.filterButton().click()
        searchHomePage.motorcycleParking().click()
        searchHomePage.teslaChargerFIlter().click()
        searchHomePage.closeFIlterButton().click()
        cy.wait(5000)
        searchHomePage.parkingPlaceMap().should('be.visible')


    })

    //Monthly parking booking
    it('monthly parking booking', function() 
    {   
    
        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        monthlyParkingBooking.myAccountLink().click()

        monthlyParkingBooking.homeButton().should('be.visible').click()

        monthlyParkingBooking.monthlyBookingBtn().should('contain.text', 'monthly').should('have.css','font-size','15px').click()
        
        monthlyParkingBooking.searchBox().should('be.visible').clear().type('Central Park New York, NY, USA',{ delay: 300 })

        monthlyParkingBooking.centralParkAddress().click({force:true})

        monthlyParkingBooking.selectAddressCP().click({force:true})

        monthlyParkingBooking.parkingImg().should('be.visible')

        monthlyParkingBooking.parkingName().should('contain.text','1056 Fifth Ave')

        monthlyParkingBooking.buyMonthlyOverlayButton().should('contain.text','$718.06 | Buy Monthly').click()

        monthlyParkingBooking.firstName().should('be.visible').clear().type('harry')

        monthlyParkingBooking.lastName().should('be.visible').clear({force: true}).type('potter')

        monthlyParkingBooking.emailId().should('be.visible').clear({force:true}).type('hpotter@gmail.com')

        monthlyParkingBooking.phoneNumber().should('be.visible').clear({force:true}).type('9767678787')

        monthlyParkingBooking.conpanyName().should('be.visible').clear({force:true}).type('hogowarts')

        monthlyParkingBooking.addressLine1().should('be.visible').clear({force:true}).type('room no 1')

        monthlyParkingBooking.addressLine2().should('be.visible').clear({force:true}).type('building n01')

        monthlyParkingBooking.cityName().should('be.visible').clear({force:true}).type('London')

        monthlyParkingBooking.stateCode().should('be.visible').clear({force:true}).type('CA')

        monthlyParkingBooking.zipCode().should('be.visible').clear({force:true}).type('087898')

        monthlyParkingBooking.vehicheMake().should('be.visible').clear({force:true}).type('BMW')

        monthlyParkingBooking.vehicleModel().should('be.visible').clear({force:true}).type('X5')

        monthlyParkingBooking.licensePlate().should('be.visible').clear({force:true}).type('Ny12ne7623')

        monthlyParkingBooking.vehicleColor().should('be.visible').clear({force:true}).type('black')

        monthlyParkingBooking.additionalDriver1().should('be.visible').clear({force:true}).type('ron')

        monthlyParkingBooking.additionalDriver2().should('be.visible').clear({force:true}).type('melfoy')

        monthlyParkingBooking.additionalDriver3().should('be.visible').clear({force:true}).type('nevil')

        monthlyParkingBooking.nameOnCard().should('be.visible').clear({force:true}).type('harry potter')

        monthlyParkingBooking.cardNumber().should('be.visible').clear({force:true}).type('4575002620096754')

        monthlyParkingBooking.expireDate().should('be.visible').select('03',{force: true})
        monthlyParkingBooking.expireYear().should('be.visible').select('24',{force: true})

        monthlyParkingBooking.securityCode().should('be.visible').clear({force:true}).type('521')

        monthlyParkingBooking.promoCode().should('be.visible').clear({force:true}).type('ICON10')

        monthlyParkingBooking.zipCodePayment().should('be.visible').clear({force:true}).type('098787')

        monthlyParkingBooking.zipCode().should('be.visible').type('07035', {force:true})

        monthlyParkingBooking.price().should('be.visible').should('contain.text','$718.06')
        monthlyParkingBooking.tax().should('be.visible').should('contain.text',' $313.94')
        monthlyParkingBooking.totalAmount().should('be.visible').should('contain.text','$850.00')
        
        monthlyParkingBooking.submitBtn().should('be.visible').click()

        monthlyParkingBooking.modelpop().should('be.visible').should('contain.text','code discount will be applied to the final credit card charge')

        monthlyParkingBooking.gotItButton().click()

        monthlyParkingBooking.errorToastMessage().should('be.visible').should('contain.text','validate payment')

    })


    //FAQ Section
    it('faq section', function() 
    {   
     
         cy.viewport(1366, 900)
        // cy.viewport('ipad-mini','portrait')
     
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})
 
        faq.myAccountLink().click()

        faq.menuButton().click()

        faq.faqlink().should('be.visible').should('contain.text','FAQ').click()

        faq.commonSection().should('be.visible').should('contain.text','Common Questions')

        faq.bookingSection().should('be.visible').should('contain.text','Booking')

        faq.pageHeader().should('contain.text','How can we help you?')

        faq.faqTitle().should('contain.text','Frequently asked questions')

        faq.faqSearch().should('be.visible').should('have.attr','placeholder','What are you looking for?')

        faq.faqSearch().type('auto pay')

        faq.faqNoResults().should('be.visible')

        faq.faqSearch().clear().type('account')

        faq.selectArticle().should('be.visible').should('contain.text','How do I change my monthly parking location?').click()

        faq.faqResult().should('contain.text','Call the monthly sales office at 1 (888) 705-7845.').should('be.visible')

    })
	
	
	//News & Tips section
     it('news & Tips section', function() 
     {   
     
         cy.viewport(1366, 900)
        // cy.viewport('ipad-mini','portrait')
     
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})
 
        newsTips.myAccountLink().click()

        newsTips.menuButton().click()

        newsTips.newsTipsLink().should('contain','News + Tips').click()

        newsTips.pageHeader().should('contain.text','NEWS')

        newsTips.recentPost().should('be.visible')

        newsTips.catagoriesSection().should('be.visible')

        cy.url().should('eq','https://test.iconparkingsystems.com/cms/news/')

        newsTips.nextPageLink().should('be.visible').click()

        cy.url().should('contain','news/page/2/')

        cy.scrollTo('bottom')

        newsTips.recentPost1().should('be.visible').click()

        cy.get('iframe').should('be.visible')

        newsTips.facebookLink().should('be.visible').should('have.attr','alt','Facebook')

        newsTips.backButton().should('be.visible').click()

        cy.url().should('eq','https://test.iconparkingsystems.com/cms/news/')

        newsTips.readMore().should('be.visible').should('have.attr','href','https://test.iconparkingsystems.com/cms/news/earth-day-eco-tips-icon-quik-park/')

        newsTips.readMore().click()

        cy.url().should('eq','https://test.iconparkingsystems.com/cms/news/earth-day-eco-tips-icon-quik-park/')

        newsTips.authorName().should('be.visible').should('have.attr','title','View all posts by Edythe Wilson')


    })



     //About Us
     it('about us section', function() 
     {   
     
         cy.viewport(1366, 900)
        // cy.viewport('ipad-mini','portrait')
     
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})
 
        aboutUs.myAccountLink().click()

        aboutUs.menuButton().click()

        aboutUs.aboutUslink().should('contain',' About Us').click()

        aboutUs.pageHeader().should('contain','About Us').should('have.css','color','rgb(237, 130, 34)').should('have.css','font-size','45px')

        aboutUs.parkingImage().should('be.visible').should('have.attr','src','https://test.iconparkingsystems.com/cms/wp-content/uploads/2018/06/Park-Sign-reversed.png')

        aboutUs.coreValues().should('contain','OUR CORE VALUES').should('be.visible')

        aboutUs.passionInsparation().should('have.attr','src','https://test.iconparkingsystems.com/cms/wp-content/uploads/2018/06/core-heart.png').should('be.visible')

        aboutUs.integrityTest().should('have.attr','src','https://test.iconparkingsystems.com/cms/wp-content/uploads/2018/06/core-trust.png').should('be.visible')

        aboutUs.serviceExelence().should('have.attr','src','https://test.iconparkingsystems.com/cms/wp-content/uploads/2018/06/core-excellence.png').should('be.visible')

        aboutUs.locations().should('be.visible').should('contain','Locations').and('contain','200')

        aboutUs.carsParkedGlobally().should('be.visible').should('contain','Cars Parked Daily').and('contain','40,000')

        aboutUs.yearsInBusiness().should('be.visible').should('contain','Years in business').and('contain','50')

        aboutUs.tagLine().should('be.visible').should('contain','WE PARK NEW YORK™')

    })


    //careers section
    it('careers', function() 
    {   
    
        cy.viewport(1366, 900)
        
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        careers.myAccountLink().click()

        careers.menuButton().click()

        careers.careersLink().should('contain','Careers').click()

        //careers.pageHeader().should('contain','BE AN ICON').and('have.css','color','rgb(237, 130, 34)').and('have.css','font-size','45px')

        careers.parkingHero().should('have.css','color','rgb(0, 0, 0)').and('have.css','font-size','25px').and('contain','THE SUPERHEROES OF PARKING')

        careers.applyButton().should('be.visible').and('contain','Apply Online').and('have.attr','href','/employment-application')

        careers.applyButton().click()

        cy.url().should('eq','https://test.iconparkingsystems.com/employment-application')

        careers.pageImage().should('be.visible')



        const getIframeDocument = () => {
            return cy.get('.clearfix > .mar-top-0').its('0.contentDocument').should('exist')
            }
    
            const getIframeBody = () => {
            // get the document
            return getIframeDocument()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
            }
    
            //new approach
            cy.get('.clearfix > .mar-top-0')
            .then(($iframe) => {
              const $body = $iframe.contents()//.find('body')
    
           //cy.get($body).find('#dgJob > tbody > tr:nth-child(2) > td:nth-child(1) > a')
           //cy.get('#dgJob > tbody > tr:nth-child(2) > td:nth-child(1) > a').click()
            })

    })


             


})      