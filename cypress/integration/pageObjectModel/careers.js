class careers{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //Menu button
    menuButton(){
        return cy.get('.toggleMenuBtn > fa > .fa')
    }

    //Faq menu
    careersLink(){
        return cy.get('.sideBarNavMob > :nth-child(11) > a')
    }

    //page header
    pageHeader(){
        return cy.get('.text-primary > span')
    }

    //parking super hero
    parkingHero(){
        return cy.get('.page-content-wrapper > .mar-bottom-sm')
    }

    //apply button
    applyButton(){
        return cy.get('.container > .clearfix > .btn')
    }

    //back button
    backButton(){
        return cy.get('.active > .btn')
    }

    //page header
    pageHeader(){
        return cy.get('.mar-bottom-lg > .text-primary')
    }

    //page image
    pageImage(){
        return cy.get('#career')
    } 
    



}


export default careers