import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Modal is rendered', () => {
    cy.visitStory('Modal', 'Small: Title, Content, Action')
})

Given('the Modal is provided with an onClose handler', () => {
    cy.window().then(win => {
        cy.stub(win, 'onClose', (...args) => console.log('args', args))
    })
})

When('the Backdrop is clicked', () => {
    cy.get('.backdrop').click('topLeft')
})

Then('the onClose handler is called', () => {
    cy.window().then(win => {
        expect(win.onClose).to.be.calledWith({})
    })
})
