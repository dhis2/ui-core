import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a focused Input is rendered', () => {
    cy.visitStory('Input', 'Focused')
})

Given('the Input is provided with an onBlur handler', () => {
    cy.window().then(win => {
        win.onBlur = cy.stub()
    })
})

When('the Input is blurred', () => {
    cy.get('[data-test="dhis2-uicore-input"] input').blur()
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledWith({
            value: '',
            name: 'Default',
        })
    })
})
