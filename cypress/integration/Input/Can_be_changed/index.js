import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an Input is rendered', () => {
    cy.visitStory('Input', 'Onchange')
})

Given('the Input is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.onChange = cy.stub()
    })
})

When('the Input is filled with a character', () => {
    cy.get('[data-test="dhis2-uicore-input"]')
        .click()
        .type('a')
})

Then('the onChange handler is called', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledWith({
            value: 'a',
            name: 'Default',
        })
    })
})
