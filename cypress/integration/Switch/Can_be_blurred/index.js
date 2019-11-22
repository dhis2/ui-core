import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an focused Switch is rendered', () => {
    cy.visitStory('Switch', 'Focused unchecked')
    cy.focused().then($el => {
        expect($el.parents('label')).to.have.class('initially-focused')
    })
})

Given('the Switch is provided with an onBlur handler', () => {
    cy.window().then(win => {
        win.onBlur = cy.stub()
    })
})

When('the next Switch is focused', () => {
    cy.get('.initially-unfocused input').focus()
    cy.focused().then($el => {
        expect($el.parents('label')).to.have.class('initially-unfocused')
    })
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
