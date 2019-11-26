import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the MultiSelect is closed', () => {
    cy.contains('option one').should('not.exist')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})

Given('the MultiSelect is focused', () => {
    cy.get('.select [tabIndex="0"]').focus()
})

When('the MultiSelect input is clicked', () => {
    cy.get('.select [tabIndex="0"]').click()
})

When('the user clicks the backdrop', () => {
    cy.get('.backdrop').click()
})

When('the down arrowkey is pressed on the focused element', () => {
    cy.focused().type('{downarrow}')
})

When('the spacebar is pressed on the focused element', () => {
    cy.focused().type(' ')
})

When('the up arrowkey is pressed on the focused element', () => {
    cy.focused().type('{uparrow}')
})

When('the escape key is pressed on the focused element', () => {
    cy.focused().type('{esc}')
})

Then('the options are displayed', () => {
    cy.contains('option one').should('exist')
    cy.contains('option two').should('exist')
    cy.contains('option three').should('exist')
})
