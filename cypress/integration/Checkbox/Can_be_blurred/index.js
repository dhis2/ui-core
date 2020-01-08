import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a focused Checkbox is rendered', () => {
    cy.visitStory('Checkbox', 'Focused')
})

Given('the Checkbox is provided with an onBlur handler', () => {
    cy.window().then(win => {
        win.onBlur = cy.stub()
    })
})

When('the Checkbox is blurred', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"] input').blur()
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
