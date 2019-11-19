import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unfocused Radio is rendered', () => {
    cy.visitStory('Radio', 'Default')
})

Given('the Radio is provided with an onFocus handler', () => {
    cy.window().then(win => {
        win.onFocus = cy.stub()
    })
})

When('the Radio is focused', () => {
    cy.get('input').focus()
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
