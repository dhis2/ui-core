import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with options is rendered', () => {
    cy.visitStory('SingleSelect', 'With options')
})

Given('a SingleSelect with options and a selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With options and a selection')
})

Given('an onChange handler is attached', () => {
    cy.window().then(win => (win.onChange = cy.stub()))
})

Given('the SingleSelect is open', () => {
    cy.get('.select [tabIndex="0"]').click()

    cy.contains('option one').should('exist')
    cy.contains('option two').should('exist')
    cy.contains('option three').should('exist')
})

When('the SingleSelect input is clicked', () => {
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

Then('the options are displayed', () => {
    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
    cy.contains('option three').should('be.visible')
})

Then('the SingleSelect has focus', () => {
    cy.focused()
        .parents('.select')
        .should('exist')
})
