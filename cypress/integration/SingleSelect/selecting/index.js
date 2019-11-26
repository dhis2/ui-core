import '../common'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('an option is clicked', () => {
    cy.contains('option one').click()
})

Then('the clicked option is selected', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledOnce
        expect(win.onChange).to.be.calledWith({
            selected: { label: 'option one', value: '1' },
        })
    })
})
