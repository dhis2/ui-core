import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a removable FileListItem is rendered', () => {
    cy.visitStory('FileListItem', 'Default')
})

Given('an onRemove handler is provided', () => {
    cy.window().then(win => {
        win.onRemove = cy.stub()
    })
})

When('the user clicks on the remove text', () => {
    cy.get('.action:contains("Remove")').click()
})

Then('the onRemove handler is called', () => {
    cy.window().then(win => {
        expect(win.onRemove).to.be.calledWith({})
    })
})
