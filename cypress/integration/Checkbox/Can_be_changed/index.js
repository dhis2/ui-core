import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Checkbox', 'Unchecked')
})

Given('the Checkbox is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.onChange = cy.stub()
    })
})

When('the Checkbox is clicked', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"]').click()
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
