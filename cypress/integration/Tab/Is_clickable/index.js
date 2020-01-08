import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Tab is rendered', () => {
    cy.visitStory('Tab', 'With onClick')
})

Given('the Tab is provided with an onClick handler', () => {
    cy.window().then(win => (win.onClick = cy.stub()))
})

When('the Tab is clicked', () => {
    cy.get('[data-test="dhis2-uicore-tab"]').click()
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
