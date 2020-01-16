import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Chip with onClick handler is rendered', () => {
    cy.visitStory('Chip', 'With onClick')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onClick = () => {}
        cy.stub(win, 'onClick')
    })
})

When('the Chip is clicked', () => {
    cy.get('[data-test="dhis2-uicore-chip"]').click()
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
