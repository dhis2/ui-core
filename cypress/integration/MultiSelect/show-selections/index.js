import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with options and multiple selections is rendered', () => {
    cy.visitStory('MultiSelect', 'With options and multiple selections')
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('exist')
})

Then('the selections are displayed', () => {
    cy.contains('option one').should('exist')
    cy.contains('option two').should('exist')
})
