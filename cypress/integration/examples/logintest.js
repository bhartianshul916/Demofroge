
describe("Login with Create study",function()
{
    it('verify the tiitle Page',function()
    {
        cy.visit('https://ong.purespectrum.net')          //we are redirecting to  marc storefront page 
        // cy.title.should('eq','Forge Storefront')
    })

    it('verify the tiitle Page',function()
    {                                                    // user able to login with valid credential
        cy.get('input[type=email]')
        .type("ankur.ongraph@gmail.com",{force: true})
        cy.get('input[type=password]')
        .type(12345,{force:true})
        cy.contains(' Sign in ').click()
    })

    it('Create study Page',function()
    {                                                     // create a study 
        cy.contains('Research Products').click()
        cy.get('.product_row > :nth-child(4)').contains('Get Started').click()
        cy.get('#step-1 > :nth-child(2) > :nth-child(1)')
        .type('First Auomation study creation')
        cy.get('#step-1 > :nth-child(3) > :nth-child(1)')
        .type(50301)
        cy.contains('Concepts Being Tested Are?')
        cy.get('#step-1 > :nth-child(4) > :nth-child(1)')
        cy.get('.normal_btn > :nth-child(2)').click()
        // cy.get('#step-1 > :nth-child(5) > :nth-child(1) > :nth-child(1)')
        cy.contains('Title 1')
        cy.get(':nth-child(1) > div.ng-untouched > span > .form-control')
        .type('test')
        cy.contains('Text 1')
        cy.get(':nth-child(1) > div.ng-invalid > .ng-untouched')
        .type('abc')
        cy.contains('Title 2')
        cy.get(':nth-child(2) > div.ng-untouched > span > .form-control')
        .type('test2')
        cy.contains('Text 2')
        cy.get(':nth-child(2) > div.ng-untouched > [formcontrolname="value"]')
        .type('abc2')
        cy.contains('Title 3')
        cy.get(':nth-child(3) > div.ng-untouched > span > .form-control')
        .type('test3')
        cy.contains('Text 3')
        cy.get(':nth-child(3) > div.ng-untouched > [formcontrolname="value"]')
        .type('abc3')
        cy.contains('Attribute 1')
        cy.get(':nth-child(2) > div.ng-pristine > .form-control')
        .type('testhl')
        cy.contains('Attribute 2')
        cy.get(':nth-child(3) > div.ng-pristine > .form-control')
        .type('testx')
        // Adding Custom questions//
        cy.get('#customQuestionToggleYes').click()
        cy.get('#addQsnBtn_0').contains( '+ Add Custom Question').click()
        cy.get(':nth-child(1) > [_ngcontent-c6=""] > app-input > .demo-full-width > .cstm_input_field')
        .type('CS1')
        cy.get('#type2').click()
        cy.get(':nth-child(3) > [_ngcontent-c6=""] > app-input > .demo-full-width > .cstm_input_field')
        .type('HOW MANY MEMBER DO YOU HAVE')
        cy.scrollTo('bottom')
        cy.get(':nth-child(2) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field')
        .type('five')
        cy.get('.add-button').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field')
        .type('Seven')
        cy.get('.add-button').click()
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field')
        .type('Two')
        cy.contains(' Save ').click()
        cy.scrollTo(0, 1000)
        cy.get('#launch_button').click()
        // //PAYMENT MODULE
        //  cy.wait(8000)
        cy.get('body')
         cy.wait(4000)
         cy.get("iframe").then( $iframe => {

            const $doc = $iframe.contents();
            cy.wrap( $doc.find("#credit-card-number") ).type( "2223000048400011", { force: true });
            cy.wrap( $doc.find("#expiration") ).type('52023',{ force: true });
            cy.wrap( $doc.find("#cvv") ).type('024',{ force: true });
            cy.wrap( $doc.find("#postal-code") ).type('00501',{ force: true });

        });


    })


})
