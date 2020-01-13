import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Modal is rendered', () => {
    cy.visitStory('Modal', 'Onclose')
})

Given('the Modal is provided with an onClose handler', () => {
    cy.window().then(win => {
        win.onClose = cy.stub()
    })
})

When('the Screencover is clicked', () => {
    cy.get('[data-test="dhis2-uicore-screencover"]').click('topLeft')
})

Then('the onClose handler is called', () => {
    cy.window().then(win => {
        expect(win.onClose).to.be.calledWith({})
    })
})
