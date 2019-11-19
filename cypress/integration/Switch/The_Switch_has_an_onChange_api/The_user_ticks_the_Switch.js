import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Switch is rendered', () => {
    cy.visitStory('Switch', 'Default')
})

Given('the Switch is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.onChange = cy.stub()
    })
})

When('the Switch is ticked', () => {
    cy.get('label').click()
})

Then('the onChange handler is called', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledWith({
            value: 'default',
            name: 'Ex',
            checked: true,
        })
    })
})
