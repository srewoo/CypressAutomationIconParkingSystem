class myParking{

     //My account tab
     myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //my monthly parking tab
    mymonthlyparkingTab(){
        return cy.get('#menus2 > a')
    }

    //page header
    pageHeaderText(){
        return cy.get('.viewmonthlymain > .text-uppercase')
    }

    //error message
    errorMessage(){
        return cy.get('.viewmonthlymain > :nth-child(3) > p')
    }

    //Add monthly account
    addMonthlyAccountButton(){
        return cy.get(':nth-child(3) > .hidden-xs')
    }
    
    //Page elements
    registerParkingHeaderText(){
        return cy.get('.col-sm-8 > .text-primary')
    }

    iconParkingAccountText(){
        return cy.get('h4.mar-top-sm')
    }

    iconParkingAccountMsg(){
        return cy.get('.col-sm-8 > p')
    }

    //Account number box
    accountNumberBox(){
        return cy.get('.floating-label > :nth-child(1) > .form-control')
    }

    //account number help
    accountNumberHelp(){
        return cy.get(':nth-child(1) > .floatBtn > img')
    }

    //zip code box
    zipCodeBox(){
        return cy.get(':nth-child(2) > .form-control')
    }

    //Zip code help
    zipCodeHelp(){
        return cy.get(':nth-child(2) > .floatBtn > img')
    }

    //Add account button
    addAccountButton(){
        return cy.get('.hidden-xs > #addacount')
    }

    //wen accout benifits
    webAccountBenifits(){
        return cy.get('.registermonthlyaccount > :nth-child(1) > .col-sm-4 > :nth-child(1)')
    }

    //need Help
    needHelp(){
        return cy.get('.registermonthlyaccount > :nth-child(1) > .col-sm-4 > :nth-child(2)')
    }

    //field validation message account number
    errorMessageAccount(){
        return cy.get(':nth-child(1) > .help-block')
    }

    //field validation message zip code
    errorMessageZipCode(){
        return cy.get(':nth-child(2) > .help-block')
    }

    //toast message
    toastMessage(){
        return cy.get('.toast-title')
    }
}

export default myParking