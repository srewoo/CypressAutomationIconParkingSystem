class homePage{

    //icon reward
    iconRewardLogo(){
        return cy.get('.contentTopBar > img')
    }

    //sign up text
    signUpLink(){
        return cy.get('#loginPopup > u')
    }

    //Monthly Tab
    monthlyTab(){
        return cy.get('.btn-group > .border-left')
    }

    //daily Tab
    dailyTab(){
        return cy.get('.border-radius-left-top')
    }

    //enterence date
    enterenceDate(){
        return cy.get(':nth-child(1) > :nth-child(1) > .form-group > label')
    }

    //icon parking logo
    iconLogo(){
        return cy.get('.clearfix > :nth-child(1) > img')
    }

    //learnMore
    learnMore(){
        return cy.get(':nth-child(1) > .clearfix > .btn')
    }

    //tag line
    tagLine(){
        return cy.get('.navbar-header > .ml-2')
    }

    //cloapse message
    colapseMessage(){
       return cy.get('#collapseBasic')
    }

    //close colapse message
    closeColapseMessage(){
        return cy.get('.crossDark')
    }

    //search available button
    searchAvailableButton(){
        return cy.get('.search-section > .btn-fill')
    }


    //parking for business
    parkingForBusiness(){
        return cy.get(':nth-child(1) > .card')
    }

    //parking safe
    parkingSafe(){
        return cy.get(':nth-child(2) > .card')
    }

    //first responders
    firstResponders(){
        return cy.get(':nth-child(3) > .card')
    }

    //icon email
    iconEmail(){
        return cy.get('.pad-left-sm > span')
    }

    //parking perks
    parkingPearks(){
        return cy.get('.bg-white > :nth-child(1) > .mar-bottom-md')
    }

    //parking discounts
    parkingDiscounts(){
        return cy.get('.bg-white > :nth-child(1) > .row > :nth-child(1)')
    }

    //anual bonus
    anualBonus(){
        return cy.get('.bg-white > :nth-child(1) > .row > :nth-child(2)')
    }

    //best pricing
    bestPricing(){
        return cy.get('.bg-white > :nth-child(1) > .row > :nth-child(3)')
    }


    //recive instant discount
    reciveInstantDiscountBtn(){
        return cy.get('.col-sm-4 > .btn')
    }


    //reward logo
    rewardLogo(){
        return cy.get('.reward-logo')
    }

    //enter mobile number
    mobileNumber(){
        return cy.get('#sendapp')
    }

    //send button
    sendButton(){
        return cy.get('.col-md-6 > .input-group > .input-group-btn > .btn')
    }

    //apple store
    appleSTorelink(){
        return cy.get('.appstore-btn.hidden-xs > .appstore-img > img')
    }

    //android store
    androidStore(){
        return cy.get('.appstore-btn.hidden-xs > .appstore-img > img')
    }

    //email subscription
    emailSubscription(){
        return cy.get('#addsubscription')
    }

    //subscribe button
    subscribeButton(){
        return cy.get('.col-sm-auto > .btn')
    }

    //next level header
    nextLevelHeader(){
        return cy.get('.col-sm-8 > .text-center > .text-white')
    }





}


export default homePage