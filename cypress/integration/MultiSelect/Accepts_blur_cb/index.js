import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with onBlur handler is rendered', () => {
    cy.visitStory('MultiSelect', 'With onBlur')

    cy.window().then(win => {
        // The property has to be present to allow cy.stub
        win.onBlur = () => {}
        cy.stub(win, 'onBlur')
    })
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledOnce
        expect(win.onBlur).to.be.calledWith({
            selected: [],
        })
    })
})
