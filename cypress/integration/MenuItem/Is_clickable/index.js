import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuItem is rendered', () => {
    cy.visitStory('MenuItem', 'Onclick')
})

Given('the MenuItem is provided with an onClick handler', () => {
    cy.window().then(win => (win.onClick = cy.stub()))
})

When('the MenuItem is clicked', () => {
    cy.get('[data-test="dhis2-uicore-menuitem"]').click()
})

Then('the onClick handler is called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({
            value: 'default',
        })
    })
})
