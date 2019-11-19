import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an opened Node is rendered', () => {
    cy.visitStory('Node', 'Multiple roots')
})

Given('the Node is provided with an onOpen handler', () => {
    cy.window().then(win => {
        win.onOpen = cy.stub()
    })
})

When('the arrow is clicked', () => {
    cy.get('#root > div > .tree:first-child > .tree__arrow > span').click()
})

Then('the onOpen handler is called', () => {
    cy.window().then(win => {
        expect(win.onOpen).to.be.calledWith({ open: true })
    })
})
