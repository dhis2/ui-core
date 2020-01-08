import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a focused TextArea is rendered', () => {
    cy.visitStory('TextArea', 'Focused')
})

Given('the TextArea is provided with an onBlur handler', () => {
    cy.window().then(win => {
        win.onBlur = cy.stub()
    })
})

When('the TextArea is blurred', () => {
    cy.get('[data-test="dhis2-uicore-textarea"] textarea').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledWith({
            value: '',
            name: 'textarea',
        })
    })
})
