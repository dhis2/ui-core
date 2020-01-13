import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an Input is rendered', () => {
    cy.visitStory('Input', 'Onfocus')
})

Given('the Input is provided with an onFocus handler', () => {
    cy.window().then(win => {
        win.onFocus = cy.stub()
    })
})

When('the Input is focused', () => {
    cy.get('[data-test="dhis2-uicore-input"] input').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledWith({
            value: '',
            name: 'Default',
        })
    })
})
