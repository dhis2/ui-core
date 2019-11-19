import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a focused Input is rendered', () => {
    cy.visitStory('Input', 'Focus')
})

Given('the Input is provided with an onBlur handler', () => {
    cy.window().then(win => {
        win.onBlur = cy.stub()
    })
})

When('the next Input is focused', () => {
    cy.get('.initially-unfocused input').focus()
    cy.focused().then($el => {
        expect($el.parent()).to.have.class('initially-unfocused')
    })
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledWith({
            value: '',
            name: 'Default',
        })
    })
})
