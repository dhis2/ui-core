import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an open Node is rendered', () => {
    cy.visitStory('Node', 'Open')
})

Given('the Node is provided with an onClose handler', () => {
    cy.window().then(win => {
        win.onClose = cy.stub()
    })
})

When('the arrow is clicked', () => {
    cy.get('[data-test="dhis2-uicore-node-arrow"]').click()
})

Then('the onClose handler is called', () => {
    cy.window().then(win => {
        expect(win.onClose).to.be.calledWith({ open: false })
    })
})
