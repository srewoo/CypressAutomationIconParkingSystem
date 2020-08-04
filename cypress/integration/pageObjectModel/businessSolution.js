class businessSolution{

//business solution link
businessSolutionLink(){
    return cy.get('.container > .collapse > .nav > li > .btn-outer')
}

//pageHeader
pageHeaderBSol(){
    return cy.get('.text-white > h1')
}

//form pannel
formpanel(){
    return cy.get('.form-wrapper > .panel')
}

//brand logos
brandLogo(){
    return cy.get('.brandLogoPage')
}

//page header
pageHeader(){
    return cy.get('.panel > .text-primary')
}

//form
companyName(){
    return cy.get('#company_name')
}

numberOfEmployees(){
    return cy.get('#number_of_employees')
}

firstName(){
    return cy.get('#fname')
}

lastName(){
    return cy.get('#lname')
}

emailID(){
    return cy.get('#emailc')
}

phoneNumber(){
    return cy.get('#phonec')
}

formSubmit(){
    return cy.get('.clearfix > .form-group > .btn')
}

//confirmation message
confirmationMessage(){
    return cy.get('b')
}

}


export default businessSolution