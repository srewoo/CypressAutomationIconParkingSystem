class evCharging{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //menu button
    menuButton(){
        return cy.get('.toggleMenuBtn > fa > .fa')
    }

    //search box
    searchBox(){
        return cy.get('#auto_suggest_input_field_side')
    }

    //EV Charging link
    evChargingLink(){
        return cy.get('.sideBarNavMob > :nth-child(10) > a')
    }

    //'Find your Spot' button
    findYourSpotButton(){
        return cy.get('.text-wrap > .clearfix > .btn')
    }

    //parking addres header
    parkingAddressHeader(){
        return cy.get('#heading_chelsea')
    }

    //A parking spot
    parkingSpotAddress(){
        return cy.get('#contnent_chelsea > :nth-child(2) > .well')
    }

    //parking spot address details
    parkingSpotAddressDetails(){
        return cy.get('#contnent_chelsea > :nth-child(2) > .well > .text-uppercase > a')
    }

    //'monthly' button
    monthlyButton(){
        return cy.get('#monthly')
    }

    //Buy monthly Parking button
    buyMonthlyParkingButton(){
        return cy.get('.col-sm-5 > .book-btns-wrapper > #dailymonthlybutton')
    }

    //Daily Tab
    dailyTab(){
        return cy.get('#daily')
    }

    //error text
    errorText(){
        return cy.get('.text-danger')
    }

    //close badge
    closeBadge(){
        return cy.get('.close-badge')
    }

    //parking address
    parkingAddress(){
        return cy.get('.four-cpn-box > .text-primary')
    }


    //requrst info button
    requestInfoButton(){
        return cy.get('.customeRow > :nth-child(1) > :nth-child(2)')
        cy.wait(5000)
    }

    //Full Name
    fullName(){
        return cy.get(':nth-child(3) > .col-xs-12 > :nth-child(2) > .form-control')
    }

    //phone number
    phoneNumber(){
        return cy.get('.col-xs-12 > :nth-child(3) > .form-control')
    }

    //email address
    emailAddress(){
        return cy.get(':nth-child(3) > .col-xs-12 > :nth-child(4) > .form-control')
    }

    //phone checkbox
    phoneChkBox(){
        return cy.get('#phone_comm')
    }

    //email check box
    emailChkBox(){
        return cy.get('#email_comm')
    }

    //promo code
    promoCode(){
        return cy.get('#input')
    }

    //vehicle Make
    vehickeMake(){
        return cy.get('#vehicle_make')
    }

    //vehicle model
    vehickeModel(){
        return cy.get('#vehicle_model')
    }

    //monthly customer
    monthlyCustomer(){
        return cy.get('#monthly_customer')
    }

    //daily customer
    dailyCustomer(){
        return cy.get('#daily_customer')
    }

    //SUbmit button
    submitButton(){
        return cy.get('.mar-bottom-0 > .btn')
    }

    //get coupon button
    getCouponButton(){
        return cy.get('.col-sm-5 > .book-btns-wrapper > #checkcoupon')
    }

    //Select Coupon
    selectCoupon(){
        return cy.get(':nth-child(1) > .well > .flex-row > .align-self-end > .btn')
    }

    //Save coupon button
    saveCouponButton(){ 
        return cy.get('#couponprint2232 > .ResponsiveCouponsPrint > main > .garage-pad > #couponvalid > #mailcoupon')
       // cy.get('.owl-item.active > .item > .couponDataSection > .ResponsiveCouponsPrint > main > .garage-pad > #couponvalid > #mailcoupon')
    }

    //Email button
    emailButton(){
    return cy.get('#couponprint2232 > .ResponsiveCouponsPrint > main > .garage-pad > #couponvalid > :nth-child(2)')
    }
    //print button
    printButton(){
    return cy.get('#couponprint2232 > .ResponsiveCouponsPrint > main > .garage-pad > #couponvalid > :nth-child(3)')
    }

    //email address field
    emailAddressField(){
        return cy.get('#floating-label-google-map1 > :nth-child(1) > .form-control')
    }

    //email coupon button
    emailCouponButton(){
        return cy.get('#floating-label-google-map1 > :nth-child(2) > .row > :nth-child(1) > .btn')
    }

    //cancel Button
    cancelButton(){
        return cy.get('#floating-label-google-map1 > :nth-child(2) > .row > :nth-child(1) > .btn')
    }

    //confirmation message
    thankYouMessage(){
        return cy.get('#thankemail > .text-primary')
    }

    //coupon save message
    saveCouponMessage(){
        return cy.get('#thanksave > .text-primary')
    }

    //My Account Button
    myAccountButton(){
        return cy.get('.btn-cont > .btn-fill')
    }

    //delete coupon button
    deleteCouponButton(){
        return cy.get('.pull-right > fa > .fa')
    }
}

export default evCharging