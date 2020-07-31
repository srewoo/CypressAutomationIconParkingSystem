class requestInfo{

    
    //author name
    monthlyParkingTab(){
        return cy.get('.sideBarNavMob > :nth-child(4) > a')
    }

    //request information button
    requestInfoButton(){
        return cy.get('[routerlink="/monthly-parking-information"]')
    }

    //parking info header
    parkingInfoHeader(){
        return cy.get('.container > .text-primary')
    }

    //request info form fields
    parkingLocation(){
        return cy.get('#auto_suggest_input')
    }

    fullName(){
        return cy.get(':nth-child(3) > .col-xs-12 > :nth-child(2) > .form-control')
    }

    phoneNumber(){
        return cy.get('.col-xs-12 > :nth-child(3) > .form-control')
    }

    email(){
        return cy.get('.col-xs-12 > :nth-child(4) > .form-control')
    }

    phoneCheckBox(){
        return cy.get('#phone_comm')
    }

    vehicheMake(){
        return cy.get('#vehicle_make')
    }

    vehicleModel(){
        return cy.get('#vehicle_model')
    }

    currentCustomerNo(){
        return cy.get('#daily_customer')
    }

    submitButton(){
        return cy.get('.mar-bottom-0 > .btn')
    }

    toastMessage(){
        return cy.get('.toast-title')
    }

    thankYouMessage(){
        return cy.get('.well > .text-primary')
    }

    




}


export default requestInfo