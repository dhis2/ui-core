import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar has a "Cancel" action', () => {
    cy.visitStory('AlertBar', 'With actions')
        .get('.info')
        .as('AlertBar')

    cy.get('@AlertBar').should('be.visible')
})

When('the user clicks on the "Cancel" button', () => {
    cy.get('span:contains("Cancel")').click()
})
