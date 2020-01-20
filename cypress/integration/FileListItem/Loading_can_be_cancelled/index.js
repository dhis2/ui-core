import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a loading FileListItem with onCancel handler is rendered', () => {
    cy.visitStory('FileListItem', 'Loading with onCancel')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onCancel = () => {}
        cy.stub(win, 'onCancel')
    })
})

When('the user clicks on the cancel text', () => {
    cy.get('[data-test="dhis2-uicore-filelistitem-cancel"]').click()
})

Then('the onCancel handler is called', () => {
    cy.window().then(win => {
        expect(win.onCancel).to.be.calledWith({})
    })
})
