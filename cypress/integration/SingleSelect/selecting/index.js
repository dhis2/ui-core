import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with a disabled option is rendered', () => {
    cy.visitStory('SingleSelect', 'With disabled option')
})

Given('a SingleSelect with custom options is rendered', () => {
    cy.visitStory('SingleSelect', 'With custom options')
})

When('an option is clicked', () => {
    cy.contains('option one').click()
})

When('the disabled option is clicked', () => {
    cy.contains('disabled option').click()
})

Then('the clicked option is selected', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: { label: 'option one', value: '1' },
        })
    })
})

Then('the onchange handler is not called', () => {
    cy.window().then(win => {
        expect(win.onChange).to.not.be.called
    })
})
