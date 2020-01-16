import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Switch with initialFocus and onBlur handler is rendered', () => {
    cy.visitStory('Switch', 'With initialFocus and onBlur')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onBlur = () => {}
        cy.stub(win, 'onBlur')
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
