import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Radio is rendered', () => {
    cy.visitStory('Radio', 'Unchecked')
})

Given('the Radio is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.onChange = cy.stub()
    })
})

When('the Radio is checked', () => {
    cy.get('[data-test="dhis2-uicore-radio"]').click()
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
