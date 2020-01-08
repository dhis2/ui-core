import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unfocused Checkbox is rendered', () => {
    cy.visitStory('Checkbox', 'Unfocused')
})

Given('the Checkbox is provided with an onFocus handler', () => {
    cy.window().then(win => {
        win.onFocus = cy.stub()
    })
})

When('the Checkbox is focused', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"] input').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
