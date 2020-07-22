class searchHomePage{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }
    
    //Search box
    searchBox(){
        return cy.get('#auto_suggest_input_field')
    }
    
    //select address
    selectAddress(){
        return cy.get('#llctext0')
    }

    //address pop up
    addressPopUp(){
        return cy.get('.overlay')
    }

    //Address title
    addressTitle(){
        return cy.get('#main > app-search-facility > app-google-map > div.active-garage-overlay-container.hidden-xs > div > div.content > h2')
    }

    //Full address
    fullAddress(){
        return cy.get('#parkfull_name')
    }

    //parking image
    parkigImage(){
        return cy.get('#parkDetail > .parkImg > .full-width')
    }

    //amenity list1
    amenitiesList1(){
        return cy.get('.amenities-list > :nth-child(1)')
    }

    //amenity list2
    amenitiesList2(){
        return cy.get('.amenities-list > :nth-child(2)')
    }

    //amenity list3
    amenitiesList3(){
        return cy.get('.amenities-list > :nth-child(3)')
    }

    //amenity list4
    amenitiesList4(){
        return cy.get('.amenities-list > :nth-child(4)')
    }

    //amenity list5
    amenitiesList5(){
        return cy.get('.amenities-list > :nth-child(5)')
    }

    //******Filter parking search**********

    //select event
    selectEvent(){
        return cy.get('#stime0')
    }

    //filter button
    filterButton(){
        return cy.get('#featureFilter')
    }

    //Parking place
    parkingPlaceMap(){
        return cy.get('[style="width: 55px; height: 55px; overflow: hidden; position: absolute; opacity: 0; cursor: pointer; touch-action: none; left: 40px; top: -222px; z-index: -167;"] > img')
    }

    //Tesla charger
    teslaChargerFIlter(){
        return cy.get(':nth-child(5) > .checkbox > label')
    }

    //motorcycle parking
    motorcycleParking(){
        return cy.get(':nth-child(8) > .checkbox > label')
    }

    //Close Filter button
    closeFIlterButton(){
        return cy.get('#closeBtn > fa > .fa')
    }



}

export default searchHomePage