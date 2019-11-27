import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelectField with label and a required flag is rendered', () => {
    cy.visitStory('MultiSelectField', 'With label and required status')
})

Then('an asterisk is visible', () => {
    cy.get('label.required').should('exist')
})
