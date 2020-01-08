import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Switch is rendered', () => {
    cy.visitStory('Switch', 'Unchecked')
})

Given('the Switch is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.onChange = cy.stub()
    })
})

When('the Switch is clicked', () => {
    cy.get('[data-test="dhis2-uicore-switch"]').click()
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
