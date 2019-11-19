import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Chip is rendered', () => {
    cy.visitStory('Chip', 'Default')
})

Given('the Chip is provided with an onClick handler', () => {
    cy.window().then(win => {
        win.onClick = cy.stub()
    })
})

When('the Chip is clicked', () => {
    cy.get('#root > span').click()
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
