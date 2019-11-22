import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Button is rendered', () => {
    cy.visitStory('Button: Basic', 'Default')
})

Given('the Button is provided with an onClick handler', () => {
    cy.window().then(win => (win.onClick = cy.stub()))
})

When('the Button is clicked', () => {
    cy.get('button').click()
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({
            name: 'Button',
            value: 'default',
        })
    })
})
