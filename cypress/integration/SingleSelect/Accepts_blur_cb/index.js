import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with onBlur is rendered', () => {
    cy.visitStory('SingleSelect', 'With onBlur')
})

Given('an onBlur handler is attached', () => {
    cy.window().then(win => (win.onBlur = cy.stub()))
})

Then('the onBlur handler is called', () => {
    cy.window().then(win => {
        expect(win.onBlur).to.be.calledOnce
        expect(win.onBlur).to.be.calledWith({
            selected: {},
        })
    })
})
