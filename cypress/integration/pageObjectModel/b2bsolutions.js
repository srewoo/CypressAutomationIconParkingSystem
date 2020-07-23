class b2bsolutions{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //menu button
    menuButton(){
        return cy.get('.toggleMenuBtn > .fa')
    }

    //b2b sales link
    b2bSaleslink(){
        return cy.get('.sideBarNavMob > :nth-child(2) > a')
    }

    //page header
    b2bHeader(){
        return cy.get('.text-white > h1')
    }

    //b2b benifits
    b2bBenifits(){
        return cy.get('.clarfix > .mar-bottom-md')
    }
    
    //b2b email hyperlink\
    b2bForm(){
        return cy.get('.form-wrapper > .panel')
    }

}

export default b2bsolutions