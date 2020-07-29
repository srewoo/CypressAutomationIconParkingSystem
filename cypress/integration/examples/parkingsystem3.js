import VehicleRequest from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/vehicleRequest.js'
import SearchHomePage from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/searchHomePage.js'
import MonthlyParkingBooking from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/monthlyParkingBooking.js'
import Faq from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/faq.js'
import NewsTips from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/newsTips.js'
import AboutUs from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/aboutUs.js'
import Careers from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/careers.js'
import HomePage from  'D:/CypressWorkSpace/cypress/integration/pageObjectModel/homePage.js'
import BusinessSolution from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/businessSolution.js'
import Reservations from 'D:/CypressWorkSpace/cypress/integration/pageObjectModel/reservations.js'


/// <reference types="Cypress" />

/*
 * Test Suite for IconParking System
 */
describe('parkingsystem 3 - ', function()
{

    const vehicleRequest = new VehicleRequest
    const searchHomePage = new SearchHomePage
    const monthlyParkingBooking = new MonthlyParkingBooking
    const faq = new Faq
    const newsTips = new NewsTips
    const aboutUs = new AboutUs
    const careers = new Careers
    const homepage =new HomePage
    const businessSolution = new BusinessSolution
    const reservations = new Reservations



    before(function(){

        cy.fixture('users.json').then(function(data){

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

        searchHomePage.searchBox().clear().type('165 WEST 66TH STREET PARKING LLC',{ delay: 100 })

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

        searchHomePage.searchBox().clear().type('165 WEST 66TH STREET PARKING LLC',{ delay: 100 })

        searchHomePage.selectEvent().click({force: true})

        searchHomePage.filterButton().should('be.visible').should('contain.text','Filters')

        //searchHomePage.parkingPlaceMap().should('be.visible')

        searchHomePage.filterButton().click()

        searchHomePage.teslaChargerFIlter().click({force: true})

        searchHomePage.motorcycleParking().click({force: true})

        searchHomePage.closeFIlterButton().click({force: true})

        searchHomePage.parkingPlaceMap().should('not.be.visible')

        searchHomePage.filterButton().click()
        searchHomePage.motorcycleParking().click({force: true})
        searchHomePage.teslaChargerFIlter().click({force: true})
        searchHomePage.closeFIlterButton().click({force: true})
        cy.wait(5000)
       // searchHomePage.parkingPlaceMap().should('be.visible')


    })

    //Monthly parking booking
    it('monthly parking booking', function() 
    {   
    
        cy.viewport(1366, 900)
    
        cy.login({email: 'trapti.saxena@outworx.com', password: 'Test@123'})

        monthlyParkingBooking.myAccountLink().click()

        monthlyParkingBooking.homeButton().should('be.visible').click()

        monthlyParkingBooking.monthlyBookingBtn().should('contain.text', 'MONTHLY').should('have.css','font-size','15px').click()
        
        monthlyParkingBooking.searchBox().should('be.visible').clear().type('1056 5TH AVENUE PARKING LLC',{ delay: 300 })

        cy.get('#llctext0').click();

        cy.get('.customeBtn').click();

        //monthlyParkingBooking.centralParkAddress().click({force:true})

       // cy.get('.search-section > .btn-fill').click()

       // monthlyParkingBooking.selectAddressCP().click({force:true})

        monthlyParkingBooking.parkingImg().should('be.visible')

        monthlyParkingBooking.parkingName().should('contain.text','1056 Fifth Ave')

        monthlyParkingBooking.buyMonthlyOverlayButton().should('contain.text',' | Buy Monthly').click()

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

        //monthlyParkingBooking.price().should('be.visible').should('contain.text','$718.06')
        //monthlyParkingBooking.tax().should('be.visible').should('contain.text',' $313.94')
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

        //aboutUs.tagLine().should('be.visible').should('contain','WE PARK NEW YORK™')

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

    //Home page
    it('home page', function() {

        cy.visit('https://test.iconparkingsystems.com/')

        homepage.iconRewardLogo().should('be.visible')
            .and('have.attr', 'src','../../assets/img/new-homepage/b2b-img/reward.png')
            .and('have.css','text-align','center')

        homepage.dailyTab().click()

        homepage.enterenceDate().should('be.visible')

        homepage.monthlyTab().click()

        homepage.enterenceDate().should('not.have.text', 'ENTRANCE DATE').should('contain','MONTHLY PARKING STARTING')

        homepage.signUpLink().click()

        cy.url().should('eq','https://test.iconparkingsystems.com/icon-rewards-register')

        cy.visit('https://test.iconparkingsystems.com/')

        if(homepage.colapseMessage().should('be.visible')){

            homepage.closeColapseMessage().click()

        }
        else{
            console.log('baner not present')
        }

        homepage.parkingForBusiness().should('be.visible').and('contain','Icon For Business - Safe & Seamless Parking for Your Company')
        homepage.parkingSafe().should('be.visible').and('contain','Defining a New Standard of Parking Garage Cleanliness')
        homepage.firstResponders().should('be.visible').and('contain','$15 Parking Rate Up to 24 Hours')

        homepage.iconEmail().should('be.visible').should('contain','iconforbusiness@iconparking.com')

        homepage.parkingPearks().should('contain','Parking has it’s perks').and('have.css','font-size','32px')

        homepage.parkingDiscounts().should('be.visible').and('contain','Receive member discounts on most direct hourly or daily parking purchases.')
        homepage.anualBonus().should('be.visible').and('contain','Annual Bonus')
        homepage.bestPricing().should('be.visible').and('contain','Best Pricing')

        homepage.mobileNumber().type('9656545434')
        homepage.sendButton().click()

        homepage.appleSTorelink().should('be.visible')
        homepage.androidStore().should('be.visible')

        homepage.emailSubscription().type('abcd')
        homepage.subscribeButton().click()

        cy.get('.toast-title').should('contain','Sorry')

        cy.get('.toast-close-button').click()
        
        //Random number generator
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`

        homepage.emailSubscription().type(testname + '@gmail.com')
        homepage.subscribeButton().click()

        //cy.wait(5000)

        // cy.get('.toast-title').should('contain','sucess!')

        homepage.emailSubscription().type('abcd@gmail.com')
        homepage.subscribeButton().click()

        //cy.get('.toast-title').should('contain','Already added')

        homepage.tagLine().should('contain','We Park New York')


    })



    it('business solution', function()
    {

        cy.visit('https://test.iconparkingsystems.com/')

        businessSolution.businessSolutionLink().click({force:true})

        businessSolution.pageHeader().should('contain','Welcome Back to Work! You’re in great company.')
            .and('have.css','color','rgb(255, 255, 255)')


        businessSolution.formpanel().should('be.visible')

        businessSolution.brandLogo().should('be.visible')





    })


    it('sign up',function(){



        cy.visit('https://test.iconparkingsystems.com/')

        homepage.iconRewardLogo().should('be.visible')
            .and('have.attr', 'src','../../assets/img/new-homepage/b2b-img/reward.png')
            .and('have.css','text-align','center')

        homepage.dailyTab().click()

        homepage.signUpLink().click()

        cy.url().should('eq','https://test.iconparkingsystems.com/icon-rewards-register')

        homepage.firstName().type(this.data.firstname)
        homepage.lastName().type(this.data.lastName)
        homepage.emailId().type(this.data.email)
        homepage.phoneNumber().type(this.data.phoneNumberWrong)
        homepage.password().type(this.data.password)
        homepage.confirmPassword().type(this.data.confirmPassword)
        homepage.inviteCode().should('be.visible')

        homepage.checkbox().click()

        homepage.termsHeader().should('be.visible').and('contain','ENROLL IN ICON REWARDS')
        homepage.acceptButton().should('be.visible').and('contain','I AGREE').and('have.css','font-size','15px')
        homepage.cancelButton().should('be.visible').and('contain','CANCEL').and('have.css','font-size','15px')

        homepage.acceptButton().click()

        homepage.enrollButton().should('be.enabled').click()


        cy.get('.toast-title').should('be.visible').and('contain','Sorry!')

        homepage.phoneNumber().clear().type(this.data.phoneNumberCorrect)

        homepage.enrollButton().should('be.enabled').click()

    })


    //send reservation details by Email
    it.only('send reservation details by Email', function() 
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

        reservations.emailField().clear().type(this.data.email)

        reservations.sendButton().click()

        cy.wait(3000)

        reservations.tostMessage().should('be.visible')
        

    })



})      