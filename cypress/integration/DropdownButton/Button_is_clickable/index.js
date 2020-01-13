import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a DropdownButton is rendered', () => {
    cy.visitStory('DropdownButton', 'Onclick')
})

Given('the DropdownButton is provided with an onClick handler', () => {
    cy.window().then(win => {
        win.onClick = cy.stub()
    })
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({
            name: 'Button',
            value: 'default',
            open: true,
        })
    })
})
