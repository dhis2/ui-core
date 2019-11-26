import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with options is rendered', () => {
    cy.visitStory('MultiSelect', 'With options')
})

Given('a MultiSelect with options and a selection is rendered', () => {
    cy.visitStory('MultiSelect', 'With options and a selection')
})

Given('an onChange handler is attached', () => {
    cy.window().then(win => (win.onChange = cy.stub()))
})

Given('the MultiSelect is open', () => {
    cy.get('.select [tabIndex="0"]').click()

    cy.contains('option one').should('exist')
    cy.contains('option two').should('exist')
    cy.contains('option three').should('exist')
})

Then('the options are not displayed', () => {
    cy.contains('option one').should('not.exist')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})
