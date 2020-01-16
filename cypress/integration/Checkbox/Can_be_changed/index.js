import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Checkbox with onChange handler is rendered', () => {
    cy.visitStory('Checkbox', 'With onChange')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onChange = () => {}
        cy.stub(win, 'onChange')
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
