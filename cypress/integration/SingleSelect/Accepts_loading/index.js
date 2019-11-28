import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with options and a loading flag is rendered', () => {
    cy.visitStory('SingleSelect', 'With options and loading')
})

Given(
    'a SingleSelect with options, a loading flag and a loading text is rendered',
    () => {
        cy.visitStory('SingleSelect', 'With options, loading and loading text')
    }
)

Then('the loading spinner is displayed', () => {
    cy.get('div[role="progressbar"]').should('exist')
})

Then('the loading text is displayed', () => {
    cy.contains('Loading options').should('exist')
})
