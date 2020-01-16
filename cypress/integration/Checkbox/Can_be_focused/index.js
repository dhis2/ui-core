import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Checkbox with onFocus handler is rendered', () => {
    cy.visitStory('Checkbox', 'With onFocus')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onFocus = () => {}
        cy.stub(win, 'onFocus')
    })
})

When('the Checkbox is focused', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"] input').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
