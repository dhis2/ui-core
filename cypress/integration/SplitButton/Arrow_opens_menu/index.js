import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

/**
 * The user closes the DropMenu
 * ============================
 */
Given('a SplitButton with opened DropMenu is rendered', () => {
    cy.visitStory('SplitButton: Basic', 'Default')
    cy.get('button:nth-child(2)').click()
    cy.get('.split-button-dropmenu').should('exist')
})

Then('the DropMenu is not rendered', () => {
    cy.get('.DropMenu-button-dropmenu').should('not.exist')
})

/**
 * The user opens the DropMenu
 * ===========================
 */
Given('a SplitButton with opened DropMenu is rendered', () => {
    cy.visitStory('SplitButton: Basic', 'Default')
})

Then('the DropMenu is rendered', () => {
    cy.get('.split-button-dropmenu').should('exist')
})
