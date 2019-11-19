import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a closed Node is rendered', () => {
    cy.visitStory('Node', '2 Levels open')
})

Given('the Node is provided with an onClose handler', () => {
    cy.window().then(win => {
        win.onClose = cy.stub()
    })
})

When('the arrow is clicked', () => {
    cy.get('#root > .tree > .tree__arrow > span').click()
})

Then('the onClose handler is called', () => {
    cy.window().then(win => {
        expect(win.onClose).to.be.calledWith({ open: false })
    })
})
