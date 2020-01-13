import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SplitButton with opened menu is rendered', () => {
    cy.visitStory('SplitButton', 'Closed')
    cy.get('[data-test="dhis2-uicore-splitbutton-toggle"]').click()
    cy.get('[data-test="dhis2-uicore-splitbutton-menu"]').should('exist')
})

Then('the menu is not rendered', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-menu"]').should('not.exist')
})

Then('the menu is rendered', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-menu"]').should('exist')
})
