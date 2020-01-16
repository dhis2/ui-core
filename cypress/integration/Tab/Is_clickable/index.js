import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Tab with onClick handler is rendered', () => {
    cy.visitStory('Tab', 'With onClick')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onClick = () => {}
        cy.stub(win, 'onClick')
    })
})

When('the Tab is clicked', () => {
    cy.get('[data-test="dhis2-uicore-tab"]').click()
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
