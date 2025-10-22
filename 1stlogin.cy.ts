describe('FIRST LOGIN PASSWORD RESET CHECK', () => {

it('FIRST LOGIN PASSWORD RESET CHECK', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://soundbox.test.sb.cwdin.com')


    // Click on Email ID
    cy.get(':nth-child(1) > floating-label-input > .relative > .absolute').click()
    cy.get(':nth-child(1) > floating-label-input > .relative > .absolute').type('ayush.vishwakarma@cwdin.com')

    // Click on Password
    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').click()
    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').type('Ayush@1234')

    cy.get('.right-3').click().wait(1000)
    cy.get('.right-3').click()

    // Click on Login 
    // Targeting both classes using a more robust query
    cy.get('[class="w-[120px] btn-primary-solid"]').click();


    //*********************************TO VERIFY TEXT******************************************//

    cy.get('[class="text-3xl smallTablet:text-2xl font-semibold text-textSecondary uppercase"]').should('contain', ' Welcome! First Login ')
    cy.get('[class="text-xs font-semibold text-textSecondary mt-2"]').should('contain', ' Let’s set a new password to secure your account. ')
    
    //*********************************Click on current Password******************************************//
    
    cy.get(':nth-child(1) > floating-label-input > .relative > .duration-300').click()
    //cy.get(':nth-child(1) > floating-label-input > .relative > .duration-300').click().type('Ayush@1234')


    //Click on New Password

    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').click()

    //Click On Confirm Password
    cy.get(':nth-child(4) > floating-label-input > .relative > .duration-300').click()
    cy.get('[class="text-3xl smallTablet:text-2xl font-semibold text-textSecondary uppercase"]').click()
    

    // Check ERRORs in Current Password, New Password & Confirm Password when kept empty

    cy.get(':nth-child(1) > form-error-messages > .my-1 > .text-sm').should('contain', 'Current password is required')
    cy.get(':nth-child(2) > form-error-messages > .my-1 > .text-sm').should('contain', 'New password is required')
    cy.get(':nth-child(4) > form-error-messages > .my-1 > .text-sm').should('contain', 'Confirm password is required')

    // TO VERIFY NOTE
    cy.get('[class="text-sm smallTablet:text-xs text-textSecondary px-1 text-center"]').should('contain', ' Note: ', ' Min. 8 and Max. 15 characters, with upper & lower case, 1 Special & 1 Numerical ')
    
    
    //********************************************NOW CLICK ON CURRENT PASSWORD AND ENTER CURRENT PASSWORD*********************************************************/
    
    //verify current & New Password should not be same

    cy.get(':nth-child(1) > floating-label-input > .relative > .duration-300').click().type('Ayush@1234')
    cy.get(':nth-child(1) > floating-label-input > .relative > .right-3').click().click()
    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').click().type('Ayush@1234')

    //Verify Error
    cy.get(':nth-child(2) > form-error-messages > .my-1 > .text-sm').should('include.text', 'Current password and new password cannot be same.');

    // Error check at NEW Password & Confirm Password is different

    cy.get(':nth-child(4) > floating-label-input > .relative > .duration-300').click().type("Hellow@123")
    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').click().type('Ayush@12')

    //
    cy.get('[class="text-sm smallTablet:text-xs"]').should('include.text', ' The new password and confirm password must match.')


    //****************************NOW CLEAR ALL TEXT FIELDS***************//

    cy.get(':nth-child(1) > floating-label-input > .relative > .duration-300').type('{selectall}{backspace}')   // Current Password 
    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').type('{selectall}{backspace}')   // New Password
    cy.get(':nth-child(4) > floating-label-input > .relative > .duration-300').type('{selectall}{backspace}')   // Confirm Password




    //****************************Enter Invlaid Password in TEXT FIELDS***************//

    cy.get(':nth-child(1) > floating-label-input > .relative > .duration-300').click().type('ahbskdjhasjkdhajkd234234-09230-4*(&)(*&*(^*()^)0897897')   // Current Password 
    cy.get(':nth-child(1) > floating-label-input > .relative > .right-3').click()
    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').click().type('ahbskdjhasjkdhajkd234234-09230-4*(&)(*&*(^*()^)0897897')   // New Password
    cy.get(':nth-child(4) > floating-label-input > .relative > .duration-300').click().type('ahbskdjhasjkdhajkd234234-09230-4*(&)(*&*(^*()^)0897897')   // Confirm Password


    // check error or invalid password     
    cy.get('[class="text-sm smallTablet:text-xs"]').should('include.text', 'Check your password against the provided pattern below. ')


    //****************************NOW CLEAR ALL TEXT FIELDS***************//

    cy.get(':nth-child(1) > floating-label-input > .relative > .duration-300').type('{selectall}{backspace}')   // Current Password 
    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').type('{selectall}{backspace}')   // New Password
    cy.get(':nth-child(4) > floating-label-input > .relative > .duration-300').type('{selectall}{backspace}')   // Confirm Password

    // Now cliok on Text filed & enter valid password
    cy.get(':nth-child(1) > floating-label-input > .relative > .duration-300').type('Ayush@1234')  // Current Password 
    cy.get(':nth-child(2) > floating-label-input > .relative > .duration-300').type('Ayush@123')   // New Password
    cy.get(':nth-child(4) > floating-label-input > .relative > .duration-300').type('Ayush@123')   // Confirm Password

    // Click on eye button 
    cy.get(':nth-child(1) > floating-label-input > .relative > .right-3').click()
})

})