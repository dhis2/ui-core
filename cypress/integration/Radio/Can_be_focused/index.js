import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unfocused Radio is rendered', () => {
    cy.visitStory('Radio', 'Unfocused')
})

Given('the Radio is provided with an onFocus handler', () => {
    cy.window().then(win => {
        win.onFocus = cy.stub()
    })
})

When('the Radio is focused', () => {
    cy.get('[data-test="dhis2-uicore-radio"] input').focus()
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
