import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with options and onChange handler is rendered', () => {
    cy.visitStory('MultiSelect', 'With options and onChange')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onChange = () => {}
        cy.stub(win, 'onChange')
    })
})

Given(
    'a MultiSelect with options, a selection and onChange handler is rendered',
    () => {
        cy.visitStory('MultiSelect', 'With options, a selection and onChange')

        cy.window().then(win => {
            // The property has to be present to allow cy.stub
            win.onChange = () => {}
            cy.stub(win, 'onChange')
        })
    }
)

Given('the MultiSelect is open', () => {
    cy.get('[data-test="dhis2-uicore-select"] [tabIndex="0"]').click()

    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
    cy.contains('option three').should('be.visible')
})

When('the MultiSelect input is clicked', () => {
    cy.get('[data-test="dhis2-uicore-select"] [tabIndex="0"]').click()
})

When('the user clicks the backdrop', () => {
    cy.get('[data-test="dhis2-uicore-backdrop"]').click()
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

Then('the MultiSelect has focus', () => {
    cy.focused()
        .parents('[data-test="dhis2-uicore-select"]')
        .should('exist')
})
