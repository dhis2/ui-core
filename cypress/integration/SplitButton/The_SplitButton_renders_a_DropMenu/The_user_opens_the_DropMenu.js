import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SplitButton with opened DropMenu is rendered', () => {
    cy.visitStory('SplitButton: Basic', 'Default')
})

Then('the DropMenu is rendered', () => {
    cy.get('.split-button-dropmenu').should('exist')
})
