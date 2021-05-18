describe("Login with Create study",function()
{
    it('verify the title Page',function()
    {
        cy.visit('https://marc.purespectrum.net')          
    })
    it('Login with valid details',function()
    {                                                    
        cy.get('input[type=email]')
        .type("ankur.ongraph@gmail.com",{force: true})
        cy.get('input[type=password]')
        .type(12345,{force:true})
        cy.contains(' Sign in ').click()
        cy.clearCookies()
    })
    it('Create study',function()
    {
        cy.contains('Research Products').click()
        cy.get('.product_row > :nth-child(3)').contains('Get Started').click()
        cy.contains('What is this survey about?')
        cy.get('#step-1 > :nth-child(2) > :nth-child(1) > .form-control').type("AT-Sort")
        cy.contains('Objects being tested are?')
        //uploading image in object 
        cy.get('.normal_btn > :nth-child(1)').click()
        cy.get('.add_text_btn').click()
        const yourFixturePath = 'dabdi.png';
        const yourFixturePath1 = 'ttn.png'
        cy.get('[type="file"]').attachFile(yourFixturePath);
        cy.get('.input_fl_row > .form-control').type('image1')
        cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(4)')
        .click()
        cy.get('div.ng-pristine > .wrap_row_image > .wrap_choose_file > [type="file"]').attachFile(yourFixturePath1)
        cy.get('div.ng-untouched > .wrap_row_image > .input_fl_row > .form-control').type('Image2')
        
        
        
        //Please select 3 Attributes of the set listed below
        cy.get(':nth-child(2) > div.ng-pristine > .form-control').type('I like tech Industry ')
        cy.get(':nth-child(3) > div.ng-pristine > .form-control').type('I like tech Industry 2.0 ')
        cy.get(':nth-child(4) > div.ng-pristine > .form-control').type('I like tech Industry 3.0 ')

        // cy.contains('Trustworthy').click()
        // cy.contains('Passionate').click()
        // cy.contains('Light-hearted').click()
        //Added CustomQuestions
        cy.get('#customQuestionToggleYes').click()
        cy.get('#addQsnBtn_0').contains(' + Add Custom Question ').click() 
        cy.get(':nth-child(1) > [_ngcontent-c8=""] > app-input > .demo-full-width > .cstm_input_field')
        .type('CS1')
        // SELECT MULTIPUNCH 
        cy.get('#type2').click()
        cy.get(':nth-child(3) > [_ngcontent-c8=""] > app-input > .demo-full-width > .cstm_input_field')
        .type('HOW MANY cars do you have')
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field').type('gyfyufyu')
        cy.scrollTo('bottom')
        cy.get(':nth-child(3) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field')
        .type('one')
        cy.get('.add-button').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field')
        .type('two')
        // cy.get('.add-button').click()
        // cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > app-input > .demo-full-width > .cstm_input_field')
        // .type('more tahn Two')
        cy.contains(' Save ').click()
        cy.get('#launch_button')
        .click()
})
})