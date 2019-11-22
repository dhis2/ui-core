import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Tab is rendered', () => {
    cy.visitStory('TabBar', 'Default (fluid)')
})

Given('the Tab is provided with an onClick handler', () => {
    cy.window().then(win => (win.onClick = cy.stub()))
})

When('the Tab is clicked', () => {
    cy.get('.tab:first-child').click()
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
