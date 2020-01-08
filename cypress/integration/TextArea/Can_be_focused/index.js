import '../common/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the TextArea is provided with an onFocus handler', () => {
    cy.window().then(win => {
        win.onFocus = cy.stub()
    })
})

When('the TextArea is focused', () => {
    cy.get('[data-test="dhis2-uicore-textarea"] textarea').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledWith({
            value: '',
            name: 'textarea',
        })
    })
})
