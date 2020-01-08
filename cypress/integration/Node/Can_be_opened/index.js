import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a closed Node is rendered', () => {
    cy.visitStory('Node', 'Closed')
})

Given('the Node is provided with an onOpen handler', () => {
    cy.window().then(win => {
        win.onOpen = cy.stub()
    })
})

When('the arrow is clicked', () => {
    cy.get('[data-test="dhis2-uicore-node-arrow"]').click()
})

Then('the onOpen handler is called', () => {
    cy.window().then(win => {
        expect(win.onOpen).to.be.calledWith({ open: true })
    })
})
