import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a focused TextArea is rendered', () => {
    cy.visitStory('TextArea', 'Focus')
})

Given('the TextArea is provided with an onBlur handler', () => {
    cy.window().then(win => {
        win.onBlur = cy.stub()
    })
})

When('the next TextArea is focused', () => {
    cy.get('.initially-unfocused textarea').focus()
    cy.focused().then($el => {
        expect($el.parent()).to.have.class('initially-unfocused')
    })
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledWith({
            value: '',
            name: 'textarea',
        })
    })
})
