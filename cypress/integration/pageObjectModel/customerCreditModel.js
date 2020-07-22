class creditModel{

    //customer credit amount tab
    customerCreditAmountTab(){
        return cy.get('#sideNavList > :nth-child(3) > a')
    }

    //customer credit amount header
    customerCreditAmountHeader(){
        return cy.get('header > h2')
    }

    //customer search box
    customerSearchBox(){
        return cy.get('.admin-table-header > .admin-list-table-search > input')
    }

    //customer search button
    customerSearchButton(){
        return cy.get('.admin-table-header > .admin-list-table-search > .fa')
    }

    //customer name
    customerName(){
        return cy.get('[data-label="Name"] > .tableInfo')
    }

    //customer amount
    customerAmount(){
        return cy.get('[data-label="Amount"] > .tableInfo')
    }

    //actiom button
    actionButton(){
        return cy.get('.user-actions > a > .fa')
    }

    //Add Customer Credit Amount header
    addCustomerCreditAmountHeadder(){
        return cy.get('.user-form > :nth-child(1)')
    }

    //customer name details
    customerNameDetails(){
        return cy.get('.user-form > :nth-child(2)')
    }

    //credit amount label
    creditAmountLabel(){
        return cy.get(':nth-child(3) > label')
    }

    //credit amount value
    creditAmountvalue(){
        return cy.get(':nth-child(3) > .form-control')
    }


    //credit reason label
    creditReasonLabel(){
        return cy.get(':nth-child(4) > label')
    }

    //credit reason value
    creditReasonValue(){
        return cy.get(':nth-child(4) > .form-control')
    }

    //submit button
    submitButton(){
        return cy.get('.iconButton')
    }


    //toast message
    notificationMsg(){
        return cy.get('.notification-title')
    }

    //customer transaction History
    customerHistory(){
        return cy.get('header > h2')
    }

    //createdBY
    createdBy(){
        return cy.get('[data-label="Mode/Credited By"] > .tableInfo')
    }

    //credit type
    creditType(){
        return cy.get('[data-label="Type"] > .tableInfo')
    }

    //amount credited
    amountCredited(){
        return cy.get('[data-label="Amount"] > .tableInfo')
    }

    //reason
    creditReason(){
        return cy.get('[data-label="Reason"] > .tableInfo')
    }

    //delete Button
    deleteButton(){
        return cy.get('.tableInfo > .iconButton')
    }

    //main table credit amount
    mainTableCreditAmount(){
        return cy.get(':nth-child(1) > [data-label="Amount"] > .tableInfo')
    }

 





}

export default creditModel