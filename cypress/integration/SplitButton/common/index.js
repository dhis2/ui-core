import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('a SplitButton with closed menu is rendered', () => {
    cy.visitStory('SplitButton', 'Closed')
})

When('the SplitButton is clicked', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-button"]').click()
})

When('the SplitButton toggle is clicked', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-toggle"]').click()
})
