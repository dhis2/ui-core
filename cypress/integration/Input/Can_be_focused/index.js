import '../common/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the Input is provided with an onFocus handler', () => {
    cy.window().then(win => {
        win.onFocus = cy.stub()
    })
})

When('the Input is focused', () => {
    cy.get('input').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledWith({
            value: '',
            name: 'Default',
        })
    })
})
