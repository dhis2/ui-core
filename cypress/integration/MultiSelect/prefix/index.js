import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with a prefix and no selection is rendered', () => {
    cy.visitStory('MultiSelect', 'With prefix')
})

Given('a MultiSelect with a prefix and a selection is rendered', () => {
    cy.visitStory('MultiSelect', 'With prefix and selection')
})

Then('the prefix is shown', () => {
    cy.contains('Prefix text').should('exist')
})

Then('the selection is shown', () => {
    cy.contains('option one').should('exist')
})
