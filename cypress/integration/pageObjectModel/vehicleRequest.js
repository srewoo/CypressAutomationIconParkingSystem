class vehicleRequest{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //vehicle request tab
    vehicleRequestTab(){
        return cy.get('#menus5 > a')
    }

    //Page header
    vehicleRequestHeader(){
        return cy.get('app-vehicle-request > .text-uppercase')
    }

    //All Garagees button
    allGaragerButton(){
        return cy.get('#AllGarages > .btn')
    }

    //All Request button
    allRequestButton(){
        return cy.get('.active > .btn')
    }

    //Garages list
    garageList(){
        return cy.get('#iframePage')
    }

    



}

export default vehicleRequest