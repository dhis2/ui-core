import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Radio with onChange handler is rendered', () => {
    cy.visitStory('Radio', 'With onChange')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onChange = () => {}
        cy.stub(win, 'onChange')
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
