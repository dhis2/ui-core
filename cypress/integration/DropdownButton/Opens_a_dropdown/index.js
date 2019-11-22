import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

// The user closes the dropdown
Given('a DropdownButton with opened dropdown is rendered', () => {
    cy.visitStory('DropdownButton: Basic', 'Default')
    cy.get('button').click()
    cy.get('.dropdown-button-dropmenu').should('exist')
})

Then('the dropdown is not rendered', () => {
    cy.get('.dropdown-button-dropmenu').should('not.exist')
})

/**
 * The user opens the dropdown
 * ===========================
 */
Then('the dropdown is rendered', () => {
    cy.get('.dropdown-button-dropmenu').should('exist')
})
