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

/// <reference types="Cypress" />

/*
 * Test Suite for IconParking System
 */
describe.only('parkingsystem 2- ', function()
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
    it('MY Promo Code', function() 
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
    it('iconRewards', function() 
    {

        cy.viewport(1366, 900)

        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        iconrewards.myAccountLink().click()

        iconrewards.iconRewardTab().click()

        //iconrewards.rewardPopUp().should('be.visible')
    
        //iconrewards.rewardPopUpText().should('contain.text', 'You have Rewards Member Status')
     
        //iconrewards.closeRewardPopUp().should('contain.text','Close')

       //iconrewards.closeRewardPopUp().click()

        iconrewards.rewardsHeader().should('contain.text','Icon Rewards')

        iconrewards.viewBenifits().should('be.visible')
    
        iconrewards.viewBenifits().should('have.css', 'color','rgb(0, 0, 0)')
    
        iconrewards.viewBenifits().should('have.css', 'font-size','15px')
    
        iconrewards.viewBenifits().should('have.css', 'cursor','pointer')

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
    it('My monthly Parking', function() 
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

        //evCharging.closeBadge().click()

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
        
        //evCharging.closeBadge().click()

        evCharging.getCouponButton().should('contain.text','GET COUPON Space not guaranteed').click()

        evCharging.selectCoupon().click({force: true})

        evCharging.saveCouponButton().should('contain.text','Save')

        evCharging.emailButton().should('contain.text','Email')

        evCharging.printButton().should('contain.text','Print')

        evCharging.emailButton().click({force: true})

        evCharging.emailAddressField().type('hpotter@gmail.com',{force: true})

        cy.get('#floating-label-google-map2 > :nth-child(2) > .row > :nth-child(1) > .btn').should('be.visible').click()

        //evCharging.emailCouponButton().click({force:true})

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

        //evCharging.closeBadge().click()

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

        b2bsolutions.b2bHeader().should('contain.text', 'Welcome Back to Work! You’re in great company.').and('have.css','color','rgb(255, 255, 255)').and('have.css','font-size','40px')

        b2bsolutions.b2bBenifits().should('contain.text','Join these great companies and enjoy all of the benefits of').should('have.css','font-size','30px')

        b2bsolutions.b2bForm().should('be.visible')

        b2bsolutions.b2bForm().should('contain','Reserve your guaranteed spots now!')


    })
        

    //Neighborhoods
    it('neighborhoods', function() 
    {   
    
        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        neighborhoods.myAccountLink().click()

        neighborhoods.menuButton().should('be.visible').click()

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


})      