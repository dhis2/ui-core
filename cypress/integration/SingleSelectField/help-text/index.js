import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelectField with help text is rendered', () => {
    cy.visitStory('SingleSelectField', 'With help text')
})

Then('the help text is visible', () => {
    cy.contains('The help text').should('exist')
})
