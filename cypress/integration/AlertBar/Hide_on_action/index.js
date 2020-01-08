import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar has a "Cancel" action', () => {
    cy.visitStory('AlertBar', 'Actions')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

When('the user clicks on the "Cancel" button', () => {
    cy.get(
        '[data-test="dhis2-uicore-alertbar-action"]:contains("Cancel")'
    ).click()
})
