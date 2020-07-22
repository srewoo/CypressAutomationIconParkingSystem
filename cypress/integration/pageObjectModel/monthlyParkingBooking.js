class monthlyParkingBooking{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //home button
    homeButton(){
        return cy.get('.navbar-brand > img')
    }

    //Monthly booking button
    monthlyBookingBtn(){
        return cy.get('.btn-group > :nth-child(2)')
    }

    //Search Box
    searchBox(){
        return cy.get('#auto_suggest_input_field')
    }

    //Central part address
    centralParkAddress(){
        return cy.get('#text0')
    }

    //select Address
    selectAddressCP(){
        return cy.get('[style="width: 75px; height: 75px; overflow: hidden; position: absolute; opacity: 0; cursor: pointer; touch-action: none; left: 288px; top: -117px; z-index: -42;"] > img')
    }

    //Parking name
    parkingName(){
        return cy.get('#parkfull_name')
    }

    //parking image
    parkingImg(){
        return cy.get('#parkDetail > .parkImg > .full-width')
    }

    //Buy monthly button
    buyMonthlyButton(){
        return cy.get('.col-sm-5 > .book-btns-wrapper > #dailymonthlybutton')
    }

    //Buy monthly button
    buyMonthlyOverlayButton(){
        return cy.get('.overlay > .btn')
    }

    //Rate details header
    rateDetails(){
        return cy.get('.rate-details > .text-primary')
    }

    //rate detaild help button
    rateDetailsHelpBtn(){
        return cy.get('.text-primary > img')
    }

    //account information headder
    accountInfoHeader(){
        return cy.get('.col-sm-8 > :nth-child(8)')
    }

    //show hide form
    showHideForm(){
        return cy.get('.btn-default')
    }

    //First name
    firstName(){
        return cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control')
    }

    //Last Name
    lastName(){
        return cy.get('#floating-label-buy-monthly > :nth-child(1) > :nth-child(2) > .form-group > .form-control')
    }

    //email
    emailId(){
        return cy.get('#floating-label-buy-monthly > :nth-child(1) > :nth-child(3) > .form-group > .form-control')
    }

    //Phone Number
    phoneNumber(){
        return cy.get(':nth-child(1) > :nth-child(4) > .form-group > .form-control')
    }

    //company name
    conpanyName(){
        return cy.get(':nth-child(1) > :nth-child(5) > .form-group > .form-control')
    }

    //address line1
    addressLine1(){
        return cy.get(':nth-child(2) > :nth-child(1) > .form-group > .form-control')
    }

    //Address line 2
    addressLine2(){
        return cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-control')
    }

    //city
    cityName(){
        return cy.get(':nth-child(2) > :nth-child(3) > .form-group > .form-control')
    }

    //state
    stateCode(){
        return cy.get(':nth-child(2) > :nth-child(4) > .form-group > .form-control')
    }

    //zip code
    zipCode(){
        return cy.get(':nth-child(2) > :nth-child(5) > .form-group > .form-control')
    }

    //vehiche info
    vehicheMake(){
        return cy.get(':nth-child(6) > :nth-child(1) > .form-group > .form-control')
    }

    vehicleModel(){
        return cy.get(':nth-child(6) > :nth-child(2) > .form-group > .form-control')
    }

    licensePlate(){
        return cy.get(':nth-child(6) > :nth-child(3) > .form-group > .form-control')
    }

    vehicleColor(){
        return cy.get(':nth-child(6) > :nth-child(4) > .form-group > .form-control')
    }

    //Additional information
    additionalDriver1(){
        return cy.get(':nth-child(10) > .col-sm-6 > :nth-child(1) > .form-control')
    }

    additionalDriver2(){
        return cy.get('.col-sm-6 > :nth-child(2) > .form-control')
    }

    additionalDriver3(){
        return cy.get('.col-sm-6 > :nth-child(3) > .form-control')
    }

    //Payment
    nameOnCard(){
        return cy.get(':nth-child(13) > :nth-child(1) > .form-group > .form-control')
    }

    cardNumber(){
        return cy.get(':nth-child(13) > :nth-child(2) > .form-group > .form-control')
    }

    expireDate(){
        return cy.get(':nth-child(13) > :nth-child(3) > .form-group > .form-control')
    }

    expireYear(){
        return cy.get(':nth-child(13) > :nth-child(4) > .form-group > .form-control')
    }

    securityCode(){
        return cy.get(':nth-child(14) > :nth-child(1) > .form-group > .input-group > .form-control')
    }

    promoCode(){
        return cy.get(':nth-child(15) > .col-sm-4 > .form-group > .input-group > .form-control')
    }

    zipCodePayment(){
        return cy.get(':nth-child(14) > :nth-child(2) > .form-group > .form-control')
    }

    //Price
    price(){
        return cy.get(':nth-child(1) > .clearfix > .currentCarD')
    }

    //tax
    tax(){
        return cy.get(':nth-child(3) > .clearfix > .currentCarD')
    }

    //total
    totalAmount(){
        return cy.get(':nth-child(5) > .clearfix > .currentCarD > .fa-2x')
    }

    //submit
    submitBtn(){
        return cy.get('[type="submit"]')
    }

    //model pop up
    modelpop(){
        return cy.get('.modal-content')
    }

    //Got it Button
    gotItButton(){
        return cy.get('.btn-center-xs > :nth-child(1)')
    }

    //toast message
    errorToastMessage(){
        return cy.get('.toast-error')
    }


}


export default monthlyParkingBooking
