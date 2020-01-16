import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Input with onFocus handler is rendered', () => {
    cy.visitStory('Input', 'With onFocus')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onFocus = () => {}
        cy.stub(win, 'onFocus')
    })
})

When('the Input is focused', () => {
    cy.get('[data-test="dhis2-uicore-input"] input').focus()
})

Then('the onFocus handler is called', () => {
    cy.window().then(win => {
        expect(win.onFocus).to.be.calledWith({
            value: '',
            name: 'Default',
        })
    })
})
