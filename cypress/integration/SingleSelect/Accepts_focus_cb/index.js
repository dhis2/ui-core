import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with onFocus is rendered', () => {
    cy.visitStory('SingleSelect', 'With onFocus')
})

Given('an onFocus handler is attached', () => {
    cy.window().then(win => (win.onFocus = cy.stub()))
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledOnce
        expect(win.onFocus).to.be.calledWith({
            selected: {},
        })
    })
})
