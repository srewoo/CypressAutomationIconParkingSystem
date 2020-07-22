class mycoupons{

    //My account tab
    myAccountLink(){
        return cy.get('.col-sm-9 > .memberActions > ul > li > .ProfileIcon > b')
    }

    //mt coupon tab
    myCouponsTab(){
        return cy.get('.account-nav > .container > .nav > #menus3 > a')
    }

    //My coupon header text
    myCouponHeader(){
       return cy.get('.mar-top-sm > .text-primary')
    }

    //Find coupon button
    findCouponButton(){
        return cy.get('.mar-top-sm > .hidden-xs')
    }


}

export default mycoupons