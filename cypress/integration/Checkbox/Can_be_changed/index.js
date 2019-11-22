import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Checkbox', 'Default')
})

Given('the Checkbox is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.onChange = cy.stub()
    })
})

When('the Checkbox is ticked', () => {
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
