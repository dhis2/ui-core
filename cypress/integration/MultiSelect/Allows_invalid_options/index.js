import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with invalid options is rendered', () => {
    cy.visitStory('MultiSelect', 'With invalid options')
})

Given('a MultiSelect with invalid filterable options is rendered', () => {
    cy.visitStory('MultiSelect', 'With invalid filterable options')
})

When('the user enters a filter string', () => {
    cy.focused().type('invalid')
})

Then('the invalid options are displayed', () => {
    cy.contains('invalid one').should('be.visible')
    cy.contains('invalid two').should('be.visible')
    cy.contains('invalid three').should('be.visible')
})

Then('the invalid options are not displayed', () => {
    cy.contains('invalid one').should('not.be.visible')
    cy.contains('invalid two').should('not.be.visible')
    cy.contains('invalid three').should('not.be.visible')
})
