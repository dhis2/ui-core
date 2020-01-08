import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unfocused Switch is rendered', () => {
    cy.visitStory('Switch', 'Unfocused')
})

Given('the Switch is provided with an onFocus handler', () => {
    cy.window().then(win => {
        win.onFocus = cy.stub()
    })
})

When('the Switch is focused', () => {
    cy.get('[data-test="dhis2-uicore-switch"] input').focus()
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
