import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelectField with label and a required flag is rendered', () => {
    cy.visitStory('SingleSelectField', 'With label and required status')
})

Then('an asterisk is visible', () => {
    cy.get('label.required').should('exist')
})
