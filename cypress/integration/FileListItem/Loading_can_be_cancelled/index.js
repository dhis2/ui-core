import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a loading FileListItem is rendered', () => {
    cy.visitStory('FileListItem', 'Loading')
})

Given('an onCancel handler is provided', () => {
    cy.window().then(win => {
        win.onCancel = cy.stub()
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
