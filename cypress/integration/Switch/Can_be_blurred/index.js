import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an focused Switch is rendered', () => {
    cy.visitStory('Switch', 'Focused')
})

Given('the Switch is provided with an onBlur handler', () => {
    cy.window().then(win => {
        win.onBlur = cy.stub()
    })
})

When('the Switch is blurred', () => {
    cy.get('[data-test="dhis2-uicore-switch"] input').blur()
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
