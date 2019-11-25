import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a closed SingleSelect with options is rendered', () => {
    cy.visitStory('SingleSelect', 'With options')
})

Given('an open SingleSelect with options is rendered', () => {
    cy.visitStory('SingleSelect', 'With options')
    cy.get('.select [tabIndex="0"]').click()

    cy.contains('option one')
    cy.contains('option two')
    cy.contains('option three')
})

Given('the SingleSelect is focused', () => {
    cy.get('.select [tabIndex="0"]').focus()
})

When('the SingleSelect input is clicked', () => {
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
    cy.contains('option one')
    cy.contains('option two')
    cy.contains('option three')
})

Then('the options are not displayed', () => {
    cy.contains('option one').should('not.exist')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})
