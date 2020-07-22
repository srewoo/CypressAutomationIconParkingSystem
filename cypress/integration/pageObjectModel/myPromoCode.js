class promo{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //click on my promo codes tab
    myPromoCode(){
        return cy.get('.account-nav > .container > .nav > #menus7 > a')
    }

    //save promo code button
    savePromoCode(){
        return cy.get('.mar-top-sm > .form-group > .input-group > .input-group-btn > #addpromocode')
    } 

    //error message text
    errorMsgTxt(){
        return cy.get('.input-group > .help-block')
    }

    //promo code text box
    promoCodeTxtBox(){
        return cy.get('.col-xs-12 > .mar-top-sm > .form-group > .input-group > .form-control')
    }

    //toast message text
    toastMessageText(){
        return cy.get('.toast-message')
    }


    //toast message close button
    tostMsgClose(){
        return cy.get('body > .overlay-container > #toast-container > .toast-error > .toast-close-button')
    }
}

export default promo