import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a disabled DropdownButton with onClick handler is rendered', () => {
    cy.visitStory('DropdownButton', 'Disabled with onClick')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onClick = () => {}
        cy.stub(win, 'onClick')
    })
})

When('the DropdownButton is clicked', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton"] button').click({
        force: true,
    })
})

Then('the onClick handler is not called', () => {
    cy.window().then(win => {
        expect(win.onClick).not.to.be.called
    })
})
