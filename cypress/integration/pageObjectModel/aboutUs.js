class aboutUs{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //Menu button
    menuButton(){
        return cy.get('.toggleMenuBtn > fa > .fa')
    }

    //Faq menu
    aboutUslink(){
        return cy.get('.sideBarNavMob > :nth-child(9) > a')
    }

    //page header
    pageHeader(){
        return cy.get('.contentAbout > .text-uppercase')
    }

    //parking image
    parkingImage(){
        return cy.get('.iconSignreverse > .img-responsive')
    }

    //core values
    coreValues(){
        return cy.get('.container > .text-primary')
    }

    //passion and inspiration 
    passionInsparation(){
        return cy.get(':nth-child(1) > img.mar-bottom-xs')
    }

    //integrity test 
    integrityTest(){
        return cy.get(':nth-child(2) > img.mar-bottom-xs')
    }

    //service exelence 
    serviceExelence(){
        return cy.get(':nth-child(3) > img.mar-bottom-xs')
    }

    //locations
    locations(){
        return cy.get('#animate > .container > .row > :nth-child(1)')
    }

    //cars parked globally
    carsParkedGlobally(){
        return cy.get('#animate > .container > .row > :nth-child(3)')
    }

    //years in business
    yearsInBusiness(){
        return cy.get('.row > :nth-child(5)')
    }

    //tag line
    tagLine(){
        return cy.get('.col-sm-5 > span')
    }




}


export default aboutUs