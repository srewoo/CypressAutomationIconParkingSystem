class b2bsolutions{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //menu button
    menuButton(){
        return cy.get('.toggleMenuBtn > fa > .fa')
    }

    //b2b sales link
    b2bSaleslink(){
        return cy.get('.sideBarNavMob > :nth-child(4) > a')
    }

    //page header
    b2bHeader(){
        return cy.get('.mar-top-md > :nth-child(1) > .text-primary')
    }

    //b2b benifits
    b2bBenifits(){
        return cy.get('.mar-top-md > :nth-child(1) > h2.text-uppercase')
    }
    
    //b2b email hyperlink\
    b2bEmailHyperLink(){
        return cy.get('tr > td:nth-child(1) > a')
    }

}

export default b2bsolutions