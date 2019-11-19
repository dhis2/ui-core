import '../common/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the Input is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.onChange = cy.stub()
    })
})

When('the Input is filled with a character', () => {
    cy.get('input').type('a')
})

Then('the onChange handler is called', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledWith({
            value: 'a',
            name: 'Default',
        })
    })
})
