class businessSolution{

//business solution link
businessSolutionLink(){
    return cy.get('.container > .collapse > .nav > li > .btn-outer')
}

//pageHeader
pageHeader(){
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




}


export default businessSolution