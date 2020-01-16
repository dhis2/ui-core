import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Screencover with onClick handler is rendered', () => {
    cy.visitStory('Screencover', 'With onClick')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onClick = () => {}
        cy.stub(win, 'onClick')
    })
})

When('the user clicks on the Screencover', () => {
    cy.get('[data-test="dhis2-uicore-screencover"]').click()
})

Then('the onClick handler will be called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
