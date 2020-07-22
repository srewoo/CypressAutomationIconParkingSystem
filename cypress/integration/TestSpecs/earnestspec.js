xdescribe('Automation suite for Earnest', function()
{

    
    it('Verify that earnest.com is getting launched', function() 
    {
        
        //Launch earnest.com
        cy.visit('https://www.google.com/')
        //Verify te title of web page
       cy.title().should('eq', 'Google')

       cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').click()
 
       cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').type('earnest')
 
        cy.get('.UUbT9 > .aajZCb > .tfB0Bf > center > .gNO89b').click()
 
        cy.visit('https://www.google.com/search?sxsrf=ALeKk02fTJYjXHUi-yR2nWtnTsn99-bxng%3A1592296746470&source=hp&ei=KoXoXpzxGfyM4-EPvNGSyAI&q=earnest&oq=earnest&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIFCAAQsQMyBQgAELEDMgIIADIFCAAQsQMyBQgAELEDMgUIABCxAzICCAAyAggAMgIIADoHCCMQ6gIQJzoFCAAQkQI6BQgAEIMBOggIABCxAxCRAlD-TljGXmDdZ2gBcAB4AIABfIgBvQaSAQMwLjeYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwicrsrP94XqAhV8xjgGHbyoBCkQ4dUDCAc&uact=5')
 
        
 
        

        //Verify H2 tag of page
        //cy.get('h2').should('eq','A student loan that fits your budget')

        //Verify cookie
        //cy.getCookie('JSESSIONID').should('exist')


        //cy.get('url').should('include', 'profile')
        
    })


    it('what_it_does-egain', function() {

        cy.viewport(1366, 625)
     
       
     
        cy.visit('https://www.egain.com/')
     
        cy.get('#site-navigation > #menu-main-menu > #menu-item-9592 > .menu-link > .text-wrap').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_1-container > #wpforms-9375-field_1').click()
     
        cy.visit('https://www.egain.com/company/contact-form/')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_1-container > #wpforms-9375-field_1').type('harry')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_2-container > #wpforms-9375-field_2').type('harry company')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_3-container > #wpforms-9375-field_3').type('ceo')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_5-container > #wpforms-9375-field_5').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_5-container > #wpforms-9375-field_5').type('harrypotter@gmail.com')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_6-container > #wpforms-9375-field_6').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_6-container > #wpforms-9375-field_6').type('www.hpotter.com')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_7-container > .wpforms-field-label').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_7-container > #wpforms-9375-field_7').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_7-container > #wpforms-9375-field_7').type('internet')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_8-container > #wpforms-9375-field_8').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_13-container > #wpforms-9375-field_13').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_13-container > #wpforms-9375-field_13').type('london')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_14-container > #wpforms-9375-field_14').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_14-container > #wpforms-9375-field_14').type('newberry')
     
        cy.get('.product-description > #wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_16-container').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_16-container > #wpforms-9375-field_16').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_16-container > #wpforms-9375-field_16').type('1234567890')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_36-container > #wpforms-9375-field_36').click()
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_36-container > #wpforms-9375-field_36').select('United Kingdom')
     
        cy.get('#wpforms-9375 > #wpforms-form-9375 > .wpforms-field-container > #wpforms-9375-field_36-container > #wpforms-9375-field_36').click()
     
        cy.get('.wpforms-field-container > #wpforms-9375-field_37-container > #wpforms-9375-field_37 > .choice-4 > #wpforms-9375-field_37_4').click()
     
        cy.get('.wpforms-field-container > #wpforms-9375-field_37-container > #wpforms-9375-field_37 > .choice-4 > #wpforms-9375-field_37_4').check('Yes')
     
        cy.get('.product-description > #wpforms-9375 > #wpforms-form-9375 > .wpforms-submit-container > #wpforms-submit-9375').click()
     
     })
    


})