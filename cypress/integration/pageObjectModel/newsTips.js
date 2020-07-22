class newsTips{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //Menu button
    menuButton(){
        return cy.get('.toggleMenuBtn > fa > .fa')
    }

    //news & Tips link
    newsTipsLink(){
        return cy.get('.sideBarNavMob > :nth-child(6) > a')
    }

    //page header
    pageHeader(){
        return cy.get('#newsDiv')
    }

    //catagories
    catagoriesSection(){
        return cy.get('#categories-2')
    }

    //next page link
    nextPageLink(){
        return cy.get('.next')
    }

    //recent post
    recentPost(){
        return cy.get('#recent-posts-2 > .widget-title')
    }

    //back Button
    backButton(){
        return cy.get('.active > .btn')
    }

    //first recent post
    recentPost1(){
        return cy.get('#recent-posts-2 > ul > :nth-child(1) > a')
    }

    //facebook link
    facebookLink(){
        return cy.get('ul > li:nth-child(1) > i')
    }

    //read more
    readMore(){
        return cy.get('#post-608 > .entry-content > :nth-child(2) > .more-link')
    }

    //author name
    authorName(){
        return cy.get('.url')
    }


}


export default newsTips