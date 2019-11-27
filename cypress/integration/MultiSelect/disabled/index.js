import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a disabled MultiSelect with options is rendered', () => {
    cy.visitStory('MultiSelect', 'With options and disabled')
})

Given('a disabled MultiSelect with options and a selection is rendered', () => {
    cy.visitStory('MultiSelect', 'With options, a selection and disabled')
})

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

When('the down arrowkey is pressed on the focused element', () => {
    cy.focused().type('{downarrow}')
})

When('the spacebar is pressed on the focused element', () => {
    cy.focused().type(' ')
})

When('the up arrowkey is pressed on the focused element', () => {
    cy.focused().type('{uparrow}')
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('exist')
})
