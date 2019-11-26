import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a clearable SingleSelect with a selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With clear button and selection')
})

When('the clear button is clicked', () => {
    cy.contains('Clear').click()
})

Then('the SingleSelect is cleared', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({ selected: {} })
    })
})
