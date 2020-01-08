import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an focused Radio is rendered', () => {
    cy.visitStory('Radio', 'Focused')
})

Given('the Radio is provided with an onBlur handler', () => {
    cy.window().then(win => {
        win.onBlur = cy.stub()
    })
})

When('the Radio is blurred', () => {
    cy.get('[data-test="dhis2-uicore-radio"] input').blur()
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
