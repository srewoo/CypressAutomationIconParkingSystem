class iconrewards{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //ICON REWARDS TAB
    iconRewardTab(){
        return cy.get('.account-nav > .container > .nav > #menus1 > a')
    }

    rewardPopUp(){
        return cy.get('.modals-body > div')
    }

    rewardPopUpText(){
        return cy.get('.modals-body > div > h4')
    }

    closeRewardPopUp(){
        return cy.get('u')
    }

    //header 
    rewardsHeader(){
        return cy.get('.col-md-12 > .text-primary')
    }

    //Vew reward details
    viewBenifits(){
        return cy.get('.hidden-xs > h2 > small > a')
    }

    //icon reward text
    iconRewardText(){
        return cy.get('.text-uppercase.mar-bottom-xs')
    }

    //reward member header
    rewardMemberText(){
        return cy.get('.well > .clearfix > .row > .col-md-offset-6 > h2')
    }

    //membership compair

    membershipTable(){
        return cy.get('app-icon-rewards-tabs > .mar-bottom-md > .container')
    }

}


export default iconrewards