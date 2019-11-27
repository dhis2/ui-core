import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with initial focus is rendered', () => {
    cy.visitStory('MultiSelect', 'With initialFocus')
})

Then('the MultiSelect has focus', () => {
    cy.focused()
        .parents('.select')
        .should('exist')
})
