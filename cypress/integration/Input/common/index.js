import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('an Input is rendered', () => {
    cy.visitStory('Input', 'Default')
})
