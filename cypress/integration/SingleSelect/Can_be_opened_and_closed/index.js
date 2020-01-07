import '../common'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('the SingleSelect is closed', () => {
    cy.contains('option one').should('not.exist')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})

Given('the SingleSelect is focused', () => {
    cy.get('.select [tabIndex="0"]').focus()
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
