import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the SplitButton is provided with an onClick handler', () => {
    cy.window().then(win => {
        cy.stub(win, 'onClick', console.log.bind(null, 'args'))
    })
})

Then('the onClick handler is called', () => {
    cy.window()
        .its('onClick')
        .should('be.calledWith', {
            name: 'Button',
            value: 'default',
            open: false,
        })
})
