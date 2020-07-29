class reservations{

     //customer credit amount tab
     reservationsTab(){
        return cy.get('#sideNavList > :nth-child(2) > a')
    }

    //page header
    reservationsHeader(){
        return cy.get('header > h2')
    }

    //search box
    reservationSearch(){
        return cy.get('.admin-table-header > .admin-list-table-search > input')
    }

    //search button
    reservationSearchButton(){
        return cy.get('.admin-table-header > .admin-list-table-search > .fa')
    }


    //click on a user
    userselect(){
        return cy.get(':nth-child(1) > [data-label="User"] > .tableInfo')
    }
    
    //email field
    emailField(){
        return cy.get('.reservation-email > .form-group > .form-control')
    }

    //sendButton
    sendButton(){
        return cy.get('.iconButton')
    }

    //notofication title
    tostMessage(){
        return cy.get('.notification')
    }





}

export default reservations