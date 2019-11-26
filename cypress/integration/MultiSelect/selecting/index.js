import '../common'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('an option is clicked', () => {
    cy.contains('option one').click()
})

When('the selected option is clicked', () => {
    cy.get('.backdrop')
        .contains('option one')
        .click()
})

When('another option is clicked', () => {
    cy.contains('option two').click()
})

When("the chip's X is clicked", () => {
    cy.contains('option one')
        .siblings('span')
        .click()
})

Then('the clicked option is selected', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: [{ label: 'option one', value: '1' }],
        })
    })
})

Then('the clicked option is selected as well', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: [
                { label: 'option one', value: '1' },
                { label: 'option two', value: '2' },
            ],
        })
    })
})

Then('the selected option is deselected', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({ selected: [] })
    })
})
