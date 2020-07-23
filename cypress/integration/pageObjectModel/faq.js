class faq{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //Menu button
    menuButton(){
        return cy.get('.toggleMenuBtn > .fa')
    }

    //Faq menu
    faqlink(){
        return cy.get(':nth-child(12) > a')
    }

    //common section
    commonSection(){
        return cy.get(':nth-child(1) > .well')
    }

    //booking section
    bookingSection(){
        return cy.get('[flexboxwrapper=""] > :nth-child(2) > .well')
    }

    //page header
    pageHeader(){
        return cy.get('.questionDesk > .mar-top-0')
    }

    //faq title
    faqTitle(){
        return cy.get('.mainView > .mar-top-0')
    }

    //search box
    faqSearch(){
        return cy.get('#searchText')
    }

    //no results
    faqNoResults(){
        return cy.get('.text-right > .text-primary')
    }

    //Select Article
    selectArticle(){
        return cy.get('.col-sm-8 > :nth-child(1) > .questionsLink > :nth-child(1) > .panel > .panel-heading > .panel-title > .accordion-toggle > div')
    }
    
    //faq Result
    faqResult(){
        return cy.get('.panel-open > .panel > .panel-collapse > .panel-body > div')
    }
}


export default faq