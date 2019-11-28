import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with a placeholder and no selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With placeholder')
})

Given('a SingleSelect with a placeholder and a selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With placeholder and selection')
})

Then('the placeholder is shown', () => {
    cy.contains('Placeholder text').should('exist')
})

Then('the placeholder is not shown', () => {
    cy.contains('Placeholder text').should('not.exist')
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('exist')
})
