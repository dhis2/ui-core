import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a removable FileListItem is rendered', () => {
    cy.visitStory('FileListItem', 'Onremove')
})

Given('an onRemove handler is provided', () => {
    cy.window().then(win => {
        win.onRemove = cy.stub()
    })
})

When('the user clicks on the remove text', () => {
    cy.get('[data-test="dhis2-uicore-filelistitem-remove"]').click()
})

Then('the onRemove handler is called', () => {
    cy.window().then(win => {
        expect(win.onRemove).to.be.calledWith({})
    })
})
