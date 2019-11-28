import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with invalid options is rendered', () => {
    cy.visitStory('SingleSelect', 'With invalid options')
})

Given('a SingleSelect with invalid filterable options is rendered', () => {
    cy.visitStory('SingleSelect', 'With invalid filterable options')
})

When('the user enters a filter string', () => {
    cy.focused().type('invalid')
})

Then('the invalid options are displayed', () => {
    cy.contains('invalid one').should('exist')
    cy.contains('invalid two').should('exist')
    cy.contains('invalid three').should('exist')
})

Then('the invalid options are not displayed', () => {
    cy.contains('invalid one').should('not.exist')
    cy.contains('invalid two').should('not.exist')
    cy.contains('invalid three').should('not.exist')
})
