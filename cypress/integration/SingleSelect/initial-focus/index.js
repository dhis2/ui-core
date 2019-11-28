import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with initial focus is rendered', () => {
    cy.visitStory('SingleSelect', 'With initialFocus')
})

Then('the SingleSelect has focus', () => {
    cy.focused()
        .parents('.select')
        .should('exist')
})
