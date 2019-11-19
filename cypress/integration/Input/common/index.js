import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('an empty Input is rendered', () => {
    cy.visitStory('Input', 'Default')
})
