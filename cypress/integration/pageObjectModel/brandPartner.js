class brand{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //brand partner tab
    brandPartnerTab(){
        return cy.get('.account-nav > .container > .nav > #menus6 > a')
    }

    //first partner menu
    partnerMenu1(){
        return cy.get('.col-xs-12:nth-child(1) > .mg-trigger > .partner-meta-wrap > .partner-meta > p')
    }

    // partner meny text
    textPartnerMenu1(){
        return cy.get('.mg-target-open > .container > .row > .col-xs-12 > .text-primary')
    }

    //close partner menu
    closePartner1Menu(){
        return cy.get('app-brand-partnership > .mg-space-init > .mg-targets > .mg-target > .mg-close')
    }

    //sharebite
    sharebite(){
        return cy.get('[data-id="2"] > .mg-trigger > .partner-pic-wrap > .partner-pic')
    }

    //handy
    handy(){
        return cy.get('[data-id="3"] > .mg-trigger > .partner-pic-wrap > .partner-pic')
    }

    //close promo
    closePromo(){
        return cy.get('.mg-close')
    }

}

export default brand