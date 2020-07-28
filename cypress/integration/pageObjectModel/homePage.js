class homePage{

    //icon reward
    iconRewardLogo(){
        return cy.get('.contentTopBar > img')
    }

    //sign up text
    signUpLink(){
        return cy.get('.contentTopBar > b')
    }

    //Monthly Tab
    monthlyTab(){
        return cy.get('.btn-group > .border-left')
    }

    //daily Tab
    dailyTab(){
        return cy.get('.border-radius-left-top')
    }

    //icon parking logo
    iconLogo(){
        return cy.get('.clearfix > :nth-child(1) > img')
    }

    //learnMore
    learnMore(){
        return cy.get(':nth-child(1) > .clearfix > .btn')
    }



}


export default homePage