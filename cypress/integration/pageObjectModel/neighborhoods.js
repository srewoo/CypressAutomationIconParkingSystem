class neighborhoods{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //menu button
    menuButton(){
        return cy.get('.toggleMenuBtn > fa > .fa')
    }

    //b2b sales link
    neighborhoodsLink(){
        return cy.get('.sideBarNavMob > :nth-child(7) > a')
    }

    //url
    neighborhoodsURL(){
        return cy.url()
    }

    //NeghborHood Mar
    neighborhoodMaps(){
        return cy.get('.neighborhoodSVG')
    }

    //times square
    timesSquare(){
        return cy.get('#times-square > .cls-3')
    }

    //Murray hill
    murrayHill(){
        return cy.get('#murray-hill > .cls-1')
    }

    //lower East Side
    lowerEastSide(){
        return cy.get('#lower-east-side > .cls-1')
    }










}

export default neighborhoods