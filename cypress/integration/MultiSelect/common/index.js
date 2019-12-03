import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

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

    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
    cy.contains('option three').should('be.visible')
})

When('the MultiSelect input is clicked', () => {
    cy.get('.select [tabIndex="0"]').click()
})

When('the user clicks the backdrop', () => {
    cy.get('.backdrop').click()
})

Then('the options are not displayed', () => {
    cy.contains('option one').should('not.be.visible')
    cy.contains('option two').should('not.be.visible')
    cy.contains('option three').should('not.be.visible')
})

Then('the MultiSelect has focus', () => {
    cy.focused()
        .parents('.select')
        .should('exist')
})
