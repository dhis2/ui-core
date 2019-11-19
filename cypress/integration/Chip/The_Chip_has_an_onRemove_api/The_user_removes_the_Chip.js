import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a removable Chip is rendered', () => {
    cy.visitStory('Chip', 'Removable')
})

Given('the Chip is provided with an onRemove handler', () => {
    cy.window().then(win => {
        win.onRemove = cy.stub()
    })
})

When('the remove icon is clicked', () => {
    cy.get('#root > span > span:nth-child(2)').click()
})

Then('the onRemove handler is called', () => {
    cy.window().then(win => {
        expect(win.onRemove).to.be.calledWith({})
    })
})
