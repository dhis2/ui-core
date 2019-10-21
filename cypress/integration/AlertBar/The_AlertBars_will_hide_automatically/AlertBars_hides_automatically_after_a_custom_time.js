import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar will hide after a custom time', () => {
    cy.visitStory('AlertBar', 'Auto hiding')
        .get('.fourth')
        .as('AlertBar')

    cy.get('@AlertBar').should('be.visible')
})

When('the custom time has passed', () => {
    cy.wait(2000)
})
