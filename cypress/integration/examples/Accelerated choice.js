describe("Login with Create study",function()
{
    it('verify the tiitle Page',function()
    {
        cy.visit('https://marc.purespectrum.net')          
    })
    it('verify the tiitle Page',function()
    {                                                    
        cy.get('input[type=email]')
        .type("ankur.ongraph@gmail.com",{force: true})
        cy.get('input[type=password]')
        .type(12345,{force:true})
        cy.contains(' Sign in ').click()
        cy.clearCookies()
    })
     it('Enter Survey Attributes ',function(){ 
        cy.contains('Research Products').click()
        cy.get('.product_row > :nth-child(2)').contains('Get Started').click()
        cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('Automation Test')
        cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('201001')
        cy.get('#step-2 > :nth-child(2) > :nth-child(1)').click()
        cy.contains('Business').click()
        cy.get('#step-2 > :nth-child(3) > :nth-child(1) > .cstm_dropdown > .ng-select-container').click()
        cy.contains('Events').click()
        cy.get(':nth-child(4) > :nth-child(1) > .cstm_dropdown').click()
        cy.contains('Sports').click()
        cy.get(':nth-child(1) > :nth-child(1) > [placeholder=""]').type('QA1')
        cy.get(':nth-child(1) > .right-angle-btn > img').click()
        cy.get('#levels_modal0 > .modal-dialog > .modal-content > .modal-body > .filters > :nth-child(1) > .filters_wrap > .filter_cat > .filter_cat_row > :nth-child(1) > .form-control')
        .type('its my one case')
        cy.get('#levels_modal0 > .modal-dialog > .modal-content > .modal-body > .filters > :nth-child(1) > .filters_wrap > .filter_cat > .filter_cat_row > :nth-child(2) > .form-control')
        .type('Its my second case')
        cy.contains(' Close ').click()
        cy.get(':nth-child(2) > [placeholder=""]').type('QA2')
        cy.get(':nth-child(2) > .right-angle-btn > img').click()
        cy.get('#levels_modal1 > .modal-dialog > .modal-content > .modal-body > .filters > :nth-child(1) > .filters_wrap > .filter_cat > .filter_cat_row > :nth-child(1) > .form-control')
        .type("second test")
        cy.get('#levels_modal1 > .modal-dialog > .modal-content > .modal-body > .filters > :nth-child(1) > .filters_wrap > .filter_cat > .filter_cat_row > :nth-child(2) > .form-control')
        .type('third test')
        cy.get('#levels_modal1 > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get(':nth-child(1) > :nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input').click()
        cy.contains('its my one case').click()
        cy.get(':nth-child(2) > .ng-select > .ng-select-container > .ng-value-container > .ng-input').click()
        cy.contains('second test').click()
         //Added CustomQuestions
        cy.get('#customQuestionToggleYes').click()
        cy.get('#addQsnBtn_0').contains(' + Add Custom Question ').click() 
        cy.get(':nth-child(1) > [_ngcontent-c6=""] > app-input > .demo-full-width > .cstm_input_field')
        .type('CUstom1')
        cy.get('#type2').click()
        cy.get(':nth-child(3) > [_ngcontent-c6=""] > app-input > .demo-full-width > .cstm_input_field')
        .type('Which Company  Credit Card do you have')
        cy.scrollTo('bottom')
        cy.get(':nth-child(2) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field')
        .type('Mastercard')
        cy.get('.add-button').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field')
        .type('VISA')
        cy.contains(' Save ').click()
        // cy.contains(' Confirm and Launch! ').click()



        


    }
    )
})
